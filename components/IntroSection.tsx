
import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
            We’re here to help you live life the panda way. 
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Spend more time doing what you love – we’ll take care of tasty meals, fresh groceries and new flavours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
