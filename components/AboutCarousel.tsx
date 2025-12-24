
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 'partners',
    title: 'Growing with our partners',
    description: 'We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?',
    image: '/assests/fp-about-2.webp',
    bg: 'bg-white'
  },
  {
    id: 'customers',
    title: 'Customers come first',
    description: 'We’re far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business. Download the app to experience true convenience.',
    image: '/assests/fp-about-1.webp',
    bg: 'bg-[#f7f7f7]'
  },
  {
    id: 'heroes',
    title: 'Our riders are our heroes',
    description: 'We’re here to provide exciting opportunities and empower work flexibility. Learn more about our riders’ journey or sign up to become one.',
    image: 'assests/fp-about-3.webp',
    bg: 'bg-white'
  }
];

const AboutCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section className={`py-20 px-4 md:px-20 transition-colors duration-500 ${slide.bg}`}>
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10 animate-in slide-in-from-left duration-700">
          <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
            {slide.title}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-lg font-medium">
            {slide.description}
          </p>
          
          <div className="flex items-center gap-8 pt-4">
            <button 
              onClick={prev}
              className="text-[#ff2b85] hover:opacity-70 transition-all hover:scale-110 active:scale-90"
            >
              <ArrowLeft className="w-8 h-8 stroke-[3]" />
            </button>
            <div className="flex gap-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="text-[#ff2b85] hover:opacity-70 transition-all hover:scale-110 active:scale-90"
            >
              <ArrowRight className="w-8 h-8 stroke-[3]" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full animate-in slide-in-from-right duration-700">
          <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[1.5/1]">
            <img 
              key={slide.image}
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
