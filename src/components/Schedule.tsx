import { CalendarDays, Heart, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const events = [
  {
    date: 'January 23',
    title: 'Ring Ceremony',
    desc: 'The beautiful engagement ceremony where two souls promise forever.',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/18706408/pexels-photo-18706408.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'January 24',
    title: 'Haldi Ceremony',
    desc: 'The vibrant turmeric ceremony filled with joy, laughter, and blessings.',
    icon: CalendarDays,
    image: 'https://images.pexels.com/photos/18897190/pexels-photo-18897190.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'January 24',
    title: 'Wedding Ceremony',
    desc: 'The sacred union — the main wedding ceremony with all rituals and traditions.',
    icon: Heart,
    image: 'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Schedule() {
  const { ref, isVisible } = useReveal();

  return 
    
  
}
