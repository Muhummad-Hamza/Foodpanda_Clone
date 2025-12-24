
import React from 'react';

const ConvenienceSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Taste the convenience.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="h-10 hover:opacity-90 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-full" />
            </a>
            <a href="#" className="h-10 hover:opacity-90 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-full" />
            </a>
            <div className="h-10 px-4 bg-black rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity border border-gray-800">
               <span className="text-white font-bold text-[10px] uppercase tracking-tighter">Explore it on <br/><span className="text-xs">AppGallery</span></span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full order-1 lg:order-2">
          {/* Matches the rider and customer interaction from screenshot 2 */}
          <div className="rounded-[40px] overflow-hidden aspect-[1.6/1]">
            <img 
              src="/assests/foodpanda-home-2.webp" 
              alt="foodpanda delivery interaction" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvenienceSection;
