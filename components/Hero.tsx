import React from 'react';
import Button from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onIntakeClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick, onIntakeClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Accepting New Clients for 2026
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Your Trusted <br className="hidden md:block" />
            <span className="text-brand-600">Support Partner</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            TaskVol: Your right-hand operations partner — taking care of payroll, admin, and design so you can focus on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button onClick={onBookClick} size="lg" className="w-full sm:w-auto shadow-brand-500/20 shadow-lg">
              Free Discovery Call
            </Button>
            <Button onClick={onIntakeClick} variant="outline" size="lg" className="w-full sm:w-auto">
              Share Project Details
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-500" />
              <span>Payroll Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-500" />
              <span>Admin Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-500" />
              <span>Event Coordination</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-500" />
              <span>Creative Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;