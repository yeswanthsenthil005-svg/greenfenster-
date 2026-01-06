import { Phone, Mail, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Green Fenster Industry</h3>
            </div>
            <p className="text-amber-200 text-sm">Creating beautiful spaces, one design at a time</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <a href="tel:+916379743525" className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +91 6379743525
            </a>
            <a href="mailto:contact@greenfenster.com" className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              contact@greenfenster.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-amber-300 text-sm">
          <p>© 2024 Green Fenster Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
