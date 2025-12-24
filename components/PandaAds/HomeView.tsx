
import React from 'react';
import { Check, X } from 'lucide-react';

const HomeView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] overflow-hidden flex items-center">
        <img 
          src="public/assests/ads1.webp" 
          alt="Panda Ads Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 md:px-20">
          <div className="max-w-2xl text-white space-y-8">
            <h1 className="text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tight drop-shadow-lg">
              Reach millions<br />with panda ads
            </h1>
            <p className="text-xl font-medium text-white/90 leading-relaxed max-w-lg drop-shadow">
              Advertise with foodpanda and connect with millions of ready-to-shop customers within and beyond the foodpanda app.
            </p>
            <button className="bg-white text-[#ff2b85] px-10 py-4 rounded-full font-black text-sm uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#333e48] mb-20 max-w-4xl mx-auto leading-tight">
            Boost your brand with Asia’s largest food and grocery delivery network*
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <span className="text-9xl font-black text-[#333e48] tracking-tighter">125M</span>
              <p className="text-2xl font-extrabold text-[#333e48]">app downloads</p>
            </div>
            <div className="space-y-4">
              <span className="text-9xl font-black text-[#333e48] tracking-tighter">11</span>
              <p className="text-2xl font-extrabold text-[#333e48]">markets</p>
            </div>
            <div className="space-y-4">
              <span className="text-9xl font-black text-[#333e48] tracking-tighter">400+</span>
              <p className="text-2xl font-extrabold text-[#333e48]">cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Power Up Section */}
      <section className="py-24 bg-[#f1f4f6] text-center px-4">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#333e48] mb-24">
            Power up your visibility & engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center space-y-8">
              <div className="w-40 h-40 flex items-center justify-center transition-transform hover:scale-110 duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_72_New-arrivals-300x300.png" alt="Reach" className="w-full" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#333e48]">Maximise your reach</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-xs">
                Amplify your campaign by connecting with your target customers right where they shop
              </p>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <div className="w-40 h-40 flex items-center justify-center transition-transform hover:scale-110 duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_73_Weekly-Highlights_04_-300x300.png" alt="Engage" className="w-full" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#333e48]">Engage high-value audiences</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-xs">
                Leverage our first-party data and advanced targeting to connect with the right audience
              </p>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <div className="w-40 h-40 flex items-center justify-center transition-transform hover:scale-110 duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_56_stationary-1-300x300.png" alt="Support" className="w-full" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#333e48]">Get personalised support</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-xs">
                Achieve your marketing goals and drive growth with personalised support, insights, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customised Solutions Header */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[1400px] mx-auto px-4">
           <h2 className="text-4xl md:text-6xl font-extrabold text-[#333e48] leading-[1.1] mb-24">
              Customised retail media advertising<br />solutions for your brand’s needs
           </h2>

           {/* Solution 1: In-app */}
           <div className="flex flex-col lg:flex-row items-center gap-20 mb-40">
              <div className="flex-1 w-full animate-in slide-in-from-left duration-700">
                <div className="relative overflow-visible">
                  <img 
                    src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_in-app.png" 
                    alt="In-app advertising" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-10">
                <h3 className="text-5xl font-extrabold text-[#333e48]">In-app advertising</h3>
                <p className="text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
                  Increase brand visibility with native display ads across different categories on the foodpanda app
                </p>
                <button className="bg-[#ff2b85] text-white px-12 py-5 rounded-3xl font-black text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
                  Explore solutions
                </button>
              </div>
           </div>

           {/* Solution 2: Off-app */}
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20 mb-40">
              <div className="flex-1 w-full animate-in slide-in-from-right duration-700">
                <div className="relative overflow-visible">
                  <img 
                    src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_panda-ads-website-homepage-off-app-solutions-highres.png" 
                    alt="Off-app advertising" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-10">
                <h3 className="text-5xl font-extrabold text-[#333e48]">Off-app advertising</h3>
                <p className="text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
                  Amplify your campaigns with foodpanda, from email marketing and social media to rider bag ads and product sampling
                </p>
                <button className="bg-[#ff2b85] text-white px-12 py-5 rounded-3xl font-black text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
                  Explore solutions
                </button>
              </div>
           </div>

           {/* Solution 3: Strategic Partnerships */}
           <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
              <div className="flex-1 w-full animate-in slide-in-from-left duration-700">
                <div className="relative overflow-visible">
                  <img 
                    src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_panda-ads-website-homepage-strategic-partnerships-highres-1536x1027.png" 
                    alt="Strategic partnerships" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-10">
                <h3 className="text-5xl font-extrabold text-[#333e48]">Strategic partnerships</h3>
                <p className="text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
                  Execute integrated campaigns for maximum impact, with tailored solutions like vouchers, data partnerships and consumer insights
                </p>
                <button className="bg-[#ff2b85] text-white px-12 py-5 rounded-3xl font-black text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
                  Explore solutions
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* Targeting Comparison */}
      <section className="py-32 bg-[#f1f4f6] px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-12">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#333e48] leading-[1.05]">
              Go beyond basic targeting with panda ads
            </h2>
            <p className="text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
              Maximise your ROI and connect with a broader, more relevant audience through precise targeting powered by our first-party data.
            </p>
            <button className="bg-[#ff2b85] text-white px-12 py-5 rounded-3xl font-black text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
              Explore solutions
            </button>
          </div>
          
          <div className="flex-1 w-full max-w-3xl bg-white rounded-[48px] shadow-2xl overflow-hidden border border-gray-100">
             <div className="grid grid-cols-3 bg-[#ff2b85] text-white font-black text-sm uppercase py-6 px-10 tracking-widest text-center">
                <span className="text-left">Targeting based on</span>
                <span>Generic platforms</span>
                <span>panda ads</span>
             </div>
             <div className="p-10 space-y-8">
                {[
                  { label: 'Age, gender, location', generic: true, panda: true },
                  { label: 'Preferences and inferred data', generic: true, panda: true },
                  { label: 'Type of device/OS used', generic: true, panda: true },
                  { label: 'Actual products purchased', generic: false, panda: true },
                  { label: 'Spending habits', generic: false, panda: true },
                  { label: 'Payment methods used', generic: false, panda: true },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 items-center text-center">
                    <span className="text-left font-extrabold text-gray-700 text-lg leading-tight">{row.label}</span>
                    <div className="flex justify-center">
                      {row.generic ? (
                        <Check className="text-[#ff2b85] w-8 h-8 stroke-[5]" />
                      ) : (
                        <X className="text-gray-300 w-8 h-8 stroke-[4]" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      <Check className="text-[#ff2b85] w-8 h-8 stroke-[5]" />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Proven Impact */}
      <section className="py-24 bg-white px-4 md:px-20">
         <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#333e48] mb-24">
              Proven impact with panda ads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 {
                   title: 'Coca-Cola leveraged retail media channels to boost sales and drive growth',
                   img: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_coca-cola-1-900x507.jpeg'
                 },
                 {
                   title: 'Mars Wrigley finds the perfect audience for its new product with panda ads',
                   img: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_PandaAds_Eclipse_Thumbnail_v2-900x506.jpeg'
                 },
                 {
                   title: 'Amazon Prime Video and foodpanda’s impressive entertainment strategy',
                   img: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_amazon.jpeg'
                 }
               ].map((card, i) => (
                 <div key={i} className="bg-[#f7f7f7] rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-50">
                    <div className="aspect-[1.5/1] overflow-hidden">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-10 flex flex-col flex-grow text-left">
                      <h3 className="text-3xl font-extrabold text-[#333e48] leading-[1.2] mb-12 flex-grow group-hover:text-[#ff2b85] transition-colors">
                        {card.title}
                      </h3>
                      <button className="bg-[#ff2b85] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-tight hover:opacity-90 transition-all self-start shadow-lg">
                        Read more
                      </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white px-4 md:px-20 border-t border-gray-50">
         <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#333e48] mb-32">
              What our customers are saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
               {[
                 {
                   quote: "“We were looking for a large APAC-wide partner with premium O&O mobile ad inventory that could connect us to our target audiences. panda ads were able to be that partner and have delivered beyond our campaign's target KPIs. We look forward to expanding our business with them.”",
                   author: "Luke Addison",
                   role: "Managing Director",
                   logo: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/egentics-Photoroom-768x192.png"
                 },
                 {
                   quote: "“As one of the goals from 2023 was to accelerate quick commerce growth through new activations and media, tapping into panda ads helped us grow our quick commerce business and deliver on our KPIs.”",
                   author: "Jayson Lopez",
                   role: "Senior Media and Digital Marketing Manager",
                   logo: "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/Universal-Robina-Logo-1024x576.png"
                 },
                 {
                   quote: "“The collaboration with foodpanda through panda ads greatly enhanced our customer acquisition initiatives, by capturing our audience's interest and fostering heightened user engagement.”",
                   author: "Jessica Faye Tan",
                   role: "Head of Commercial",
                   logo: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/moneymax_owler_20201020_015917_original-768x196.png"
                 }
               ].map((t, i) => (
                 <div key={i} className="flex flex-col items-center space-y-12">
                    <p className="text-xl italic text-gray-700 leading-relaxed font-bold">
                      {t.quote}
                    </p>
                    <div className="text-center">
                      <p className="text-xl font-black text-[#333e48]">{t.author}</p>
                      <p className="text-base font-extrabold text-gray-500 uppercase tracking-wide mt-1">{t.role}</p>
                    </div>
                    <div className="h-16 flex items-center justify-center">
                      <img src={t.logo} alt="Company logo" className="h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#fbe4ec] px-4 md:px-20 overflow-hidden">
         <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#333e48] leading-tight">
              Start advertising with<br />panda ads today!
            </h2>
            <button className="bg-[#ff2b85] text-white px-12 py-6 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95 whitespace-nowrap">
              Get in touch!
            </button>
         </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-white px-4 md:px-20 text-center">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#333e48] mb-24">
              Brands excelling with us
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-16 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/1.png" alt="Amazon" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/2.png" alt="Heineken" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/3.png" alt="Netflix" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/4.png" alt="Samsung" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/5.png" alt="Citi" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/6.png" alt="Huawei" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/7.png" alt="Mastercard" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/8.png" alt="Unilever" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/9.png" alt="Coca-Cola" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/10.png" alt="P&G" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/11.png" alt="Standard Chartered" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/12.png" alt="Visa" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/13.png" alt="Mars" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/14.png" alt="GCash" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/15.png" alt="Zalora" />
              <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/08/16.png" alt="Disney+" />
            </div>
            <p className="text-xs text-gray-400 mt-24 font-medium">*outside of China</p>
         </div>
      </section>
    </div>
  );
};

export default HomeView;
