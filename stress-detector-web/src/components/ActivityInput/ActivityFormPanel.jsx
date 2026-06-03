import PropTypes from "prop-types";
import ActivityInput from "./ActivityInput";
import getInputFields from "./getInputFields";
import getRangeFields from "./getRangeFields";

function getBadgeByValue(value, fieldName) {
  const score = Number(value) || 0;

  if (score <= 3) {
    return {
      label: fieldName === "moodScore" ? "Baik" : "Rendah",
      badgeClass: "bg-green-500/20 text-green-400",
    };
  }

  if (score <= 6) {
    return {
      label: "Sedang",
      badgeClass: "bg-yellow-500/20 text-yellow-400",
    };
  }

  if (score <= 8) {
    return {
      label: "Cukup Tinggi",
      badgeClass: "bg-orange-500/20 text-orange-400",
    };
  }

  return {
    label: fieldName === "moodScore" ? "Sangat Baik" : "Sangat Tinggi",
    badgeClass: "bg-cyan-500/20 text-cyan-400",
  };
}

function ActivityFormPanel({ error, form, isSubmitting, message, onChange, onSaveDraft, t }) {
  const inputFields = getInputFields(t);
  const rangeFields = getRangeFields(t, form);

  const mainFields = inputFields.filter((field) =>
    ["sleepHours", "studyHours", "physicalActivityMinutes"].includes(field.name),
  );
  const digitalFields = inputFields.filter((field) =>
    ["screenTimeHours", "socialMediaHours"].includes(field.name),
  );

  return (
    <section className="w-full space-y-6 rounded-2xl bg-[#141414] p-5 md:p-7">
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Aktivitas Harian</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Lengkapi data aktivitas Anda untuk mendapatkan prediksi stres yang lebih akurat.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mainFields.map((field) => (
            <div
              key={field.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    {field.label}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">{field.description}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-800 text-lg">
                  {field.icon}
                </div>
              </div>

              <div className="mt-6">
                <ActivityInput
                  field={field}
                  value={form[field.name]}
                  onChange={onChange}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Aktivitas Digital</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Catat durasi penggunaan layar dan media sosial Anda.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {digitalFields.map((field) => (
            <div
              key={field.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    {field.label}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">{field.description}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-800 text-lg">
                  {field.icon}
                </div>
              </div>

              <div className="mt-6">
                <ActivityInput
                  field={field}
                  value={form[field.name]}
                  onChange={onChange}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Kondisi Akademik & Personal
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Geser slider sesuai kondisi Anda kemarin.
          </p>
        </div>

        <div className="space-y-6">
          {rangeFields.map((field) => {
            const { label, badgeClass } = getBadgeByValue(form[field.name], field.name);

            return (
              <div key={field.name} className="space-y-4 rounded-2xl bg-[#0F1117] p-5">
                <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] items-start">
                  <div>
                    <p className="text-sm font-semibold text-white">{field.label}</p>
                    <p className="mt-1 text-xs text-zinc-400">{field.description}</p>
                  </div>

                  <div className="flex items-center gap-3 justify-start sm:justify-end">
                    <span className="text-sm font-bold text-white">{form[field.name]}/10</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
                      {label}
                    </span>
                  </div>
                </div>

                <input
                  name={field.name}
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={form[field.name]}
                  onChange={onChange}
                  className="h-1 w-full cursor-pointer accent-blue-300"
                />

                <div className="flex justify-between text-[11px] uppercase tracking-widest text-zinc-500">
                  <span>{field.minLabel}</span>
                  <span>{field.maxLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="mb-4">
          <p className="text-lg font-semibold text-white">Catatan Harian</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Ceritakan secara singkat bagaimana hari Anda kemarin.
          </p>
        </div>

        <textarea
          name="dailyNote"
          value={form.dailyNote}
          onChange={onChange}
          placeholder="Contoh: Hari ini saya merasa cukup lelah karena banyak tugas menumpuk, tidur kurang, dan sulit fokus saat belajar."
          className="min-h-45 w-full resize-none rounded-2xl border border-zinc-800 bg-[#0F1117] p-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-blue-300"
          maxLength={1000}
        />

        <div className="mt-3 text-right text-xs text-zinc-500">
          {form.dailyNote.length}/1000
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          {message && <p className="text-sm text-emerald-400">{message}</p>}
        </div>

        <div className="flex w-full gap-3 sm:w-auto">
          <button
            type="button"
            onClick={onSaveDraft}
            className="h-14 flex-1 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:border-zinc-600 hover:bg-zinc-800 sm:flex-none"
          >
            {t.ActivitySaveDraftButton}
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 flex-1 rounded-2xl bg-linear-to-r from-blue-300 to-blue-500 px-5 text-sm font-bold text-[#0b2846] transition hover:from-blue-200 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
          >
            {isSubmitting ? t.ActivitySubmittingButton : t.ActivitySubmitButton}
          </button>
        </div>
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
  onSaveDraft: PropTypes.func.isRequired,
  t: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ActivityFormPanel;
