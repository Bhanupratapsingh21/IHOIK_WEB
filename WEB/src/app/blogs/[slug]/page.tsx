"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { formatDate } from "@/utilsfolder/formatDate";
import { Client, Databases, Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
                    setPost({
                        $id: doc.$id,
                        slug: doc.slug,
                        title: doc.title,
                        summary: doc.summary,
                        content: doc.content,
                        tags: doc.tags || [],
                        coverImage: doc.coverImage,
                        publishedAt: doc.publishedAt,
                        authorName: doc.authorName,
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

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!post) {
        return <div className="text-center py-10 text-gray-500">Post not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-5 lg:px-0 space-y-8">
            {/* Back button */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 rounded-md hover:bg-blue-50"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to posts
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {post.title}
            </h1>

            {/* Author and date */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-700 font-medium">
                        {post.authorName?.[0]?.toUpperCase() || "A"}
                    </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                    Published by{" "}
                    <strong className="text-gray-900 dark:text-white">
                        {post.authorName || "Anonymous"}
                    </strong>
                    {post.publishedAt && ` · ${formatDate(post.publishedAt)}`}
                </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
                <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Cover image */}
            {post.coverImage && (
                <div className="w-full overflow-hidden rounded-xl">
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
            <article
                className="prose prose-lg max-w-none dark:prose-invert 
        prose-headings:text-gray-900 prose-headings:dark:text-white 
        prose-p:text-gray-700 prose-p:dark:text-gray-300 
        prose-a:text-blue-600 prose-a:dark:text-blue-400 
        prose-strong:text-gray-900 prose-strong:dark:text-white 
        prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 
        prose-blockquote:dark:bg-blue-900/20 prose-blockquote:dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
}
