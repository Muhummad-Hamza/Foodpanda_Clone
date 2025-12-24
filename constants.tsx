
import React from 'react';
import { NavItem } from './types';

export const BRAND_COLOR = '#ff2b85'; // Official Foodpanda Pink

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Newsroom', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'panda ads', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Careers', href: '#' },
];

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-48 h-48 flex items-center justify-center">
      {/* Recreating the Panda Face Icon SVG */}
      <img src="/assests/pandalogo.png" alt="" />
    </div>
      </div>
);
