import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EpicLocation from "./pages/EpicLocation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/location/epic" element={<EpicLocation />} />
        <Route path="/location/hikes" element={<Dashboard />} />
        <Route path="/location/campgrounds" element={<Dashboard />} />
        <Route path="/location/freedom-camp" element={<Dashboard />} />
        <Route path="/submission" element={<Dashboard />} />
        <Route path="/system/subscription" element={<Dashboard />} />
        <Route path="/system/notification" element={<Dashboard />} />
        <Route path="/system/activity-log" element={<Dashboard />} />
        <Route path="/advance/analytics" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
