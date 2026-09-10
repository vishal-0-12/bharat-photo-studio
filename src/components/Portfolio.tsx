import {
  ArrowUpRight,
  Camera,
  CirclePlay,
  Heart,
  Plane,
  Image as ImageIcon,
  Cloud,
  Film,
  Radio,
  Users,
} from 'lucide-react';

import { useReveal } from '../hooks/useReveal';

const services = [
  {
    number: '01',
    title: 'Wedding Photography',
    short: 'Every emotion. Every ritual. Every detail.',
    description:
      'From the quiet moments before the ceremony to the energy of the celebration, our photographers document your wedding with an editorial eye and a documentary heart.',
    icon: Camera,
    image:
      'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '02',
    title: 'Cinematic Films',
    short: 'Your wedding, told like a film.',
    description:
      'Beautifully composed wedding films built around real moments, natural sound, movement and emotion — designed to bring you back to the day years later.',
    icon: CirclePlay,
    image:
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '03',
    title: 'Candid Photography',
    short: 'The moments you never planned.',
    description:
      'Unscripted laughter, nervous smiles, family embraces and everything that happens between the big moments.',
    icon: Heart,
    image:
      'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '04',
    title: 'Pre-Wedding Stories',
    short: 'A story that begins before the wedding.',
    description:
      'Relaxed, personality-driven sessions created around your relationship, your locations and your story.',
    icon: Film,
    image:
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '05',
    title: 'Drone Photography',
    short: 'See the celebration differently.',
    description:
      'Cinematic aerial perspectives of venues, ceremonies and celebrations that add scale and atmosphere to your final story.',
    icon: Plane,
    image:
      'https://images.pexels.com/photos/2884864/pexels-photo-2884864.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '06',
    title: 'Premium Albums',
    short: 'Memories made to be held.',
    description:
      'Hand-selected photographs presented in premium albums designed to become part of your family for generations.',
    icon: ImageIcon,
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '07',
    title: 'Online Gallery',
    short: 'Your memories, beautifully delivered.',
    description:
      'Private online galleries make it simple to view, share and relive your wedding photographs from anywhere.',
    icon: Cloud,
    image:
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '08',
    title: 'Live Streaming',
    short: 'Let everyone be part of it.',
    description:
      'Professional live coverage for family and friends who cannot be there in person.',
    icon: Radio,
    image:
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '09',
    title: 'Our Creative Team',
    short: 'People behind the photographs.',
    description:
      'Photographers, cinematographers, editors and aerial specialists working together as one creative team.',
    icon: Users,
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '10',
    title: 'Our Creative Team',
    short: 'People behind the photographs.',
    description:
      'Photographers, cinematographers, editors and aerial specialists working together as one creative team.',
    icon: Users,
    image: '/img/13.jpg',
  },

  
];

export default function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="services"
      className="services-section relative overflow-hidden bg-[#f4f0e8] text-[#171614]"
    >
      {/* Background texture */}
      <div className="services-grain pointer-events-none absolute inset-0" />

      {/* Top border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-[#171614]/10" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 ${
          isVisible ? 'services-visible' : ''
        }`}
      >
        {/* -------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------- */}

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="services-eyebrow mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#a88952]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#7c6848]">
                Our Expertise
              </span>
            </div>

            <h2 className="services-title max-w-4xl font-serif text-[clamp(3rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.045em]">
              More than
              <br />

              <span className="ml-[8vw] italic text-[#9a7b45]">
                photographs.
              </span>
            </h2>
          </div>

          <div className="services-intro lg:pb-2">
            <p className="max-w-md text-[15px] leading-7 text-[#171614]/60">
              We create complete visual stories around your wedding — from
              intimate preparations to the final celebration.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#171614]/40">
              <span>Photography</span>
              <span>•</span>
              <span>Films</span>
              <span>•</span>
              <span>Stories</span>
            </div>
          </div>
        </div>

        {/* -------------------------------- */}
        {/* FEATURED SERVICE */}
        {/* -------------------------------- */}

        <div className="services-feature mt-20 grid overflow-hidden border-y border-[#171614]/10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <div className="services-feature-image group relative min-h-[420px] overflow-hidden lg:min-h-[650px]">
            <img
              src={services[0].image}
              alt="Wedding photography"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.1]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5 transition-opacity duration-700 group-hover:opacity-70" />

            <div className="absolute bottom-7 left-7 flex items-center gap-3 text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-70">
                Featured Service
              </span>

              <span className="h-px w-10 bg-white/60 transition-all duration-700 group-hover:w-16" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between bg-[#1b1916] p-8 text-[#f4f0e8] sm:p-12 lg:p-16">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm italic text-[#b89a61]">
                  {services[0].number}
                </span>

                <Camera
                  className="h-5 w-5 text-[#b89a61]"
                  strokeWidth={1.2}
                />
              </div>

              <h3 className="mt-20 max-w-xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
                {services[0].title}
              </h3>

              <p className="mt-5 max-w-lg font-serif text-xl italic leading-relaxed text-[#f4f0e8]/70">
                {services[0].short}
              </p>

              <p className="mt-7 max-w-lg text-sm leading-7 text-[#f4f0e8]/50">
                {services[0].description}
              </p>
            </div>

            <a
              href="/contact"
              className="group mt-14 inline-flex w-fit items-center gap-4 border-b border-[#b89a61]/50 pb-3 text-xs uppercase tracking-[0.22em] text-[#f4f0e8]"
            >
              Discuss your wedding

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.3}
              />
            </a>
          </div>
        </div>

        {/* -------------------------------- */}
        {/* SERVICES LIST */}
        {/* -------------------------------- */}

        <div className="mt-20">
          <div className="mb-5 flex items-center justify-between border-b border-[#171614]/10 pb-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#171614]/40">
              Everything we offer
            </span>

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-[#171614]/30 sm:block">
              Scroll / Explore
            </span>
          </div>

          <div>
            {services.slice(1).map((service) => (
              <ServiceRow
                key={service.number}
                service={service}
              />
            ))}
          </div>
        </div>

        {/* -------------------------------- */}
        {/* BOTTOM CTA */}
        {/* -------------------------------- */}

        <div className="services-cta relative mt-28 overflow-hidden border border-[#171614]/10 bg-[#e9e3d7] px-7 py-16 text-center sm:px-12 lg:py-24">
          <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-[#a88952]" />

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#7c6848]">
            Your story deserves intention
          </p>

          <h3 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s create something
            <span className="italic text-[#9a7b45]">
              {' '}
              unforgettable.
            </span>
          </h3>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center gap-5 border border-[#171614] px-7 py-4 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-[#171614] hover:text-[#f4f0e8]"
          >
            Start a conversation

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.3}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================================= */
/* SERVICE ROW */
/* ========================================= */

function ServiceRow({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;

  return (
    <div className="service-row group relative border-b border-[#171614]/10">
      <div className="grid min-h-[120px] items-center gap-6 py-7 lg:grid-cols-[80px_1fr_1fr_80px] lg:py-8">
        {/* Number */}
        <span className="font-serif text-sm italic text-[#a88952]">
          {service.number}
        </span>

        {/* Title */}
        <div className="flex items-center gap-5">
          <div className="service-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#171614]/15 transition-all duration-500 group-hover:border-[#a88952] group-hover:bg-[#171614] group-hover:text-[#f4f0e8]">
            <Icon
              className="h-4 w-4"
              strokeWidth={1.2}
            />
          </div>

          <h3 className="font-serif text-2xl font-normal transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="max-w-md text-sm leading-6 text-[#171614]/50 lg:justify-self-end">
          {service.short}
        </p>

        {/* Arrow */}
        <div className="hidden justify-end lg:flex">
          <ArrowUpRight
            className="h-5 w-5 text-[#171614]/30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#a88952]"
            strokeWidth={1.2}
          />
        </div>
      </div>

      {/* Hover image */}
      <div className="absolute right-[8%] top-1/2 z-20 hidden h-52 w-72 -translate-y-1/2 translate-x-8 overflow-hidden rounded-sm opacity-0 shadow-2xl transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100 lg:block">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.15]"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}