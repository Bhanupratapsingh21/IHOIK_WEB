"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/admin/login"); // Redirect if not logged in
        }
    }, [user, loading, router]);

    if (loading) {
        return <div className="p-4">Loading session...</div>;
    }

    return <div className="p-6">{children}</div>;
}
