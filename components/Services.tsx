import React from 'react';
import { DollarSign, Calendar, Mail, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Payroll Support",
      description: "Setup, processing, compliance checks, and tax document organization."
    },
    {
      icon: Mail,
      title: "Admin Support",
      description: "Email management, calendar scheduling, research, and data entry."
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "Vendor outreach, speaker communications, and venue planning."
    },
    {
      icon: Palette,
      title: "Creative Services",
      description: "Branding, web design, video editing, and content creation."
    }
  ];

  return (
    <section id="services" className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Specialized in payroll, but equipped to handle the full spectrum of your business administration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mb-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;