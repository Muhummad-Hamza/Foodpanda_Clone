
import React from 'react';

interface SearchResult {
  title: string;
  category?: string;
  date: string;
  image: string;
}

const SEARCH_RESULTS: SearchResult[] = [
  {
    title: 'Maximising omnichannel campaigns with retail media networks',
    date: '11.12.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/12/Omnichannel-campaigns.jpg'
  },
  {
    title: 'Under Armour Taiwan',
    date: '19.11.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2023/12/Under-Armour.jpg'
  },
  {
    title: '5 Effective ways to leverage retail media networks this holiday season',
    date: '07.11.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/11/Holiday-season.jpg'
  },
  {
    title: 'Cookies are here to stay but first-party data still takes the cake',
    date: '07.11.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/11/First-party-data.jpg'
  },
  {
    title: 'Thank You – Trends Report',
    date: '06.09.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/09/Thank-You.jpg'
  },
  {
    title: 'Trends report',
    date: '28.08.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/08/Trends-Report.jpg'
  },
  {
    title: '6 Ways to reach high-value customers with panda ads',
    date: '08.08.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/08/High-value-customers.jpg'
  },
  {
    title: 'Retail media 101: The new frontier in digital advertising',
    date: '30.07.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/07/Retail-media-101.jpg'
  },
  {
    title: 'APAC food delivery and Q-commerce insights',
    date: '30.07.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/07/APAC-food-delivery.jpg'
  },
  {
    title: 'Coca-Cola Philippines',
    date: '23.07.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2023/12/Coca-Cola.jpg'
  },
  {
    title: 'Amazon Prime Philippines',
    date: '23.07.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2023/12/Amazon-Prime-Video.jpg'
  },
  {
    title: 'Mars Wrigley Hong Kong',
    date: '20.06.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2023/12/Mars-Wrigley.jpg'
  }
];

const SearchView: React.FC<{ query: string }> = ({ query }) => {
  return (
    <section className="bg-white py-20 px-4 md:px-20 min-h-screen animate-in fade-in duration-700">
      <div className="max-w-[1440px] mx-auto">
        {/* Results Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-[#333e48] tracking-tight">
            Search results for : <span className="text-gray-900">{query || '...'}</span>
          </h1>
        </div>

        {/* Results Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-24">
          {SEARCH_RESULTS.map((item, idx) => (
            <div key={idx} className="flex flex-col rounded-[24px] overflow-hidden bg-[#f7f7f7] group cursor-pointer hover:shadow-lg transition-all">
              <div className="relative aspect-[1.4/1] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Checkbox decoration */}
                <div className="absolute top-4 left-6">
                  <div className="w-5 h-5 rounded border border-white/40"></div>
                </div>

                {/* Eye icon overlay - Top-right */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gray-400/80 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 group-hover:bg-[#ff2b85] transition-colors">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
              
              <div className="p-8 pt-10 flex flex-col h-[280px]">
                <h3 className="text-2xl font-black text-[#333e48] leading-[1.15] mb-auto group-hover:text-[#ff2b85] transition-colors">
                  {item.title}
                </h3>
                <div className="mt-8">
                  <span className="text-gray-400 font-bold text-sm tracking-tight">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 pb-24">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black bg-gray-200 text-gray-900 transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black bg-white text-gray-400 hover:bg-gray-100 transition-colors">
            2
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchView;
