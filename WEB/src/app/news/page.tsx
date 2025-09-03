"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Search, Newspaper, Heart, Share2, Eye } from 'lucide-react';
import { Client, Databases, Query } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

interface NewsItem {
    $id: string;
    title: string;
    summary: string;
    content: string;
    authorName: string;
    tags: string[];
    publishedAt: string;
    coverImage?: string;
    slug: string;
    status?: string;
    createdBy: string;
    upvotes: number;
    views?: number;
}

export default function NewsPage() {
    const [news, setNews] = useState<NewsItem[]>([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [breakingNews, setBreakingNews] = useState<NewsItem | null>(null);
    const [totalPages, setTotalPages] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    const [totalNews, setTotalNews] = useState(0)
    const newsPerPage = 6

    useEffect(() => {
        loadBreakingNews();
    }, []);

    useEffect(() => {
        loadNews();
    }, [currentPage, searchQuery]);

    async function loadNews() {
        setLoading(true);
        try {
            const offset = (currentPage - 1) * newsPerPage;

            let queries = [
                Query.orderDesc("publishedAt"),
                Query.limit(newsPerPage),
                Query.offset(offset),
            ];

            if (searchQuery) {
                queries.push(Query.search("title", searchQuery));
            }

            const res = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
                queries
            );

            const newsPosts: NewsItem[] = res.documents.map((doc: any) => ({
                $id: doc.$id,
                title: doc.title,
                summary: doc.summary,
                authorName: doc.authorName,
                content: doc.content,
                tags: doc.tags,
                coverImage: doc.coverImage,
                slug: doc.slug,
                status: doc.status,
                createdBy: doc.createdBy,
                publishedAt: doc.publishedAt,
                upvotes: doc.upvotes,
                views: doc.views || 0,
            }));

            setNews(newsPosts);
            setTotalPages(Math.ceil(res.total / newsPerPage));
            setTotalNews(res.total);
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        } finally {
            setLoading(false);
        }
    }

    async function loadBreakingNews() {
        try {
            const breakingRes = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
                [
                    Query.orderDesc("publishedAt"),
                    Query.limit(1),
                ]
            );

            if (breakingRes.documents.length > 0) {
                const doc = breakingRes.documents[0];
                const latestBreaking: NewsItem = {
                    $id: doc.$id,
                    title: doc.title,
                    summary: doc.summary,
                    content: doc.content,
                    authorName: doc.authorName,
                    tags: doc.tags || [],
                    publishedAt: doc.publishedAt,
                    coverImage: doc.coverImage,
                    slug: doc.slug,
                    status: doc.status,
                    createdBy: doc.createdBy,
                    upvotes: doc.upvotes || 0,
                    views: doc.views || 0,
                };
                setBreakingNews(latestBreaking);
            } else {
                setBreakingNews(null);
            }
        } catch (error) {
            console.error("Failed to fetch breaking news:", error);
        }
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setCurrentPage(1)
    }

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
                {/* Page Header */}
                <section className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] rounded-full mb-6 shadow-lg">
                        <Newspaper className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#7A1C1C] mb-6">
                        IHOIK <span className="text-[#F7C948]">News</span>
                    </h1>
                    <p className="text-xl text-[#1B1B1B]/80 max-w-3xl mx-auto">
                        Stay updated with the latest happenings in Kota's student community
                    </p>
                </section>

                {breakingNews && (
                    <section className="mb-8">
                        <div className="bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] text-white rounded-2xl p-4 shadow-lg">
                            <div className="flex items-center">
                                <div className="bg-white text-[#7A1C1C] px-3 py-1 rounded-full text-sm font-bold mr-4 flex items-center">
                                    <div className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                                    BREAKING
                                </div>
                                <div className="overflow-hidden w-full">
                                    <div className="animate-marquee whitespace-nowrap will-change: transform;">
                                        {breakingNews.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Search Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20">
                        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="relative flex-grow">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1B1B1B]/40 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search news by title, content, or category..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-[#F7C948]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7C948]/50 transition-all duration-300 focus:shadow-md"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] text-white px-6 py-3 rounded-lg hover:from-[#5e1515] hover:to-[#7A1C1C] transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </section>

                {/* News List */}
                <section className="mb-12">
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: newsPerPage }).map((_, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#F7C948]/20 animate-pulse">
                                    <div className="h-48 bg-gradient-to-r from-[#F7C948]/20 to-[#7A1C1C]/20"></div>
                                    <div className="p-6">
                                        <div className="h-6 bg-gray-200 rounded mb-4"></div>
                                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                                        <div className="flex justify-between">
                                            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : news.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {news.map(item => (
                                    <article key={item.$id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#F7C948]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                                        {item.coverImage ? (
                                            <div className="h-48 overflow-hidden relative">
                                                <img
                                                    src={item.coverImage}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] text-white text-xs px-2 py-1 rounded-full">
                                                    {item.tags?.[0] || 'News'}
                                                </div>
                                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                            </div>
                                        ) : (
                                            <div className="h-48 bg-gradient-to-br from-[#F7C948] to-[#7A1C1C] flex items-center justify-center relative">
                                                <Newspaper className="h-12 w-12 text-white opacity-80" />
                                                <div className="absolute top-4 left-4 bg-white/90 text-[#7A1C1C] text-xs px-2 py-1 rounded-full">
                                                    {item.tags?.[0] || 'News'}
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-6">
                                            <h2 className="text-xl font-bold text-[#7A1C1C] mb-3 line-clamp-2 group-hover:text-[#9e2b2b] transition-colors">
                                                {item.title}
                                            </h2>

                                            <p className="text-[#1B1B1B]/80 mb-4 line-clamp-3">
                                                {item.summary}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {item.tags?.slice(0, 3).map((tag, index) => (
                                                    <span key={index} className="bg-[#F7C948]/10 text-[#7A1C1C] text-xs px-2 py-1 rounded-full">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between text-sm text-[#1B1B1B]/60 mb-4">
                                                <div className="flex items-center">
                                                    <User className="h-4 w-4 mr-1" />
                                                    <span>{item.authorName}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    <span>
                                                        {new Date(item.publishedAt).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center pt-4 border-t border-[#F7C948]/20">

                                                <Link
                                                    href={`/news/${item.slug}`}
                                                    className="text-[#7A1C1C] font-medium hover:text-[#5e1515] transition-colors flex items-center group-hover:underline"
                                                >
                                                    Read More
                                                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#F7C948]/20">
                                <Newspaper className="h-16 w-16 text-[#7A1C1C] mx-auto mb-4 opacity-60" />
                                <h3 className="text-2xl font-bold text-[#7A1C1C] mb-4">No news found</h3>
                                <p className="text-[#1B1B1B]/80 mb-6">
                                    {searchQuery
                                        ? `No results found for "${searchQuery}". Try a different search term.`
                                        : 'There are no news articles available at the moment. Check back later!'
                                    }
                                </p>
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] text-white px-6 py-2 rounded-lg hover:from-[#5e1515] hover:to-[#7A1C1C] transition-all duration-300 shadow-md hover:shadow-lg"
                                    >
                                        Clear Search
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </section>

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <section className="mb-12">
                        <div className="flex justify-center items-center space-x-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="flex items-center px-4 py-2 rounded-lg border border-[#F7C948]/30 bg-white text-[#7A1C1C] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F7C948]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <ArrowLeft className="h-4 w-4 mr-1" />
                                Previous
                            </button>

                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum
                                if (totalPages <= 5) {
                                    pageNum = i + 1
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i
                                } else {
                                    pageNum = currentPage - 2 + i
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`px-4 py-2 rounded-lg border transition-all duration-300 shadow-sm hover:shadow-md ${currentPage === pageNum
                                            ? 'bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] text-white border-[#7A1C1C] shadow-md'
                                            : 'bg-white border-[#F7C948]/30 text-[#7A1C1C] hover:bg-[#F7C948]/10'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                )
                            })}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="flex items-center px-4 py-2 rounded-lg border border-[#F7C948]/30 bg-white text-[#7A1C1C] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F7C948]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                Next
                                <ArrowRight className="h-4 w-4 ml-1" />
                            </button>
                        </div>

                        <div className="text-center mt-4 text-sm text-[#1B1B1B]/60">
                            Page {currentPage} of {totalPages} • {totalNews} news{totalNews !== 1 ? ' items' : ' item'} total
                        </div>
                    </section>
                )}
            </main>

            {/* Custom styles */}
            <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
        </div>
    )
}