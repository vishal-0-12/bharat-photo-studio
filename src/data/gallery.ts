import type { LightboxImage } from '../components/Lightbox';

export interface GalleryImage extends LightboxImage {
  span: string;
}

export const galleryImages: GalleryImage[] = [
  { url: 'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian couple wedding ceremony', label: 'Wedding Ceremony', span: 'lg:col-span-2 lg:row-span-2' },
  { url: 'https://images.pexels.com/photos/18706408/pexels-photo-18706408.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Ring exchange ceremony', label: 'Ring Ceremony', span: '' },
  { url: 'https://images.pexels.com/photos/18897190/pexels-photo-18897190.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Haldi ceremony groom', label: 'Haldi Ceremony', span: '' },
  { url: 'https://images.pexels.com/photos/33078527/pexels-photo-33078527.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bride applying turmeric', label: 'Haldi Ritual', span: '' },
  { url: 'https://images.pexels.com/photos/19613670/pexels-photo-19613670.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Newlywed couple portrait', label: 'Couple Portrait', span: 'lg:col-span-2' },
  { url: 'https://images.pexels.com/photos/32483856/pexels-photo-32483856.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Joyful Indian wedding celebration', label: 'Celebration', span: '' },
  { url: 'https://images.pexels.com/photos/30169492/pexels-photo-30169492.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Night wedding ceremony', label: 'Night Ceremony', span: '' },
  { url: 'https://images.pexels.com/photos/31953140/pexels-photo-31953140.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Black and white wedding portrait', label: 'Classic Portrait', span: '' },
];
