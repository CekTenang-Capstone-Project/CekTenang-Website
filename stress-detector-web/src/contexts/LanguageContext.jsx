import { useState, createContext, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  id: {
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
    CekStresSdbr: "Cek Stres",
    ReqomendationSdbr: "Rekomendasi",
    ProfileSdbr: "Profile Saya",
    LogoutSdbr: "Keluar",

    // Catat Aktivitas Pages
    HeadlineCatatanAktivitas: "Catat aktivitas harian",
    DeskripsiCatatanAktivitas: "Data akurat membantu algoritma kami memberikan prediksi stres yang lebih presisi untuk hari ini.",
    JamTidurTitle: "Jam Tidur",
    JamPlaceholder: "Jam",
    ScreenTimeTitle: "Waktu Penggunaan Gadget",
    JamKerjaTitle: "Jam Kerja",
    AsupanKafeinTitle: "Asupan Kafein",
    KafeinPlaceholder: "Cangkir",
    OlahragaTitle: "Olahraga",
    KelelahanTitle: "Kelelahan",
    SuasanaHatiTitle: "Suasana Hati",
    BtnSimpanPrediksi: "Simpan & Prediksi Stres",
    PreviewPrediksiTitle: "Pratinjau Prediksi",
    StatusHariIniTitle: "Status Hari Ini",
    StressTinggiText: "Stres Tinggi",
    PrediksiDesk: "Prediksi berdasarkan tren aktivitas 24 jam terakhir Anda.",
    FaktorPendorongTitle: "Faktor Pendorong",
    JamKerjaBerlebihText: "Jam kerja berlebih",
    KurangTidurText: "Kurang tidur",
    AsupanKafeinText: "Asupan kafein",
    KurangOlahragaText: "Kurang olahraga",
    TipsCepatTitle: "Tips Cepat",
    TipsCepatDesk: "Kurangi screen time 30 menit sebelum tidur untuk menurunkan skor stres besok.",

    // Dashboard Pages
    DashboardGreeting: "Selamat pagi, ",
    DashboardDate: "id-ID",
    StressScoreTitle: "SKOR STRES HARI INI",
    StressHighText: "Tinggi",
    SleepTitle: "Jam Tidur",
    ExerciseTitle: "Olahraga",
    ScreenTimeTitle: "Screen Time",
    MinuteText: "mnt",
    HourText: "jam",
    StressTrendTitle: "Tren stres 7 hari",
    AverageText: "Rata-rata 64",
    ConditionTodayTitle: "Kondisi hari ini",
    SleepCondition: "Tidur",
    WorkCondition: "Kerja",
    ScreenCondition: "Layar",
    MovementCondition: "Gerak",
    CaffeineCondition: "Kafein",
    CupText: "2 cangkir",
    LatestInsightTitle: "Insight terbaru",
    SleepInsightTitle: "Kurang tidur terdeteksi",
    SleepInsightDesc: "Tidur 5.5 jam semalam berkontribusi pada peningkatan level kortisol Anda pagi ini sebesar 14%. Cobalah tidur lebih awal malam ini.",
    ExerciseInsightTitle: "Dampak positif olahraga",
    ExerciseInsightDesc: "Sesi olahraga 30 menit Anda berhasil menurunkan detak jantung istirahat (RHR) sebanyak 4 bpm. Pertahankan konsistensi ini untuk manajemen stres jangka panjang.",


  },


  en: {
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
    CekStresSdbr: "Stress Check",
    ReqomendationSdbr: "Recommendation",
    ProfileSdbr: "My Profile",
    LogoutSdbr: "Logout",

    // Catat Aktivitas Pages
    HeadlineActivityLog: "Track Your Daily Activities",
    DeskripsiActivityLog: "Accurate data helps our algorithm provide more precise stress predictions for today.",
    SleepHoursTitle: "Sleep Hours",
    HoursPlaceholder: "Hours",
    ScreenTimeTitle: "Screen Time",
    WorkHoursTitle: "Work Hours",
    CaffeineIntakeTitle: "Caffeine Intake",
    CaffeinePlaceholder: "Cups",
    ExerciseTitle: "Exercise",
    FatigueTitle: "Fatigue",
    MoodTitle: "Mood",
    BtnSavePredict: "Save & Predict Stress",
    PredictionPreviewTitle: "Prediction Preview",
    TodayStatusTitle: "Today's Status",
    HighStressText: "High Stress",
    PredictionDesk: "Prediction based on your last 24 hours of activity trends.",
    DrivingFactorsTitle: "Driving Factors",
    ExcessiveWorkHoursText: "Excessive work hours",
    LackOfSleepText: "Lack of sleep",
    CaffeineIntakeText: "Caffeine intake",
    LackOfExerciseText: "Lack of exercise",
    QuickTipsTitle: "Quick Tips",
    QuickTipsDesk: "Reduce screen time by 30 minutes before bed to lower tomorrow's stress score.",

    // Dashboard Page
    DashboardGreeting: "Good Morning, ",
    DashboardDate: "en-GB",
    StressScoreTitle: "Today's Stress Score",
    StressHighText: "High",
    SleepTitle: "Sleep Hours",
    ExerciseTitle: "Exercise",
    ScreenTimeTitle: "Screen Time",
    MinuteText: "min",
    HourText: "hours",
    StressTrendTitle: "7-Day Stress Trend",
    AverageText: "Average 64",
    ConditionTodayTitle: "Today's Condition",
    SleepCondition: "Sleep",
    WorkCondition: "Work",
    ScreenCondition: "Screen",
    MovementCondition: "Movement",
    CaffeineCondition: "Caffeine",
    CupText: "2 cups",
    LatestInsightTitle: "Latest Insights",
    SleepInsightTitle: "Lack of sleep detected",
    SleepInsightDesc: "Your 5.5 hours of sleep last night contributed to a 14% increase in cortisol levels this morning. Try going to bed earlier tonight.",
    ExerciseInsightTitle: "Positive impact of exercise",
    ExerciseInsightDesc: "Your 30-minute workout session successfully reduced your resting heart rate (RHR) by 4 bpm. Maintain this consistency for long-term stress management.",

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
