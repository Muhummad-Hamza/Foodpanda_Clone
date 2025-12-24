
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assests/panda.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-20 max-w-[1400px] mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-white text-6xl md:text-8xl font-extrabold leading-[1.05] tracking-tight mb-10 drop-shadow-sm">
            food<br />
            and groceries<br />
            in a tap
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#" className="hover:opacity-90 transition-all hover:scale-105 active:scale-95">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on App Store" 
                className="h-12 w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-90 transition-all hover:scale-105 active:scale-95">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
