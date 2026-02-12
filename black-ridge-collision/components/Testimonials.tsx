import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background texture accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 transform origin-top-right translate-x-32 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Client Trust</h2>
            <div className="w-20 h-1 bg-brand-red mb-6"></div>
            <p className="text-slate-300 text-lg">
              We treat every vehicle as if it were our own. Here is what our neighbors in Southern Utah have to say.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end">
             <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="fill-brand-red text-brand-red w-6 h-6" />)}
             </div>
             <p className="text-xl font-display font-bold">4.6/5 Average Rating</p>
             <p className="text-slate-400 text-sm">Based on 18+ Google Reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-sm relative border border-slate-700 hover:border-brand-red transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-slate-700 w-12 h-12 rotate-180 opacity-50" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-slate-300 italic mb-6 leading-relaxed line-clamp-6">
                "{review.content}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-white">
                    {review.author.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold font-display uppercase tracking-wide text-sm">{review.author}</h4>
                    <span className="text-xs text-slate-500 block">{review.date}</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;