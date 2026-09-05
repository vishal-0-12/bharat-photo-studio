import { ChevronDown } from 'lucide-react';
import React from 'react';

const heroImage =
  'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indian wedding couple"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/30 to-charcoal-900/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/40 via-transparent to-transparent" />
      </div>

      {/* Decorative top border */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <div
          className="animate-fade-in"
          style={{
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          <span className="mb-4 inline-block rounded-full border border-gold-300/40 bg-white/5 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold-200 backdrop-blur-sm">
            Wedding Photography &amp; Cinematic Videography
          </span>
        </div>

        <h1
          className="animate-fade-up font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          style={{
            animationDelay: '0.4s',
            opacity: 0,
          }}
        >
          Bharat Photo Studio
        </h1>

        <div
          className="animate-fade-up mt-4 flex items-center gap-4"
          style={{
            animationDelay: '0.6s',
            opacity: 0,
          }}
        >
          <span className="h-px w-12 bg-gold-400/60" />

          <p className="shimmer-text font-serif text-lg italic sm:text-xl md:text-2xl">
            Capturing Eternal Moments
          </p>

          <span className="h-px w-12 bg-gold-400/60" />
        </div>

        <p
          className="animate-fade-up mt-6 max-w-xl text-base text-white/80 sm:text-lg"
          style={{
            animationDelay: '0.8s',
          }}
        >
          Making every moment of your wedding unforgettable — from the ring
          ceremony to the sacred vows, we capture every emotion through our
          lens.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{
            animationDelay: '1s',
          }}
        >
          <a
            href="#package"
            className="rounded-full bg-gold-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold-900/30 transition-all duration-300 hover:bg-gold-700 hover:shadow-xl hover:shadow-gold-900/40"
          >
            View Package — ₹80,000
          </a>

          <a
            href="#gallery"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-7 w-7 text-gold-200/70" />
      </div>
    </section>
  );
}
