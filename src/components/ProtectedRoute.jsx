import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ProtectedRoute({ children }) {

  const { user, loading } = useAuth()

  // Show loading spinner while auth state is resolving
  if (loading) {
    return (
      <div className="min-h-screen bg-[#061224] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm font-medium tracking-wide">Verifying access...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/enlightened-bharat-admin-portal" replace />
  }

  // Render protected content
  return children
}

export default ProtectedRoute
