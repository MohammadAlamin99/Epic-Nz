import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EpicLocation from "./pages/EpicLocation";
import Hikes from "./pages/Hikes";
import Campgrounds from "./pages/Campgrounds";
import Freedom from "./pages/Freedom";
import Submission from "./pages/Submission";
import Subscription from "./pages/Subscription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/location/epic" element={<EpicLocation />} />
        <Route path="/location/hikes" element={<Hikes />} />
        <Route path="/location/campgrounds" element={<Campgrounds />} />
        <Route path="/location/freedom-camp" element={<Freedom />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/system/subscription" element={<Subscription />} />
        <Route path="/system/notification" element={<Dashboard />} />
        <Route path="/system/activity-log" element={<Dashboard />} />
        <Route path="/advance/analytics" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
