import React from 'react';
import { Quote, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Trusted by Founders</h2>
          <p className="text-slate-400">Don't just take my word for it.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl ring-1 ring-white/10">
            <img 
              src="https://picsum.photos/seed/taskvolvideo/800/450" 
              alt="Ms. Mary Testimonial" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Play fill="white" className="text-white ml-1" size={32} />
              </div>
              <p className="font-medium text-lg">Watch Ms. Mary's Story</p>
              <p className="text-sm text-slate-300">Director, Community Outreach</p>
            </div>
          </div>

          {/* Quotes */}
          <div className="space-y-8">
            <div className="relative pl-8 border-l-4 border-brand-500">
              <Quote className="absolute -top-2 -left-5 text-brand-500 bg-slate-900 p-1" size={40} />
              <p className="text-xl leading-relaxed text-slate-200 italic mb-4">
                "Working with Shavol was a great experience. She brings an inquisitive mind and execution to tasks to help accomplish what is laid before her. She is dependable and loyal, and doesn't look at each assignment as just another task to complete. She takes ownership and that's exactly what anyone would ask for. I fully recommend working with Shavol."
              </p>
              <div>
                <p className="font-bold text-white">Dr. Dante Myers</p>
                <p className="text-brand-400 text-sm">Healthcare Professional</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;