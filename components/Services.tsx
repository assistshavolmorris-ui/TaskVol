import React from 'react';
import { DollarSign, Calendar, Mail, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Payroll Support",
      description: "Ensure your team gets paid correctly and on time, every time.",
      bullets: ["Setup & Processing", "Changes & Reporting", "Compliance Checks", "Tax Document Organization"]
    },
    {
      icon: Mail,
      title: "Admin Support",
      description: "Reclaim your time by outsourcing the daily operational tasks.",
      bullets: ["Email Management", "Calendar Scheduling", "Research & Data Entry", "Document Preparation"]
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "From vendor calls to day-of execution, I handle the logistics.",
      bullets: ["Vendor Outreach", "Speaker Communications", "Venue & Layout Planning", "Print Asset Management"]
    },
    {
      icon: Palette,
      title: "Creative Services",
      description: "Access specialized creative work tailored to your needs.",
      bullets: ["Branding & Web Design", "Video Editing", "Graphic Design", "Content Creation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Specialized in payroll, but equipped to handle the full spectrum of your business administration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-400 rounded-full"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;