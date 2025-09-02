"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminDashboard() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-8 text-indigo-600">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Home
        </button>

        <button
          onClick={() => router.push("/admin/upload/news/add")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Add News
        </button>

        <button
          onClick={() => router.push("/admin/upload/blog/add")}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
        >
          Add Blog
        </button>

        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
