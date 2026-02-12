import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 uppercase mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-brand-red mb-8"></div>
            <p className="text-slate-600 text-lg mb-10">
              Ready to get your vehicle back in shape? Contact Ben or Damon today for a free estimate. We work directly with your insurance to make the process seamless.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-slate-900 mb-1">Phone</h4>
                  <a href={`tel:${COMPANY_INFO.phone1}`} className="block text-slate-600 hover:text-brand-red transition-colors text-lg font-medium">{COMPANY_INFO.phone1}</a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className="block text-slate-600 hover:text-brand-red transition-colors text-lg font-medium">{COMPANY_INFO.phone2}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Hurricane, {COMPANY_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-slate-900 mb-1">Hours</h4>
                  <p className="text-slate-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-sm border border-slate-100 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-slate-900 uppercase mb-6">Request Estimate</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone</label>
                  <input type="tel" className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="(435) ..." />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Vehicle Make/Model</label>
                <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="e.g. 2018 Ram 3500" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Message / Damage Description</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="Briefly describe the damage..." />
              </div>

              <Button type="submit" className="w-full">Send Request</Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;