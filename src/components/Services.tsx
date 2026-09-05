import React from 'react';
import {
  Camera,
  Video,
  Film,
  Heart,
  Users,
  Palette,
  Image,
  Disc,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: Camera,
    title: 'Professional Photography',
    desc: 'All functions covered with high-resolution edited photographs.',
  },
  {
    icon: Video,
    title: 'Cinematic Videography',
    desc: 'Cinematic coverage that tells your love story frame by frame.',
  },
  {
    icon: Film,
    title: 'Traditional Video Recording',
    desc: 'Complete traditional video recording of every ceremony.',
  },
  {
    icon: Heart,
    title: 'Bride & Groom Portraits',
    desc: 'Special portrait session capturing the essence of the couple.',
  },
  {
    icon: Users,
    title: 'Family & Group Photography',
    desc: 'Beautiful family and group photographs for every gathering.',
  },
  {
    icon: Palette,
    title: 'Premium Photo Editing',
    desc: 'Premium photo editing & color grading for a flawless finish.',
  },
  {
    icon: Image,
    title: 'Cinematic Highlights Film',
    desc: 'A 3-5 minute cinematic wedding highlights film.',
  },
  {
    icon: Disc,
    title: 'All Raw Data',
    desc: 'All raw data delivered in digital format — nothing held back.',
  },
];

export default function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="services"
      className="section-pad bg-gradient-to-b from-cream-50 to-cream-100"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">
            What We Offer
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl md:text-5xl">
            Our Services
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold-400" />

            <span className="text-gold-500">✦</span>

            <span className="h-px w-16 bg-gold-400" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-gold-200/50 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-900/10"
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Decorative Circle */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700 transition-all duration-500 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-charcoal-800">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700/70">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}