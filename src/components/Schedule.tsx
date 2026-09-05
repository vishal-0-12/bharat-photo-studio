import React from 'react';
import { CalendarDays, Heart, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const events = [
  {
    date: 'January 23',
    title: 'Ring Ceremony',
    desc: 'The beautiful engagement ceremony where two souls promise forever.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/18706408/pexels-photo-18706408.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'January 24',
    title: 'Haldi Ceremony',
    desc: 'The vibrant turmeric ceremony filled with joy, laughter, and blessings.',
    icon: CalendarDays,
    image:
      'https://images.pexels.com/photos/18897190/pexels-photo-18897190.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'January 24',
    title: 'Wedding Ceremony',
    desc: 'The sacred union — the main wedding ceremony with all rituals and traditions.',
    icon: Heart,
    image:
      'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Schedule() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="schedule"
      className="section-pad bg-gradient-to-b from-cream-100 to-cream-50"
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
            Event Schedule
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl md:text-5xl">
            Event Schedule
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold-400" />
            <span className="text-gold-500">✦</span>
            <span className="h-px w-16 bg-gold-400" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300 lg:block" />

          <div className="space-y-8 lg:space-y-16">
            {events.map((event, i) => {
              const Icon = event.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={event.title}
                  className={`flex flex-col gap-4 lg:flex-row lg:items-center ${
                    isLeft ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className="lg:w-1/2">
                    <div
                      className={`group overflow-hidden rounded-2xl bg-white shadow-lg shadow-gold-900/5 transition-all duration-500 hover:shadow-xl hover:shadow-gold-900/10 ${
                        isLeft ? 'lg:mr-12' : 'lg:ml-12'
                      }`}
                    >
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />

                        {/* Date */}
                        <div className="absolute top-4 left-4 rounded-full bg-gold-600/90 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                          {event.date}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                            <Icon className="h-5 w-5" />
                          </div>

                          <h3 className="font-serif text-xl font-bold text-charcoal-800">
                            {event.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-relaxed text-charcoal-700/70">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:block lg:w-0">
                    <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 ring-4 ring-cream-50">
                      <div className="h-full w-full animate-ping rounded-full bg-gold-400 opacity-40" />
                    </div>
                  </div>

                  {/* Empty Side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}