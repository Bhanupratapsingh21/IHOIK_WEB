"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Client, Databases, ID } from "appwrite";
import { useRouter } from "next/navigation";

// ---------- Appwrite client ----------
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
const databases = new Databases(client);

// TinyMCE dynamic import
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((m) => m.Editor as unknown as React.ComponentType<any>),
  { ssr: false }
);


// Utility to slugify title
function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")   // remove special chars
    .replace(/\s+/g, "-")           // spaces → hyphen
    .replace(/-+/g, "-");           // collapse multiple hyphens
}

export default function BlogPostForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(""); // TinyMCE content (HTML)
  const [toasts, setToasts] = useState<Array<{ id: number, variant: string, message: string }>>([]);

  // Toast helper function
  const addToast = (toast: { variant: string, message: string }) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, ...toast }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // --- Cloudinary upload helper ---
  const uploadToCloudinary = async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD!}/auto/upload`,
      { method: "POST", body: fd }
    );
    const data = await res.json();
    if (!data.secure_url) throw new Error("Cloudinary upload failed");
    return data.secure_url as string;
  };

  // --- Cover image uploader ---
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await uploadToCloudinary(file);
      setCoverImage(url);
      addToast({ variant: "success", message: "Cover image uploaded!" });
    } catch (err) {
      console.error(err);
      addToast({ variant: "danger", message: "Upload failed" });
    }
  };

  // --- Tags ---
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) setTags((s) => [...s, t]);
    setTagInput("");
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // --- Save to Appwrite ---
  const handleSubmit = async () => {
    if (!title || !content.trim()) {
      addToast({ variant: "danger", message: "Title and Content are required!" });
      return;
    }

    setLoading(true);
    try {
      const slug = slugify(title);

      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION!,
        ID.unique(),
        {
          title,
          summary,
          content,
          tags,
          slug,
          coverImage,
          status: "public",
          publishedAt: new Date().toISOString(),
          createdBy: "Admin",
          authorName: "Admin",
          upvotes: 0,
        }
      );

      addToast({ variant: "success", message: "Blog created successfully!" });
      setTitle("");
      setSummary("");
      setTags([]);
      setCoverImage("");
      setContent("");
    } catch (e) {
      console.error(e);
      addToast({ variant: "danger", message: "Failed to save blog." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold dark:text-white">Create New Blog</h1>

      {/* Toast notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-md shadow-md ${toast.variant === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
              }`}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter your blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Summary */}
      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Summary
        </label>
        <textarea
          id="summary"
          placeholder="Short summary (optional)"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Cover Image
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {coverImage ? (
              <div className="mt-2">
                <img src={coverImage} alt="Cover preview" className="mx-auto h-32 object-cover rounded-lg" />
                <button
                  onClick={() => setCoverImage("")}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="cover-upload"
                    className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="cover-upload"
                      name="cover-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleCoverUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Tags
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
              <button
                type="button"
                className="ml-1.5 inline-flex rounded-full flex-shrink-0 p-1 text-blue-500 hover:bg-blue-200 hover:text-blue-600"
                onClick={() => removeTag(i)}
              >
                <span className="sr-only">Remove</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTag()}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={addTag}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </div>

      {/* Content (TinyMCE) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Content
        </label>
        <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-700">
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            value={content}
            onEditorChange={(newValue: string) => setContent(newValue)}
            init={{
              height: 400,
              menubar: true,
              plugins: "advlist autolink lists link image charmap searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
              toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              skin: "oxide-dark",
              content_css: "dark",
            }}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Saving..." : "Save Blog"}
        </button>
      </div>
    </div>
  );
}

