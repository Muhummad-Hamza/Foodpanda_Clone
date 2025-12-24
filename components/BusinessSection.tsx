
import React from 'react';

const BusinessSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white mb-20">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Feed your team.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks.
          </p>
          <button className="bg-[#ff2b85] text-white px-10 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
            Explore
          </button>
        </div>
        <div className="flex-1 w-full">
          {/* Matches the 'boxes on head' visual from screenshot 4 */}
          <div className="rounded-[40px] overflow-hidden aspect-[1.6/1] bg-gray-100 relative group">
            <img 
              src="/assests/foodpanda-home-4.webp" 
              alt="foodpanda for business" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-start p-12">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
