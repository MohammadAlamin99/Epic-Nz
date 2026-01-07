import { useState } from "react";
import type { Submission } from "../../@types/ISumbmission.type";
import { Calendar, CircleUser, Eye, Mail, X } from "lucide-react";
import CorrectMarkIcon from "../svg/CorrectMarkIcon";
type SubmissionStatus = "pending" | "approved" | "rejected";
const submissions: Submission[] = [
  {
    id: 1,
    title: "Hidden Waterfall Track",
    description: "Beautiful hidden waterfall accessible via a short bush walk",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "John Traveler",
    email: "john@example.com",
    date: "2024-03-18",
    status: "pending",
  },
  {
    id: 2,
    title: "Secret Beach Campsite",
    description: "Quiet beachside spot perfect for self-contained vehicles",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    author: "John Traveler",
    email: "john@example.com",
    date: "2024-03-18",
    status: "pending",
  },
  {
    id: 3,
    title: "Abel Tasman Coast Track",
    description: "Panoramic views of the Southern Alps",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    author: "John Traveler",
    email: "john@example.com",
    date: "2024-03-18",
    status: "approved",
    adminNotes: "Verified location. Added safety warnings.",
  },
];

const statusFilters: Array<{ label: string; value: SubmissionStatus | "all" }> =
  [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

export default function MainSubmition() {
  const [filter, setFilter] = useState<SubmissionStatus | "all">("all");

  const filteredSubmissions =
    filter === "all"
      ? submissions
      : submissions.filter((s) => s.status === filter);

  return (
    <div className="min-h-screen bg-[#070A09] p-6 text-neutral-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-[32px] font-inter font-semibold mb-2 leading-[150%]">
            User Submissions
          </h1>
          <p className="text-[16px] font-inter font-normal text-neutral-400">
            Review and moderate user-submitted locations
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 rounded-full bg-neutral-900 p-1">
          {statusFilters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                filter === item.value
                  ? "bg-emerald-500 text-neutral-950"
                  : "text-neutral-300 hover:bg-neutral-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSubmissions.map((submission) => (
          <div
            key={submission.id}
            className="rounded-[12px] border border-[rgba(59,175,122,0.2)] bg-[#090D0C] shadow-lg"
          >
            {/* Image */}
            <img
              src={submission.imageUrl}
              alt={submission.title}
              className="h-[285px] rounded-[12px_12px_0_0] w-full object-cover"
            />

            {/* Content */}
            <div className="space-y-3 px-3 pt-5 pb-5">
              <div>
                <h3 className="font-semibold font-inter text-[#F5F5F5] text-[16px]">
                  {submission.title}
                </h3>
                <p className="text-[14px] font-inter font-normal text-neutral-400">
                  {submission.description}
                </p>
              </div>

              {/* Meta */}
              <div className="space-y-1 text-[14px] font-inter font-normal text-neutral-400">
                <div className="flex items-center gap-2">
                  <CircleUser width={16} height={16} />
                  <p> {submission.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail width={16} height={16} />
                  <p>{submission.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar width={16} height={16} />
                  <p> {submission.date}</p>
                </div>
                    </div>
                    <div className="divider w-full bg-[#3BB77433]"></div>

              {submission.adminNotes && (
                        <div className="p-2.5 bg-[#181C1B42] rounded-[12px]">
                            <div className="rounded-lg bg-[#090D0C] text-[14px] font-inter font-normal text-[#F5F5F5] opacity-[0.64]">
                  <strong>Admin Notes:</strong> {submission.adminNotes}
                </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {submission.status === "pending" && (
                  <>
                    <button className="flex-1 cursor-pointer rounded-[16px] bg-[#3BAF7A] px-3.5 py-2 text-sm font-medium text-neutral-950">
                      <div className="flex items-center gap-2 w-fit">
                        <CorrectMarkIcon />
                        <p className="text-white font-inter font-medium text-[16px]">
                          Approve
                        </p>
                      </div>
                    </button>
                    <button className="flex-1 cursor-pointer rounded-[16px] bg-[#FF3838] px-3 py-2 text-sm font-medium text-white">
                      <div className="flex items-center gap-2">
                        <X />
                        <p className="text-white font-inter font-medium text-[16px]">
                          Reject
                        </p>
                      </div>
                    </button>
                  </>
                )}

                <button className="flex-1 cursor-pointer rounded-[16px] bg-[#181C1B] px-3 py-2 text-sm text-neutral-200 w-fit">
                  <div className="flex items-center gap-2">
                    <Eye color="#94A3B8" />
                    <p className="text-white font-inter font-medium text-[16px]">
                      Review
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
