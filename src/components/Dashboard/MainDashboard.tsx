import { CloudSun, MailCheck, MapPin, Users } from "lucide-react";
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";
import DashboardApproval from "./DashboardApproval";
import Heading from "./Heading";

export default function MainDashboard() {
  const cards = [
    {
      title: "Total Location",
      number: "6",
      icon: <MapPin />,
      paragraph: "from last months",
      growth: "12%",
      showGrowIcon: true,
    },
    {
      title: "New Submissions",
      number: "4",
      icon: <MailCheck />,
      growth: "Orders today",
    },
    {
      title: "Active Users",
      number: "1,247",
      icon: <Users />,
      paragraph: "from last months",
      growth: "8%",
      showGrowIcon: true,
    },
    {
      title: "Weather API",
      number: "Operational",
      icon: <CloudSun />,
      paragraph: "99.9% Uptime",
    },
  ];

  return (
    <div className="pl-8 pt-11 text-white h-[calc(100vh-60px)] overflow-y-scroll no-scrollbar">
      {/* heading */}
      <Heading
        title="Dashboard"
        subTitle="Welcome back, admin. Here's what's happening today."
      />

      {/* cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8 pr-12">
        {cards.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            number={item.number}
            icon={item.icon}
            paragraph={item.paragraph}
            growth={item.growth}
            showGrowIcon={item.showGrowIcon}
          />
        ))}
      </div>

      {/* chart */}
      <div className="pr-12">
        <DashboardChart />
      </div>

      {/* approval */}
      <DashboardApproval />
    </div>
  );
}
