
import React from 'react';

const JoinTeamSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-20 bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10">
          <h2 className="text-6xl font-extrabold text-black leading-tight">
            Join the panda team!
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-lg font-medium">
            Hungry for growth? There’s a seat at our table! We’re looking for the best in tech, marketing, sales, 
            logistics, account management and more. Explore career opportunities at foodpanda now.
          </p>
          <button className="bg-[#ff2b85] text-white px-10 py-4 rounded-3xl font-extrabold text-xl shadow-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95">
            view jobs
          </button>
        </div>
        
        <div className="flex-1 w-full">
          <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[1.4/1]">
            <img 
              src="assests/fp-home-3.webp" 
              alt="Join the team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
