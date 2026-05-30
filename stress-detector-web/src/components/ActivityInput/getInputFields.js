function getInputFields(t) {
  return [
    {
      name: "sleepHours",
      label: t.ActivitySleepHoursTitle,
      placeholder: t.ActivitySleepPlaceholder,
      step: "0.1",
    },
    {
      name: "physicalActivityMinutes",
      label: t.ActivityPhysicalActivityTitle,
      placeholder: t.ActivityPhysicalActivityPlaceholder,
    },
    {
      name: "studyHours",
      label: t.ActivityStudyHoursTitle,
      placeholder: t.ActivityHourPlaceholder,
      step: "0.1",
    },
    {
      name: "screenTimeHours",
      label: t.ActivityScreenTimeTitle,
      placeholder: t.ActivityHourPlaceholder,
      step: "0.1",
    },
    {
      name: "socialMediaHours",
      label: t.ActivitySocialMediaTitle,
      placeholder: t.ActivityHourPlaceholder,
      step: "0.1",
      className: "md:col-span-2",
    },
  ];
}

export default getInputFields;
