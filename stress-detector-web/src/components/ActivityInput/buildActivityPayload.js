import { activityNumberFields } from "./activityFormConstants";

function buildActivityPayload(form) {
  return {
    ...form,
    ...Object.fromEntries(
      activityNumberFields.map((fieldName) => [fieldName, Number(form[fieldName] || 0)]),
    ),
  };
}

export default buildActivityPayload;
