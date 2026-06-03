import { useState, createContext, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  id: {
    // General Translate
    Senin: "Sen",
    Selasa: "Sel",
    Rabu: "Rab",
    Kamis: "Kam",
    Jumat: "Jum",
    Sabtu: "Sab",
    Minggu: "Ming",
    HourText: "jam",
    LowText: "Rendah",
    MediumText: "Sedang",
    HighText: "Tinggi",
    DeadlinePressureTitle: "Tekanan Deadline",
    PhysicalActivityTitle: "Aktivitas Fisik",
    MoodScoreTitle: "Skor Suasana Hati",
    FatigueLevelTitle: "Tingkat Kelelahan",
    NewInsight: "Rekomendasi untuk Anda",

    // LeftPanel
    Heading1: "Analisis Tingkat Stres Berbasis AI",
    Heading2: "Untuk Kesehatan Mental Anda.",
    Deskripsi: "Pantau kondisi mental Anda melalui evaluasi aktivitas dan kebiasaan harian menggunakan teknologi Artificial Intelligence secara real-time.",
    Subheading1: "Cek Stress Harian",
    Subdeskripsi1: "AI menganalisis jawaban questionnaire harian untuk memperkirakan tingkat stres secara cepat dan akurat.",
    Subheading2: "Laporan & Insight Personal",
    Subdeskripsi2: "Dapatkan ringkasan kondisi stres serta rekomendasi harian untuk membantu menjaga kesehatan mental Anda",

    // Register Pages
    Create: "Buat Akun",
    Form: "Silakan lengkapi formulir di bawah ini.",
    LabelName: "Nama Lengkap",
    InputName: "Masukan Nama Anda",
    InputEmail: "Masukan Email Anda",
    LabelPassword: "Kata Sandi",
    LabelConfirmPassword: "Konfirmasi Kata Sandi",
    SubmitRegister: "Daftar Sekarang",
    LabelLogin: "Sudah Punya Akun?",
    LinkLogin: "Masuk Di sini",
    Google: "Lanjut Dengan Google",

    // Login Pages
    Login: "Masuk",
    LabelRegister: "Belum punya akun?",
    LinkRegister: "Daftar",
    SubmitLogin: "Masuk Sekarang",
    ResetPassword: "Lupa Password",

    // Reset Password Pages
    HeadingResetPassword: "Lupa Kata Sandi?",
    DeskripsiResetPassword: "Masukkan email yang terdaftar untuk menerima instruksi reset kata sandi.",
    ButtonResetPassword: "Kirim Tautan Pemulih",
    BackToLogin: "Kembali ke Login",

    // New Password Pages
    HeadingNewPassword: "Buat Kata Sandi Baru",
    DeskripsiNewPassword: "Silakan masukkan kata sandi baru untuk akun Anda.",
    ButtonNewPassword: "Perbarui Kata Sandi",
    LabelNewPassword: "Kata Sandi Baru",
    LabelConfirmNewPassword: "Konfirmasi Kata Sandi Baru" ,

    // Sidebar
    ActSdbr: "Catatan Aktivitas",
    CekStresSdbr: "Insights & Rekomendasi",
    ReqomendationSdbr: "Rekomendasi",
    ProfileSdbr: "Profile Saya",
    StressCheck: "Cek Stres Baru",
    LogoutSdbr: "Keluar",

    // Catat Aktivitas Pages
    ActivityPageTitle: "Input Data Aktivitas",
    ActivityPageDescription: "Lengkapi data di bawah untuk analisis tingkat stres yang lebih mendalam dari sistem AI kami.",
    ActivitySleepHoursTitle: "Jam Tidur",
    ActivitySleepPlaceholder: "Contoh: 7.5",
    ActivityPhysicalActivityPlaceholder: "Menit",
    ActivityStudyHoursTitle: "Jam Belajar",
    ActivityScreenTimeTitle: "Screen Time",
    ActivitySocialMediaTitle: "Penggunaan Media Sosial",
    ActivityAssignmentLoadTitle: "Beban Tugas",
    ActivityLowLabel: "Rendah",
    ActivityExtremeLabel: "Ekstrem",
    ActivityRelaxedLabel: "Santai",
    ActivityUrgentLabel: "Mendesak",
    ActivityFreshLabel: "Segar",
    ActivityExhaustedLabel: "Kelelahan Total",
    ActivityBadLabel: "Buruk",
    ActivityVeryGoodLabel: "Sangat Baik",
    ActivityQuiteHighStatus: "Cukup Tinggi",
    ActivitySubmitButton: "Simpan & Prediksi",
    ActivitySubmittingButton: "Menyimpan...",
    ActivitySaveDraftButton: "Simpan Draft",
    ActivityDraftSavedMessage: "Draft berhasil disimpan.",
    ActivitySuccessMessage: "Aktivitas berhasil dikirim.",
    ActivityJournalHeader: "Jurnal Untuk Aktivitas Tanggal",
    ActivityJournalDescription: "Data ini akan digunakan untuk memprediksi skor stres, menghasilkan insight, dan rekomendasi.",
    ActivityReviewLabel: "Pratinjau Analisis",
    ActivityTodayStatusTitle: "Status Hari Ini",
    ActivityAnalysisTag: "Analisis",
    ActivityStressRiskHigh: "Risiko Stres Tinggi",
    ActivityStressSummary: "\"Berdasarkan input terbaru, tingkat stres Anda meningkat akibat tekanan deadline dan screen time berlebih.\"",
    ActivityMainContributorTitle: "Kontributor Utama",
    ActivitySleepQualityContributor: "Kualitas Tidur",
    ActivityAiRecommendationTitle: "AI Recommendations",
    ActivityAiRecommendationOne: "Luangkan waktu 15 menit untuk meditasi atau berjalan kaki tanpa gadget guna menurunkan level fatigue.",
    ActivityAiRecommendationTwo: "Targetkan tidur sebelum jam 22:30 malam ini untuk memulihkan skor suasana hati besok pagi.",
    ActivityQuickTipsTitle: "Tips Cepat",
    ActivityQuickTipsDescription: "Pengurangan social media usage sebanyak 20% dapat memperbaiki fokus belajar Anda.",

    // Dashboard Pages
    DashboardGreeting: "Selamat pagi, ",
    DashboardDateLocale: "id-ID",
    LastJournalSummaryTitle: "Ringkasan Jurnal Terakhir",
    PositiveText: "Positif",
    SocialMediaTitle: "Media Sosial",
    StressScoreTitle: "Skor Stres",
    StressTrendTitle: "Tren stres 7 hari",
    AverageText: "Rata-rata",
    AcademicConditionTitle: "Kondisi Akademik",
    StudyTimeTitle: "Waktu Belajar",
    TaskLoadTitle: "Beban Tugas",
    LastNightSleepTitle: "Tidur (Semalam)",
    MinuteText: "Mnt",
    RecommendationDesc: "Berdasarkan analisis terbaru, peningkatan stres Anda sebesar 12% berkorelasi kuat dengan tekanan deadline yang mencapai 90% dan beban tugas yang tinggi. Meskipun mood score Anda tetap positif (8.4), level kelelahan mulai meningkat karena kurang tidur (5.5 jam).",
    StudySuggestionTitle: "Saran Belajar",
    StudySuggestionDesc: "Gunakan teknik Pomodoro untuk 3 jam ke depan guna mengurangi beban kognitif tugas.",
    PhysicalSuggestionTitle: "Saran Fisik",
    PhysicalSuggestionDesc: "Lakukan peregangan 10 menit sekarang untuk menurunkan level kortisol akibat screen time.",
    RestSuggestionTitle: "Saran Istirahat",
    RestSuggestionDesc: "Matikan layar 1 jam sebelum tidur pukul 22:00 untuk memulihkan energi esok hari.",
    TaskAnalysisTitle: "Analisis Beban Tugas",
    TaskAnalysisDesc: "Peningkatan tekanan deadline minggu ini menyebabkan durasi belajar meningkat 2 jam, namun efisiensi menurun karena kelelahan.",
    EmotionalResilienceTitle: "Ketahanan Emosional",
    EmotionalResilienceDesc: "Mood score Anda stabil di 8.4 berkat aktivitas fisik rutin (45 mnt). Ini adalah kunci Anda tetap tenang menghadapi ujian.",

    // prediksi stress
    PredictionPageTitle: "Prediksi Stres",
    PredictionTodayScoreLabel: "Skor Hari Ini",
    PredictionAverageLabel: "Rata-rata 7 Hari",
    PredictionLowestLabel: "Skor Terendah",
    PredictionHighestLabel: "Skor Tertinggi",
    PredictionTrendTitle: "Tren Prediksi 7 Hari",
    PredictionWeeklyAnalysisTitle: "Analisis Mingguan",
    PredictionWeeklyAnalysisDescription: "Lanjutan stres terdeteksi pada hari Sabtu dan Minggu. Pola ini menunjukkan bahwa kesehatan mental Anda sering terganggu dengan apakah evakuasi mingguan dan persiapan awal minggu.",
    PredictionModuleSuggestion: "Modifikasi Saran",
    PredictionHistoryTitle: "Riwayat Prediksi",
    PredictionHistoryTableDate: "Tanggal",
    PredictionHistoryTableScore: "Skor",
    PredictionHistoryTableLevel: "Level",
    PredictionHistoryTableActivity: "Aktivitas Terkait",
    PredictionExportPdf: "Export PDF",
    PredictionFilterData: "Filter Data",
    PredictionLastUpdate: "Pembaruan Terakhir",

    // Profile Pages
    ProfilePageTitle: "Profile Saya",
    AccountProfileLabel: "Account Profile",
    EditPhotoButton: "Edit Foto",
    AccountInformationTitle: "Informasi Akun",
    FullNameLabel: "Full Name",
    EmailAddressLabel: "Email Address",
    UpdateInformationButton: "Update Information",
    AccountStatisticsTitle: "Statistik Akun",
    TotalAnalysisEntriesTitle: "Total Analysis Entries",
    AverageStressScoreTitle: "Average Stress Score",
    OptimalClinicalRangeText: "Optimal clinical range detected",
    ActiveStreakTitle: "Active Streak",
    ChangePasswordTitle: "Ubah Password",
    CurrentPasswordLabel: "Current Password",
    NewPasswordLabel: "New Password",
    ConfirmPasswordLabel: "Confirm Password",
    ResetPasswordButton: "Reset Password",
    DangerZoneTitle: "Danger Zone",
    DangerZoneDescription: "Deactivating your account will permanently delete all clinical stress history and data insights.",
    DeactivateAccountButton: "Deactivate Account",

  },


  en: {
     // General Translate
    Senin: "Mon",
    Selasa: "Tue",
    Rabu: "Wed",
    Kamis: "Thu",
    Jumat: "Fri",
    Sabtu: "Sat",
    Minggu: "Sun",
    HourText: "hours",
    LowText: "Low",
    HighText: "High",
    DeadlinePressureTitle: "Deadline Pressure",
    PhysicalActivityTitle: "Physical Activity",
    MoodScoreTitle: "Mood Score",
    FatigueLevelTitle: "Fatigue Level",
    NewInsight: "Recommendation for you",

    // LeftPanel
    Heading1: "AI-Based Stress Level Analysis",
    Heading2: "For Your Mental Health.",
    Deskripsi: "Monitor your mental state through real-time evaluation of daily activities and habits using Artificial Intelligence technology.",
    Subheading1: "Daily Stress Check",
    Subdeskripsi1: "AI analyzes daily questionnaire responses to quickly and accurately estimate stress levels.",
    Subheading2: "Personal Reports & Insights",
    Subdeskripsi2: "Get a summary of stress conditions and daily recommendations to help maintain your mental health.",

    //Register Pages
    Create: "Create Account",
    Form: "Please complete the form below.",
    LabelName: "Full Name",
    InputName: "Enter Your Name",
    InputEmail: "Enter Your Email",
    LabelPassword: "Password",
    LabelConfirmPassword: "Confirm Password",
    SubmitRegister: "Register Now",
    LabelLogin: "Already Have an Account?",
    LinkLogin: "Login here",
    Google: "Continue With Google",

    // Login Pages
    Login: "Login",
    LabelRegister: "Don't have an account?",
    LinkRegister: "Register",
    SubmitLogin: "Login Now",
    ResetPassword: "Forgot Password",

    // Reset Password Pages
    HeadingResetPassword: "Forgot Password?",
    DeskripsiResetPassword: "Enter your registered email to receive password reset instructions.",
    ButtonResetPassword: "Send Recovery Link",
    BackToLogin: "Return to Login",

    // New Password Pages
    HeadingNewPassword: "Create New Password",
    DeskripsiNewPassword: "Please enter a new password for your account.",
    ButtonNewPassword: "Update Password",
    LabelNewPassword: "New Password",
    LabelConfirmNewPassword: "Confirm New Password",

    // Sidebar
    ActSdbr: "Activity Log",
    CekStresSdbr: "Insights & Recommendations",
    ReqomendationSdbr: "Recommendation",
    ProfileSdbr: "My Profile",
    StressCheck: "New Stress Check",
    LogoutSdbr: "Logout",

    // Catat Aktivitas Pages
    ActivityPageTitle: "Input Activity Data",
    ActivityPageDescription: "Complete the data below for a deeper stress-level analysis from our AI system.",
    ActivitySleepHoursTitle: "Sleep Hours",
    ActivitySleepPlaceholder: "Example: 7.5",
    ActivityPhysicalActivityPlaceholder: "Minutes",
    ActivityStudyHoursTitle: "Study Hours",
    ActivityScreenTimeTitle: "Screen Time (Hours)",
    ActivitySocialMediaTitle: "Social Media Usage (Hours)",
    ActivityAssignmentLoadTitle: "Assignment Load",
    ActivityLowLabel: "Low",
    ActivityExtremeLabel: "Extreme",
    ActivityRelaxedLabel: "Relaxed",
    ActivityUrgentLabel: "Urgent",
    ActivityFreshLabel: "Fresh",
    ActivityExhaustedLabel: "Fully Exhausted",
    ActivityBadLabel: "Bad",
    ActivityVeryGoodLabel: "Very Good",
    ActivityQuiteHighStatus: "Quite High",
    ActivitySubmitButton: "Save & Predict",
    ActivitySubmittingButton: "Saving...",
    ActivitySuccessMessage: "Activity submitted successfully.",
    ActivityJournalHeader: "Journal Entry for Activity Date",
    ActivityJournalDescription: "This data will be used to predict stress score, generate insights, and recommendations.",
    ActivityReviewLabel: "Analysis Preview",
    ActivityTodayStatusTitle: "Today's Status",
    ActivityStressRiskHigh: "High Stress Risk",
    ActivityStressSummary: "\"Based on your latest input, your stress level increased due to deadline pressure and excessive screen time.\"",
    ActivityMainContributorTitle: "Main Contributors",
    ActivitySleepQualityContributor: "Sleep Quality",
    ActivityAiRecommendationTitle: "AI Recommendations",
    ActivityAiRecommendationOne: "Take 15 minutes to meditate or walk without gadgets to lower your fatigue level.",
    ActivityAiRecommendationTwo: "Aim to sleep before 10:30 PM tonight to restore tomorrow morning's mood score.",
    ActivityQuickTipsTitle: "Quick Tips",
    ActivityQuickTipsDescription: "Reducing social media usage by 20% can improve your study focus.",

    // Dashboard Page
    DashboardGreeting: "Good Morning, ",
    DashboardDateLocale: "en-US",
    LastJournalSummaryTitle: "Latest Journal Summary",
    PositiveText: "Positive",
    MediumText: "Medium",
    SocialMediaTitle: "Social Media",
    StressScoreTitle: "Stress Score",
    StressTrendTitle: "7-Day Stress Trend",
    AverageText: "Average",
    AcademicConditionTitle: "Academic Condition",
    StudyTimeTitle: "Study Time",
    TaskLoadTitle: "Task Load",
    
    LastNightSleepTitle: "Sleep (Last Night)",
    MinuteText: "Min",
    RecommendationDesc: "Based on the latest analysis, your stress level has increased by 12%, strongly correlated with deadline pressure reaching 90% and a high task workload. Although your mood score remains positive (8.4), fatigue levels are starting to rise due to insufficient sleep (5.5 hours).",
    StudySuggestionTitle: "Study Recommendation",
    StudySuggestionDesc: "Use the Pomodoro technique for the next 3 hours to reduce cognitive workload.",
    PhysicalSuggestionTitle: "Physical Recommendation",
    PhysicalSuggestionDesc: "Take a 10-minute stretching break now to lower cortisol levels caused by screen time.",
    RestSuggestionTitle: "Rest Recommendation",
    RestSuggestionDesc: "Turn off screens 1 hour before your 10:00 PM bedtime to restore energy for tomorrow.",
    TaskAnalysisTitle: "Task Load Analysis",
    TaskAnalysisDesc: "The increase in deadline pressure this week has extended your study duration by 2 hours, but efficiency has decreased due to fatigue.",
    EmotionalResilienceTitle: "Emotional Resilience",
    EmotionalResilienceDesc: "Your mood score remains stable at 8.4 thanks to regular physical activity (45 min). This is a key factor in helping you stay calm during exams.",
   
    // prediksi stress
    PredictionPageTitle: "Stress Prediction",
    PredictionTodayScoreLabel: "Today's Score",
    PredictionAverageLabel: "7-Day Average",
    PredictionLowestLabel: "Lowest Score",
    PredictionHighestLabel: "Highest Score",
    PredictionTrendTitle: "7-Day Prediction Trend",
    PredictionWeeklyAnalysisTitle: "Weekly Analysis",
    PredictionWeeklyAnalysisDescription: "Continued stress detected on Saturday and Sunday. This pattern shows that your mental health is often disrupted by weekly evaluations and early week preparations.",
    PredictionModuleSuggestion: "Modify Suggestions",
    PredictionHistoryTitle: "Prediction History",
    PredictionHistoryTableDate: "Date",
    PredictionHistoryTableScore: "Score",
    PredictionHistoryTableLevel: "Level",
    PredictionHistoryTableActivity: "Related Activity",
    PredictionExportPdf: "Export PDF",
    PredictionFilterData: "Filter Data",
    PredictionLastUpdate: "Last Update",

    // Profile Pages
    ProfilePageTitle: "My Profile",
    AccountProfileLabel: "Account Profile",
    EditPhotoButton: "Edit Photo",
    AccountInformationTitle: "Account Information",
    FullNameLabel: "Full Name",
    EmailAddressLabel: "Email Address",
    UpdateInformationButton: "Update Information",
    AccountStatisticsTitle: "Account Statistics",
    TotalAnalysisEntriesTitle: "Total Analysis Entries",
    AverageStressScoreTitle: "Average Stress Score",
    OptimalClinicalRangeText: "Optimal clinical range detected",
    ActiveStreakTitle: "Active Streak",
    ChangePasswordTitle: "Change Password",
    CurrentPasswordLabel: "Current Password",
    NewPasswordLabel: "New Password",
    ConfirmPasswordLabel: "Confirm Password",
    ResetPasswordButton: "Reset Password",
    DangerZoneTitle: "Danger Zone",
    DangerZoneDescription: "Deactivating your account will permanently delete all clinical stress history and data insights.",
    DeactivateAccountButton: "Deactivate Account",

  },

  // Recommendations (additional keys)
  rec: {
    RecommendationPageTitle: "Your Recommendations",
    RecommendationSubtitle: "Latest analysis shows accumulating task load combined with low HRV. We've adjusted your study strategy for today.",
    RecommendationHeroTitle: "AI Personal Coach",
    RecommendationHeroGreeting: "Hello Andi, based on 3 upcoming deadlines this week and your resting heart rate increasing by 5 bpm, you are currently in Academic Distress.",
    RecommendationHeroBullets: [
      "Prioritize Calculus tasks today for only 90 minutes. Don't force yourself to finish everything at once.",
      "Use Deep Work technique between 09:00 - 11:00. This is your best cognitive window today.",
      "Avoid social media entirely before 17:00 to prevent dopamine fatigue."
    ],
    RecommendationHeroButton: "Provide Detailed Strategy",

    PriorityTodayTitle: "Today's Priorities",
    PriorityViewAll: "View full schedule",

    LongTermTitle: "Long-term Suggestions",
    SuggestionTimeBlockingTitle: "Time Blocking Strategy",
    SuggestionTimeBlockingTag: "Productivity",
    SuggestionTimeBlockingDesc: "Use your calendar to separate study, rest, and social time rigidly to reduce mental confusion.",
    SuggestionCognitiveTitle: "Cognitive Relaxation Technique",
    SuggestionCognitiveTag: "Mental",
    SuggestionCognitiveDesc: "Do 5 minutes of positive visualization every time you start a difficult task.",
    SuggestionCaffeineTitle: "Academic Caffeine Management",
    SuggestionCaffeineTag: "Health",
    SuggestionCaffeineDesc: "Limit coffee only before 12 PM. Excessive caffeine in the afternoon harms your sleep quality."
  },
};

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'id';
  });

  function toggleLanguage() {
    setLanguage((prev) => {
      const next = prev === 'id' ? 'en' : 'id';
      localStorage.setItem('language', next);
      return next;
    });
  }

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  return useContext(LanguageContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { LanguageContext, LanguageProvider, useLanguage };