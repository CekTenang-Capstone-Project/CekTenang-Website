import PropTypes from "prop-types";

function PredictionHistory({ t }) {
  // Sample data - Ini dapat diganti dengan data dari API
  const historyData = [
    {
      date: "18 Okt 2023",
      time: "14:30",
      score: 82,
      level: "Tinggi",
      levelColor: "text-red-500",
      activity: "Rapat strategis kuartalan lil",
    },
    {
      date: "17 Okt 2023",
      time: "11:15",
      score: 70,
      level: "Sedang",
      levelColor: "text-yellow-500",
      activity: "Persiapan dokumentasi proyek",
    },
    {
      date: "16 Okt 2023",
      time: "09:45",
      score: 45,
      level: "Rendah",
      levelColor: "text-green-500",
      activity: "Olahraga pagi & Meditasi",
    },
    {
      date: "15 Okt 2023",
      time: "16:20",
      score: 89,
      level: "Sangat Tinggi",
      levelColor: "text-red-500",
      activity: "Deadline penghitungan laporan akhir",
    },
  ];

  const getStatusBadge = (level) => {
    switch (level) {
      case "Tinggi":
        return "bg-red-500/10 text-red-500";
      case "Sedang":
        return "bg-yellow-500/10 text-yellow-500";
      case "Rendah":
        return "bg-green-500/10 text-green-500";
      case "Sangat Tinggi":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-zinc-700 text-zinc-300";
    }
  };

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
      {/* Table Header */}
      <div className="hidden md:grid md:grid-cols-4 gap-4 p-5 border-b border-zinc-800 bg-zinc-800/50">
        <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          {t.PredictionHistoryTableDate}
        </h4>
        <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          {t.PredictionHistoryTableScore}
        </h4>
        <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          {t.PredictionHistoryTableLevel}
        </h4>
        <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          {t.PredictionHistoryTableActivity}
        </h4>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-zinc-800">
        {historyData.map((item, index) => (
          <div
            key={index}
            className="p-5 hover:bg-zinc-800/30 transition-colors"
          >
            {/* Mobile View */}
            <div className="md:hidden space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-wide mb-1">
                    {t.PredictionHistoryTableDate}
                  </p>
                  <p className="text-white font-medium text-sm">
                    {item.date} ({item.time})
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400 text-xs uppercase tracking-wide mb-1">
                    {t.PredictionHistoryTableScore}
                  </p>
                  <p className="text-white font-bold text-lg">{item.score}</p>
                </div>
              </div>

              <div>
                <p className="text-zinc-400 text-xs uppercase tracking-wide mb-1">
                  {t.PredictionHistoryTableLevel}
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                    item.level
                  )}`}
                >
                  {item.level}
                </span>
              </div>

              <div>
                <p className="text-zinc-400 text-xs uppercase tracking-wide mb-1">
                  {t.PredictionHistoryTableActivity}
                </p>
                <p className="text-zinc-300 text-sm">{item.activity}</p>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 items-center">
              <div>
                <p className="text-white text-sm font-medium">{item.date}</p>
                <p className="text-zinc-400 text-xs">{item.time}</p>
              </div>

              <div>
                <p className="text-white font-bold text-lg">{item.score}</p>
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                    item.level
                  )}`}
                >
                  {item.level}
                </span>
              </div>

              <div>
                <p className="text-zinc-300 text-sm">{item.activity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Footer */}
      <div className="p-5 border-t border-zinc-800 text-center">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
          Lihat Selengkapnya →
        </button>
      </div>
    </div>
  );
}

PredictionHistory.propTypes = {
  t: PropTypes.object.isRequired,
};

export default PredictionHistory;
