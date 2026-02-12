import { LucideIcon } from 'lucide-react';

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  source: 'Google' | 'Direct';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}