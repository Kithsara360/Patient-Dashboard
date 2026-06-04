"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div>
        <h2 className="text-2xl font-bold">
          Patient Information Dashboard
        </h2>
      </div>

      <Link
        href="/patients/add"
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        <Plus size={18} />
        Add Patient
      </Link>
    </header>
  );
}