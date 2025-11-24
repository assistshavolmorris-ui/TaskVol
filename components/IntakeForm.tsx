import React from 'react';
import Button from './ui/Button';

const IntakeForm: React.FC = () => {
  return (
    <section id="intake" className="py-20 bg-brand-600 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Not ready to book a call?</h2>
            <p className="text-brand-50 mb-8 text-lg">
              Tell me a bit about your project, and I'll get back to you via email with some initial thoughts and availability.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-50">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</span>
                <p>Share your needs</p>
              </div>
              <div className="flex items-center gap-3 text-brand-50">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</span>
                <p>Receive a custom email response</p>
              </div>
              <div className="flex items-center gap-3 text-brand-50">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">3</span>
                <p>No pressure to book immediately</p>
              </div>
            </div>
          </div>

          <form className="bg-white text-slate-800 p-6 md:p-8 rounded-2xl shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-2 border" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-2 border" placeholder="jane@company.com" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Interest</label>
                <select id="service" className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-2 border">
                  <option>Payroll Support</option>
                  <option>Administrative Support</option>
                  <option>Event Coordination</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                <textarea id="details" rows={3} className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-2 border" placeholder="Tell me about what you need help with..."></textarea>
              </div>
              <Button type="submit" variant="secondary" fullWidth>Submit Details</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;