import LogoutIcon from "../svg/LogoutIcon";
import LogoArea from "./LogoArea";
import Navigation from "./Navigation";

export default function SIdebar() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <LogoArea />
        <Navigation />
      </div>
      <div className="px-2 py-4">
        <a
          href="#"
          className="flex items-center gap-2.5 py-2 px-3 text-[14px] leading-[18px] tracking-[0] font-inter text-[#E55252]"
        >
          <LogoutIcon />
          <span>Log Out</span>
        </a>
      </div>
    </div>
  );
}
