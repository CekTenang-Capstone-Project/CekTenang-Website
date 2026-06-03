import { useState } from "react";
import { createActivity } from "../../services/activityService";
import { initialActivityForm } from "./activityFormConstants";
import buildActivityPayload from "./buildActivityPayload";

const DRAFT_KEY = "activityDraft";

function useActivityForm(t) {
  const [form, setForm] = useState(() => {
    const draft = localStorage.getItem(DRAFT_KEY);
    if (!draft) {
      return initialActivityForm;
    }

    try {
      return {
        ...initialActivityForm,
        ...JSON.parse(draft),
      };
    } catch {
      localStorage.removeItem(DRAFT_KEY);
      return initialActivityForm;
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
    setError("");
    setMessage("");
    setShowAnalysis(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    try {
      const { error: hasError, message: responseMessage } = await createActivity(
        buildActivityPayload(form, "submitted"),
      );

      if (hasError) {
        setError(responseMessage);
        setIsSubmitting(false);
        return;
      }

      setMessage(responseMessage || t.ActivitySuccessMessage);
      setShowAnalysis(true);
      setForm((currentForm) => ({
        ...initialActivityForm,
        activityDate: currentForm.activityDate,
      }));
    } catch (error) {
      setError(error.message || t.ActivitySubmitErrorMessage || "Terjadi kesalahan saat mengirim data.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSaveDraft(event) {
    event.preventDefault();

    setIsSubmitting(true);

    const result = await createActivity(
      buildActivityPayload(form, "draft")
    );

    if (result.error) {
      setError(result.message);
    } else {
      setMessage("Draft berhasil disimpan");
    }

    setIsSubmitting(false);
  }

  function handleCloseAnalysis() {
    setShowAnalysis(false);
  }

  return {
    error,
    form,
    handleChange,
    handleSubmit,
    handleSaveDraft,
    handleCloseAnalysis,
    isSubmitting,
    message,
    showAnalysis,
  };
}

export default useActivityForm;
