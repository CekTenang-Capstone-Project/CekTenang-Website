import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../../layouts/Layout";

import { useLanguage } from "../contexts/LanguageContext";

function DashboardPage() {
  const { t } = useLanguage();

  const sekarang = new Date();
  const formatTanggal = sekarang.toLocaleDateString(t.DashboardDate, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  return (
  <Layout title="Dashboard" name="User" role="User">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

    {/* Header */}
    <div className="col-span-1 lg:col-span-4">
      <h1 className="text-2xl md:text-4xl font-bold text-white">
        {t.DashboardGreeting} Aryanda
      </h1>

      <p className="text-zinc-400 mt-1 text-sm md:text-base">
        {formatTanggal}
      </p>
    </div>

    {/* Cards */}
    {[
      {
        title: t.StressScoreTitle,
        value: "72",
        unit: t.StressHighText,
        color: "bg-red-500",
        text: "text-red-500",
        width: "72%",
      },
      {
        title: "Jam Tidur",
        value: "5.5",
        unit: "jam",
        color: "bg-red-400",
        text: "text-white",
        width: "55%",
      },
      {
        title: "Olahraga",
        value: "30",
        unit: "mnt",
        color: "bg-emerald-400",
        text: "text-white",
        width: "70%",
      },
      {
        title: "Screen Time",
        value: "7.2",
        unit: "jam",
        color: "bg-blue-400",
        text: "text-white",
        width: "80%",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="
          bg-zinc-800 rounded-2xl p-5
          flex flex-col gap-3
          min-h-[150px]
        "
      >
        <span className="text-zinc-400 text-xs md:text-sm uppercase tracking-wide">
          {item.title}
        </span>

        <div className="flex items-end gap-2">
          <span className={`text-3xl md:text-5xl font-bold ${item.text}`}>
            {item.value}
          </span>

          <span className="text-zinc-400 text-sm md:text-base mb-1">
            {item.unit}
          </span>
        </div>

        <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden mt-auto">
          <div
            className={`h-full ${item.color}`}
            style={{ width: item.width }}
          />
        </div>
      </div>
    ))}

    {/* Chart */}
    <div
      className="
        col-span-1 lg:col-span-3
        bg-zinc-800 rounded-2xl
        p-4 md:p-6
      "
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Tren stres 7 hari
        </h2>

        <span className="text-sm text-blue-400">
          Average 64
        </span>
      </div>

      {/* Dummy chart */}
      <div className="h-[220px] md:h-[280px] flex items-end justify-between gap-2">
        {[40, 60, 50, 70, 65, 72, 55].map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-blue-500 rounded-t-xl"
            style={{ height: `${value * 2}px` }}
          />
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 mt-4 text-center text-[10px] md:text-xs text-zinc-400">
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span className="text-red-400">SAT</span>
        <span>SUN</span>
      </div>
    </div>

    {/* Side Panel */}
    <div className="bg-zinc-800 rounded-2xl p-5 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-6">
        Kondisi hari ini
      </h2>

      <div className="space-y-5">
        {[
          { label: "Tidur", value: "65%", width: "65%", color: "bg-red-400" },
          { label: "Kerja", value: "88%", width: "88%", color: "bg-red-400" },
          { label: "Layar", value: "92%", width: "92%", color: "bg-blue-400" },
          { label: "Gerak", value: "40%", width: "40%", color: "bg-emerald-400" },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-zinc-300 text-sm md:text-base">
                {item.label}
              </span>

              <span className="text-zinc-400 text-sm">
                {item.value}
              </span>
            </div>

            <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color}`}
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Insight */}
    <div className="col-span-1 lg:col-span-4">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
        Insight terbaru
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        <div className="bg-zinc-800 rounded-2xl p-5 border-l-4 border-red-500">
          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
            Kurang tidur terdeteksi
          </h3>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Tidur 5.5 jam semalam berkontribusi pada peningkatan level
            kortisol Anda pagi ini sebesar 14%.
          </p>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-5 border-l-4 border-emerald-500">
          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
            Dampak positif olahraga
          </h3>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Sesi olahraga 30 menit berhasil menurunkan detak jantung
            istirahat sebesar 4 bpm.
          </p>
        </div>

      </div>
    </div>

  </div>
</Layout>
  );
}

export default DashboardPage;
