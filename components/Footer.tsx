import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">TaskVol</h3>
            <p className="text-sm mb-4">
              Reliable payroll, admin, and event support for busy founders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand-400">Payroll Support</a></li>
              <li><a href="#services" className="hover:text-brand-400">Admin Support</a></li>
              <li><a href="#services" className="hover:text-brand-400">Event Coordination</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-400">About Shavol</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-400">Process</a></li>
              <li><a href="#faq" className="hover:text-brand-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@taskvol.com" className="hover:text-brand-400">hello@taskvol.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Remote / US Based</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} TaskVol. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;