import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-slate-900 uppercase mb-4">Our Expertise</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Complete auto body restoration services using state-of-the-art technology and premium materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/20 group-hover:via-slate-900/70 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-1 bg-brand-red" />
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide">{service.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm opacity-90 group-hover:opacity-100 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;