import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1553440683-189a58c96eed?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Car Detailing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-red font-display uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-bold">
              Serving Southern Utah Since 2010
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-tight mb-6">
              Restoring <br/> Perfection
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Premium collision repair and color matching. We don't just fix your car; we restore your peace of mind. Experience the Black Ridge standard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button variant="primary">Get an Estimate</Button>
              </a>
              <a href={`tel:${COMPANY_INFO.phone1}`}>
                <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-slate-900">
                  {COMPANY_INFO.phone1}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;