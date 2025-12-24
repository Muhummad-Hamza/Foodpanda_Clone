
import React, { useState, useMemo } from 'react';

type NewsCategory = 'All' | 'Consumer trends' | 'Industry insights' | 'panda ads';

interface NewsItem {
  title: string;
  date: string;
  image: string;
  category: Exclude<NewsCategory, 'All'>;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    title: 'Maximising omnichannel campaigns with retail media networks',
    date: '11.12.2024',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/12/jpeg-optimizer_Maximising-omnichannel-campaigns-with-Retail-Media-Networks.png',
    category: 'Industry insights'
  },
  {
    title: '5 Effective ways to leverage retail media networks this holiday season',
    date: '07.11.2024',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/11/jpeg-optimizer_blog-visual.png',
    category: 'Industry insights'
  },
  {
    title: 'Cookies are here to stay but first-party data still takes the cake',
    date: '07.11.2024',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/11/jpeg-optimizer_blog-header_v2.png',
    category: 'Industry insights'
  },
  {
    title: '6 Ways to reach high-value customers with panda ads',
    date: '08.08.2024',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/08/foodpanda-panda-ads-6-ways-to-help-brands-blog-header.webp',
    category: 'panda ads'
  },
  {
    title: 'Retail media 101: The new frontier in digital advertising',
    date: '30.07.2024',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/08/foodpanda-panda-ads-Retail-media-trends-header-scaled.webp',
    category: 'Industry insights'
  },
  {
    title: 'APAC food delivery and Q-commerce insights',
    date: '30.07.2024',
    image: 'https://pandaads.foodpanda.com/wp-content/uploads/2024/08/panda-ads-foodpanda-Shopper-Trends-Blog-Header-Image.webp',
    category: 'Consumer trends'
  }
];

const NewsroomView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<NewsCategory>('All');

  const filteredNews = useMemo(() => {
    if (activeFilter === 'All') return NEWS_ITEMS;
    return NEWS_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-4 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-7xl md:text-8xl font-extrabold text-[#333e48] mb-12 tracking-tight">
            Press Releases
          </h1>

          {/* Featured Post - Only show if 'All' or 'Industry insights' is active */}
          {(activeFilter === 'All' || activeFilter === 'Industry insights') && (
            <div className="flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-sm border border-gray-100 mb-24 animate-in slide-in-from-bottom-4 duration-700">
              <div className="flex-1 relative aspect-video lg:aspect-auto">
                <img 
                  src="https://pandaads.foodpanda.com/wp-content/uploads/2024/12/jpeg-optimizer_Maximising-omnichannel-campaigns-with-Retail-Media-Networks.png" 
                  alt="Featured news" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Eye icon overlay */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:flex w-24 h-24 bg-gray-400 rounded-full items-center justify-center border-[8px] border-white z-10">
                   <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                   </svg>
                </div>
              </div>
              <div className="flex-1 bg-[#f1f4f6] p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#ff2b85] font-black text-lg uppercase tracking-wider">INDUSTRY INSIGHTS</span>
                  <span className="text-gray-500 font-medium text-lg">11 Dec 2024</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#333e48] leading-tight max-w-lg">
                  Maximising omnichannel campaigns with retail media networks
                </h2>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Grid & Filters Section */}
      <section className="py-16 bg-white px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <h2 className="text-4xl font-extrabold text-[#333e48]">
              {activeFilter === 'All' ? 'Discover latest news' : `${activeFilter} Archives - panda ads by foodpanda`}
            </h2>
            
            <div className="flex flex-wrap items-center gap-3">
              {(['All', 'Consumer trends', 'Industry insights', 'panda ads'] as NewsCategory[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-bold border-2 transition-all duration-300
                    ${activeFilter === filter 
                      ? 'bg-[#333e48] border-[#333e48] text-white' 
                      : 'bg-white border-gray-900 text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {filteredNews.map((item, idx) => (
              <div key={idx} className="flex flex-col rounded-[32px] overflow-hidden bg-[#f7f7f7] group cursor-pointer animate-in fade-in duration-500">
                <div className="relative aspect-[1.5/1] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Eye icon overlay mini */}
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center border-[6px] border-[#f7f7f7] z-10 transition-transform group-hover:scale-110">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-extrabold text-[#333e48] leading-[1.2] mb-12 flex-grow group-hover:text-[#ff2b85] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-auto">
                    <span className="text-gray-500 font-bold text-sm tracking-tight">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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

export default NewsroomView;
