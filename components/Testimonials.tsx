import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Trusted by Founders</h2>
          <p className="text-slate-400">Don't just take my word for it.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img
              src="/family.jpg"
              alt="Dr. Dante Myers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote */}
          <div className="space-y-8">
            <div className="relative pl-8 border-l-4 border-brand-500">
              <Quote className="absolute -top-2 -left-5 text-brand-500 bg-slate-900 p-1" size={40} />
              <p className="text-xl leading-relaxed text-slate-200 italic mb-4">
                "Working with Shavol was a great experience. She brings an inquisitive mind and execution to tasks to help accomplish what is laid before her. She is dependable and loyal, and doesn't look at each assignment as just another task to complete. She takes ownership and that's exactly what anyone would ask for. I fully recommend working with Shavol."
              </p>
              <div>
                <p className="font-bold text-white">Dr. Dante Myers</p>
                <p className="text-brand-400 text-sm">Consultant & Realtor</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;