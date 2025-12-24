
import React, { useState } from 'react';

const SOLUTIONS_TABS = [
  {
    id: 'popup',
    label: 'Full-page pop-up',
    title: 'Full-page pop-up',
    description: 'Engage foodpanda customers through high-impact, disruptive formats',
    image: 'public/assests/solution1.png'
  },
  {
    id: 'carousel',
    label: 'Carousel banner',
    title: 'Carousel banner',
    description: 'A unique solution that helps drive consideration & conversion for brands',
    image: 'public/assests/solution2.png'
  },
  {
    id: 'upsell',
    label: 'Cart upsell',
    title: 'Cart upsell',
    description: 'Tap into the big spending appetite and capture impulse purchases',
    image: 'public/assests/solution3.png'
  },
  {
    id: 'payment',
    label: 'Payment switch',
    title: 'Payment switch',
    description: 'Become a foodpanda payment provider of choice at checkout',
    image: 'public/assests/solution4.png'
  }
];

const SolutionsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SOLUTIONS_TABS[0]);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="py-24 bg-[#F2F2F2] text-center px-4">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333e48] mb-8 leading-tight">
            Boost your brand with our retail media solutions
          </h1>
          <p className="text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Harness the power of first-party retail data to connect with millions of high-value customers within and beyond the app.
          </p>
        </div>
      </section>

      {/* In-App Display Ads Section */}
      <section className="py-24 bg-white px-4 md:px-20 text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#333e48] mb-32">
            Reach high-value customers with in-app display ads
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Ad 1 */}
            <div className="flex flex-col items-center space-y-12">
              <div className="w-full max-w-[320px] shadow-2xl rounded-[40px] overflow-hidden bg-white hover:scale-105 transition-transform duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_homescreen-edited-600x800.png" alt="Homescreen ad" className="w-full h-auto" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-[#333e48]">Homescreen ad</h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                  Reach millions of customers at the beginning of their purchase journey
                </p>
              </div>
            </div>

            {/* Ad 2 */}
            <div className="flex flex-col items-center space-y-12">
              <div className="w-full max-w-[320px] shadow-2xl rounded-[40px] overflow-hidden bg-white hover:scale-105 transition-transform duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_tracking-1-edited-600x800.png" alt="Order tracking page ad" className="w-full h-auto" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-[#333e48]">Order tracking page ad</h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                  Drive engagement and results without disrupting their ordering experience
                </p>
              </div>
            </div>

            {/* Ad 3 */}
            <div className="flex flex-col items-center space-y-12">
              <div className="w-full max-w-[320px] shadow-2xl rounded-[40px] overflow-hidden bg-white hover:scale-105 transition-transform duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_citrus-ad-1-edited-600x800.png" alt="Shopping ad" className="w-full h-auto" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-[#333e48]">Shopping ad</h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                  Boost conversion on pandamart and foodpanda shops
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consideration & Conversions (Tabbed) */}
      <section className="py-24 bg-white px-4 md:px-20 text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#333e48] mb-16">
            Boost in-app consideration and conversions
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {SOLUTIONS_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-lg font-black border-2 transition-all duration-300
                  ${activeTab.id === tab.id 
                    ? 'bg-[#ff2b85] border-[#ff2b85] text-white shadow-lg' 
                    : 'bg-white border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85]/5'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20 min-h-[500px]">
             <div className="flex-1 text-left space-y-8 animate-in slide-in-from-left duration-500">
               <h3 className="text-5xl font-extrabold text-[#333e48]">{activeTab.title}</h3>
               <p className="text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
                 {activeTab.description}
               </p>
             </div>
             <div className="flex-1 w-full flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-500">
               <div className="w-full max-w-[350px] shadow-2xl rounded-[48px] overflow-hidden">
                 <img 
                    key={activeTab.image}
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    className="w-full h-auto"
                 />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Off-app Solutions Section */}
      <section className="py-24 bg-[#f8f9fa] px-4 md:px-20 text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#333e48] mb-32 leading-tight">
            Amplify your campaigns<br />with off-app advertising solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col items-center space-y-10">
              <div className="w-48 h-48 flex items-center justify-center transition-transform hover:rotate-3 duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_marketing-channels-900x600.png" alt="Marketing channels" className="w-full h-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-[#333e48]">Marketing channels</h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                  Extend your reach with foodpanda’s digital networks
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-10">
              <div className="w-48 h-48 flex items-center justify-center transition-transform hover:rotate-3 duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_rider-bags-900x600.png" alt="Rider bags" className="w-full h-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-[#333e48]">Rider bags</h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                  Put your brand in the fast lane with O2O campaigns
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-10">
              <div className="w-48 h-48 flex items-center justify-center transition-transform hover:rotate-3 duration-500">
                <img src="https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_product-sampling-900x600.png" alt="Product sampling" className="w-full h-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-[#333e48]">Product sampling</h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                  Boost product awareness and drive sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit CTA Section */}
      <section className="py-32 bg-white px-4 md:px-20 text-center lg:text-left overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-10 animate-in slide-in-from-left duration-700">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#333e48] leading-[1.1]">
              Get your custom<br />panda ads media kit
            </h2>
            <p className="text-2xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Share your next campaign with us and receive a tailored media kit straight to your inbox – easy peasy!
            </p>
            <button className="bg-[#ff2b85] text-white px-12 py-5 rounded-3xl font-black text-xl hover:opacity-90 transition-all shadow-xl active:scale-95">
              Get started
            </button>
          </div>
          <div className="flex-1 flex justify-center animate-in slide-in-from-right duration-700">
            <img 
              src="https://pandaads.foodpanda.com/wp-content/uploads/2024/11/rocket-800-min.png" 
              alt="Pau-Pau Media Kit" 
              className="w-full max-w-[500px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Final Red Section */}
      <section className="py-24 bg-[#ff2b85] px-4 md:px-20 text-center lg:text-left overflow-hidden">
         <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Start advertising with<br />panda ads today!
            </h2>
            <button className="bg-white text-[#ff2b85] px-12 py-6 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95 whitespace-nowrap">
              Get in touch!
            </button>
         </div>
      </section>
    </div>
  );
};

export default SolutionsView;
