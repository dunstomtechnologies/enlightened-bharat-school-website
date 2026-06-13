import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import logo from "../assets/logo.jpeg"

function ForgotPassword() {

  const { user, loading, resetPassword } = useAuth()

  // Form State
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [emailSent, setEmailSent] = useState(false)

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

  // Get user-friendly error message
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No account found with this email address"
      case "auth/invalid-email":
        return "Invalid email address format"
      case "auth/too-many-requests":
        return "Too many requests. Please try again later"
      case "auth/network-request-failed":
        return "Network error. Please check your connection"
      default:
        return "Failed to send reset email. Please try again"
    }
  }

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setEmailError("")

    // Validate
    if (!email.trim()) {
      setEmailError("Email is required")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      await resetPassword(email)
      setEmailSent(true)
    } catch (err) {
      setError(getErrorMessage(err.code))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Reset Password — Enlightened Bharat Gurukul Admin</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Reset your admin password" />
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

        {/* Card */}
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
              <h1 className="text-white text-2xl font-bold tracking-tight">Reset Password</h1>
              <p className="text-yellow-400/70 text-xs tracking-[4px] uppercase mt-1.5 font-medium">Enlightened Bharat Gurukul</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <span className="text-gray-500 text-[11px] uppercase tracking-[3px] font-medium">Password Recovery</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Success State */}
            {emailSent ? (
              <div className="animate-[fadeSlideIn_0.4s_ease-out]">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-white text-lg font-bold text-center mb-2">Check Your Email</h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed mb-2">
                  We&apos;ve sent a password reset link to:
                </p>
                <p className="text-yellow-400 text-sm font-medium text-center mb-6">{email}</p>
                <p className="text-gray-500 text-xs text-center leading-relaxed mb-8">
                  Click the link in the email to reset your password. If you don&apos;t see it, check your spam folder.
                </p>

                {/* Back to Login */}
                <Link
                  to="/enlightened-bharat-admin-portal"
                  className="block w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(250,204,21,0.2)] hover:shadow-[0_8px_30px_rgba(250,204,21,0.35)] active:scale-[0.98]"
                >
                  Back to Login
                </Link>

                {/* Resend */}
                <button
                  onClick={() => { setEmailSent(false); setEmail("") }}
                  className="block w-full text-center text-gray-500 hover:text-gray-300 text-sm mt-4 transition-colors duration-200"
                >
                  Didn&apos;t receive it? Try again
                </button>
              </div>
            ) : (
              <>
                {/* Instructions */}
                <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
                  Enter the email address associated with your admin account and we&apos;ll send you a link to reset your password.
                </p>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 flex items-start gap-3 animate-[fadeSlideIn_0.3s_ease-out]">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-400 text-sm leading-relaxed">{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Email Field */}
                  <div>
                    <label htmlFor="reset-email" className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        id="reset-email"
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

                  {/* Submit Button */}
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
                        Sending...
                      </span>
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>

                </form>

                {/* Back to Login Link */}
                <div className="mt-6 text-center">
                  <Link
                    to="/enlightened-bharat-admin-portal"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Login
                  </Link>
                </div>
              </>
            )}

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

export default ForgotPassword
