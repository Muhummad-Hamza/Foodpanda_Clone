
import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Logo } from '../constants';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white py-24 px-4 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <button onClick={() => onNavigate?.('Home')} className="hover:opacity-80 transition-opacity">
            <Logo />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <h4 className="font-bold text-xl mb-8 text-white">Navigate</h4>
            <ul className="space-y-6">
              <li>
                <button 
                  onClick={() => onNavigate?.('Home')} 
                  className="hover:text-[#ff2b85] transition-colors font-bold text-gray-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('About')} 
                  className="hover:text-[#ff2b85] transition-colors font-bold text-gray-200"
                >
                  About
                </button>
              </li>
              <li><button className="hover:text-[#ff2b85] transition-colors font-bold text-gray-200">Contact</button></li>
              <li><button className="hover:text-[#ff2b85] transition-colors font-bold text-gray-200">Newsroom</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-8 text-white">Collaborate</h4>
            <ul className="space-y-6">
              <li><button className="hover:text-[#ff2b85] transition-colors font-bold text-gray-200">Explore careers</button></li>
              <li><button className="hover:text-[#ff2b85] transition-colors font-bold text-gray-200">Become a rider</button></li>
              <li><button className="hover:text-[#ff2b85] transition-colors font-bold text-gray-200">Feed your team</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-8 text-white">Follow us on</h4>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-[#ff2b85] transition-colors"><Facebook className="w-8 h-8" /></a>
              <a href="#" className="text-white hover:text-[#ff2b85] transition-colors"><Linkedin className="w-8 h-8" /></a>
              <a href="#" className="text-white hover:text-[#ff2b85] transition-colors"><Instagram className="w-8 h-8" /></a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800 text-lg text-gray-300 font-medium">
          <p>Copyright © 2025 foodpanda</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
