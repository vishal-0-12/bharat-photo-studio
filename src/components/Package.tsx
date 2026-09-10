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
import type { Route } from '../hooks/useRouter';

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

type PackageProps = {
  navigate?: (route: Route) => void;
};

export default function Package({ navigate }: PackageProps) {
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

  /*
   * ============================================================
   * GO TO CONTACT PAGE
   * ============================================================
   *
   * Your website uses the custom hash router:
   *
   * navigate('contact')
   *
   * This is the same navigation method used by your Navbar.
   *
   * If navigate is not passed for any reason, the fallback
   * changes the hash directly to #/contact.
   */
  const goToContact = () => {
    if (navigate) {
      navigate('contact');
      return;
    }

    window.location.hash = '#/contact';
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
      {/* =====================================================
          SUBTLE BACKGROUND TEXTURE
      ====================================================== */}

      <div className="package-grain pointer-events-none absolute inset-0" />

      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#a88952]/10 blur-[160px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 ${
          isVisible ? 'package-visible' : ''
        }`}
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end">
          <div className="package-header">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#b89a61]" />

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

          <div className="package-intro lg:pb-2">
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

        {/* =====================================================
            PACKAGE CARDS
        ====================================================== */}

        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item, index) => (
            <PackageCard
              key={item.name}
              item={item}
              index={index}
              onEnquire={goToContact}
            />
          ))}
        </div>

        {/* =====================================================
            NOTE
        ====================================================== */}

        <div className="mt-5 flex flex-col justify-between gap-3 border-b border-white/10 pb-6 text-[10px] uppercase tracking-[0.22em] text-white/30 sm:flex-row">
          <span>All prices are exclusive of GST</span>

          <span>
            Custom collections available on request
          </span>
        </div>

        {/* =====================================================
            ADDITIONAL SERVICES
        ====================================================== */}

        <div className="mt-24 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
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
              <div
                key={name}
                className="extra-service group flex items-center justify-between gap-6 border-b border-white/10 py-6"
              >
                <div className="flex items-center gap-5">
                  <span className="font-serif text-sm italic text-[#b89a61]/70">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                    {name}
                  </span>
                </div>

                <span className="font-serif text-lg text-[#b89a61]">
                  {price}
                </span>
              </div>
            ))}

            <p className="mt-5 text-[10px] leading-5 uppercase tracking-[0.15em] text-white/25">
              GST 18% applicable on all services.
            </p>
          </div>
        </div>

        {/* =====================================================
            PAYMENT
        ====================================================== */}

        <div className="mt-24 grid border-y border-white/10 lg:grid-cols-2">
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
              />

              <PaymentItem
                title="Balance"
                value="Before Event"
              />

              <PaymentItem
                title="Payment"
                value="UPI / Bank"
              />
            </div>
          </div>

          <div className="py-10 lg:pl-16">
            <div className="flex items-center gap-4">
              <Star
                className="h-5 w-5 text-[#b89a61]"
                strokeWidth={1.2}
              />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Quotation
              </span>
            </div>

            <p className="mt-8 max-w-xl font-serif text-2xl leading-relaxed text-white/70">
              “We believe photographs should feel as beautiful as the day
              they came from.”
            </p>

            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/25">
              Quotation valid for 15 days
            </p>
          </div>
        </div>

        {/* =====================================================
            WHY US
        ====================================================== */}

        <div className="mt-24">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b89a61]">
                The difference
              </span>

              <h3 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
                Why couples choose us
              </h3>
            </div>

            <Sparkles
              className="hidden h-5 w-5 text-[#b89a61] sm:block"
              strokeWidth={1}
            />
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="reason-item group bg-[#171614] p-7 transition-colors duration-500 hover:bg-[#211f1b]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-sm italic text-[#b89a61]">
                    0{index + 1}
                  </span>

                  <Check
                    className="h-4 w-4 text-white/20 transition-colors duration-300 group-hover:text-[#b89a61]"
                    strokeWidth={1.3}
                  />
                </div>

                <p className="mt-10 text-sm text-white/65">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="package-cta mt-28 border-t border-white/10 pt-16 text-center">
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

          {/* ===================================================
              ENQUIRE FOR YOUR DATE
              CONNECTED TO CUSTOM CONTACT ROUTER
          ==================================================== */}

          <button
            type="button"
            onClick={goToContact}
            className="group mt-10 inline-flex items-center gap-5 border border-[#b89a61]/50 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-[#b89a61] hover:bg-[#b89a61] hover:text-[#171614]"
          >
            Enquire for your date

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.2}
            />
          </button>
        </div>
      </div>

      {/* =====================================================
          SCROLL TO TOP
      ====================================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center border border-[#b89a61]/50 bg-[#171614] text-[#b89a61] shadow-lg transition-all duration-500 hover:border-[#b89a61] hover:bg-[#b89a61] hover:text-[#171614] sm:bottom-8 sm:right-8 ${
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
    </section>
  );
}


/* ============================================================
   PACKAGE CARD
============================================================ */

function PackageCard({
  item,
  index,
  onEnquire,
}: {
  item: PackageType;
  index: number;
  onEnquire: () => void;
}) {
  return (
    <article
      className={`package-card group relative flex flex-col bg-[#1b1916] p-7 sm:p-9 lg:p-10 ${
        item.featured ? 'featured-package' : ''
      }`}
    >
      {/* Featured line */}

      {item.featured && (
        <div className="absolute left-0 right-0 top-0 h-px bg-[#b89a61]" />
      )}

      {/* Header */}

      <div className="flex items-start justify-between">
        <span className="font-serif text-sm italic text-[#b89a61]">
          {item.number}
        </span>

        {item.featured && (
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#b89a61]">
            <Crown
              className="h-3.5 w-3.5"
              strokeWidth={1.2}
            />

            Most Chosen
          </div>
        )}
      </div>

      {/* Name */}

      <div className="mt-12">
        <h3 className="font-serif text-4xl font-normal text-white sm:text-5xl">
          {item.name}
        </h3>

        <p className="mt-3 max-w-xs font-serif text-lg italic leading-relaxed text-white/45">
          {item.subtitle}
        </p>
      </div>

      {/* Price */}

      <div className="mt-10 border-y border-white/10 py-7">
        <div className="flex items-start gap-2">
          <span className="mt-2 text-xs text-[#b89a61]">
            ₹
          </span>

          <AnimatedPrice
            target={Number(item.price.replace(/,/g, ''))}
          />

          <span className="mt-auto mb-2 text-[10px] uppercase tracking-wider text-white/25">
            onwards
          </span>
        </div>
      </div>

      {/* Description */}

      <p className="mt-7 text-sm leading-7 text-white/45">
        {item.description}
      </p>

      {/* Features */}

      <div className="mt-10 flex-1">
        <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#b89a61]">
          Includes
        </p>

        <ul className="space-y-4">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-5 text-white/65"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b89a61]"
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
            className="mt-0.5 h-4 w-4 shrink-0 text-[#b89a61]"
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

      {/* =====================================================
          ENQUIRE BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={onEnquire}
        className="package-button group mt-8 flex w-full items-center justify-between border border-white/15 px-5 py-4 text-left text-[10px] uppercase tracking-[0.2em] text-white/70 transition-all duration-500 hover:border-[#b89a61] hover:bg-[#b89a61] hover:text-[#171614]"
      >
        <span>Enquire</span>

        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          strokeWidth={1.2}
        />
      </button>
    </article>
  );
}


/* ============================================================
   ANIMATED PRICE
============================================================ */

function AnimatedPrice({
  target,
}: {
  target: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  const animationStarted = useRef(false);

  useEffect(() => {
    if (animationStarted.current) {
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

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress = easeOut(progress);

      const currentValue = Math.round(
        target * easedProgress
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <span className="font-serif text-5xl font-normal tracking-tight text-[#f3efe6] tabular-nums sm:text-6xl">
      {displayValue.toLocaleString('en-IN')}
    </span>
  );
}


/* ============================================================
   PAYMENT ITEM
============================================================ */

function PaymentItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
        {title}
      </p>

      <p className="mt-2 font-serif text-lg text-white/70">
        {value}
      </p>
    </div>
  );
}