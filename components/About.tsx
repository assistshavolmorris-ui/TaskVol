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
              src="/me.jpg.jpg"
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
                Hi, my name is Shavol Morris and I'm the help you've been looking for!
              </p>
              <p>
                I created TaskVol because I've always been the person people turn to when they need things organized, simplified, and executed with care.
              </p>
              <p>
                I know what it's like to feel pulled in a million directions — and I also know the power of having the right support behind you.
              </p>
              <p>
                Today, I help busy professionals and entrepreneurs reclaim their time by taking on the tasks that slow them down: from admin and payroll to logistics, content, and creative work.
              </p>
              <p>
                I love helping people run their businesses (and lives) more smoothly. And if you're ready for structure, consistency, and less stress in 2026, I'd love to be in your corner.
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