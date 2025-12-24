
import React, { useState } from 'react';
import { Search, Globe, ChevronDown } from 'lucide-react';
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
            <button className="bg-[#ff2b85] text-white px-4 py-2 rounded-xl text-xs font-black">
              Location
            </button>
            <Search className="w-6 h-6 text-gray-900" />
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
