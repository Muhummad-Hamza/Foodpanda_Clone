
import React from 'react';

const NEWS_CARDS = [
  {
    category: 'Business',
    title: 'foodpanda Partners with Fiserv to Enable More Streamlined and Secure eCommerce Payments Across Asia',
    date: '23.10.2024',
    bg: 'https://www.foodpanda.com/wp-content/uploads/2024/05/02.jpg'
  },
  {
    category: 'Press Releases',
    title: 'foodpanda Singapore launches inaugural Rider Safety Month in partnership with Traffic Police',
    date: '07.10.2024',
    bg: 'https://www.foodpanda.com/wp-content/uploads/2024/10/fp-singapore.webp'
  },
  {
    category: 'Press Releases',
    title: "foodpanda Malaysia launches 'Jejak Panda' to provide accessible income opportunities",
    date: '13.08.2024',
    bg: 'https://cj.my/wp-content/uploads/2024/08/Jejak_Panda_Pantai_Dalam_3-1300x500.jpg'
  },
  {
    category: 'Merchants',
    title: 'foodpanda strengthens merchant growth with refined onboarding milestones in Asia',
    date: '17.12.2023',
    bg: 'https://www.foodpanda.com/wp-content/uploads/2025/12/EDW_0166-1.jpg'
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          Have you heard?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The industry is changing fast! Stay up to date with foodpanda press. Catch up on the lates news, updates and reports here.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto overflow-x-auto pb-8 scrollbar-hide">
        <div className="flex gap-6 min-w-max">
          {NEWS_CARDS.map((card, idx) => (
            <div key={idx} className="w-[320px] h-[450px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl transition-transform hover:-translate-y-2">
              <img src={card.bg} alt={card.category} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">{card.category}</span>
                <h3 className="text-xl font-bold leading-tight mb-4">{card.title}</h3>
                <span className="text-sm opacity-60 font-medium">{card.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
