
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          
          {/* Form Side */}
          <div className="flex-1 w-full max-w-2xl">
            <h2 className="text-xl font-black text-gray-900 mb-12">Contact form</h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="block text-sm font-black text-gray-900">Name *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                    />
                    <span className="text-[10px] text-gray-500 font-medium">First</span>
                  </div>
                  <div className="space-y-1">
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                    />
                    <span className="text-[10px] text-gray-500 font-medium">Last</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-900">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-900">Your message *</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#ff2b85] focus:ring-1 focus:ring-[#ff2b85] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-[#ff2b85] text-white px-10 py-3 rounded-full font-black text-sm uppercase tracking-tight hover:opacity-90 transition-all shadow-lg active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Mascot Side */}
          <div className="hidden lg:flex flex-1 justify-center items-center h-full self-center">
            <div className="relative w-full max-w-md animate-in slide-in-from-right duration-1000">
              <img 
                src="public/assests/pandacontact2.webp" 
                alt="foodpanda mascot" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom Help Text */}
        <div className="mt-24 pt-16 border-t border-gray-100 text-center space-y-2">
          <p className="text-gray-600 font-medium">Got a question about your order?</p>
          <p className="text-gray-600 font-medium">Need help with some of your app features?</p>
          <p className="text-gray-600 font-medium">
            Contact <span className="font-black text-gray-900">Help Centre</span> via <span className="font-black text-gray-900">app</span> menu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
