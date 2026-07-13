import React from "react";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to your LMS Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Stat Cards */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-1">Enrolled Courses</div>
          <div className="text-3xl font-bold text-gray-900">4</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-1">Completed Lessons</div>
          <div className="text-3xl font-bold text-blue-600">24</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-1">Average Score</div>
          <div className="text-3xl font-bold text-green-600">92%</div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h2>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-1 overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-4 p-5 hover:bg-gray-50 transition-colors cursor-pointer rounded-lg">
          <div className="w-full sm:w-48 h-32 bg-gray-200 rounded-lg shrink-0 object-cover" />
          <div className="flex flex-col flex-1 justify-center">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Advanced Algorithms in AI</h3>
            <p className="text-sm text-gray-500 mb-4">Module 4: Neural Networks Fundamentals</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
            <div className="text-xs font-medium text-gray-500">65% Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
