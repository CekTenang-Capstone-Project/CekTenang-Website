import Layout from "../../layouts/Layout";
import ActivityAnalysisPanel from "../components/ActivityInput/ActivityAnalysisPanel";
import ActivityFormPanel from "../components/ActivityInput/ActivityFormPanel";
import useActivityForm from "../components/ActivityInput/useActivityForm";
import { useLanguage } from "../contexts/LanguageContext";

function formatJournalDate(dateValue, locale) {
  if (!dateValue) {
    return "";
  }
  return new Date(dateValue).toLocaleDateString(locale || "id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function LogActivitiesPage() {
  const { t } = useLanguage();
  const { error, form, handleChange, handleSubmit, handleSaveDraft, isSubmitting, message, showAnalysis } = useActivityForm(t);
  const journalDate = formatJournalDate(form.activityDate, t.DashboardDateLocale);

  return (
    <Layout title="Catat Data Aktivitas" name="User" role="User">
      <div className="space-y-6 max-w-7xl mx-auto bg-[#0B0B0F]">
        <section className="rounded-2xl bg-[#141414] p-5 md:p-7">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)]">
            <div>
              <h1 className="text-3xl font-extrabold text-white md:text-4xl">
                {t.ActivityPageTitle}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                {t.ActivityPageDescription}
              </p>
            </div>
          </div>
        </section>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900 to-zinc-900/70 p-6">
        <div className="flex items-start gap-4">
          
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-zinc-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10m-13 9h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v11a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-white">
              {t.ActivityJournalHeader}
              <span className="ml-2 text-blue-300">
                {journalDate}
              </span>
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              {t.ActivityJournalDescription}
            </p>
          </div>
        </div>
      </div>

        <form
          onSubmit={handleSubmit}
          className="gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.6fr)]"
        >
          <ActivityFormPanel
            error={error}
            form={form}
            isSubmitting={isSubmitting}
            message={message}
            onChange={handleChange}
            onSaveDraft={handleSaveDraft}
            t={t}
          />
          <ActivityAnalysisPanel form={form} t={t} visible={showAnalysis} />
        </form>
      </div>
    </Layout>
  );
}

export default LogActivitiesPage;
