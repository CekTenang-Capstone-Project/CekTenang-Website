import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Tinggi", value: 33 },
  { name: "Sedang", value: 45 },
  { name: "Rendah", value: 22 },
];

const COLORS = [
  "#f8b4b4",
  "#c7d2fe",
  "#4ade80",
];

function StressIntensityChart({ avgScore = 74 }) {
  const renderCustomLabel = () => (
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      className="fill-white"
      style={{ fontSize: "24px", fontWeight: "bold" }}
    >
      {avgScore}
    </text>
  );

  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-6">
      <h3 className="font-semibold text-xl mb-4 text-white">
        Intensitas Stres
      </h3>

      <div className="h-[250px] flex justify-center items-center">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={65}
              outerRadius={90}
              dataKey="value"
              label={renderCustomLabel}
            >
              {chartData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-3">
        {chartData.map((item, i) => (
          <div key={item.name} className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[i] }}
            />
            <span className="text-sm text-zinc-300">
              {item.name}
            </span>
            <span className="text-sm text-zinc-500 ml-auto">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StressIntensityChart;