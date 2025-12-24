
import React, { useState } from 'react';

const COUNTRIES = [
  { 
    name: 'Malaysia', 
    title: 'Are you ready to reach more customers?', 
    desc: "Don't miss out on earnings. Join foodpanda to reach more customers and increase revenue.", 
    btn: "Let's get started!",
    img: 'public/assests/patners2.webp' 
  },
  { 
    name: 'Philippines', 
    title: 'Are you ready to expand your reach and connect with new customers?', 
    desc: 'Let more customers find you. Partner with foodpanda and increase online visibility.', 
    btn: "Get Started",
    img: 'public/assests/patners3.webp' 
  },
  { 
    name: 'Bangladesh', 
    title: 'Ready to expand your reach to more customers?', 
    desc: "Don't just serve locals, serve your city. Let foodpanda connect you to new customers.", 
    btn: "Get Started",
    img: 'public/assests/patners5.webp' 
  },
  { 
    name: 'Hong Kong', 
    title: 'Would you like to increase your customer base and brand reach?', 
    desc: "foodpanda's campaigns and offers puts your restaurant in front of thousands of customers.", 
    btn: "Get started!",
    img: 'public/assests/patners4.webp' 
  },
  { 
    name: 'Pakistan', 
    title: 'Ready to expand your reach?', 
    desc: "Don't miss out on earnings. Join foodpanda to reach more customers and increase revenue.", 
    btn: "Get started now!",
    img: 'public/assests/patners6.webp' 
  },
  { 
    name: 'Singapore', 
    title: 'Are you ready to reach new customers?', 
    desc: 'Boost your profits. Get more orders and better margins when you partner with foodpanda.', 
    btn: "Sign Up Now",
    img: 'public/assests/patners7.webp' 
  },
  { 
    name: 'Taiwan', 
    title: 'Would you like to boost customer reach and revenue?', 
    desc: "Don't miss out on earnings. Join foodpanda to reach more customers and increase revenue.", 
    btn: "Start now!",
    img: 'public/assests/patners8.webp' 
  },
  { 
    name: 'Cambodia', 
    title: 'Looking to grow your business with your customers?', 
    desc: "Don't wait – Sign up now to start growing your business with deliveries!", 
    btn: "Get Started Now!",
    img: 'public/assests/patners9.webp' 
  },
  { 
    name: 'Laos', 
    title: 'Are you ready to take your success further?', 
    desc: "Achieve more success and sales by delivering your food and products out to your customers!", 
    btn: "Start now!",
    img: 'public/assests/patners10.webp' 
  },
  { 
    name: 'Myanmar', 
    title: 'Do you want your business to go further?', 
    desc: "Don't wait – Sign up now to be our partner and reach further with your business!", 
    btn: "Start now!",
    img: 'public/assests/patners7.webp' 
  },
];

const PartnersIntro: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

  return (
    <section className="bg-[#f7f7f7] py-20 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#333e48] mb-6">
          Become a restaurant or local shop partner
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Take your business to new heights by partnering with foodpanda, the leading delivery service trusted by businesses large and small. We dare to always go further, helping you reach untapped customer bases, boost order volume, and drive more sales.
        </p>

        {/* Country Picker */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
          {COUNTRIES.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedCountry(c)}
              className={`px-6 py-2 rounded-full text-xs font-bold border-2 transition-all duration-300
                ${selectedCountry.name === c.name 
                  ? 'bg-black border-black text-white shadow-md' 
                  : 'bg-white border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white'
                }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Country Detail Feature Area */}
      <div className="max-w-[1400px] mx-auto bg-white rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm animate-in fade-in zoom-in-95 duration-500">
        <div className="flex-1 space-y-8">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#333e48] leading-[1.1]">
            {selectedCountry.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
            {selectedCountry.desc}
          </p>
          <button className="bg-[#ff2b85] text-white px-8 py-3 rounded-full font-black text-sm hover:opacity-90 transition-opacity shadow-lg">
            {selectedCountry.btn}
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-[30px] overflow-hidden aspect-[1.6/1] shadow-xl">
            <img 
              key={selectedCountry.img}
              src={selectedCountry.img} 
              alt={selectedCountry.name} 
              className="w-full h-full object-cover animate-in fade-in duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersIntro;
