import React from 'react';
import Button from './ui/Button';
import { Check } from 'lucide-react';

interface PricingProps {
  onBookClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBookClick }) => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-600 text-white text-sm font-bold mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Reserve Your Spot for 2026
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get exclusive access to comprehensive payroll and administrative support for Q1 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-10 md:p-12 border-2 border-brand-500 bg-gradient-to-br from-brand-50/50 to-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Q1 2026 Complete Support Bundle
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">Custom Quote</span>
              </div>
              <p className="text-slate-600">
                Three months of dedicated support tailored to your business needs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Bundle Includes:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <Check size={20} className="text-brand-600 mt-0.5 shrink-0" />
                  <span>Monthly payroll processing for your team</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <Check size={20} className="text-brand-600 mt-0.5 shrink-0" />
                  <span>Tax filing and compliance management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <Check size={20} className="text-brand-600 mt-0.5 shrink-0" />
                  <span>Administrative support hours package</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <Check size={20} className="text-brand-600 mt-0.5 shrink-0" />
                  <span>Priority scheduling and response times</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <Check size={20} className="text-brand-600 mt-0.5 shrink-0" />
                  <span>Quarterly business review and planning session</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button
                onClick={onBookClick}
                variant="primary"
                fullWidth
              >
                Reserve Your Spot Now
              </Button>
              <p className="text-sm text-slate-500 mt-4">
                Limited availability for Q1 2026. Book your discovery call today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;