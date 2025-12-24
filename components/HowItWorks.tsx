
import React from 'react';

const STEPS = [
  {
    id: 1,
    title: 'The customer adds their delivery address in the app or on the website and then selects a store or restaurant in their area.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="4" fill="#ff2b85" />
        <path d="M4 21V19C4 16.7909 5.79086 15 8 15H16C18.2091 15 20 16.7909 20 19V21" stroke="#ff2b85" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 11V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'You accept the order with the reading tablet and prepare it for the collection time.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="4" width="14" height="16" rx="2" fill="#ff2b85" />
        <path d="M9 10L11 12L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7" y="15" width="10" height="2" rx="1" fill="white" fillOpacity="0.5" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'A rider will come to you at the specified time and collect the order. It is then delivered directly to the customer!',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#ff2b85" strokeWidth="2" />
        <path d="M12 7V12L15 15" stroke="#ff2b85" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="7" r="3" fill="#ff2b85" fillOpacity="0.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Twice per month you receive payments for the orders you have received via foodpanda. You automatically receive a basis for the deposit and a detailed insight into your sales statistics.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="16" height="12" rx="2" fill="#ff2b85" />
        <path d="M4 10H20" stroke="white" strokeWidth="2" />
        <circle cx="17" cy="14" r="1.5" fill="white" />
      </svg>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#f1f4f6] py-24 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#333e48] mb-16">
          How does it work?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.id} className="bg-white rounded-[24px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-8 p-4 bg-gray-50 rounded-2xl">
                {step.icon}
              </div>
              <h3 className="text-4xl font-black text-[#333e48] mb-4">{step.id}</h3>
              <p className="text-sm font-bold text-[#333e48] leading-relaxed">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
