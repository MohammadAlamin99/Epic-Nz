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
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M16 17l5-5-5-5v3H9v4h7v3Z" fill="#E55252" />
            <path d="M5 5h6v14H5z" stroke="#E55252" strokeWidth="2" />
          </svg>
          <span>Log Out</span>
        </a>
      </div>
    </div>
  );
}
