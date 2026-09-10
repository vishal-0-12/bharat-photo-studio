import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Crown,
  IndianRupee,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

type PackageType = {
  number: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  team: string;
  featured?: boolean;
};

const packages: PackageType[] = [
  {
    number: '01',
    name: 'Essential',
    subtitle: 'Simple moments. Beautifully preserved.',
    price: '25,000',
    description:
      'A thoughtful collection for intimate celebrations and couples who want the essential moments documented beautifully.',
    features: [
      'Full Day Photography · 8 Hours',
      'Candid Photography',
      'Traditional Photography',
      'Cinematic Highlight · 3–5 Min',
      '200–300 Edited Photographs',
      'Online Gallery · 1 Month',
      'Premium Album · 12 × 18',
    ],
    team: '1 Photographer + 1 Cameraman',
  },

  {
    number: '02',
    name: 'Signature',
    subtitle: 'More coverage. More emotion.',
    price: '45,000',
    description:
      'Our balanced wedding collection for couples who want a richer visual story with cinematic coverage and aerial perspectives.',
    features: [
      'Full Day Photography · 10–14 Hours',
      'Candid Photography',
      'Traditional Photography',
      'Cinematic Film · 5–7 Min',
      'Drone Coverage · Up to 2 Hours',
      '500–700 Edited Photographs',
      'Online Gallery · 3 Months',
      'Premium Album · 12 × 18',
    ],
    team: '2 Photographers + 1 Cameraman',
    featured: true,
  },

  {
    number: '03',
    name: 'Legacy',
    subtitle: 'Luxury coverage. A lifetime of memories.',
    price: '75,000',
    description:
      'Our most complete collection for couples who want their wedding documented as a full cinematic story.',
    features: [
      'Full Day Photography · 12–14 Hours',
      'Candid Photography',
      'Traditional Photography',
      'Cinematic Film · 8–10 Min',
      'Full Day Drone Coverage',
      'Pre-Wedding Shoot',
      '1,000+ Edited Photographs',
      'Online Gallery · 6 Months',
      'Premium Wedding Album · 12 × 18',
      'Highlight + Teaser Film',
      '10–15 Social Media Reels',
    ],
    team: '3 Photographers + Cameraman + Drone Pilot',
  },
];

const extraServices = [
  ['Extra Photo Album', '₹3,000'],
  ['Pre-Wedding Shoot', '₹12,000'],
  ['Extra Drone Coverage', '₹5,000'],
  ['Cinematic Full Video · 15 Min', '₹8,000'],
  ['Live Wedding Streaming', '₹7,000'],
];

const reasons = [
  'Professional & experienced team',
  'Latest Canon / Nikon equipment',
  'Creative & candid approach',
  'Professional colour grading & editing',
  'Reliable delivery timelines',
  'Personalised client experience',
];

export default function Package() {
  const { ref, isVisible } = useReveal();

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="packages"
      className="package-section relative overflow-hidden bg-[#171614] text-[#f3efe6]"
    >
      {/* Background texture */}
      <div className="package-grain pointer-events-none absolute inset-0" />

      {/* Ambient light */}
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-[#a88952]/10 blur-[160px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 ${
          isVisible ? 'package-visible' : ''
        }`}
      >
        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end">
          <div
            className={`package-header transition-all duration-[1200ms] ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="mb-6 flex items-center gap-4">
              <span
                className={`h-px bg-[#b89a61] transition-all duration-[1200ms] ${
                  isVisible ? 'w-12' : 'w-0'
                }`}
              />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b89a61]">
                Investment
              </span>
            </div>

            <h2 className="max-w-4xl font-serif text-[clamp(3rem,7vw,7rem)] font-normal leading-[0.9] tracking-[-0.045em]">
              Choose how
              <br />
              <span className="ml-[8vw] italic text-[#b89a61]">
                your story lives.
              </span>
            </h2>
          </div>

          <div
            className={`package-intro transition-all delay-200 duration-[1200ms] ease-out lg:pb-2 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            <p className="max-w-md text-sm leading-7 text-white/50">
              Every wedding is different. Our collections are designed to
              give you a clear starting point while leaving room to create
              something uniquely yours.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
              <span>Photography</span>
              <span>•</span>
              <span>Films</span>
              <span>•</span>
              <span>Albums</span>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* PACKAGE CARDS */}
        {/* ================================= */}

        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {packages.map((item, index) => (
            <PackageCard
              key={item.name}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* ================================= */}
        {/* NOTE */}
        {/* ================================= */}

        <div
          className={`mt-5 flex flex-col justify-between gap-3 border-b border-white/10 pb-6 text-[10px] uppercase tracking-[0.22em] text-white/30 transition-all duration-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          } sm:flex-row`}
        >
          <span>All prices are exclusive of GST</span>

          <span>Custom collections available on request</span>
        </div>

        {/* ================================= */}
        {/* ADDITIONAL SERVICES */}
        {/* ================================= */}

        <div className="mt-24 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div
            className={`transition-all duration-[1200ms] ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b89a61]">
              Beyond the collection
            </span>

            <h3 className="mt-5 max-w-lg font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Make it
              <br />
              <span className="italic text-[#b89a61]">
                completely yours.
              </span>
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              Need something different? Add individual services to any
              collection or speak with us about creating a custom package
              around your wedding.
            </p>
          </div>

          <div className="border-t border-white/10">
            {extraServices.map(([name, price], index) => (
              <ExtraService
                key={name}
                name={name}
                price={price}
                index={index}
                isVisible={isVisible}
              />
            ))}

            <p
              className={`mt-5 text-[10px] leading-5 uppercase tracking-[0.15em] text-white/25 transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              GST 18% applicable on all services.
            </p>
          </div>
        </div>

        {/* ================================= */}
        {/* PAYMENT */}
        {/* ================================= */}

        <div
          className={`mt-24 grid border-y border-white/10 transition-all duration-[1200ms] ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          } lg:grid-cols-2`}
        >
          <div className="border-b border-white/10 py-10 lg:border-b-0 lg:border-r lg:pr-16">
            <div className="flex items-center gap-4">
              <IndianRupee
                className="h-5 w-5 text-[#b89a61]"
                strokeWidth={1.2}
              />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Payment
              </span>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <PaymentItem
                title="Booking"
                value="₹10,000"
                isVisible={isVisible}
              />

              <PaymentItem
                title="Balance"
                value="Before Event"
                isVisible={isVisible}
              />

              <PaymentItem
                title="Payment"
                value="UPI / Bank"
                isVisible={isVisible}
              />
            </div>
          </div>

          <div className="py-10 lg:pl-16">
            <div className="flex items-center gap-4">
              <Star
                className="h-5 w-5 text-[#b89a61] transition-transform duration-700 hover:rotate-180"
                strokeWidth={1.2}
              />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Quotation
              </span>
            </div>

            <p className="mt-8 max-w-xl font-serif text-2xl leading-relaxed text-white/70 transition-colors duration-500 hover:text-white">
              “We believe photographs should feel as beautiful as the day
              they came from.”
            </p>

            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/25">
              Quotation valid for 15 days
            </p>
          </div>
        </div>

        {/* ================================= */}
        {/* WHY US */}
        {/* ================================= */}

        <div className="mt-24">
          <div
            className={`mb-10 flex items-end justify-between border-b border-white/10 pb-5 transition-all duration-[1200ms] ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b89a61]">
                The difference
              </span>

              <h3 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
                Why couples choose us
              </h3>
            </div>

            <Sparkles
              className="hidden h-5 w-5 animate-pulse text-[#b89a61] sm:block"
              strokeWidth={1}
            />
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <ReasonCard
                key={reason}
                reason={reason}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* ================================= */}
        {/* CTA */}
        {/* ================================= */}

        <div
          className={`package-cta mt-28 border-t border-white/10 pt-16 text-center transition-all duration-[1400ms] ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#b89a61]">
            Planning your wedding?
          </span>

          <h3 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build a collection
            <br />
            <span className="italic text-[#b89a61]">
              around your story.
            </span>
          </h3>

          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-5 border border-[#b89a61]/50 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:-translate-y-1 hover:border-[#b89a61] hover:bg-[#b89a61] hover:text-[#171614] hover:shadow-[0_15px_40px_rgba(184,154,97,0.15)]"
          >
            Enquire for your date

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.2}
            />
          </a>
        </div>
      </div>

      {/* ================================= */}
      {/* SCROLL TO TOP */}
      {/* ================================= */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center border border-[#b89a61]/50 bg-[#171614] text-[#b89a61] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#b89a61] hover:bg-[#b89a61] hover:text-[#171614] sm:bottom-8 sm:right-8 ${
          showScrollTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp
          className="h-4 w-4"
          strokeWidth={1.4}
        />
      </button>

      {/* ================================= */}
      {/* ANIMATION STYLES */}
      {/* ================================= */}

      <style>{`
        .package-card {
          transform: translateY(40px);
          opacity: 0;
          transition:
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 900ms ease,
            background-color 500ms ease,
            box-shadow 500ms ease;
        }

        .package-visible .package-card {
          transform: translateY(0);
          opacity: 1;
        }

        .package-visible .package-card:nth-child(1) {
          transition-delay: 100ms;
        }

        .package-visible .package-card:nth-child(2) {
          transition-delay: 250ms;
        }

        .package-visible .package-card:nth-child(3) {
          transition-delay: 400ms;
        }

        .package-card:hover {
          transform: translateY(-8px);
          background-color: #211f1b;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.25);
        }

        .featured-package {
          box-shadow: inset 0 1px 0 rgba(184, 154, 97, 0.2);
        }

        .package-grain {
          opacity: 0.035;
          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
        }

        @media (prefers-reduced-motion: reduce) {
          .package-card,
          .package-header,
          .package-intro {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ========================================= */
/* PACKAGE CARD */
/* ========================================= */

function PackageCard({
  item,
  index,
  isVisible,
}: {
  item: PackageType;
  index: number;
  isVisible: boolean;
}) {
  const targetPrice = Number(item.price.replace(/,/g, ''));

  return (
    <article
      className={`package-card group relative flex flex-col bg-[#1b1916] p-7 sm:p-9 lg:p-10 ${
        item.featured ? 'featured-package' : ''
      }`}
      style={{
        transitionDelay: isVisible ? `${100 + index * 150}ms` : '0ms',
      }}
    >
      {/* Featured line */}
      {item.featured && (
        <div className="absolute left-0 right-0 top-0 h-px bg-[#b89a61] transition-all duration-700 group-hover:h-[2px]" />
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="font-serif text-sm italic text-[#b89a61] transition-transform duration-500 group-hover:-translate-y-1">
          {item.number}
        </span>

        {item.featured && (
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#b89a61]">
            <Crown
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12"
              strokeWidth={1.2}
            />

            Most Chosen
          </div>
        )}
      </div>

      {/* Name */}
      <div className="mt-12">
        <h3 className="font-serif text-4xl font-normal text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">
          {item.name}
        </h3>

        <p className="mt-3 max-w-xs font-serif text-lg italic leading-relaxed text-white/45 transition-colors duration-500 group-hover:text-white/60">
          {item.subtitle}
        </p>
      </div>

      {/* Price */}
      <div className="mt-10 border-y border-white/10 py-7 transition-colors duration-500 group-hover:border-[#b89a61]/30">
        <div className="flex items-start gap-2">
          <span className="mt-2 text-xs text-[#b89a61]">
            ₹
          </span>

          <AnimatedPrice
            target={targetPrice}
            isVisible={isVisible}
          />

          <span className="mt-auto mb-2 text-[10px] uppercase tracking-wider text-white/25">
            onwards
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-7 text-sm leading-7 text-white/45 transition-colors duration-500 group-hover:text-white/60">
        {item.description}
      </p>

      {/* Features */}
      <div className="mt-10 flex-1">
        <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#b89a61]">
          Includes
        </p>

        <ul className="space-y-4">
          {item.features.map((feature, featureIndex) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-5 text-white/65 transition-all duration-500 hover:translate-x-1 hover:text-white"
              style={{
                transitionDelay: `${featureIndex * 25}ms`,
              }}
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b89a61] transition-transform duration-500 hover:scale-125"
                strokeWidth={1.4}
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Team */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="flex gap-3">
          <Users
            className="mt-0.5 h-4 w-4 shrink-0 text-[#b89a61] transition-transform duration-500 group-hover:scale-110"
            strokeWidth={1.2}
          />

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#b89a61]">
              Creative Team
            </p>

            <p className="mt-2 text-xs leading-5 text-white/45">
              {item.team}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="package-button group mt-8 flex items-center justify-between border border-white/15 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-white/70 transition-all duration-500 hover:-translate-y-1 hover:border-[#b89a61] hover:bg-[#b89a61] hover:text-[#171614]"
      >
        <span>Enquire</span>

        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          strokeWidth={1.2}
        />
      </a>
    </article>
  );
}

/* ========================================= */
/* ANIMATED PRICE */
/* ========================================= */

function AnimatedPrice({
  target,
  isVisible,
}: {
  target: number;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!isVisible || animationStarted.current) {
      return;
    }

    animationStarted.current = true;

    const duration = 1500;
    const startTime = performance.now();

    const easeOut = (progress: number) => {
      return 1 - Math.pow(1 - progress, 4);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOut(progress);
      const currentValue = Math.round(target * easedProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Permanently lock the final value to the exact price.
        setDisplayValue(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <span className="font-serif text-5xl font-normal tracking-tight text-[#f3efe6] tabular-nums sm:text-6xl">
      {displayValue.toLocaleString('en-IN')}
    </span>
  );
}

/* ========================================= */
/* EXTRA SERVICE */
/* ========================================= */

function ExtraService({
  name,
  price,
  index,
  isVisible,
}: {
  name: string;
  price: string;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`extra-service group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition-all duration-700 hover:bg-white/[0.025] ${
        isVisible
          ? 'translate-x-0 opacity-100'
          : 'translate-x-8 opacity-0'
      }`}
      style={{
        transitionDelay: `${500 + index * 100}ms`,
      }}
    >
      <div className="flex items-center gap-5">
        <span className="font-serif text-sm italic text-[#b89a61]/70 transition-transform duration-500 group-hover:translate-x-1">
          0{index + 1}
        </span>

        <span className="text-sm text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
          {name}
        </span>
      </div>

      <span className="font-serif text-lg text-[#b89a61] transition-transform duration-500 group-hover:-translate-x-1">
        {price}
      </span>
    </div>
  );
}

/* ========================================= */
/* PAYMENT ITEM */
/* ========================================= */

function PaymentItem({
  title,
  value,
  isVisible,
}: {
  title: string;
  value: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`transition-all duration-700 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-5 opacity-0'
      }`}
    >
      <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
        {title}
      </p>

      <p className="mt-2 font-serif text-lg text-white/70 transition-colors duration-300 hover:text-[#b89a61]">
        {value}
      </p>
    </div>
  );
}

/* ========================================= */
/* REASON CARD */
/* ========================================= */

function ReasonCard({
  reason,
  index,
  isVisible,
}: {
  reason: string;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`reason-item group bg-[#171614] p-7 transition-all duration-700 hover:-translate-y-1 hover:bg-[#211f1b] ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      }`}
      style={{
        transitionDelay: `${700 + index * 100}ms`,
      }}
    >
      <div className="flex items-start justify-between">
        <span className="font-serif text-sm italic text-[#b89a61]">
          0{index + 1}
        </span>

        <Check
          className="h-4 w-4 text-white/20 transition-all duration-500 group-hover:scale-125 group-hover:text-[#b89a61]"
          strokeWidth={1.3}
        />
      </div>

      <p className="mt-10 text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
        {reason}
      </p>
    </div>
  );
}