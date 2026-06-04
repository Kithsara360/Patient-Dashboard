"use client";

import Link from "next/link";
import { Users, LayoutDashboard } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white">
      <div className="p-6">
        <h1 className="text-xl font-bold">
          Patient Dashboard
        </h1>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link
          href="/"
        //   className="flex items-center gap-2 rounded-lg p-3 hover:bg-gray-100"

          className={clsx(
            "flex items-center gap-2 rounded-lg p-3 hover:bg-blue-300",
            // pathname === "/" && "bg-blue-100"
            pathname === "/"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
          )}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/patients"
          className={clsx(
            "flex items-center gap-2 rounded-lg p-3 hover:bg-blue-300",
            pathname.startsWith("/patients")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
)}
        >
          <Users size={18} />
          Patients
        </Link>
      </nav>
    </aside>
  );
}