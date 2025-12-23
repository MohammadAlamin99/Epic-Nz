import profile from "../../assets/images/profile.png";
export default function Topbar() {
  return (
    <>
      <div className="flex gap-1.5 py-2 border-b border-[rgba(59,175,122,0.2)] justify-end pr-12">
        <div className="w-9 h-9">
          <a href="#">
            <img src={profile} alt="profile" />
          </a>
        </div>
        <div>
          <h4 className="text-[#F5F5F5] font-inter text-[14px] font-medium leading-[18px] tracking-[0] capitalize">
            Admin
          </h4>
          <p className="text-[rgba(245,245,245,0.57)] font-inter text-[14px] font-normal leading-[18px] tracking-[0] capitalize mt-1">
            Super Admin
          </p>
        </div>
      </div>
    </>
  );
}
