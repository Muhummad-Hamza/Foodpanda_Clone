
import React, { useState, useRef } from 'react';
import { Search, Linkedin, ChevronDown, X } from 'lucide-react';
import HomeView from './HomeView';
import SolutionsView from './SolutionsView';
import InsightsView from './InsightsView';
import CaseStudiesView from './CaseStudiesView';
import NewsroomView from './NewsroomView';
import MediaKitGeneratorView from './MediaKitGeneratorView';
import MarketerQuizView from './MarketerQuizView';
import ContactUsView from './ContactUsView';
import SearchView from './SearchView';

interface PandaAdsPageProps {
  onBackToMain?: () => void;
}

const PandaAdsPage: React.FC<PandaAdsPageProps> = ({ onBackToMain }) => {
  const [activeView, setActiveView] = useState<'Home' | 'Solutions' | 'Insights' | 'CaseStudies' | 'Newsroom' | 'MediaKit' | 'MarketerQuiz' | 'ContactUs' | 'Search' | 'Resources' | 'Tools'>('Home');
  const [openDropdown, setOpenDropdown] = useState<'Resources' | 'Tools' | null>(null);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleNavClick = (view: any, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveView(view);
    setOpenDropdown(null);
    setSearchBarVisible(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveView('ContactUs');
    setOpenDropdown(null);
    setSearchBarVisible(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSearch = () => {
    setSearchBarVisible(!searchBarVisible);
    if (!searchBarVisible) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveView('Search');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#ff2b85] selection:text-white">
      {/* Panda Ads Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 h-20 px-4 md:px-20 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={() => {
            if (activeView === 'Home') onBackToMain?.();
            else setActiveView('Home');
            setSearchBarVisible(false);
          }} 
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <span className="text-3xl font-black text-[#ff2b85]">panda</span>
          <span className="text-3xl font-extrabold text-[#ff2b85]">ads</span>
        </button>
        
        <div className="hidden lg:flex items-center h-full">
          {!searchBarVisible && (
            <ul className="flex items-center h-full gap-10">
              <li className="h-full flex items-center relative">
                {activeView === 'Home' && <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2b85]" />}
                <button 
                  onClick={(e) => handleNavClick('Home', e)}
                  className={`text-sm font-extrabold transition-all ${activeView === 'Home' ? 'text-black' : 'text-gray-900 hover:text-[#ff2b85]'}`}
                >
                  Home
                </button>
              </li>

              <li className="h-full flex items-center relative">
                {activeView === 'Solutions' && <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2b85]" />}
                <button 
                  onClick={(e) => handleNavClick('Solutions', e)}
                  className={`text-sm font-extrabold transition-all ${activeView === 'Solutions' ? 'text-black' : 'text-gray-900 hover:text-[#ff2b85]'}`}
                >
                  Solutions
                </button>
              </li>

              <li 
                className="h-full flex items-center relative group"
                onMouseEnter={() => setOpenDropdown('Resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {(activeView === 'Insights' || activeView === 'CaseStudies' || activeView === 'Newsroom' || openDropdown === 'Resources') && <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2b85]" />}
                <button className={`text-sm font-extrabold flex items-center gap-1 transition-all ${(activeView === 'Insights' || activeView === 'CaseStudies' || activeView === 'Newsroom') ? 'text-black' : 'text-gray-900 group-hover:text-[#ff2b85]'}`}>
                  Resources
                </button>
                
                <div className={`absolute top-full right-0 w-64 bg-white shadow-xl border-t border-gray-50 py-4 transform transition-all duration-200 origin-top ${openDropdown === 'Resources' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                  <button onClick={(e) => handleNavClick('Insights', e)} className="w-full text-left px-8 py-3 text-sm font-black text-gray-900 hover:bg-gray-50">Insights</button>
                  <button onClick={(e) => handleNavClick('CaseStudies', e)} className="w-full text-left px-8 py-3 text-sm font-black text-gray-900 hover:bg-gray-50">Case studies</button>
                  <button onClick={(e) => handleNavClick('Newsroom', e)} className="w-full text-left px-8 py-3 text-sm font-black text-gray-900 hover:bg-gray-50">Newsroom</button>
                </div>
              </li>

              <li 
                className="h-full flex items-center relative group"
                onMouseEnter={() => setOpenDropdown('Tools')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {(activeView === 'MediaKit' || activeView === 'MarketerQuiz' || activeView === 'Tools' || openDropdown === 'Tools') && <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2b85]" />}
                <button className={`text-sm font-extrabold flex items-center gap-1 transition-all ${(activeView === 'MediaKit' || activeView === 'MarketerQuiz') ? 'text-black' : 'text-gray-900 group-hover:text-[#ff2b85]'}`}>
                  Tools
                </button>

                <div className={`absolute top-full right-0 w-64 bg-white shadow-xl border-t border-gray-50 py-4 transform transition-all duration-200 origin-top ${openDropdown === 'Tools' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                  <button onClick={(e) => handleNavClick('MediaKit', e)} className="w-full text-left px-8 py-3 text-sm font-black text-gray-900 hover:bg-gray-50">Media kit generator</button>
                  <button onClick={(e) => handleNavClick('MarketerQuiz', e)} className="w-full text-left px-8 py-3 text-sm font-black text-gray-900 hover:bg-gray-50">Marketer personality quiz</button>
                </div>
              </li>
            </ul>
          )}

          <div className="flex items-center gap-6 ml-10">
            {/* Search bar visibility now handled by click, not hover */}
            <div className="relative flex items-center h-full">
              {searchBarVisible ? (
                <form onSubmit={handleSearchSubmit} className="relative animate-in slide-in-from-right duration-300 flex items-center">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[340px] bg-white border-2 border-[#ff2b85] rounded-full px-8 py-2.5 text-sm font-bold text-gray-900 outline-none pr-14 shadow-sm"
                  />
                  <button 
                    type="submit"
                    className="absolute right-12 top-1/2 -translate-y-1/2 text-[#ff2b85] hover:opacity-80 transition-opacity"
                  >
                    <Search className="w-5 h-5 stroke-[4]" />
                  </button>
                  <button 
                    type="button"
                    onClick={() => setSearchBarVisible(false)}
                    className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-6">
                  <button 
                    onClick={handleContactClick}
                    className={`px-8 py-3 rounded-full text-sm font-black hover:opacity-90 transition-all shadow-lg active:scale-95 ${activeView === 'ContactUs' ? 'bg-white text-[#ff2b85] border-2 border-[#ff2b85]' : 'bg-[#ff2b85] text-white'}`}
                  >
                    Contact us
                  </button>
                  <button 
                    onClick={toggleSearch}
                    className="p-2 text-gray-900 hover:text-[#ff2b85] transition-colors cursor-pointer"
                  >
                    <Search className="w-5 h-5 text-[#333e48] stroke-[3]" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 min-h-[calc(100vh-80px)]">
        {activeView === 'Home' && <HomeView />}
        {activeView === 'Solutions' && <SolutionsView />}
        {activeView === 'Insights' && <InsightsView />}
        {activeView === 'CaseStudies' && <CaseStudiesView />}
        {activeView === 'Newsroom' && <NewsroomView />}
        {activeView === 'MediaKit' && <MediaKitGeneratorView />}
        {activeView === 'MarketerQuiz' && <MarketerQuizView />}
        {activeView === 'ContactUs' && <ContactUsView />}
        {activeView === 'Search' && <SearchView query={searchQuery} />}
      </main>

      <footer className="bg-black text-white py-24 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-1 mb-20">
             <img 
               src="public/assests/pandalogo.png" 
               alt="foodpanda logo" 
               className="h-10 w-auto brightness-0 invert"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div>
              <h4 className="font-extrabold text-xl mb-10 text-white">Our company</h4>
              <ul className="space-y-6 text-lg font-bold text-gray-200">
                <li><button onClick={onBackToMain} className="hover:text-[#ff2b85] transition-colors text-left font-bold">About foodpanda</button></li>
                <li><a href="#" className="hover:text-[#ff2b85] transition-colors font-bold">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-xl mb-10 text-white">panda ads</h4>
              <ul className="space-y-6 text-lg font-bold text-gray-200">
                <li><button onClick={(e) => handleNavClick('Solutions', e)} className="hover:text-[#ff2b85] transition-colors text-left font-bold">Retail media solutions</button></li>
                <li><button onClick={(e) => handleNavClick('MediaKit', e)} className="hover:text-[#ff2b85] transition-colors text-left font-bold">Media kit generator</button></li>
                <li><button onClick={(e) => handleNavClick('CaseStudies', e)} className="hover:text-[#ff2b85] transition-colors text-left font-bold">Case studies</button></li>
                <li><button onClick={(e) => handleNavClick('Insights', e)} className="hover:text-[#ff2b85] transition-colors text-left font-bold">Industry Insights</button></li>
                <li><button onClick={(e) => handleNavClick('Newsroom', e)} className="hover:text-[#ff2b85] transition-colors text-left font-bold font-bold">Newsroom</button></li>
                <li><button onClick={(e) => handleNavClick('MarketerQuiz', e)} className="hover:text-[#ff2b85] transition-colors text-left font-bold">Pau-Pau marketer personality quiz</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-xl mb-10 text-white">Get in touch!</h4>
              <button 
                onClick={handleContactClick}
                className="bg-[#ff2b85] text-white px-10 py-4 rounded-3xl font-black text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-lg active:scale-95"
              >
                Contact us
              </button>
            </div>
            <div>
              <h4 className="font-extrabold text-xl mb-10 text-white">Follow us on</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#ff2b85] transition-all group">
                   <Linkedin className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-800 text-base text-gray-500 font-bold flex flex-col md:flex-row justify-between items-center gap-4">
             <p>Copyright © 2024 foodpanda</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PandaAdsPage;
