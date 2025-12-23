import { Check, X, Eye, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function DashboardApproval() {
  const [approvals] = useState([
    {
      id: 1,
      location: "Lakeside Community Center",
      city: "Chicago, IL",
      submitter: "Sawyer Adam",
      date: "Oct 24\n2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sawyer",
    },
    {
      id: 2,
      location: "Lakeside Community Center",
      city: "Chicago, IL",
      submitter: "Lisanne Teun",
      date: "Aug 4\n2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisanne",
    },
    {
      id: 3,
      location: "Lakeside Community Center",
      city: "Chicago, IL",
      submitter: "Graham Skylar",
      date: "Dec 19\n2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Graham",
    },
  ]);

  const [activities] = useState([
    {
      id: 1,
      title: "System Backup Completed",
      subtitle: "Automated Task",
      time: "9:05 AM",
      type: "info",
    },
    {
      id: 2,
      title: "Admin 'Sarah' Updated API Keys",
      subtitle: "Security Settings",
      time: "8:42 AM",
      type: "warning",
    },
    {
      id: 3,
      title: "New Location 'Downtown Plaza' Submitted",
      subtitle: "Submission #8547",
      time: "12:15 AM",
      type: "success",
    },
  ]);

  return (
    <div className="bg-black text-white mt-[30px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Approvals Section */}
        <div className="lg:col-span-2 border border-[#12271F] rounded-[12px] py-2.5 px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Pending Approvals</h1>
            <button className="text-gray-400 hover:text-white text-sm">
              View All
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-xs text-gray-500 uppercase mb-4 px-4">
            <div className="col-span-3">Location Name</div>
            <div className="col-span-3">Submitted By</div>
            <div className="col-span-3">Date</div>
            <div className="col-span-3">Actions</div>
          </div>

          {/* Approval Items */}
          <div className="space-y-3">
            {approvals.map((approval) => (
              <div
                key={approval.id}
                className="bg-zinc-900 rounded-lg p-4 hover:bg-zinc-800 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Location */}
                  <div className="col-span-3">
                    <div className="font-semibold text-sm">
                      {approval.location}
                    </div>
                    <div className="text-xs text-gray-500">{approval.city}</div>
                  </div>

                  {/* Submitter */}
                  <div className="col-span-3 flex items-center gap-3">
                    <img
                      src={approval.avatar}
                      alt={approval.submitter}
                      className="w-9 h-9 rounded-full"
                    />
                    <span className="text-sm">{approval.submitter}</span>
                  </div>

                  {/* Date */}
                  <div className="col-span-3 text-sm whitespace-pre-line">
                    {approval.date}
                  </div>

                  {/* Actions */}
                  <div className="col-span-3 flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors">
                      <Check className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed Section */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Pending Approvals</h2>

          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === "info"
                        ? "bg-blue-500"
                        : activity.type === "warning"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  ></div>
                  <div className="w-px h-full bg-gray-800 mt-2"></div>
                </div>

                {/* Activity content */}
                <div className="flex-1 pb-6">
                  <div className="flex items-start gap-2 mb-1">
                    <ArrowUp className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-sm leading-tight mb-1">
                        {activity.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.subtitle} • {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
