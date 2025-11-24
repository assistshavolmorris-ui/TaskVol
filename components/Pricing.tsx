import React from 'react';
import Button from './ui/Button';
import { Check } from 'lucide-react';

interface PricingProps {
  onBookClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBookClick }) => {
  const packages = [
    {
      name: "Payroll Essentials",
      price: "From $300/mo",
      description: "Perfect for small teams needing reliable monthly processing.",
      features: ["Up to 5 employees", "Bi-weekly processing", "Tax filing support", "Monthly reports"],
      highlight: true
    },
    {
      name: "Admin Support",
      price: "From $35/hr",
      description: "Flexible hourly support or monthly retainer options.",
      features: ["Email & Calendar management", "Data entry & Research", "Vendor coordination", "10 hour minimum retainer"],
      highlight: false
    },
    {
      name: "Event Coordination",
      price: "Custom Quote",
      description: "Project-based pricing depending on event size and complexity.",
      features: ["Vendor management", "Day-of coordination", "Logistics planning", "Speaker/Guest liaison"],
      highlight: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Simple Packages</h2>
          <p className="text-slate-600">
            Starting points for our partnership. Custom packages available after discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border ${
                pkg.highlight 
                  ? 'border-brand-500 bg-brand-50/30 shadow-lg ring-1 ring-brand-500' 
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              {pkg.highlight && (
                <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold text-slate-900">{pkg.price}</span>
              </div>
              <p className="text-slate-600 text-sm mb-6 min-h-[40px]">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check size={16} className="text-brand-600 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={onBookClick} 
                variant={pkg.highlight ? 'primary' : 'outline'} 
                fullWidth
              >
                Inquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;