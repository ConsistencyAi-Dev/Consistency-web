import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 shrink-0 hidden md:block">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm" />
            </div>
            <span className="font-bold text-gray-900 tracking-tight">Consistency.AI</span>
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
            Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors">
            My Courses
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors">
            Assignments
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
          <div className="font-medium text-gray-800">Learning Management System</div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
              U
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
