
import React, { useState } from 'react';

const VALUES_DATA = [
  {
    id: 'prioritise',
    label: 'prioritise, decide, deliver',
    title: 'prioritise, decide, deliver',
    description: 'We are disciplined about focusing on what matters. When we face uncertainty, we put considered thought behind our actions and continue to deliver because it is only through execution that we learn, iterate, and improve.',
    image: '/public/assests/values_1.webp'
  },
  {
    id: 'customer',
    label: 'start with customer, end with customer',
    title: 'start with customer, end with customer',
    description: 'We want our consumers, vendors, riders, employees (including prospective ones) – the customers who make up our ecosystem – to keep coming back to the product, service, and experience we create. To achieve this, we keep them at the centre of everything we do.',
    image: 'public/assests/values_6.webp'
  },
  {
    id: 'own',
    label: 'own it end-to-end',
    title: 'own it end-to-end',
    description: 'We take pride in our work by delivering on our commitments. When a problem stretches past our areas of responsibility or expertise, we bridge the gap, we collaborate and seek out resources to get the job done.',
    image: 'public/assests/values_2.webp'
  },
  {
    id: 'status-quo',
    label: 'challenge the status quo',
    title: 'challenge the status quo',
    description: 'Our environment is ever-changing and we meet these changes head-on by adopting a progress-driven mindset. We value diverse inputs, we push the envelope to open up possibilities for innovation, growth and ultimately staying ahead – for our customers, for foodpanda, and ourselves.',
    image: 'public/assests/values_3.webp'
  },
  {
    id: 'we',
    label: 'we before me',
    title: 'we before me',
    description: 'Although we can make a difference individually, we will go further, accomplish more and touch more lives if we do it as one team and one organisation working towards our common goals.',
    image: 'public/assests/values_4.webp'
  },
  {
    id: 'tomorrow',
    label: 'plan for tomorrow, focus on today',
    title: 'plan for tomorrow, focus on today',
    description: 'Our environment is ever-changing and we meet these changes head-on by adopting a progress-driven mindset. We value diverse inputs, we push the envelope to open up possibilities for innovation, growth and ultimately staying ahead – for our customers, for foodpanda, and ourselves.',
    image: 'public/assests/values_5.webp'
  }
];

const ValuesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeValue = VALUES_DATA[activeIndex];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 md:px-20 bg-white relative">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <h2 className="text-6xl font-extrabold text-black mb-12">Our values</h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-20">
          {VALUES_DATA.map((v, idx) => (
            <button 
              key={v.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-8 py-3 rounded-full text-lg font-bold border-2 transition-all duration-300
                ${activeIndex === idx 
                  ? 'bg-black border-black text-white shadow-lg scale-105' 
                  : 'bg-white border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white'
                }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 transition-all duration-500 min-h-[500px]">
        <div className="flex-1 space-y-8">
          <h3 className="text-5xl font-extrabold text-black leading-tight break-words">
            {activeValue.title}
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            {activeValue.description}
          </p>
        </div>
        
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md aspect-square bg-[#fbe4ec] rounded-[80px] flex items-center justify-center p-12 shadow-inner transition-transform duration-500 hover:scale-105">
            <img 
              key={activeValue.image}
              src={activeValue.image} 
              alt={activeValue.title} 
              className="w-full h-auto drop-shadow-2xl animate-in fade-in zoom-in duration-500"
            />
          </div>
        </div>
      </div>

      {/* Back to top float button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 w-12 h-12 bg-[#ff2b85] text-white rounded-lg flex items-center justify-center shadow-xl hover:opacity-90 transition-all hover:scale-110 active:scale-95 z-40 group"
      >
        <svg className="w-6 h-6 rotate-180 transition-transform group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
};

export default ValuesSection;
