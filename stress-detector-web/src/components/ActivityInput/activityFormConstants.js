const initialActivityForm = {
  activityDate: new Date().toISOString().slice(0, 10),
  sleepHours: "",
  studyHours: "",
  screenTimeHours: "",
  socialMediaHours: "",
  physicalActivityMinutes: "",
  caffeineIntakeMg: "80",
  moodScore: "8",
  fatigueLevel: "7",
  assignmentLoad: "5",
  deadlinePressure: "8",
  socialInteractionScore: "7",
  financialWorryScore: "3",
  healthConditionScore: "8",
};

const activityNumberFields = [
  "sleepHours",
  "studyHours",
  "screenTimeHours",
  "socialMediaHours",
  "physicalActivityMinutes",
  "caffeineIntakeMg",
  "moodScore",
  "fatigueLevel",
  "assignmentLoad",
  "deadlinePressure",
  "socialInteractionScore",
  "financialWorryScore",
  "healthConditionScore",
];

export { activityNumberFields, initialActivityForm };
