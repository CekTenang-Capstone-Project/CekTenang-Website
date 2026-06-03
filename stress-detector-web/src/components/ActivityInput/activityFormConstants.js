const initialActivityForm = {
  activityDate: new Date().toISOString().slice(0, 10),
  sleepHours: "",
  studyHours: "",
  screenTimeHours: "",
  socialMediaHours: "",
  physicalActivityMinutes: "",
  dailyNote: "",
  caffeineIntakeMg: "0",
  moodScore: "0",
  fatigueLevel: "0",
  assignmentLoad: "0",
  deadlinePressure: "0",
  socialInteractionScore: "0",
  financialWorryScore: "0",
  healthConditionScore: "0",
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
