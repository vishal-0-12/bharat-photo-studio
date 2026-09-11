import { ArrowDown, CalendarCheck, Phone } from 'lucide-react';
import ParticleField from '../components/ParticleField';

const heroImage =
  'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[680px] w-full overflow-hidden"
    >
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Indian wedding couple"
          className="ken-burns h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/35 to-charcoal-900/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/50 via-transparent to-transparent" />
      </div>

      {/* Floating gold particles */}
      <ParticleField
        count={50}
        color="212,168,74"
      />

      {/* Cinematic letterbox bars */}
      <div className="letterbox-top absolute left-0 right-0 top-0 z-20 bg-charcoal-950" />

      <div className="letterbox-bottom absolute bottom-0 left-0 right-0 z-20 bg-charcoal-950" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-5 text-center">

        {/* Eyebrow */}
        <div
          className="animate-fade-in w-full"
          style={{
            animationDelay: '0.3s',
            opacity: 0,
          }}
        >
          <span className="mb-5 inline-block max-w-full rounded-full border border-gold-300/40 bg-white/5 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold-200 backdrop-blur-sm sm:text-xs">
            Wedding Photography & Cinematic Videography
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="animate-fade-up w-full max-w-[95%] font-serif text-4xl font-bold text-white sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            animationDelay: '0.5s',
            opacity: 0,
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          Bharat Photo Studio
        </h1>

        {/* Tagline */}
        <div
          className="animate-fade-up mt-4 flex w-full max-w-full items-center justify-center gap-3 sm:gap-4"
          style={{
            animationDelay: '0.7s',
            opacity: 0,
          }}
        >
          <span className="hidden h-px w-12 bg-gold-400/60 sm:block" />

          <p className="shimmer-text font-serif text-base italic sm:text-xl md:text-2xl">
            Capture Your Special Moments Forever
          </p>

          <span className="hidden h-px w-12 bg-gold-400/60 sm:block" />
        </div>

        {/* Description */}
        <p
          className="animate-fade-up mt-6 w-full max-w-2xl px-2 text-sm leading-6 text-white/80 sm:px-0 sm:text-lg sm:leading-normal"
          style={{
            animationDelay: '0.9s',
            opacity: 0,
          }}
        >
          Wedding photography, cinematic video, candid moments,
          pre-wedding stories, drone coverage, and photo albums
          crafted with care.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up mt-10 flex w-full max-w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          style={{
            animationDelay: '1.1s',
            opacity: 0,
          }}
        >

          {/* =========================================
              VIEW PACKAGES
          ========================================= */}

          <a
            href="#/packages"
            className="shimmer-sweep relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold-900/30 transition-all duration-300 hover:bg-gold-700 hover:shadow-xl sm:w-auto"
          >
            <CalendarCheck className="h-4 w-4" />

            View Packages
          </a>

          {/* =========================================
              CONTACT US
          ========================================= */}

          <a
            href="#/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:w-auto"
          >
            <Phone className="h-4 w-4" />

            Contact Us
          </a>
        </div>
      </div>

      {/* =========================================
          SCROLL / PACKAGE BUTTON
      ========================================= */}

      <a
        href="#/packages"
        aria-label="View packages"
        className="absolute bottom-20 left-1/2 z-30 -translate-x-1/2 animate-float text-gold-200/80 transition-colors duration-300 hover:text-gold-100"
      >
        <ArrowDown className="h-7 w-7" />
      </a>
    </section>
  );
}