
import React from 'react';

const NextGenSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          {/* Matches the pink background and phone mockup from screenshot 1 */}
          <div className="rounded-[40px] overflow-hidden bg-[#f397b9] aspect-[1.4/1] flex items-center justify-center p-8 relative">
            <img 
              src="/assests/fp-home (1).webp" 
              alt="foodpanda app mockup" 
              className="w-full h-full object-contain drop-shadow-2xl scale-110"
            />
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Meet the next generation of delivery!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.
          </p>
          <button className="bg-[#ff2b85] text-white px-10 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
            About
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextGenSection;
