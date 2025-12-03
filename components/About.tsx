import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-200 rounded-3xl transform rotate-3"></div>
            <img
              src="/family.jpg"
              alt="Shavol Morris"
              className="relative rounded-3xl shadow-lg w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Meet Shavol Morris
            </h2>
            <h3 className="text-xl text-brand-700 font-medium mb-6">
              Dependable. Resourceful. Connected.
            </h3>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Hello! I'm Shavol, the founder of TaskVol. With a background as a pastor, I’ve spent my life serving others, managing complex logistics with grace, and ensuring the details never get missed.
              </p>
              <p>
                I bring <strong>3–4 years of dedicated payroll experience</strong> and over <strong>10 years of event coordination expertise</strong> to the table. I know that for busy founders, trust is everything. You need someone who doesn't just do the task, but owns the outcome.
              </p>
              <p>
                Whether it's ensuring your team is paid accurately or managing the high-stakes environment of a live event, I bring a calm, professional presence to your business.
              </p>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-sm font-medium text-slate-700 italic text-center">
                "My goal is to give you back the mental space to lead your business."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;