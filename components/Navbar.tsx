
import React, { useState, useEffect } from 'react';
import { Search, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS, BRAND_COLOR, Logo } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const LOCATIONS = [
  'Bangladesh',
  'Cambodia',
  'Hong Kong',
  'Laos',
  'Malaysia',
  'Myanmar',
  'Pakistan',
  'Philippines',
  'Singapore',
  'Taiwan',
  'Thailand'
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 h-20 border-b border-gray-100 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between">
        <button onClick={() => onNavigate('Home')} className="hover:opacity-80 transition-opacity">
          <Logo />
        </button>
        
        <div className="hidden lg:flex items-center h-full">
          <ul className="flex items-center h-full gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="h-full flex items-center relative group">
                {currentPage === item.label && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2b85]" />
                )}
                <button 
                  onClick={() => onNavigate(item.label)}
                  className={`text-sm font-bold transition-all whitespace-nowrap px-1 pt-1
                    ${currentPage === item.label 
                      ? `text-black` 
                      : 'text-gray-900 hover:text-[#ff2b85]'
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 ml-10">
            {/* Choose Location with Dropdown on Hover */}
            <div 
              className="relative h-full flex items-center group/location"
              onMouseEnter={() => setIsLocationOpen(true)}
              onMouseLeave={() => setIsLocationOpen(false)}
            >
              <button 
                className="bg-[#ff2b85] text-white px-8 py-3 rounded-[20px] text-sm font-black hover:opacity-90 transition-all whitespace-nowrap shadow-sm flex items-center gap-2"
              >
                Choose location
              </button>

              {/* High-Fidelity Location Dropdown */}
              <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-[#ff2b85] py-2 transform transition-all duration-200 origin-top z-[60] ${isLocationOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {LOCATIONS.map((loc) => (
                    <button 
                      key={loc}
                      className={`w-full text-left px-8 py-4 text-lg font-bold text-[#ff2b85] hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Language Switcher with Dropdown on Hover */}
            <div 
              className="relative h-full flex items-center group/lang"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
            >
              <button className="flex items-center gap-2 bg-[#f0f0f0] px-4 py-2.5 rounded-full hover:bg-gray-200 transition-colors ml-2">
                <Globe className="w-5 h-5 text-gray-900" />
                <span className="text-sm font-bold text-gray-900">EN</span>
              </button>

              {/* Language Dropdown Menu - EXACT match to screenshot behavior */}
              <div className={`absolute top-full right-0 mt-1 min-w-[100px] bg-white rounded-xl shadow-xl py-4 px-6 transform transition-all duration-200 origin-top z-[60] border border-gray-50 ${isLanguageOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                <button className="text-sm font-bold text-gray-900 whitespace-nowrap hover:text-[#ff2b85] transition-colors">
                  English
                </button>
              </div>
            </div>

            <button className="p-2 text-gray-900 hover:text-[#ff2b85] transition-colors ml-2">
              <Search className="w-6 h-6 stroke-[3]" />
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
            <button
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-md bg-white border border-gray-100 shadow-sm hover:opacity-90"
            >
              <Menu className="w-6 h-6 text-gray-900" />
            </button>
            <button className="bg-[#ff2b85] text-white px-4 py-2 rounded-xl text-xs font-black">
              Location
            </button>
            <Search className="w-6 h-6 text-gray-900" />
        </div>

        {/* Mobile Drawer */}
        <div className={`fixed inset-0 z-60 transition-transform duration-300 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div className={`absolute inset-0 bg-black/40 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />

          <div className={`absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <button onClick={() => { onNavigate('Home'); setIsMenuOpen(false); }} className="hover:opacity-80 transition-opacity">
                <Logo />
              </button>
              <button aria-label="Close menu" onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            <nav className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { onNavigate(item.label); setIsMenuOpen(false); }}
                  className="w-full text-left text-lg font-bold py-3 hover:text-[#ff2b85] transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-100">
                <button className="w-full flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                  <Globe className="w-5 h-5 text-gray-800" />
                  <span className="font-bold">EN</span>
                </button>

                <button className="w-full mt-3 bg-[#ff2b85] text-white px-4 py-3 rounded-[20px] font-black">Choose location</button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff2b85;
          border-radius: 10px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
