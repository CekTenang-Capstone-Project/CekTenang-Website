import Layout from "../../layouts/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import StressChart from "../components/StresChart/StressChart";
import PredictionStats from "../components/PredictionStats/PredictionStats";
import PredictionHistory from "../components/PredictionHistory/PredictionHistory";

function PredictionPage() {
  const { t } = useLanguage();

  const sekarang = new Date();
  const formatTanggal = sekarang.toLocaleDateString(t.DashboardDateLocale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Layout title={t.PredictionPageTitle} name="User" role="User">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        
        {/* Greeting */}
        <div className="col-span-1 lg:col-span-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            {t.PredictionPageTitle}
          </h1>
          <p className="text-zinc-400 mt-1 text-sm md:text-base">
            {formatTanggal}
          </p>
        </div>

        {/* Statistics Cards */}
        <PredictionStats t={t} />

        {/* Chart */}
        <div className="col-span-1 lg:col-span-3">
          <StressChart />
        </div>

        {/* Weekly Analysis Panel */}
        <div className="bg-zinc-800 rounded-2xl p-5 md:p-6">
          <h2 className="text-lg md:text-base font-semibold text-white mb-4">
            {t.PredictionWeeklyAnalysisTitle}
          </h2>
          
          <div className="space-y-4">
            <div className="bg-zinc-900/50 rounded-lg p-3 border-l-4 border-blue-400">
              <p className="text-zinc-300 text-sm leading-relaxed">
                {t.PredictionWeeklyAnalysisDescription}
              </p>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
              {t.PredictionModuleSuggestion}
            </button>
          </div>
        </div>

        {/* Prediction History */}
        <div className="col-span-1 lg:col-span-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {t.PredictionHistoryTitle}
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors">
                {t.PredictionExportPdf}
              </button>
              <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors">
                {t.PredictionFilterData}
              </button>
            </div>
          </div>

          <PredictionHistory t={t} />
        </div>

      </div>
    </Layout>
  );
}

export default PredictionPage;
