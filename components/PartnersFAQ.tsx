
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "How can I receive orders?",
    answer: "There are two ways to receive orders. Via a tablet, or if you have some kind of restaurant software (POS provider), it is also possible to connect it. In this case, indicate this during the connection process."
  },
  {
    question: "Are there any costs if I register on the site?",
    answer: "There is no cost for registering on the site. foodpanda only charges a commission if a sale has taken place. So you only have to pay when you sell something."
  },
  {
    question: "What are the opening hours like?",
    answer: "Choose your specific opening hours and temporarily close our service if you have a lot to do. We are there when you need us!"
  }
];

const PartnersFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#333e48] mb-12">
          Have more questions? Check it out here
        </h2>

        <div className="max-w-4xl mx-auto border-t border-gray-200">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-4"
              >
                <span className="text-xl font-extrabold text-[#333e48]">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-96 opacity-100 pb-8 px-4' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersFAQ;
