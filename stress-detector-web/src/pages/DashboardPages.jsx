import Layout from "../../layouts/Layout";
import Datas from "../components/DiagnosticBox/Datas";
import { useLanguage } from "../contexts/LanguageContext";
import StressChart from "../components/StresChart/StressChart";
import calender from  "../assets/icons/calendar.svg"
import TodayDiagnose from "../components/DiagnosticBox/TodayDiagnose";

function DashboardPage() {
  const { t } = useLanguage();

  const sekarang = new Date();
  const formatTanggal = sekarang.toLocaleDateString(t.DashboardDateLocale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  return (
  <Layout title="Dashboard" name="User" role="User">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

    {/* Greeting */}
    <div className="col-span-1 lg:col-span-4">
      <h1 className="text-2xl md:text-4xl font-bold text-white">
        {t.DashboardGreeting} Aryanda
      </h1>

    {/* Today Date */}
      <p className="text-zinc-400 mt-1 text-sm md:text-base">
        {formatTanggal}
      </p>
    </div>

    {/* Cards */}
    
      <div className="col-span-1 lg:col-span-4">
        <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
          <div className="flex items-center gap-4">
            
            {/* Icon */}
            <div className="flex-shrink-0">
              <img
                src={calender}
                alt="calendar"
                className="w-8 h-8 invert"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-200">
                {t.LastJournalSummaryTitle}
              </h2>

              <p className="text-zinc-400 text-lg mt-1">
                Jumat, 17 April 2026
              </p>
            </div>

          </div>
        </div>
      </div>

      <Datas
        metric="Mood"
        title={t.MoodScoreTitle}
        value="65"
      />
      <Datas
        metric="Fatigue"
        title={t.FatigueLevelTitle}
        value="60"
      />
      <Datas
        metric="SocialMedia"
        title={t.SocialMediaTitle}
        value="2"
      />
      <Datas
        metric="Stress"
        title={t.StressScoreTitle}
        value="72"
      />


    {/* Chart */}
    <div className="col-span-1 lg:col-span-3">

      <div className="col-span-1 lg:col-span-3">
        <StressChart />
      </div>

    </div>

    {/* Side Panel */}
    <div className="bg-zinc-800 rounded-2xl p-5 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-6">
        Kondisi hari ini
      </h2>

      <TodayDiagnose
        studyTime={6.5}
        taskLoad="High"
        deadlinePressure={90}
        physicalActivity={45}
        sleep={5.5}
      />
    </div>

    {/* AI Recommendation */}
    <div className="col-span-1 lg:col-span-4">
      <div className="bg-zinc-800 rounded-2xl p-5 md:p-7">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-blue-300 text-lg font-bold leading-none">
            AI
          </span>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            {t.PersonalAIRecommendationTitle}
          </h2>
        </div>

        <p className="text-zinc-300 italic text-sm md:text-base leading-relaxed mb-6">
          "Berdasarkan analisis terbaru, peningkatan stres Anda sebesar{" "}
          <span className="text-red-500 font-semibold">12%</span> berkorelasi
          kuat dengan tekanan deadline yang mencapai 90% dan beban tugas yang
          tinggi. Meskipun mood score Anda tetap positif (8.4), level kelelahan
          (fatigue) mulai meningkat karena{" "}
          <span className="text-red-500 font-semibold">kurang tidur</span>{" "}
          (5.5 jam)."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900/70 rounded-lg p-4">
            <h3 className="text-[11px] font-bold text-blue-300 uppercase mb-2">
              Saran Belajar
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Gunakan teknik Pomodoro untuk 3 jam ke depan guna mengurangi
              beban kognitif tugas.
            </p>
          </div>

          <div className="bg-zinc-900/70 rounded-lg p-4">
            <h3 className="text-[11px] font-bold text-green-400 uppercase mb-2">
              Saran Fisik
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Lakukan peregangan 10 menit sekarang untuk menurunkan level
              kortisol akibat screen time.
            </p>
          </div>

          <div className="bg-zinc-900/70 rounded-lg p-4">
            <h3 className="text-[11px] font-bold text-red-400 uppercase mb-2">
              Saran Istirahat
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Matikan layar 1 jam sebelum tidur pukul 22:00 untuk memulihkan
              energi esok hari.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Insight */}
    <div className="col-span-1 lg:col-span-4">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
        {t.NewInsight}
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
