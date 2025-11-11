import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";         
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/SingUp.jsx";
import Reminders from "./pages/Reminders.jsx";
import Profile from "./pages/Profile.jsx";
import Support from "./pages/Support.jsx";       
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import PrivateRoute from "./lib/PrivateRoute.jsx";

export default function App() {
  return (
    <Routes>
      {/* Rutas que comparten Navbar/Footer */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="reminders"
          element={
            <PrivateRoute>
              <Reminders />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="support" element={<Support />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
