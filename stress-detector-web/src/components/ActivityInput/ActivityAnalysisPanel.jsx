import PropTypes from "prop-types";
import ContributorBar from "./ContributorBar";
import getNumericValue from "./getNumericValue";
import getStressIndex from "./getStressIndex";

function ActivityAnalysisPanel({ form, t }) {
  const stressIndex = getStressIndex(form);

  return (
    <aside className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-800 to-red-950/60 p-6 md:p-7">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
              {t.ActivityReviewLabel}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              {t.ActivityTodayStatusTitle}
            </h2>
          </div>
          <span className="rounded-full bg-red-500/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-300">
            Live Sync
          </span>
        </div>

        <div className="text-center">
          <div className="flex items-start justify-center gap-2">
            <span className="text-7xl font-extrabold text-red-400">
              {stressIndex}
            </span>
            <span className="mt-4 text-xl font-bold text-zinc-300">%</span>
          </div>
          <p className="mt-2 text-xl font-bold text-red-400">
            {t.ActivityStressRiskHigh}
          </p>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
            {t.ActivityStressSummary}
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            {t.ActivityMainContributorTitle}
          </h3>
          <div className="space-y-4">
            <ContributorBar
              label={t.ActivityDeadlinePressureContributor}
              value={32}
              width={`${Math.max(24, getNumericValue(form.deadlinePressure) * 10)}%`}
            />
            <ContributorBar
              label={t.ActivitySleepQualityContributor}
              value={15}
              width={`${Math.max(24, Math.max(0, 10 - getNumericValue(form.sleepHours)) * 10)}%`}
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-[#171717] p-5 md:p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-sm font-bold text-blue-300">AI</span>
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
            {t.ActivityAiRecommendationTitle}
          </h2>
        </div>

        <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
          <div className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-300">
              1
            </span>
            <p>{t.ActivityAiRecommendationOne}</p>
          </div>
          <div className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-bold text-blue-300">
              2
            </span>
            <p>{t.ActivityAiRecommendationTwo}</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-zinc-800 p-5 md:p-6">
        <div className="flex gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-300">
            TIP
          </span>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">
              {t.ActivityQuickTipsTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {t.ActivityQuickTipsDescription}
            </p>
          </div>
        </div>
      </section>
    </aside>
  );
}

ActivityAnalysisPanel.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  t: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ActivityAnalysisPanel;
