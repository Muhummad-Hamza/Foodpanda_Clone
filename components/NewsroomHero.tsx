
import React from 'react';

interface NewsroomHeroProps {
  isVisible?: boolean;
}

const NewsroomHero: React.FC<NewsroomHeroProps> = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <section className="bg-white pt-24 pb-4 px-4 md:px-20 animate-in fade-in duration-500">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#333e48] mb-12 tracking-tight">
          Press Releases
        </h1>

        <div className="flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-sm border border-gray-100 h-auto lg:h-[600px] hover:shadow-lg transition-shadow">
          {/* Featured Image */}
          <div className="flex-1 overflow-hidden">
            <img 
              src="public/assests/new1.jpg" 
              alt="Featured news" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Featured Content */}
          <div className="flex-1 bg-[#f1f4f6] p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#ff2b85] font-black text-lg uppercase tracking-wider">MERCHANTS</span>
              <span className="text-gray-500 font-medium text-lg">17 Dec 2025</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#333e48] leading-tight mb-8">
              foodpanda strengthens merchant care with record onboarding milestone in Asia
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsroomHero;
