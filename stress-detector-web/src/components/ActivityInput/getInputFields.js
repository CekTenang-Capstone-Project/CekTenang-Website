function getInputFields(t) {
  return [
    {
      name: "sleepHours",
      label: t.ActivitySleepHoursTitle,
      placeholder: t.ActivitySleepPlaceholder,
      description: "Total jam tidur semalam",
      step: "0.1",
      suffix: "JAM",
      icon: "💤",
    },
    {
      name: "studyHours",
      label: t.ActivityStudyHoursTitle,
      placeholder: t.HourText,
      description: "Total waktu belajar di luar kelas",
      step: "0.1",
      suffix: "JAM",
      icon: "📚",
    },
    {
      name: "physicalActivityMinutes",
      label: "Aktivitas Fisik",
      placeholder: t.ActivityPhysicalActivityPlaceholder,
      description: "Durasi aktivitas fisik",
      suffix: "MENIT",
      icon: "🏃",
    },
    {
      name: "screenTimeHours",
      label: t.ActivityScreenTimeTitle,
      placeholder: t.HourText,
      description: "Total waktu layar di luar kebutuhan belajar",
      step: "0.1",
      suffix: "JAM",
      icon: "🖥️",
    },
    {
      name: "socialMediaHours",
      label: t.ActivitySocialMediaTitle,
      placeholder: t.HourText,
      description: "Waktu di media sosial (Instagram, TikTok, X, dll.)",
      step: "0.1",
      suffix: "JAM",
      icon: "📱",
    },
  ];
}

export default getInputFields;
