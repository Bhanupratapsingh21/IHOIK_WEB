"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Search, Newspaper } from 'lucide-react';
import { Client, Databases, Query } from 'appwrite';


const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

// Define TypeScript interfaces
interface NewsItem {
    $id: string
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image?: string // Optional image
    slug: string
    isBreaking?: boolean
}

interface ApiResponse {
    news: NewsItem[]
    total: number
    totalPages: number
    page: number
}


// Mock data function - replace with actual API calls
// const mockNews: NewsItem[] = Array.from({ length: 15 }, (_, i) => ({
//     id: i + 1,
//     title: `New Coaching Trends in Kota ${i + 1}`,
//     excerpt: 'Discover the latest teaching methodologies and trends being adopted by coaching centers in Kota to help students excel in competitive exams.',
//     author: 'IHOIK News Team',
//     date: '2023-11-15',
//     readTime: `${3 + (i % 3)} min read`,
//     category: i % 3 === 0 ? 'Education' : i % 3 === 1 ? 'Student Life' : 'Events',
//     image: i % 4 === 0 ? undefined : `https://images.unsplash.com/photo-${1500000000000 + i}-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=500`,
//     slug: `new-coaching-trends-kota-${i + 1}`,
//     isBreaking: i % 5 === 0 // Every 5th news item is breaking news
// }))



export default function NewsPage() {
    const [news, setNews] = useState<NewsItem[]>([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    const [totalNews, setTotalNews] = useState(0)
    const newsPerPage = 6

    useEffect(() => {
        loadNews()
    }, [currentPage, searchQuery])


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
                excerpt: doc.excerpt,
                author: doc.author,
                date: doc.date,
                readTime: doc.readTime || "5 min read",
                category: doc.category,
                image: doc.image,
                slug: doc.slug,
                isBreaking: doc.isBreaking,
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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setCurrentPage(1)
        loadNews()
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
                    <div className="inline-flex items-center justify-center p-3 bg-[#7A1C1C] rounded-full mb-6">
                        <Newspaper className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#7A1C1C] mb-6">
                        IHOIK <span className="text-[#F7C948]">News</span>
                    </h1>
                    <p className="text-xl text-[#1B1B1B]/80 max-w-3xl mx-auto">
                        Stay updated with the latest happenings in Kota's student community
                    </p>
                </section>

                {/* Breaking News Banner */}
                {news.some(item => item.isBreaking) && (
                    <section className="mb-8">
                        <div className="bg-[#7A1C1C] text-white rounded-2xl p-4 shadow-lg">
                            <div className="flex items-center">
                                <div className="bg-white text-[#7A1C1C] px-3 py-1 rounded-full text-sm font-bold mr-4">
                                    BREAKING
                                </div>
                                <div className="overflow-hidden w-full">
                                    <div className="animate-marquee whitespace-nowrap">
                                        {news
                                            .filter(item => item.isBreaking)
                                            .map(item => item.title)
                                            .join(' • ')}
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
                                    className="w-full pl-10 pr-4 py-3 border border-[#F7C948]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7C948]/50"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#7A1C1C] text-white px-6 py-3 rounded-lg hover:bg-[#5e1515] transition-colors duration-300 whitespace-nowrap"
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
                                    <div className="h-48 bg-gray-200"></div>
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
                                    <article key={item.$id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#F7C948]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        {item.image ? (
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
                                        ) : (
                                            <div className="h-48 bg-gradient-to-br from-[#F7C948] to-[#7A1C1C] flex items-center justify-center">
                                                <Newspaper className="h-12 w-12 text-white opacity-80" />
                                            </div>
                                        )}

                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="inline-block bg-[#F7C948]/20 text-[#7A1C1C] text-xs font-semibold px-3 py-1 rounded-full">
                                                    {item.category}
                                                </span>
                                                {item.isBreaking && (
                                                    <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                                                        Breaking
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className="text-xl font-bold text-[#7A1C1C] mb-3 line-clamp-2">
                                                {item.title}
                                            </h2>

                                            <p className="text-[#1B1B1B]/80 mb-4 line-clamp-3">
                                                {item.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between text-sm text-[#1B1B1B]/60">
                                                <div className="flex items-center">
                                                    <User className="h-4 w-4 mr-1" />
                                                    <span>{item.author}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    <span>{item.date}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-[#F7C948]/20 flex justify-between items-center">
                                                <div className="flex items-center text-sm text-[#1B1B1B]/60">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    <span>{item.readTime}</span>
                                                </div>
                                                <Link
                                                    href={`/news/${item.slug}`}
                                                    className="text-[#7A1C1C] font-medium hover:text-[#5e1515] transition-colors"
                                                >
                                                    Read More →
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
                                        className="bg-[#7A1C1C] text-white px-6 py-2 rounded-lg hover:bg-[#5e1515] transition-colors duration-300"
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
                                className="flex items-center px-4 py-2 rounded-lg border border-[#F7C948]/30 bg-white text-[#7A1C1C] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F7C948]/10 transition-colors"
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
                                        className={`px-4 py-2 rounded-lg border transition-colors ${currentPage === pageNum
                                            ? 'bg-[#7A1C1C] text-white border-[#7A1C1C]'
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
                                className="flex items-center px-4 py-2 rounded-lg border border-[#F7C948]/30 bg-white text-[#7A1C1C] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F7C948]/10 transition-colors"
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