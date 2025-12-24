
import React from 'react';

const ContactUsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] overflow-hidden flex items-center">
        {/* Background Image / Gradient */}
        <div className="absolute inset-0 z-0 ">
           <img 
             src="/assests/adscontact.jpg" 
             alt="Panda Ads Contact Hero" 
             className="w-full h-full object-cover opacity-100 mix-blend-overlay"
           />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-white">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-xl leading-relaxed opacity-90">
              Explore how panda ads can help boost your brand and connect you with millions of customers. Fill in the form below and we’ll be in touch soon.
            </p>
          </div>
          
        
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-4 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Job Title</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Country Phone Prefix</label>
                <div className="relative">
                  <select className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 text-gray-500 font-medium outline-none focus:border-[#ff2b85] appearance-none cursor-pointer">
                    <option>-None-</option>
                    <option>+65 (Singapore)</option>
                    <option>+60 (Malaysia)</option>
                    <option>+852 (Hong Kong)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Mobile</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Industry</label>
                <div className="relative">
                  <select className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 text-gray-500 font-medium outline-none focus:border-[#ff2b85] appearance-none cursor-pointer">
                    <option>-None-</option>
                    <option>CPG / FMCG</option>
                    <option>Finance</option>
                    <option>Retail</option>
                    <option>Tech</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">Country</label>
                <div className="relative">
                  <select className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 text-gray-500 font-medium outline-none focus:border-[#ff2b85] appearance-none cursor-pointer">
                    <option>-None-</option>
                    <option>Singapore</option>
                    <option>Malaysia</option>
                    <option>Hong Kong</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-base font-bold text-gray-800">City</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>
            </div>

            {/* Submit Row */}
            <div className="md:col-span-2 flex justify-end pt-8">
               <button className="bg-[#ff2b85] text-white px-16 py-4 rounded-full font-black text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
                 Submit
               </button>
            </div>
          </form>
        </div>
      </section>

      {/* Final Section for Visual Flow */}
      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default ContactUsView;
