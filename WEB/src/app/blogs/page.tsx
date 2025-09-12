"use client";
import { Client, Databases, Query } from "appwrite";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Search } from "lucide-react";

// Configure Appwrite client
const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

interface BlogPost {
    $id: string;
    slug: string;
    title: string;
    summary?: string;
    coverImage?: string;
    publishedAt?: string;
    tags?: string[];
    authorName?: string;
    readTime?: string;
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalBlogs, setTotalBlogs] = useState(0);
    const blogsPerPage = 6;

    useEffect(() => {
        loadBlogs();
    }, [currentPage, searchQuery]);

    async function loadBlogs() {
        setLoading(true);
        try {
            const offset = (currentPage - 1) * blogsPerPage;

            let queries = [
                Query.orderDesc("publishedAt"),
                Query.limit(blogsPerPage),
                Query.offset(offset),
            ];

            // Add search query if exists
            if (searchQuery) {
                queries.push(Query.search('title', searchQuery));
            }

            const res = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
                queries
            );

            // Map documents to BlogPost
            const blogPosts = res.documents.map((doc) => ({
                $id: doc.$id,
                slug: doc.slug,
                title: doc.title,
                summary: doc.summary,
                coverImage: doc.coverImage,
                publishedAt: doc.publishedAt,
                tags: doc.tags || [],
                authorName: doc.authorName || "Admin",
                readTime: doc.readTime || "5 min read"
            } as BlogPost));

            setBlogs(blogPosts);
            setTotalBlogs(res.total);
            setTotalPages(Math.ceil(res.total / blogsPerPage));
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
        loadBlogs();
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return "Unknown date";

        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
                {/* Page Header */}
                <section className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#7A1C1C] mb-6">
                        IHOIK <span className="text-[#F7C948]">Blogs</span>
                    </h1>
                    <p className="text-xl text-[#1B1B1B]/80 max-w-3xl mx-auto">
                        Insights, tips, and stories from the Kota student community
                    </p>
                </section>

                {/* Search Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20">
                        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="relative flex-grow">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1B1B1B]/40 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search blogs by title..."
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

                {/* Blog List */}
                <section className="mb-12">
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: blogsPerPage }).map((_, index) => (
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
                    ) : blogs.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogs.map(blog => (
                                    <article key={blog.$id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#F7C948]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={blog.coverImage || "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=500"}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-2">
                                                {blog.tags && blog.tags.length > 0 && (
                                                    <span className="inline-block bg-[#F7C948]/20 text-[#7A1C1C] text-xs font-semibold px-3 py-1 rounded-full">
                                                        {blog.tags[0]}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-xl font-bold text-[#7A1C1C] mb-3 line-clamp-2">
                                                {blog.title}
                                            </h2>
                                            <p className="text-[#1B1B1B]/80 mb-4 line-clamp-3">
                                                {blog.summary || 'No summary available'}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-[#1B1B1B]/60">
                                                <div className="flex items-center">
                                                    <User className="h-4 w-4 mr-1" />
                                                    <span>{blog.authorName}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    <span>{formatDate(blog.publishedAt)}</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-[#F7C948]/20 flex justify-between items-center">
                                                <div className="flex items-center text-sm text-[#1B1B1B]/60">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    <span>{blog.readTime}</span>
                                                </div>
                                                <Link
                                                    href={`/blogs/${blog.slug}`}
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
                                <h3 className="text-2xl font-bold text-[#7A1C1C] mb-4">No blogs found</h3>
                                <p className="text-[#1B1B1B]/80 mb-6">
                                    {searchQuery
                                        ? `No results found for "${searchQuery}". Try a different search term.`
                                        : 'There are no blogs available at the moment. Check back later!'
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
                                // Show pages around current page
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
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
                                );
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
                            Page {currentPage} of {totalPages} • {totalBlogs} blog{totalBlogs !== 1 ? 's' : ''} total
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
      `}</style>
        </div>
    );
}