
import React, { useState } from 'react';

const MarketerQuizView: React.FC = () => {
  const [gameState, setGameState] = useState<'landing' | 'quiz'>('landing');

  if (gameState === 'quiz') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#f7f7f7] p-4">
        <div className="max-w-xl w-full bg-white rounded-[40px] shadow-2xl p-12 text-center space-y-8 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-[#ff2b85]/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">🍳</span>
           </div>
           <h2 className="text-3xl font-black text-[#333e48]">Quest starting soon!</h2>
           <p className="text-gray-600 font-bold">The kitchen is being prepped with the finest marketing ingredients. Stay tuned for your culinary adventure!</p>
           <button 
             onClick={() => setGameState('landing')}
             className="text-[#ff2b85] font-black uppercase tracking-widest text-sm hover:underline"
           >
             Go back
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-[#ff2b85] flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      
      <div className="absolute top-8 right-8 md:right-20">
         <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-white">panda</span>
            <span className="text-2xl font-extrabold text-white opacity-80">ads</span>
         </div>
      </div>

      {/* Main Background Image (Kitchen Scene with Chef Pau-Pau) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="" 
          alt="" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-12">
        
        {/* Mascot + Title Container */}
        <div className="relative flex flex-col items-center">
           {/* Chef Pau-Pau 3D Render Placeholder */}
           <div className="w-64 md:w-80 animate-in slide-in-from-bottom-12 duration-1000 mb-[-40px]">
              <img 
                src="https://www.foodpanda.com/wp-content/uploads/2021/04/Pau-Pau-Mascot-1.png" 
                alt="Chef Pau-Pau" 
                className="w-full h-auto drop-shadow-2xl"
              />
           </div>

           {/* Quiz Title Logo Styling */}
           <div className="relative z-20">
             <div className="bg-white px-10 py-6 rounded-[40px] shadow-2xl transform -rotate-2 border-4 border-[#ff2b85]">
                <h2 className="text-4xl md:text-6xl font-black text-[#ff2b85] italic tracking-tighter leading-none select-none">
                  PAU-PAU'S<br />
                  <span className="text-3xl md:text-5xl not-italic tracking-normal">CULINARY QUEST!</span>
                </h2>
                {/* 3D Ingredient Icons floating around */}
                <span className="absolute -top-6 -right-6 text-4xl animate-bounce">🥕</span>
                <span className="absolute -bottom-4 -left-8 text-4xl animate-pulse delay-700">🍳</span>
             </div>
           </div>
        </div>

        {/* Text Description Block */}
        <div className="space-y-6 px-6">
           <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
             Think of the kitchen as the marketing world: ingredients are your creative ideas, spices are your channel mix, and the final dish is your successful campaign.
           </p>
           <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
             Uncover your unique Pau-Pau marketer personality through a culinary adventure!
           </p>
        </div>

        {/* Call to Action Button */}
        <div className="pt-4">
           <button 
             onClick={() => setGameState('quiz')}
             className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.3)] group"
           >
             Let's get cookin'!
           </button>
        </div>

      </div>

      {/* Decorative Floating Spices/Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 text-white/20 opacity-30 animate-spin-slow">
         <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
      <div className="absolute top-40 right-10 w-12 h-12 text-white/20 opacity-30 animate-pulse">
         <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
    </div>
  );
};

export default MarketerQuizView;
