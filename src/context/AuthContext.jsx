import { createContext, useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "firebase/auth"

const AuthContext = createContext(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Login with optional "Remember Me"
  const login = async (email, password, rememberMe = false) => {
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Logout
  const logout = async () => {
    return signOut(auth)
  }

  // Reset Password
  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const value = {
    user,
    loading,
    login,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
