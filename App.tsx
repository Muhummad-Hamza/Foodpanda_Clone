
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import NextGenSection from './components/NextGenSection';
import ConvenienceSection from './components/ConvenienceSection';
import NewsSection from './components/NewsSection';
import BusinessSection from './components/BusinessSection';
import CareersSection from './components/CareersSection';
import AboutHero from './components/AboutHero';
import AboutIntro from './components/AboutIntro';
import AboutCarousel from './components/AboutCarousel';
import ValuesSection from './components/ValuesSection';
import JoinTeamSection from './components/JoinTeamSection';
import NewsroomHero from './components/NewsroomHero';
import NewsroomGrid from './components/NewsroomGrid';
import PartnersHero from './components/PartnersHero';
import PartnersIntro from './components/PartnersIntro';
import WhyPartner from './components/WhyPartner';
import HowItWorks from './components/HowItWorks';
import PartnersFAQ from './components/PartnersFAQ';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PandaAdsPage from './components/PandaAds/PandaAdsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'Home' | 'About' | 'Newsroom' | 'Partners' | 'Contact' | 'PandaAds'>('Home');

  // Detect if we should be on the Panda Ads "website" based on URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('site') === 'pandaads') {
      setCurrentPage('PandaAds');
    }
  }, []);

  const handleNavigate = (page: string) => {
    // Standardizing label check to match NAV_ITEMS in constants.tsx
    if (page === 'panda ads' || page === 'PandaAds') {
      setCurrentPage('PandaAds');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const validPages = ['Home', 'About', 'Newsroom', 'Partners', 'Contact'];
    if (validPages.includes(page)) {
      setCurrentPage(page as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (currentPage === 'PandaAds') {
    return <PandaAdsPage onBackToMain={() => setCurrentPage('Home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="pt-16">
        {currentPage === 'Home' && (
          <>
            <Hero />
            <IntroSection />
            <NextGenSection />
            <ConvenienceSection />
            <NewsSection />
            <BusinessSection />
            <CareersSection />
          </>
        )}
        {currentPage === 'About' && (
          <>
            <AboutHero />
            <AboutIntro />
            <AboutCarousel />
            <ValuesSection />
            <JoinTeamSection />
          </>
        )}
        {currentPage === 'Newsroom' && (
          <div className="animate-in fade-in duration-500">
            <NewsroomHero isVisible={true} />
            <NewsroomGrid />
          </div>
        )}
        {currentPage === 'Partners' && (
          <div className="animate-in fade-in duration-500">
            <PartnersHero />
            <PartnersIntro />
            <WhyPartner />
            <HowItWorks />
            <PartnersFAQ />
          </div>
        )}
        {currentPage === 'Contact' && (
          <div className="animate-in fade-in duration-500">
            <ContactHero />
            <ContactForm />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
