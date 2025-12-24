
import React from 'react';

const AboutIntro: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight mb-10 max-w-3xl">
          From food delivery to your daily convenience companion.
        </h2>
        <div className="max-w-4xl space-y-8 text-lg text-gray-700 leading-relaxed font-medium">
          <p>
            A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform. 
            Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of 
            customers in APAC.
          </p>
          <p>
            Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in 
            more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, 
            Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar.
          </p>
          <p>
            Thanks to dedicated partners, riders, and a team united by shared values, foodpanda is now providing 
            millions with a convenient way to get food and groceries in a few taps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
