import { Award, Clock, Heart, Camera } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import React from 'react';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Camera, value: '500+', label: 'Weddings Covered' },
  { icon: Heart, value: '100%', label: 'Happy Clients' },
  { icon: Award, value: 'Premium', label: 'Editing Quality' },
  { icon: Clock, value: '30-45', label: 'Days Delivery' },
];

export default function About() {
  const { ref, isVisible } = useReveal();
  
  return (
    <section className="section-pad bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/19613670/pexels-photo-19613670.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Newlywed Indian couple"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl border-2 border-gold-400/30 sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40" />

            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-2xl border-2 border-gold-400/30 sm:-top-6 sm:-left-6 sm:h-40 sm:w-40" />

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-6 py-3 shadow-xl sm:bottom-4 sm:left-auto sm:right-4 sm:translate-x-0">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold gold-gradient-text">
                  ₹80,000
                </p>

                <p className="text-[10px] uppercase tracking-wider text-charcoal-700/50">
                  Premium Package
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">
              About Us
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl">
              Bharat Photo Studio
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-12 bg-gold-400" />
              <span className="text-gold-500">✦</span>
            </div>

            <p className="mt-5 text-base leading-relaxed text-charcoal-700/70">
              At Bharat Photo Studio, we make every moment of your wedding
              unforgettable. From the ring ceremony to the haldi and the
              sacred vows — our cameras capture every emotion, every smile,
              and every tear.
            </p>

            <p className="mt-3 text-base leading-relaxed text-charcoal-700/70">
              We offer professional photography, cinematic videography, and
              traditional video recording to transform your wedding into a
              memorable film you'll cherish forever.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gold-200/50 bg-white p-4 text-center transition-all duration-300 hover:border-gold-400/50 hover:shadow-md"
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-gold-600" />

                    <p className="font-serif text-xl font-bold text-charcoal-800">
                      {stat.value}
                    </p>

                    <p className="mt-0.5 text-[10px] font-medium text-charcoal-700/50">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}