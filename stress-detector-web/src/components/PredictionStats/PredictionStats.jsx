import PropTypes from "prop-types";

function PredictionStats({ t }) {
  const statsData = [
    {
      label: t.PredictionTodayScoreLabel,
      value: "82",
      maxValue: "100",
      status: t.HighText,
      color: "text-red-500",
      bgColor: "bg-red-500",
      description: "Bertenaga",
    },
    {
      label: t.PredictionAverageLabel,
      value: "64",
      maxValue: "100",
      status: "-45 dari nilai hari",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500",
      description: "",
    },
    {
      label: t.PredictionLowestLabel,
      value: "42",
      status: t.LowText,
      color: "text-green-500",
      bgColor: "bg-green-500",
      description: "Seminggu, 12 hari",
    },
    {
      label: t.PredictionHighestLabel,
      value: "89",
      status: "Sangat Tinggi",
      color: "text-red-500",
      bgColor: "bg-red-500",
      description: "Kami, 18 hari",
    },
  ];

  return (
    <>
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800"
        >
          <h3 className="text-zinc-400 text-xs md:text-sm uppercase tracking-wide mb-4">
            {stat.label}
          </h3>

          <div className="mb-4">
            <div className="flex items-end gap-2 mb-2">
              <span className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                {stat.value}
              </span>
              {stat.maxValue && (
                <span className="text-sm md:text-base text-zinc-400 mb-1">
                  /{stat.maxValue}
                </span>
              )}
            </div>
            <p className={`text-xs md:text-sm ${stat.color}`}>
              {stat.status}
            </p>
          </div>

          {stat.description && (
            <p className="text-zinc-400 text-xs md:text-sm">
              {stat.description}
            </p>
          )}

          {stat.maxValue && (
            <div className="w-full h-1.5 bg-zinc-700 rounded-full overflow-hidden mt-3">
              <div
                className={`h-full ${stat.bgColor}`}
                style={{
                  width: `${(parseInt(stat.value) / parseInt(stat.maxValue)) * 100}%`,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
}

PredictionStats.propTypes = {
  t: PropTypes.object.isRequired,
};

export default PredictionStats;
