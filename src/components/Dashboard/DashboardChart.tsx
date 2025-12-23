import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface CustomDotProps {
  cx?: number;
  cy?: number;
}

const CustomDot = (props: CustomDotProps) => {
  const { cx, cy } = props;
  if (cx === undefined || cy === undefined) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill="#10b981"
      stroke="#10b981"
      strokeWidth={2}
    />
  );
};

export default function DashboardChart() {
  const data = [
    { day: "Saturday", value: 45 },
    { day: "Sunday", value: 48 },
    { day: "Monday", value: 42 },
    { day: "Tuesday", value: 55 },
    { day: "Wednesday", value: 75 },
    { day: "Thursday", value: 68 },
    { day: "Friday", value: 85 },
  ];

  return (
    <div className="w-full h-full p-6 flex items-center justify-center mt-8 border border-[#12271F] rounded-[12px]">
      <div className="w-full">
        <div className="mb-2">
          <h2 className="text-[#F5F5F5] font-inter text-[16px] font-bold">
            Weekly Submission Trends
          </h2>
          <p className="text-[12px] text-[#A5A6A6] mt-2">
            Submission Over The Last 7 Days
          </p>
        </div>

        <div className="mt-8">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="0" stroke="transparent" />
              <XAxis
                dataKey="day"
                tick={{ fill: "#9ca3af", fontSize: 14 }}
                axisLine={false}
                tickLine={false}
                dy={10}
              />
              <YAxis hide />
              <Line
                type="natural"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={3}
                dot={<CustomDot />}
                activeDot={{ r: 6, fill: "#10b981" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
