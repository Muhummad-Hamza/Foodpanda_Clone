
import React from 'react';

const CareersSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          {/* Matches the office team and sticky notes wall from screenshot 3 */}
          <div className="rounded-[40px] overflow-hidden aspect-[1.4/1]">
            <img 
              src="/assests/fp-home-3.webp" 
              alt="foodpanda team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Find the job you'd love
          </h2>
          <p className="text-lg text-gray-700 font-bold mb-2">
            Hungry to make a difference? There's a seat at our table!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda.
          </p>
          <button className="bg-[#ff2b85] text-white px-10 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity mt-4">
            Join us!
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
