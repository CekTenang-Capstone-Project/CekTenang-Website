import Layout from "../../layouts/Layout";
import ActivityAnalysisPanel from "../components/ActivityInput/ActivityAnalysisPanel";
import ActivityFormPanel from "../components/ActivityInput/ActivityFormPanel";
import useActivityForm from "../components/ActivityInput/useActivityForm";
import { useLanguage } from "../contexts/LanguageContext";

function ActivitiesPage() {
  const { t } = useLanguage();
  const { error, form, handleChange, handleSubmit, isSubmitting, message } =
    useActivityForm(t);

  return (
    <Layout title="Aktivitas" name="User" role="User">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(330px,0.7fr)]"
      >
        <ActivityFormPanel
          error={error}
          form={form}
          isSubmitting={isSubmitting}
          message={message}
          onChange={handleChange}
          t={t}
        />
        <ActivityAnalysisPanel form={form} t={t} />
      </form>
    </Layout>
  );
}

export default ActivitiesPage;
