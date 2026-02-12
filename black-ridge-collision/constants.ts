import { Car, Hammer, Paintbrush, ShieldCheck, Wrench, Search } from 'lucide-react';
import { Review, Service } from './types';

export const COMPANY_INFO = {
  name: "Black Ridge Collision",
  phone1: "435.669.6126",
  phone2: "435.817.8395",
  location: "Southern Utah", // Inferred from "Hurricane" mention and 435 area code
  email: "contact@blackridgecollision.com",
  tagline: "Collision Repair & Paint"
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Gordo Bryco',
    role: 'Local Guide • 146 reviews',
    rating: 5,
    date: '5 months ago',
    content: "Third time in 18 months I've had to use them. Not all my fault. We are becoming close, almost family. Ben has always treated us fair and works well with us. Keeps us informed. Does above excellent work. I would and have recommended them.",
    source: 'Google'
  },
  {
    id: '2',
    author: 'Cody West',
    role: 'Local Guide • 17 reviews',
    rating: 5,
    date: '10 months ago',
    content: "I just had some minor scratches repaired with Blackridge Collision. Damon and his team were quick and did an amazing job. I highly recommend these guys!",
    source: 'Google'
  },
  {
    id: '3',
    author: 'Trevor Williams',
    role: 'Local Guide • 20 reviews',
    rating: 5,
    date: '8 years ago',
    content: "These guys did an amazing job on my wife's car. We had it \"fixed\" by another shop in Hurricane and they could not get it right, I contacted Ben at Black Ridge and he took care of me. He was honest with his assessment in the damages and the repair.",
    source: 'Google'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'collision',
    title: 'Collision Repair',
    description: 'Expert structural repairs to restore your vehicle to factory specifications after an accident.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1597687210387-e45e11d4c1c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'paint',
    title: 'Professional Painting',
    description: 'Computerized color matching and premium paint application for a flawless finish.',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1620882352277-2e118c7c9c02?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dents',
    title: 'Dent & Scratch Removal',
    description: 'From minor door dings to major scratches, we erase the damage seamlessly.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'frame',
    title: 'Frame Alignment',
    description: 'Precision frame straightening technology to ensure safety and proper handling.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'estimates',
    title: 'Detailed Estimates',
    description: 'Honest assessments and transparent pricing. We work with all major insurance providers.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1632823469866-920cf9723528?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'warranty',
    title: 'Quality Guarantee',
    description: 'We stand behind our work with a commitment to excellence and customer satisfaction.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop'
  }
];