
import React from 'react';

const CASE_STUDIES = [
  {
    category: 'CPG | AWARENESS & SALES',
    title: 'Driving growth: Coca-Cola leveraged retail media channels to boost sales',
    description: 'While The Coca-Cola Company has numerous ongoing partnerships with foodpanda in the Philippines, one campaign that really stood out in increasing the brand’s penetration, transactions and sales across online and offline platforms was its #BetterwithCoke campaign on foodpanda.',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_coca-cola-1.jpeg',
    layout: 'img-left'
  },
  {
    category: 'ENTERTAINMENT | ACQUISITION',
    title: 'Amazon Prime Video and foodpanda’s impressive entertainment strategy',
    description: 'We have all experienced the combination of binge watching while munching on our favourite snacks and meals during the holiday season. The entertainment giant decided to jump on board foodpanda\'s platform to raise the brand\'s visibility in the lives of the local people.',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_Screenshot-2024-08-08-at-11.26.00-AM.jpeg',
    layout: 'img-right'
  },
  {
    category: 'CPG | PRODUCT LAUNCH',
    title: 'Mars Wrigley found the perfect audience for its new product with panda ads',
    description: 'Eclipse mints are made by Mars Wrigley, the world’s leading manufacturer of chocolate, chewing gum, mints and fruity confections. When it came to launching a fresh new product in the range in Hong Kong, they knew they needed a fresh and creative solution. That’s where panda ads came in to serve up the right mix of audience targeting and creative media to get consumers buying.',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_PandaAds_Eclipse_Thumbnail_v2-1536x864.jpeg',
    layout: 'img-left'
  },
  {
    category: 'SPORTS | BRAND AWARENESS',
    title: 'Under Armour teamed up with panda ads to drive awareness and brand love',
    description: 'Under Armour partnered with panda ads for a situational marketing campaign that took full advantage of the excitement of one of the world\'s most-watched sporting events through a full-funnel approach that maximised brand visibility, fan buzz, and connections with audiences at key moments.',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/11/panda_ads_underarmour_customerstory_blogheader-1-1536x864.jpg',
    layout: 'img-right'
  }
];

const CaseStudiesView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="py-24 bg-[#f8f9fa] px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333e48] mb-6 leading-tight">
            Discover case studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl leading-relaxed">
            Explore success stories from our brand partners across verticals like CPG (FMCG), banking & finance, travel, retail, and more.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 bg-white px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {CASE_STUDIES.map((study, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                study.layout === 'img-right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full animate-in zoom-in-95 duration-700">
                <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[1.5/1]">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="text-[#ff2b85] font-black text-lg uppercase tracking-wider">
                  {study.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#333e48] leading-[1.1]">
                  {study.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                  {study.description}
                </p>
                <button className="bg-[#ff2b85] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-tight hover:opacity-90 transition-all shadow-lg active:scale-95">
                  Read more
                </button>
              </div>
            </div>
          ))}
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

export default CaseStudiesView;
