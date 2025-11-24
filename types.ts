import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

export interface PackageItem {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
