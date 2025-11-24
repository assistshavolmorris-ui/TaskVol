import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemOutcome: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Stop letting details slip through the cracks
          </h2>
          <p className="text-slate-600">
            Running a business is hard enough without getting bogged down in back-office chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* The Struggle */}
          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">😫</span> The Struggle
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Payroll errors and late submissions causing panic.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Event logistics create stress and distract from the big picture.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Important emails and calendar details get missed.</span>
              </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">😌</span> The Solution
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-brand-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Payroll handled accurately, compliantly, and on time.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-brand-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Events planned, vendors managed, and day-of support sorted.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-brand-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Inbox and calendar under control, giving you peace of mind.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-medium text-brand-800 italic">
            "I’m the help you’ve been looking for."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemOutcome;