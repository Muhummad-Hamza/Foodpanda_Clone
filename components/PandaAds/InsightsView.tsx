
import React from 'react';

const INSIGHTS_DATA = [
  {
    title: 'Whitepaper: Retail media – the revolution of advertising in Asia',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_Screenshot-2024-06-20-at-10.45.27%E2%80%AFAM-copy-900x506.jpeg',
    category: 'Whitepaper'
  },
  {
    title: 'Report: Delivery & retail trends in APAC 2023',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_Screenshot-2024-09-13-at-10.44.51-AM-900x507.jpeg',
    category: 'Report'
  }
];

const InsightsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="py-24 bg-[#f8f9fa] px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333e48] mb-6 leading-tight">
            Discover the latest insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl leading-relaxed">
            Tap into the pulse of the advertising industry with the latest trends and consumer insights.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-white px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {INSIGHTS_DATA.map((item, idx) => (
              <div key={idx} className="flex flex-col space-y-8 group">
                <div className="rounded-[32px] overflow-hidden shadow-xl aspect-[1.8/1] transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-8 flex flex-col items-start">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#333e48] leading-tight">
                    {item.title}
                  </h2>
                  <button className="bg-[#ff2b85] text-white px-10 py-3.5 rounded-full font-black text-sm uppercase tracking-tight hover:opacity-90 transition-all shadow-lg active:scale-95">
                    Download
                  </button>
                </div>
              </div>
            ))}
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

export default InsightsView;
