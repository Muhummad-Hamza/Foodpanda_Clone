
import React from 'react';

const BENEFITS = [
  {
    title: 'REACH NEW CUSTOMERS',
    image: 'public/assests/patners11.webp'
  },
  {
    title: 'BOOST YOUR OVER VOLUME',
    image: 'public/assests/patners12.jpg'
  },
  {
    title: 'DRIVE MORE SALES',
    image: 'public/assests/patners13.jpg'
  },
  {
    title: 'INCREASE CUSTOMER SATISFACTION',
    image: 'public/assests/patners14.jpg'
  }
];

const WhyPartner: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#333e48] mb-16">
          Why partner with foodpanda?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((b, idx) => (
            <div key={idx} className="relative aspect-[0.75/1] overflow-hidden group cursor-pointer shadow-md rounded-[4px]">
              <img 
                src={b.image} 
                alt={b.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
              <div className="absolute top-8 left-6 right-6">
                <h3 className="text-white text-lg font-black leading-tight drop-shadow-md">
                  {b.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
