import { Home } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-amber-50 flex flex-col items-center justify-center z-50">
      <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl flex items-center justify-center shadow-lg animate-pulse">
        <Home className="w-12 h-12 text-white" />
      </div>
      <p className="mt-6 text-xl text-amber-700 font-medium">Loading...</p>
    </div>
  )
}
