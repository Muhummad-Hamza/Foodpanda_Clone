
import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      <img 
        src="/assests/about-foodpanda.webp" 
        alt="About foodpanda hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute bottom-20 left-4 md:left-20 z-10">
        <h1 className="text-white text-7xl md:text-9xl font-extrabold tracking-tight drop-shadow-lg">
          About<br />foodpanda
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
