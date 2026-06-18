import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate, Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import logo from "../assets/logo.png"

function AdminLogin() {

  const { user, loading, login } = useAuth()
  const navigate = useNavigate()

  // Form State
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Validation State
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  // If already authenticated, redirect to dashboard
  if (!loading && user) {
    return <Navigate to="/enlightened-bharat-admin-portal/dashboard" replace />
  }

  // Show loading while auth is resolving
  if (loading) {
    return (
      <div className="min-h-screen bg-[#061224] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm font-medium tracking-wide">Loading...</p>
        </div>
      </div>
    )
  }

  // Validate Fields
  const validateForm = () => {
    let valid = true
    setEmailError("")
    setPasswordError("")

    if (!email.trim()) {
      setEmailError("Email is required")
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address")
      valid = false
    }

    if (!password) {
      setPasswordError("Password is required")
      valid = false
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters")
      valid = false
    }

    return valid
  }

  // Get user-friendly error message from Firebase error codes
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No admin account found with this email"
      case "auth/wrong-password":
        return "Incorrect password. Please try again"
      case "auth/invalid-credential":
        return "Invalid email or password"
      case "auth/invalid-email":
        return "Invalid email address format"
      case "auth/user-disabled":
        return "This account has been disabled"
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later"
      case "auth/network-request-failed":
        return "Network error. Please check your connection"
      default:
        return "Authentication failed. Please try again"
    }
  }

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await login(email, password, rememberMe)
      setSuccess("Login successful! Redirecting...")
      setTimeout(() => {
        navigate("/enlightened-bharat-admin-portal/dashboard")
      }, 800)
    } catch (err) {
      setError(getErrorMessage(err.code))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Admin Portal — Enlightened Bharat Gurukul</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Enlightened Bharat Gurukul Admin Portal" />
      </Helmet>

      <div className="min-h-screen bg-[#061224] flex items-center justify-center px-4 py-10 relative overflow-hidden">

        {/* Background Glow Effects */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-yellow-500/[0.07] blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/[0.05] blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        ></div>

        {/* Login Card */}
        <div className="relative w-full max-w-md animate-[cardEnter_0.5s_ease-out]">

          {/* Card Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-yellow-400/20 via-yellow-400/5 to-transparent rounded-3xl pointer-events-none"></div>

          <div className="relative bg-[#0a1628]/90 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">

            {/* Logo & Branding */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-5">
                <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur-lg"></div>
                <img
                  src={logo}
                  alt="Enlightened Bharat Logo"
                  className="relative w-20 h-20 rounded-full object-cover border-2 border-yellow-400/60 shadow-[0_0_30px_rgba(250,204,21,0.15)]"
                />
              </div>
              <h1 className="text-white text-2xl font-bold tracking-tight">Admin Portal</h1>
              <p className="text-yellow-400/70 text-xs tracking-[4px] uppercase mt-1.5 font-medium">Enlightened Bharat Gurukul</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <span className="text-gray-500 text-[11px] uppercase tracking-[3px] font-medium">Secure Login</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 flex items-start gap-3 animate-[fadeSlideIn_0.3s_ease-out]">
                <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-400 text-sm leading-relaxed">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 flex items-start gap-3 animate-[fadeSlideIn_0.3s_ease-out]">
                <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-emerald-400 text-sm leading-relaxed">{success}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email Field */}
              <div>
                <label htmlFor="admin-email" className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); setError("") }}
                    placeholder="admin@example.com"
                    autoComplete="email"
                    className={`w-full bg-white/[0.04] border rounded-xl pl-12 pr-5 py-3.5 text-white text-sm outline-none transition-all duration-300 placeholder:text-gray-600 ${emailError ? "border-red-500/50 focus:border-red-500/70" : "border-white/[0.08] focus:border-yellow-400/50 hover:border-white/[0.15]"}`}
                  />
                </div>
                {emailError && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1 animate-[fadeSlideIn_0.2s_ease-out]">{emailError}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="admin-password" className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setPasswordError(""); setError("") }}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className={`w-full bg-white/[0.04] border rounded-xl pl-12 pr-12 py-3.5 text-white text-sm outline-none transition-all duration-300 placeholder:text-gray-600 ${passwordError ? "border-red-500/50 focus:border-red-500/70" : "border-white/[0.08] focus:border-yellow-400/50 hover:border-white/[0.15]"}`}
                  />
                  {/* Show/Hide Toggle */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors duration-200"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1 animate-[fadeSlideIn_0.2s_ease-out]">{passwordError}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-4.5 h-4.5 w-[18px] h-[18px] rounded-md border border-white/[0.15] bg-white/[0.04] peer-checked:bg-yellow-400/20 peer-checked:border-yellow-400/50 transition-all duration-200 flex items-center justify-center">
                      {rememberMe && (
                        <svg className="w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">Remember me</span>
                </label>

                <Link
                  to="/enlightened-bharat-admin-portal/forgot-password"
                  className="text-yellow-400/70 hover:text-yellow-400 text-sm font-medium transition-colors duration-200"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 active:scale-[0.98] ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black shadow-[0_4px_20px_rgba(250,204,21,0.2)] hover:shadow-[0_8px_30px_rgba(250,204,21,0.35)]"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>

            </form>

            {/* Security Notice */}
            <div className="mt-8 pt-6 border-t border-white/[0.05]">
              <div className="flex items-center justify-center gap-2 text-gray-600 text-xs">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure admin-only access</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default AdminLogin
