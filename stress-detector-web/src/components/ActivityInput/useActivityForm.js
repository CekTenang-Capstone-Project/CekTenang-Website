import { useState } from "react";
import { createActivity } from "../../services/activityService";
import { initialActivityForm } from "./activityFormConstants";
import buildActivityPayload from "./buildActivityPayload";

function useActivityForm(t) {
  const [form, setForm] = useState(initialActivityForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
    setError("");
    setMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    const { error: hasError, message: responseMessage } = await createActivity(
      buildActivityPayload(form),
    );

    if (hasError) {
      setError(responseMessage);
      setIsSubmitting(false);
      return;
    }

    setMessage(responseMessage || t.ActivitySuccessMessage);
    setForm((currentForm) => ({
      ...initialActivityForm,
      activityDate: currentForm.activityDate,
    }));
    setIsSubmitting(false);
  }

  return {
    error,
    form,
    handleChange,
    handleSubmit,
    isSubmitting,
    message,
  };
}

export default useActivityForm;
