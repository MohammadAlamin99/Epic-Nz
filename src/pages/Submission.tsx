

import SIdebar from "../components/sidebar/SIdebar";
import MainSubmition from "../components/submission/MainSubmition";
import Topbar from "../components/topbar/Topbar";

export default function Submission() {
  return (
    <div>
      <div className="flex">
        <div className="w-[250px] border-r border-[rgba(59,175,122,0.2)]">
          <SIdebar />
        </div>
        <div className="w-[calc(100%-250px)]">
          <Topbar />
          <MainSubmition/>
        </div>
      </div>
    </div>
  );
}
