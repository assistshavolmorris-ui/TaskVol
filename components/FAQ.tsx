import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do you handle my specific payroll system?",
      answer: "Most likely, yes! I have experience with major platforms like Gusto, ADP, and QuickBooks Payroll. If you use a niche system, I'm quick to adapt and learn new interfaces."
    },
    {
      question: "Do you offer one-time projects?",
      answer: "Absolutely. While many clients retain me for ongoing payroll and admin support, I am available for one-off event coordination or specific administrative projects."
    },
    {
      question: "Can you sign an NDA?",
      answer: "Yes. Privacy and confidentiality are paramount. I am happy to sign a Non-Disclosure Agreement before we begin any work."
    },
    {
      question: "What is your typical lead time?",
      answer: "For payroll setup, I usually need 1-2 weeks to ensure everything is compliant. for administrative tasks, I can often start within 48 hours of our discovery call."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;