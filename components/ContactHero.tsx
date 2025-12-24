
import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="public/assests/pandacontact1.webp" 
          alt="Contact Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto h-full flex flex-col justify-center px-4 md:px-20">
        <h1 className="text-white text-7xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg">
          Contact us
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;
