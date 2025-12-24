import { Check, X, Eye } from "lucide-react";
import { useState } from "react";
import profile from "../../assets/images/profile.png";

export default function DashboardApproval() {
  const [approvals] = useState([
    {
      id: 1,
      location: "Lakeside Community Center",
      city: "Chicago, IL",
      submitter: "Sawyer Adam",
      date: "Oct 24\n2025",
      avatar: `${profile}`,
    },
    {
      id: 2,
      location: "Lakeside Community Center",
      city: "Chicago, IL",
      submitter: "Lisanne Teun",
      date: "Aug 4\n2025",
      avatar: `${profile}`,
    },
    {
      id: 3,
      location: "Lakeside Community Center",
      city: "Chicago, IL",
      submitter: "Graham Skylar",
      date: "Dec 19\n2025",
      avatar: `${profile}`,
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
    <div className="bg-black text-white mt-[30px] pr-11">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Approvals Section */}
        <div className="lg:col-span-2 border border-[#12271F] rounded-[12px] py-2.5 px-12">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-[32px] font-inter font-semibold">
              Pending Approvals
            </h1>
            <button className="text-gray-400 hover:text-white text-sm cursor-pointer font-inter font-semibold">
              View All
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-[16px] font-inter font-semibold text-white mb-10 px-4">
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
                className="border-b border-[#12271F] pb-9 mb-9 rounded-lg p-4"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Location */}
                  <div className="col-span-3 max-w-[172px]">
                    <div className="font-bold text-[16px] font-inter mb-1">
                      {approval.location}
                    </div>
                    <div className="text-[12px] font-inter font-normal text-gray-500">
                      {approval.city}
                    </div>
                  </div>

                  {/* Submitter */}
                  <div className="col-span-3 flex items-center gap-4">
                    <img
                      src={approval.avatar}
                      alt={approval.submitter}
                      className="w-11 h-11 rounded-full"
                    />
                    <span className="text-[16px] font-inter font-bold">
                      {approval.submitter}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="col-span-3 text-[16px] font-inter font-normal whitespace-pre-line">
                    {approval.date}
                  </div>

                  {/* Actions */}
                  <div className="col-span-3 flex items-center gap-3.5">
                    <button className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center transition-colors cursor-pointer">
                      <Check className="w-4 h-4 text-black" />
                    </button>
                    <button className="w-6 h-6 rounded-full bg-[#EF4444] flex items-center justify-center transition-colors cursor-pointer">
                      <X className="w-4 h-4 text-black" />
                    </button>
                    <button className="w-6 h-6 rounded-ful flex items-center justify-center transition-colors cursor-pointer">
                      <Eye className="w-4 h-4 text-[#94A3B8]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed Section */}
        <div className="lg:col-span-1 border border-[#12271F] rounded-[12px] p-6">
          <h2 className="text-[32px] font-semibold text-white mb-10">
            Pending Approvals
          </h2>

          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      activity.type === "info"
                        ? "bg-[#137FEC]"
                        : activity.type === "warning"
                        ? "bg-[#838383]"
                        : "bg-[#3BB774]"
                    }`}
                  ></div>
                  <div className="w-px h-6 bg-white mt-2"></div>
                </div>

                {/* Activity content */}
                <div className="flex-1 pb-6">
                  <div className="flex items-start gap-2 mb-1">
                    <div>
                      <div className="font-bold text-[16px] font-inter leading-[24px] mb-1">
                        {activity.title}
                      </div>
                      <div className="text-[12px] font-inter font-normal text-gray-500 leading-[18px]">
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
