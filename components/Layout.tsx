import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Startseite', path: '/' },
    { label: 'Für Fahrlehrer', path: '/jobs' },
    { label: 'Für Fahrschulen', path: '/employer' },
    { label: 'Karriere & Gehalt', path: '/career' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Car size={28} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  Fahrlehrer
                </span>
                <span className="text-sm font-medium text-blue-600 tracking-wide">
                  STELLENANGEBOTE.DE
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 py-2 border-b-2 ${
                    isActive(link.path)
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-blue-600 hover:border-blue-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link
                to="/jobs"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Jobs finden
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-600 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium px-2 py-1 rounded ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/jobs"
                className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jobs finden
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4 text-white">
                <Car size={24} />
                <span className="font-bold text-lg">fahrlehrer-stellenangebote.de</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Die Nummer 1 Plattform für die Vermittlung von Fachkräften in der Fahrschulbranche. Kompetent, schnell und digital.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Für Bewerber</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/jobs" className="hover:text-white transition">Stellenangebote durchsuchen</Link></li>
                <li><Link to="/career" className="hover:text-white transition">Gehaltsvergleich</Link></li>
                <li><Link to="/career" className="hover:text-white transition">Karriere-Ratgeber</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Für Arbeitgeber</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/employer" className="hover:text-white transition">Stellenanzeige aufgeben</Link></li>
                <li><Link to="/employer" className="hover:text-white transition">Talent-Pool</Link></li>
                <li><Link to="/employer" className="hover:text-white transition">KI-Anzeigengenerator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/impressum" className="hover:text-white transition">Impressum & Datenschutz</Link></li>
                <li><Link to="/impressum" className="hover:text-white transition">AGB</Link></li>
                <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <Linkedin size={20} className="hover:text-white cursor-pointer" />
                <Facebook size={20} className="hover:text-white cursor-pointer" />
                <Instagram size={20} className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} fahrlehrer-stellenangebote.de. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;