import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import CustomCursor from "./components/CustomCursor";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

// Admin Auth Pages
import AdminLogin from "./pages/AdminLogin";
import ForgotPassword from "./pages/ForgotPassword";

// New Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Campus from "./pages/Campus";


// App Content (needs useLocation inside BrowserRouter)
function AppContent() {
  const location = useLocation();
  const isAdminPortal = 
    location.pathname.startsWith("/enlightened-bharat-admin-portal") || 
    location.pathname.startsWith("/admin");

  return (
    <div className="bg-[#061224] min-h-screen overflow-hidden">
      {/* Custom Cursor — rendered on public pages only */}
      {!isAdminPortal && <CustomCursor />}

      {/* Navbar — hidden on admin portal pages */}
      {!isAdminPortal && <Navbar />}

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Academics */}
        <Route path="/academics" element={<Academics />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Admissions */}
        <Route path="/admissions" element={<Admissions />} />

        {/* Campus */}
        <Route path="/campus" element={<Campus />} />

        {/* Legacy Admin Redirect */}
        <Route path="/admin" element={<Navigate to="/enlightened-bharat-admin-portal" replace />} />
        <Route path="/admin/*" element={<Navigate to="/enlightened-bharat-admin-portal" replace />} />

        {/* Admin Portal — Login */}
        <Route path="/enlightened-bharat-admin-portal" element={<AdminLogin />} />

        {/* Admin Portal — Forgot Password */}
        <Route path="/enlightened-bharat-admin-portal/forgot-password" element={<ForgotPassword />} />

        {/* Admin Portal — Protected Dashboard */}
        <Route path="/enlightened-bharat-admin-portal/dashboard" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Terms & Conditions */}
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
      </Routes>

      {/* Footer — hidden on admin portal pages */}
      {!isAdminPortal && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
