"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { formatDate } from "@/utilsfolder/formatDate";
import { Client, Databases, Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Heart, Share2, Eye, Clock, BookOpen, MessageCircle, Bookmark, Sparkles, TrendingUp } from "lucide-react";

type BlogPost = {
    $id: string;
    slug: string;
    title: string;
    summary: string;
    content: string;
    tags: string[];
    coverImage?: string;
    publishedAt?: string;
    authorName?: string;
    upvotes?: number;
    views?: number;
    readTime?: number;
};

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

export default function BlogPage() {
    const params = useParams<{ slug: string }>();
    const { slug } = params;

    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        async function getPostBySlug() {
            try {
                const res = await databases.listDocuments(
                    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                    process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
                    [Query.equal("slug", slug)]
                );

                if (res.total > 0) {
                    const doc = res.documents[0];
                    const content = doc.content || "";
                    const wordCount = content.split(/\s+/).length;
                    const readTime = Math.ceil(wordCount / 200);

                    setPost({
                        $id: doc.$id,
                        slug: doc.slug,
                        title: doc.title,
                        summary: doc.summary,
                        content: content,
                        tags: doc.tags || [],
                        coverImage: doc.coverImage,
                        publishedAt: doc.publishedAt,
                        authorName: doc.authorName,
                        upvotes: doc.upvotes || 0,
                        views: doc.views || 0,
                        readTime: readTime || 5
                    });
                } else {
                    setPost(null);
                }
            } catch (e) {
                console.error("Error fetching blog by slug:", e);
                setPost(null);
            } finally {
                setLoading(false);
            }
        }

        if (slug) getPostBySlug();
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
        // Update like count in database
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const handleShare = () => {
        setIsSharing(true);
        if (navigator.share) {
            navigator.share({
                title: post?.title,
                text: post?.summary,
                url: window.location.href,
            })
                .catch(console.error)
                .finally(() => setIsSharing(false));
        } else {
            navigator.clipboard.writeText(window.location.href);
            setIsSharing(false);
            // Show a toast notification instead of alert
            alert("Link copied to clipboard!");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-6 w-32 bg-[#7A1C1C]/20 rounded-full mb-8"></div>
                        <div className="h-12 bg-[#7A1C1C]/20 rounded-lg mb-6"></div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-[#7A1C1C]/20 rounded-full"></div>
                            <div className="space-y-2">
                                <div className="h-4 w-32 bg-[#7A1C1C]/20 rounded"></div>
                                <div className="h-3 w-24 bg-[#7A1C1C]/20 rounded"></div>
                            </div>
                        </div>
                        <div className="h-64 bg-[#7A1C1C]/20 rounded-xl mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-[#7A1C1C]/20 rounded"></div>
                            <div className="h-4 bg-[#7A1C1C]/20 rounded"></div>
                            <div className="h-4 w-5/6 bg-[#7A1C1C]/20 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    if (!post) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20 flex items-center justify-center px-4">
                <div className="text-center bg-white p-8 rounded-2xl shadow-md border border-[#F7C948]/20 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-[#7A1C1C] mb-4">Post Not Found</h2>
                    <p className="text-[#1B1B1B]/80 mb-6">The blog page you're looking for doesn't exist.</p>
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] text-white px-6 py-3 rounded-lg hover:from-[#5e1515] hover:to-[#7A1C1C] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20">
            {/* Decorative elements */}
            <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12 relative z-10">
                {/* Back button */}
                <div className="mb-8">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-[#7A1C1C] hover:text-[#5e1515] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-[#F7C948]/10 group"
                    >
                        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Blogs</span>
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7A1C1C] mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-[#1B1B1B]/80 mb-8 leading-relaxed">
                        {post.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] flex items-center justify-center text-white font-medium text-lg shadow-md">
                                {post.authorName?.[0]?.toUpperCase() || "A"}
                            </div>
                            <div>
                                <p className="font-medium text-[#7A1C1C]">{post.authorName || "Anonymous"}</p>
                                <p className="text-sm text-[#1B1B1B]/60 flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    Author
                                </p>
                            </div>
                        </div>

                        <div className="h-6 w-px bg-[#F7C948]/40"></div>

                        {post.publishedAt && (
                            <>
                                <div className="flex items-center gap-2 text-[#1B1B1B]/60">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formatDate(post.publishedAt)}</span>
                                </div>

                                <div className="h-6 w-px bg-[#F7C948]/40"></div>
                            </>
                        )}

                        <div className="flex items-center gap-2 text-[#1B1B1B]/60 ">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">{post.readTime || 5} min read</span>
                        </div>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-[#F7C948]/20 text-[#7A1C1C] text-sm font-medium rounded-full border border-[#F7C948]/30"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Engagement Stats */}
                    <div className="flex items-center gap-6 text-sm text-[#1B1B1B]/60">
                        <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views || 0} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.upvotes || 0} likes</span>
                        </div>
                    </div>
                </header>

                {/* Cover image */}
                {post.coverImage && (
                    <div className="w-full overflow-hidden rounded-2xl mb-10 shadow-lg border border-[#F7C948]/20">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <article className="prose prose-lg max-w-none mb-14 
                    prose-headings:font-bold prose-headings:bg-gradient-to-r prose-headings:from-[#7A1C1C] prose-headings:to-[#9e2b2b] prose-headings:bg-clip-text prose-headings:text-transparent
                    prose-p:text-[#1B1B1B]/90 prose-p:leading-relaxed prose-p:font-[#1B1B1B]
                    prose-a:text-[#7A1C1C] prose-a:font-medium prose-a:no-underline prose-a:border-b-2 prose-a:border-[#F7C948] prose-a:pb-0.5 hover:prose-a:border-[#7A1C1C]
                    prose-strong:text-[#7A1C1C]
                    prose-blockquote:border-l-[#F7C948] prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#FEF6E6] prose-blockquote:to-[#F7C948]/20 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-xl prose-blockquote:shadow-sm
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:marker:text-[#F7C948] prose-li:marker:font-bold
                    prose-hr:border-[#F7C948]/30
                    prose-table:border-[#F7C948]/30 prose-th:bg-gradient-to-r prose-th:from-[#FEF6E6] prose-th:to-[#F7C948]/20 prose-th:text-[#7A1C1C] prose-th:border-[#F7C948]/30
                    prose-td:border-[#F7C948]/30
                    prose-figure:mx-0
                    prose-img:rounded-xl prose-img:border prose-img:border-[#F7C948]/20 prose-img:shadow-md
                    prose-pre:bg-gradient-to-br prose-pre:from-[#2d1b0e] prose-pre:to-[#1B1B1B] prose-pre:border prose-pre:border-[#F7C948]/20 prose-pre:rounded-xl
                    prose-code:text-[#F7C948]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-[#7A1C1C] to-[#9e2b2b] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowLeft className="h-5 w-5 rotate-90" />
                </button>
            )}

            {/* Custom styles */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0px); }
                }
                
                .floating {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}