import React from 'react';
import { COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Logo color="light" className="mb-6 scale-90 origin-left" />
            <p className="text-sm leading-relaxed mb-6">
              Southern Utah's premier collision repair and auto paint specialists. Restoring vehicles and customer confidence since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-red transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-brand-red transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <strong className="block text-slate-200">Phone:</strong>
                <a href={`tel:${COMPANY_INFO.phone1}`} className="hover:text-brand-red">{COMPANY_INFO.phone1}</a>
                <span className="mx-2">/</span>
                <a href={`tel:${COMPANY_INFO.phone2}`} className="hover:text-brand-red">{COMPANY_INFO.phone2}</a>
              </li>
              <li>
                <strong className="block text-slate-200">Email:</strong>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-red">{COMPANY_INFO.email}</a>
              </li>
              <li>
                <strong className="block text-slate-200">Address:</strong>
                Hurricane, {COMPANY_INFO.location}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
             <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Business Hours</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex justify-between">
                 <span>Monday - Friday</span>
                 <span className="text-white">8:00 AM - 5:00 PM</span>
               </li>
               <li className="flex justify-between">
                 <span>Saturday</span>
                 <span className="text-slate-600">Closed</span>
               </li>
               <li className="flex justify-between">
                 <span>Sunday</span>
                 <span className="text-slate-600">Closed</span>
               </li>
             </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Black Ridge Collision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;