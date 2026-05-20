import { LanguageProvider } from "./contexts/LanguageContext"
import { Route, Routes } from "react-router-dom"

//Pages
import RegisterPage from "./pages/RegisterPages"
import LoginPage from "./pages/LoginPages"
import ResetPassword from "./pages/ResetPassword"
import NewPassword from "./pages/NewPassword"
import Sidebar from "./components/Sidebar/Sidebar"

export default function App() {
  return (
    <LanguageProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
    </LanguageProvider>
  )
}
