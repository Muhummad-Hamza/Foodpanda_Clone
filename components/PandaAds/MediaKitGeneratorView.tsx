
import React from 'react';

const MediaKitGeneratorView: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('campaign-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-700 overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#ff2b85] pt-32 pb-32 px-4 md:px-20 min-h-[600px] flex items-center overflow-hidden">
        {/* Sparkle Decorations */}
        <div className="absolute top-1/4 left-[10%] w-6 h-6 text-white/40 animate-pulse">
           <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        <div className="absolute bottom-1/4 left-[40%] w-8 h-8 text-white/30 rotate-12">
           <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Get your custom<br />panda ads media kit
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold max-w-xl leading-relaxed opacity-95">
              Share your next campaign with us and receive a tailored media kit straight to your inbox – easy peasy!
            </p>
            <button 
              onClick={scrollToForm}
              className="bg-white text-black px-12 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Get started
            </button>
          </div>
          
          <div className="flex-1 flex justify-center relative">
            <div className="w-full max-w-[650px] animate-in slide-in-from-right duration-1000 delay-200">
              <img 
                src="https://mediakit-pandaads.foodpanda.com/wp-content/uploads/2024/09/rocket-800-min.png" 
                alt="Pau-Pau Rocket" 
                className="w-full h-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section 1: Campaign */}
      <section id="campaign-form" className="py-40 bg-white px-4 md:px-20 relative">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-6xl md:text-8xl font-black text-[#ff2b85] leading-[0.9] tracking-tighter">
              Tell us a little<br />about your<br />campaign!
            </h2>
          </div>
          
          <div className="flex-1 w-full max-w-xl relative">
             {/* 3D Star decorations */}
             <div className="absolute -top-16 -left-12 w-28 h-28 text-yellow-400 drop-shadow-lg z-20 animate-bounce">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                   <path d="M50 0L65 35H100L72 57L83 92L50 70L17 92L28 57L0 35H35L50 0Z" />
                </svg>
             </div>

             <div className="bg-[#ff2b85] rounded-[48px] p-12 md:p-16 shadow-2xl space-y-10 relative z-10">
                <div className="space-y-4">
                  <label className="text-white font-black text-lg">Industry *</label>
                  <div className="relative">
                    <select className="w-full bg-white px-8 py-4 rounded-2xl text-gray-400 font-bold border-none outline-none focus:ring-4 focus:ring-white/20 transition-all appearance-none cursor-pointer">
                      <option>Select</option>
                      <option>CPG / FMCG</option>
                      <option>Finance</option>
                      <option>Retail</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#ff2b85]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-white font-black text-lg">Campaign objective(s) *</label>
                  <div className="relative">
                    <select className="w-full bg-white px-8 py-4 rounded-2xl text-gray-400 font-bold border-none outline-none focus:ring-4 focus:ring-white/20 transition-all appearance-none cursor-pointer">
                      <option>Select</option>
                      <option>Awareness</option>
                      <option>Sales</option>
                      <option>Product Launch</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#ff2b85]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-white font-black text-lg">Market(s) *</label>
                  <div className="relative">
                    <select className="w-full bg-white px-8 py-4 rounded-2xl text-gray-400 font-bold border-none outline-none focus:ring-4 focus:ring-white/20 transition-all appearance-none cursor-pointer">
                      <option>Select</option>
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>Hong Kong</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#ff2b85]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="text-white/80 text-sm font-bold tracking-tight">*Required fields</p>

                <div className="pt-2">
                   <button className="w-full bg-white text-black px-10 py-5 rounded-full font-black text-xl shadow-lg hover:scale-105 active:scale-95 transition-all">
                      Next
                   </button>
                </div>
             </div>

             {/* 3D Target decoration */}
             <div className="absolute -bottom-20 -right-20 w-44 h-44 z-20 hover:scale-110 transition-transform duration-500">
                <img 
                   src="public/assests/kit1.png" 
                   alt="Target decoration" 
                   className="w-full h-auto drop-shadow-2xl"
                />
             </div>
          </div>
        </div>

        {/* Dotted Connection Path - S Curve */}
        <div className="absolute left-1/2 -bottom-40 w-full h-[600px] pointer-events-none hidden lg:block -translate-x-1/2 z-0">
           <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <path 
                d="M600 0 C 600 300, 300 300, 300 600" 
                stroke="#ff2b85" 
                strokeWidth="5" 
                strokeDasharray="15 15" 
                className="opacity-40"
              />
           </svg>
        </div>
      </section>

      {/* Form Section 2: Personal */}
      <section className="py-40 bg-white px-4 md:px-20 relative">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-32">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-6xl md:text-8xl font-black text-[#ff2b85] leading-[0.9] tracking-tighter">
              ...and now<br />a bit about<br />you!
            </h2>
          </div>
          
          <div className="flex-1 w-full max-w-xl relative">
             {/* 3D Notebook decoration */}
             <div className="absolute -top-24 -right-16 w-44 h-44 rotate-12 z-20 hover:scale-110 transition-transform">
                <img 
                   src="public/assests/kit3.png" 
                   alt="Notebook decoration" 
                   className="w-full h-auto drop-shadow-2xl"
                />
             </div>

             <div className="bg-[#ff2b85] rounded-[48px] p-12 md:p-16 shadow-2xl space-y-10 relative z-10">
                <div className="space-y-4">
                  <label className="text-white font-black text-lg">Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-white px-8 py-4 rounded-2xl text-gray-900 font-bold border-none outline-none focus:ring-4 focus:ring-white/20 transition-all"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-white font-black text-lg">Title</label>
                  <input 
                    type="text" 
                    className="w-full bg-white px-8 py-4 rounded-2xl text-gray-900 font-bold border-none outline-none focus:ring-4 focus:ring-white/20 transition-all"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-white font-black text-lg">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-white px-8 py-4 rounded-2xl text-gray-900 font-bold border-none outline-none focus:ring-4 focus:ring-white/20 transition-all"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-white font-black text-lg">Work email *</label>
                  <input 
                    type="email" 
                    className="w-full bg-white px-8 py-4 rounded-2xl text-gray-900 font-bold border-none outline-none focus:ring-4 focus:ring-white/20 transition-all"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="relative mt-1">
                    <input type="checkbox" className="w-6 h-6 rounded-md border-none text-[#ff2b85] focus:ring-0 cursor-pointer appearance-none bg-white/20 checked:bg-white" />
                    <CheckIcon className="absolute inset-0 w-6 h-6 text-[#ff2b85] pointer-events-none opacity-0 peer-checked:opacity-100" />
                  </div>
                  <p className="text-white text-sm font-bold leading-tight">
                    I acknowledge and agree to the <a href="#" className="underline">Privacy Statement</a> and agree to receive marketing materials and industry updates from panda ads. I understand that I can unsubscribe at any time.*
                  </p>
                </div>

                <p className="text-white/80 text-sm font-bold tracking-tight">*Required fields</p>

                <div className="pt-2">
                   <button className="w-full bg-white text-black px-10 py-5 rounded-full font-black text-xl shadow-lg hover:scale-105 active:scale-95 transition-all">
                      Get my media kit!
                   </button>
                </div>
             </div>

             {/* 3D Monitor/Chart decoration */}
             <div className="absolute -bottom-24 -left-20 w-48 h-48 z-20">
                <img 
                   src="public/assests/kit2.png" 
                   alt="Chart decoration" 
                   className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Final Section Divider */}
      <div className="h-40 bg-[#ff2b85] flex items-center justify-center">
          <p className="text-white text-3xl font-black tracking-tighter">Ready to scale with panda ads?</p>
      </div>
    </div>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default MediaKitGeneratorView;
