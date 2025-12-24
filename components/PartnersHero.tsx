
import React from 'react';

const PartnersHero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with slight side blurs as seen in references */}
      <div className="absolute inset-0 z-0">
        <img 
          src="public/assests/patners1.png" 
          alt="Partner with foodpanda" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full flex flex-col justify-center px-4 md:px-20">
        <div className="max-w-4xl">
          <h1 className="text-white text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 drop-shadow-md">
            Get more orders with<br />with foodpanda
          </h1>
          <button className="bg-[#ff2b85] text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-tight hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Become a Partner!
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
