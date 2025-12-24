
import React, { useState, useMemo } from 'react';

const MAIN_FILTERS = ['All', 'Business', 'Campaigns', 'Editorials', 'Food delivery', 'Infographics'];
const SUB_FILTERS = ['Merchants', 'panda ads', 'pandago', 'Press Releases', 'Q-commerce', 'Riders', 'Tech'];

interface NewsItem {
  category: string;
  title: string;
  date: string;
  image: string;
  type: string; // The category it belongs to for filtering
}

const NEWS_DATA: NewsItem[] = [
  // Business
  {
    category: 'APAC',
    type: 'Business',
    title: 'foodpanda brings unmatched value to pandapro members with one-of-a-kind ride-hailing partnerships across Asia',
    date: '21.11.2025',
    image: 'https://www.foodpanda.com/wp-content/uploads/2025/12/Ride_Hailing_Release___Key_Visual-v2.jpg'
  },
  {
    category: 'APAC',
    type: 'Business',
    title: 'foodpanda delivered 2024',
    date: '31.01.2025',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/10/website_banner_1440x480px.webp'
  },
  {
    category: 'APAC',
    type: 'Business',
    title: 'foodpanda Partners with Fiserv to Enable More Streamlined and Secure eCommerce Payments Across Asia',
    date: '23.10.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/10/fp-about-2.webp'
  },
  {
    category: 'TAIWAN',
    type: 'Business',
    title: 'Uber Eats 併購 Delivery Hero 旗下之 foodpanda 台灣外送事業',
    date: '14.05.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/05/DH_sRGB_230609_Delivery_Hero_17_Stills_10922-scaled-1.jpg'
  },
  // Campaigns
  {
    category: 'SINGAPORE',
    type: 'Campaigns',
    title: 'Finally, something in Yew Tee – foodpanda spices up Singapore’s “most dull” neighbourhood with unlimited free deliveries',
    date: '12.08.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/10/foodpanda-gives-Yew-Tee-unlimited-free-deliveries-scaled-1.webp'
  },
  {
    category: 'APAC',
    type: 'Campaigns',
    title: "foodpanda celebrates Pau-Pau's first birthday, encouraging people to 'live like a panda'",
    date: '10.01.2023',
    image: 'https://www.foodpanda.com/wp-content/uploads/2023/01/foodpanda-paupau.jpeg'
  },
  {
    category: 'CAMBODIA',
    type: 'Campaigns',
    title: 'Introducing Pau-Pau: foodpanda unveils first-of-its-kind brand ambassador to champion empowerment and sustainability',
    date: '03.01.2022',
    image: 'https://www.foodpanda.com/wp-content/uploads/2022/01/Pau-Pau-image-10-1.jpg'
  },
  // Editorials
  {
    category: 'APAC',
    type: 'Editorials',
    title: 'Catching the retail media wave: Why brands should take the plunge now',
    date: '23.05.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/05/EDW_0192-scaled.jpg'
  },
  {
    category: 'APAC',
    type: 'Editorials',
    title: "'Tasty Thursday', a 24/7 EAP, and more: foodpanda's approach to delivering the employee experience",
    date: '03.04.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/04/042A5024-scaled.jpg'
  },
  {
    category: 'APAC',
    type: 'Editorials',
    title: "foodpanda's Raphael Zennou on the art of 'quick commerce'",
    date: '07.03.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/03/AR5A0046-2-scaled.jpg'
  },
  // Food delivery
  {
    category: 'APAC',
    type: 'Food delivery',
    title: 'foodpanda launches curated meals for solo diners with ‘meal for one’ across Asia',
    date: '11.07.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/07/mfo1.png'
  },
  {
    category: 'SINGAPORE',
    type: 'Food delivery',
    title: 'foodpanda introduces new pandapro perks with unlimited free delivery and surprise deals',
    date: '10.07.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/07/pandapro.png'
  },
  // Infographics
  {
    category: 'APAC',
    type: 'Infographics',
    title: 'pandapurpose 2023',
    date: '27.06.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/06/APAC_pandapurpose-2023-cover-image-for-Newsroom-LinkedIn_FGD-190757_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.jpg'
  },
  {
    category: 'APAC',
    type: 'Infographics',
    title: 'foodpanda Delivery & Retail Trends 2023',
    date: '28.02.2024',
    image: 'https://www.foodpanda.com/wp-content/uploads/2024/05/website_banner_1440x480px.png'
  }
];

const NewsroomGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showMore, setShowMore] = useState(false);

  const filteredNews = useMemo(() => {
    if (activeFilter === 'All') return NEWS_DATA;
    return NEWS_DATA.filter(item => item.type === activeFilter);
  }, [activeFilter]);

  const getArchiveTitle = () => {
    if (activeFilter === 'All') return 'Discover latest news';
    return `${activeFilter} Archives - foodpanda | food and more, delivered`;
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Archives Header & Filters */}
        <div className="flex flex-col space-y-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <h2 className={`font-extrabold text-[#333e48] max-w-xl ${activeFilter === 'All' ? 'text-4xl' : 'text-2xl pt-2'}`}>
              {getArchiveTitle()}
            </h2>
            
            <div className="flex flex-col items-end gap-3">
              <div className="flex flex-wrap items-center justify-end gap-2">
                {MAIN_FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-1.5 rounded-full text-sm font-bold border transition-all
                      ${activeFilter === filter 
                        ? 'bg-[#333e48] border-[#333e48] text-white' 
                        : 'bg-white border-gray-300 text-gray-700 hover:border-gray-900'
                      }`}
                  >
                    {filter}
                  </button>
                ))}
                <button 
                  onClick={() => setShowMore(!showMore)}
                  className="px-5 py-1.5 rounded-full text-sm font-bold border border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white transition-all"
                >
                  {showMore ? 'Show less' : 'Show more'}
                </button>
              </div>

              {/* Sub Filters Row */}
              {showMore && (
                <div className="flex flex-wrap items-center justify-end gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  {SUB_FILTERS.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-5 py-1.5 rounded-full text-sm font-bold border transition-all
                        ${activeFilter === filter 
                          ? 'bg-[#333e48] border-[#333e48] text-white' 
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-900'
                        }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, idx) => (
              <div key={idx} className="flex flex-col rounded-[32px] overflow-hidden bg-[#f7f7f7] group cursor-pointer hover:shadow-md transition-all">
                <div className="aspect-[1.5/1] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <span className="text-[#ff2b85] font-black text-xs uppercase tracking-widest mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#333e48] leading-[1.2] mb-10 flex-grow group-hover:text-[#ff2b85] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <span className="text-gray-500 font-bold text-sm tracking-tight">{item.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl font-bold text-gray-400">No news found in this archive.</p>
            </div>
          )}
        </div>

        {/* Pagination - As seen in Screenshot 4 */}
        <div className="flex justify-center items-center gap-2 pb-10">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button 
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                ${num === 1 
                  ? 'bg-gray-200 text-gray-900' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsroomGrid;
