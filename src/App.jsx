import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home as HomeIcon, Brush, Image, Phone, LogIn, LogOut, User, Settings } from 'lucide-react'
import Home from '../Pages/Home'
import Services from '../Pages/Service'
import ServiceDetail from '../Pages/ServiceDeatial'
import Portfolio from '../Pages/Profolio'
import Contact from '../Pages/contact'
import ColorSelection from '../Pages/colorSelection'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'

function UserMenu({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center border-2 border-amber-300 hover:border-amber-400 transition-colors"
      >
        {isLoggedIn ? (
          <span className="text-amber-700 font-semibold text-sm">Y</span>
        ) : (
          <User className="w-4 h-4 text-amber-600" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-amber-100 py-2 z-50">
          {isLoggedIn ? (
            <>
              <div className="px-4 py-2 border-b border-amber-100">
                <p className="font-semibold text-amber-900">Welcome, User</p>
                <p className="text-xs text-amber-600">user@example.com</p>
              </div>
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-amber-50 flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-amber-50 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <hr className="my-1 border-amber-100" />
              <button 
                onClick={() => { setIsLoggedIn(false); setIsOpen(false) }}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => { setIsLoggedIn(true); setIsOpen(false) }}
                className="w-full px-4 py-2 text-left text-amber-700 hover:bg-amber-50 flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-amber-50 flex items-center gap-2">
                <User className="w-4 h-4" />
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav className="bg-white border-b border-amber-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center">
              <HomeIcon className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-amber-900">Green Fenster Industry</h1>
              <p className="text-xs text-amber-600">Design Excellence - UPVC solutions</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink to="/" icon={<HomeIcon className="w-4 h-4" />} label="Home" />
            <NavLink to="/services" icon={<Brush className="w-4 h-4" />} label="Services" />
            <NavLink to="/portfolio" icon={<Image className="w-4 h-4" />} label="Portfolio" />
            <NavLink to="/contact" icon={<Phone className="w-4 h-4" />} label="Contact" />
            
            {/* User Menu */}
            <div className="ml-2">
              <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, icon, label }) {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive 
          ? 'text-amber-700 bg-amber-50' 
          : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Page transition loading
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {isLoading && <LoadingScreen />}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/color-selection" element={<ColorSelection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
