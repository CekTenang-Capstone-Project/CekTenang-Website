import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "SEN", value: 58 },
  { day: "SEL", value: 55 },
  { day: "RAB", value: 60 },
  { day: "KAM", value: 74 },
  { day: "JUM", value: 57 },
  { day: "SAB", value: 54 },
  { day: "MIN", value: 62 },
];

function WeeklyActivityChart() {
  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-6">
      <h3 className="font-semibold text-xl mb-5 text-white">
        Metrik Aktivitas Mingguan
      </h3>

      <div className="h-[250px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              stroke="#71717a"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="#71717a"
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #3f3f46",
                borderRadius: "8px",
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#c4d3ff"
              strokeWidth={3}
              dot={{ fill: "#c4d3ff", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeeklyActivityChart;