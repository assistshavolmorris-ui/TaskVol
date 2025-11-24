import React from 'react';
import { PhoneCall, FileText, Rocket } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: PhoneCall,
      title: "Book a 30-min Call",
      description: "We'll discuss your pain points and see if we're a good fit."
    },
    {
      icon: FileText,
      title: "Get a Tailored Plan",
      description: "I'll send a proposal with a clear scope and pricing."
    },
    {
      icon: Rocket,
      title: "Kickoff & Relief",
      description: "We onboard quickly, and I take the tasks off your plate."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600">Three simple steps to a lighter workload.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-brand-100 rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
                <step.icon className="text-brand-600" size={32} />
              </div>
              <div className="bg-brand-50 text-brand-800 font-bold px-3 py-1 rounded-full text-sm mb-4">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;