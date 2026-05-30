import PropTypes from "prop-types";
import ActivityInput from "./ActivityInput";
import getInputFields from "./getInputFields";
import getRangeFields from "./getRangeFields";

function ActivityFormPanel({ error, form, isSubmitting, message, onChange, t }) {
  const inputFields = getInputFields(t);
  const rangeFields = getRangeFields(t, form);

  return (
    <section className="rounded-2xl bg-[#141414] p-5 md:p-7">
      <div className="mb-7">
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">
          {t.ActivityPageTitle}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
          {t.ActivityPageDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {inputFields.map((field) => (
          <ActivityInput
            key={field.name}
            field={field}
            value={form[field.name]}
            onChange={onChange}
          />
        ))}
      </div>

      <div className="mt-8 space-y-7 rounded-xl bg-zinc-900/70 p-5 md:p-7">
        {rangeFields.map((field) => (
          <ActivityInput
            key={field.name}
            field={field}
            value={form[field.name]}
            onChange={onChange}
          />
        ))}
      </div>

      <div className="mt-7">
        {error && <p className="mb-3 text-sm text-red-400">{error}</p>}
        {message && <p className="mb-3 text-sm text-emerald-400">{message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-14 w-full rounded-lg bg-gradient-to-r from-blue-300 to-blue-500 px-5 text-sm font-bold text-[#0b2846] transition hover:from-blue-200 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? t.ActivitySubmittingButton : t.ActivitySubmitButton}
        </button>
      </div>
    </section>
  );
}

ActivityFormPanel.propTypes = {
  error: PropTypes.string.isRequired,
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ActivityFormPanel;
