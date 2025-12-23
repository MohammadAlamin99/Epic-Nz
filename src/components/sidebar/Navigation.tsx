import { useState } from "react";
import { NavLink } from "react-router-dom";
import Chevron from "../svg/Chevron";
import EpicLocation from "../svg/EpicLocation";
import Hikes from "../svg/Hikes";
import Campgrounds from "../svg/Campgrounds";
import Camps from "../svg/Camps";
import Submition from "../svg/Submition";
import Subscription from "../svg/Subscription";
import Notification from "../svg/Notification";
import ActiveLog from "../svg/ActiveLog";
import Advance from "../svg/Advance";
import Analytics from "../svg/Analytics";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { MapPin } from "lucide-react";

export default function Navigation() {
  const [openLocation, setOpenLocation] = useState(true);
  const [openSystem, setOpenSystem] = useState(true);
  const [openAdvance, setOpenAdvance] = useState(true);

  const itemCls =
    "flex items-center gap-2.5 p-[10px] text-[14px] leading-[18px] tracking-[0] font-inter text-[#FAFAFA]";
  const pillActive = "bg-[#3BAF7A] text-[#FAFAFA] font-medium rounded-[8px]";
  const sectionTitleCls =
    "flex items-center justify-between py-2 px-3 text-[14px] leading-[18px] font-inter text-[rgba(245,245,245,0.57)] w-full";
  return (
    <div>
      <nav className="pl-3 pr-4 flex flex-col gap-5 mt-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${itemCls} ${isActive ? pillActive : ""}`
          }
        >
          <RxDashboard />
          <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
            Dashboard
          </span>
        </NavLink>

        <button
          type="button"
          className={sectionTitleCls}
          onClick={() => setOpenLocation((v) => !v)}
        >
          <span className="flex items-center gap-2.5">
            <MapPin className="w-[18px] h-[18px] text-[#F5F5F5]" />
            <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
              Location
            </span>
          </span>
          <Chevron openSystem={openLocation} />
        </button>

        {openLocation && (
          <div className="pl-6 flex flex-col gap-2.5">
            <NavLink
              to="/location/epic"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <EpicLocation />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Epic Location
              </span>
            </NavLink>
            <NavLink
              to="/location/hikes"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <Hikes />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Hikes
              </span>
            </NavLink>
            <NavLink
              to="/location/campgrounds"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <Campgrounds />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Campgrounds
              </span>
            </NavLink>
            <NavLink
              to="/location/freedom-camp"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <Camps />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Freedom Camp
              </span>
            </NavLink>
          </div>
        )}

        <NavLink
          to="/submission"
          className={({ isActive }) =>
            `${itemCls} ${isActive ? pillActive : ""}`
          }
        >
          <Submition />
          <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
            Submission
          </span>
        </NavLink>

        <button
          type="button"
          className={sectionTitleCls}
          onClick={() => setOpenSystem((v) => !v)}
        >
          <span className="flex items-center gap-2.5">
            <IoSettingsOutline className="w-[18px] h-[18px] text-[#F5F5F5]" />
            <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
              System
            </span>
          </span>
          <Chevron openSystem={openSystem} />
        </button>
        {openSystem && (
          <div className="pl-6">
            <NavLink
              to="/system/subscription"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <Subscription />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Subscription
              </span>
            </NavLink>
            <NavLink
              to="/system/notification"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <Notification />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Notification
              </span>
            </NavLink>
            <NavLink
              to="/system/activity-log"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <ActiveLog />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Activity Log
              </span>
            </NavLink>
          </div>
        )}

        <button
          type="button"
          className={sectionTitleCls}
          onClick={() => setOpenAdvance((v) => !v)}
        >
          <span className="flex items-center gap-2.5">
            <Advance />
            <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
              Advance
            </span>
          </span>
          <Chevron openSystem={openAdvance} />
        </button>
        {openAdvance && (
          <div className="pl-6">
            <NavLink
              to="/advance/analytics"
              className={({ isActive }) =>
                `${itemCls} ${isActive ? pillActive : ""}`
              }
            >
              <Analytics />
              <span className="text-[#FAFAFA] font-inter text-[16px] font-normal leading-normal">
                Analytics
              </span>
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}
