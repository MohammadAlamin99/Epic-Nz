import MainDashboard from "../components/Dashboard/MainDashboard";
import SIdebar from "../components/sidebar/SIdebar";
import Topbar from "../components/topbar/Topbar";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="w-[250px] border-r border-[rgba(59,175,122,0.2)]">
          <SIdebar />
        </div>
        <div className="w-[calc(100%-250px)]">
          <Topbar />
          <MainDashboard />
        </div>
      </div>
    </>
  );
}
