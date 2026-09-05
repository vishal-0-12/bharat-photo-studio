import React from 'react';
import { useReveal } from '../hooks/useReveal';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Indian couple wedding ceremony',
    label: 'Wedding Ceremony',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/18706408/pexels-photo-18706408.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ring exchange ceremony',
    label: 'Ring Ceremony',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/18897190/pexels-photo-18897190.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Haldi ceremony groom',
    label: 'Haldi Ceremony',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/33078527/pexels-photo-33078527.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bride applying turmeric',
    label: 'Haldi Ritual',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/19613670/pexels-photo-19613670.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Newlywed couple portrait',
    label: 'Couple Portrait',
    span: 'lg:col-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/32483856/pexels-photo-32483856.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Joyful Indian wedding celebration',
    label: 'Celebration',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/30169492/pexels-photo-30169492.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Night wedding ceremony',
    label: 'Night Ceremony',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/31953140/pexels-photo-31953140.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Black and white wedding portrait',
    label: 'Classic Portrait',
    span: '',
  },
];

export default function Gallery() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="gallery" className="section-pad bg-cream-100">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">
            Our Work
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl md:text-5xl">
            Gallery
          </h2>

          <p className="mt-4 text-base text-charcoal-700/60">
            Every photo tells a story — here are some of our most memorable
            creations.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold-400" />
            <span className="text-gold-500">✦</span>
            <span className="h-px w-16 bg-gold-400" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="font-serif text-sm font-semibold text-white">
                  {img.label}
                </span>
              </div>

              {/* Gold Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-gold-400/0 transition-all duration-500 group-hover:border-gold-400/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}