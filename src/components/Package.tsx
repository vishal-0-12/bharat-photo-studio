import {
  ArrowUpRight,
  Check,
  Crown,
  IndianRupee,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { useReveal } from '../hooks/useReveal';
import ParticleField from '../components/ParticleField';
import type { Route } from '../hooks/useRouter';

type PackageItem = {
  name: string;
  price: number;
  subtitle: string;
  features: string[];
  team: string;
  featured?: boolean;
};

type PackageProps = {
  navigate: (route: Route) => void;
};

const packages: PackageItem[] = [
  {
    name: 'Normal Package',
    price: 25000,
    subtitle: 'Simple moments, beautifully preserved.',
    features: [
      'Full Day Photography (8 Hours)',
      'Candid Photography',
      'Traditional Photography',
      '1 Cinematic Highlight Video (3–5 Min)',
      'Edited Photos (200–300)',
      'Online Photo Gallery (1 Month)',
      '1 Premium Photo Album (12x18)',
    ],
    team: '1 Photographer + 1 Cameraman',
  },

  {
    name: 'Medium Package',
    price: 45000,
    subtitle: 'A richer visual story of your celebration.',
    features: [
      'Full Day Photography (10–14 Hours)',
      'Candid Photography',
      'Traditional Photography',
      'Cinematic Videography (5–7 Min)',
      'Drone Coverage (Up to 2 Hours)',
      'Edited Photos (500–700)',
      'Online Photo Gallery (3 Months)',
      '1 Premium Photo Album (12x18)',
    ],
    team: '2 Photographers + 1 Cameraman',
    featured: true,
  },

  {
    name: 'Gold Package',
    price: 75000,
    subtitle: 'Complete coverage for an unforgettable story.',
    features: [
      'Full Day Photography (12–14 Hours)',
      'Candid Photography',
      'Traditional Photography',
      'Cinematic Videography (8–10 Min)',
      'Drone Coverage (Full Day)',
      'Pre-Wedding Shoot (Optional)',
      'Edited Photos (1000+)',
      'Online Photo Gallery (6 Months)',
      '1 Premium Wedding Album (12x18)',
      'Highlight + Teaser Video (Short Film)',
      'Reels / Social Media Clips (10–15)',
    ],
    team:
      '3 Photographers + 1 Cameraman + Drone Pilot (If Required)',
  },
];

const extraServices = [
  'Extra Photo Album (12x18) — ₹3,000/-',
  'Pre-Wedding Shoot (Outdoor) — ₹12,000/-',
  'Drone Coverage (Extra Hours) — ₹5,000/-',
  'Cinematic Full Video (15 Min) — ₹8,000/-',
  'Live Streaming (Wedding) — ₹7,000/-',
];

const reasons = [
  'Professional & Experienced Team',
  'Latest Equipment (Canon / Nikon)',
  'Creative & Candid Approach',
  'High Quality Editing',
  'On-Time Delivery',
  'Customer Satisfaction 100%',
];

export default function Package({ navigate }: PackageProps) {
  const { ref, isVisible } = useReveal();

  const handleEnquire = () => {
    navigate('contact');
  };

  return (
    <section
      id="packages"
      className="
        section-pad
        relative
        overflow-hidden
        bg-[#171614]
        text-[#f4f0e8]
      "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-180px]
            top-24
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#b89452]/5
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-20
            right-[-180px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#b89452]/4
            blur-[130px]
          "
        />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <ParticleField
          count={18}
          color="184,148,82"
        />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#b89452]
            "
          >
            Wedding Collections
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              font-normal
              leading-[1.08]
              tracking-tight
              text-[#f4f0e8]
              sm:text-5xl
              md:text-6xl
            "
          >
            Choose how your
            <br />
            <span className="italic text-[#c7a35d]">
              story lives.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-[#f4f0e8]/55
              sm:text-base
            "
          >
            Thoughtfully created collections for couples who want
            their wedding memories captured with intention,
            emotion and timeless style.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#b89452]/40" />

            <span className="text-[10px] text-[#b89452]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#b89452]/40" />
          </div>
        </div>

        {/* Package Cards */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <PackageCard
              key={item.name}
              item={item}
              index={index}
              animate={isVisible}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Information Cards */}

        <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Additional Services */}

          <InfoCard
            title="Additional Services"
            icon={<Star className="h-[18px] w-[18px]" />}
          >
            <ul className="space-y-4">
              {extraServices.map((service) => (
                <li
                  key={service}
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-[#f4f0e8]/65
                  "
                >
                  <Check
                    className="
                      mt-1
                      h-3.5
                      w-3.5
                      flex-shrink-0
                      text-[#b89452]
                    "
                  />

                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <p
              className="
                mt-6
                border-t
                border-[#f4f0e8]/10
                pt-5
                text-[11px]
                leading-5
                text-[#f4f0e8]/35
              "
            >
              All prices are subject to GST 18% applicable.
            </p>
          </InfoCard>

          {/* Payment Terms */}

          <InfoCard
            title="Payment Terms"
            icon={<IndianRupee className="h-[18px] w-[18px]" />}
          >
            <div className="space-y-5">
              <PaymentRow
                label="Booking Advance"
                value="₹10,000/-"
              />

              <PaymentRow
                label="Balance Before Event"
                value="As per package"
              />

              <PaymentRow
                label="Mode of Payment"
                value="Cash / UPI / Bank Transfer"
              />
            </div>

            <div
              className="
                mt-7
                border-t
                border-[#f4f0e8]/10
                pt-5
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#b89452]
                "
              >
                Quotation Validity
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  leading-6
                  text-[#f4f0e8]/45
                "
              >
                This quotation is valid for 15 days from the
                date of issue.
              </p>
            </div>
          </InfoCard>

          {/* Why Choose Us */}

          <InfoCard
            title="Why Choose Us?"
            icon={<Sparkles className="h-[18px] w-[18px]" />}
          >
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-[#f4f0e8]/65
                  "
                >
                  <Check
                    className="
                      mt-1
                      h-3.5
                      w-3.5
                      flex-shrink-0
                      text-[#b89452]
                    "
                  />

                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>

        {/* Final CTA */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            border
            border-[#b89452]/20
            bg-[#1c1a17]
            px-7
            py-10
            sm:px-10
            sm:py-12
          "
        >
          <div
            className="
              absolute
              right-0
              top-0
              h-48
              w-48
              rounded-full
              bg-[#b89452]/5
              blur-[100px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-8
              md:flex-row
              md:items-center
            "
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Crown
                  className="h-4 w-4 text-[#b89452]"
                  strokeWidth={1.4}
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#b89452]
                  "
                >
                  Your story starts here
                </span>
              </div>

              <h3
                className="
                  font-serif
                  text-3xl
                  font-normal
                  text-[#f4f0e8]
                  sm:text-4xl
                "
              >
                Let's create something
                <span className="italic text-[#c7a35d]">
                  {' '}timeless.
                </span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#f4f0e8]/45
                "
              >
                Tell us about your celebration and we'll help
                you select the right collection for your day.
              </p>
            </div>

            <button
              type="button"
              onClick={handleEnquire}
              className="
                group
                inline-flex
                items-center
                gap-3
                border
                border-[#b89452]/50
                px-7
                py-3.5
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#c7a35d]
                transition-all
                duration-300
                hover:bg-[#b89452]
                hover:text-[#171614]
              "
            >
              Enquire Now

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* PACKAGE CARD */
/* ================================================= */

function PackageCard({
  item,
  index,
  animate,
  onEnquire,
}: {
  item: PackageItem;
  index: number;
  animate: boolean;
  onEnquire: () => void;
}) {
  return (
    <article
      className={`
        group
        relative
        flex
        h-full
        flex-col
        border
        ${
          item.featured
            ? 'border-[#b89452]/45 bg-[#1e1b17]'
            : 'border-[#f4f0e8]/10 bg-[#1b1917]'
        }
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#b89452]/35
        sm:p-8
      `}
    >
      {/* Featured line */}

      {item.featured && (
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-[#b89452]
          "
        />
      )}

      {/* Package Number */}

      <div className="flex items-start justify-between">
        <span
          className="
            font-serif
            text-5xl
            font-light
            leading-none
            text-[#b89452]/25
          "
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {item.featured && (
          <span
            className="
              flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#b89452]
            "
          >
            <Crown
              className="h-3 w-3"
              strokeWidth={1.4}
            />

            Recommended
          </span>
        )}
      </div>

      {/* Package Name */}

      <div className="mt-8">
        <h3
          className="
            font-serif
            text-2xl
            font-normal
            text-[#f4f0e8]
            sm:text-3xl
          "
        >
          {item.name}
        </h3>

        <p
          className="
            mt-2
            text-sm
            italic
            text-[#f4f0e8]/40
          "
        >
          {item.subtitle}
        </p>
      </div>

      {/* DYNAMIC PRICE */}

      <div className="mt-7 flex items-end">
        <AnimatedPrice
          target={item.price}
          animate={animate}
          delay={index * 180}
        />

        <span
          className="
            mb-1.5
            ml-2
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[#f4f0e8]/30
          "
        >
          onwards
        </span>
      </div>

      {/* Divider */}

      <div className="my-7 h-px bg-[#f4f0e8]/10" />

      {/* Included */}

      <p
        className="
          mb-5
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-[#b89452]
        "
      >
        Included
      </p>

      {/* Features */}

      <ul className="flex-1 space-y-3.5">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="
              flex
              items-start
              gap-3
              text-sm
              leading-6
              text-[#f4f0e8]/65
              transition-colors
              duration-300
              group-hover:text-[#f4f0e8]/80
            "
          >
            <Check
              className="
                mt-1
                h-3.5
                w-3.5
                flex-shrink-0
                text-[#b89452]
              "
              strokeWidth={1.6}
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Team */}

      <div
        className="
          mt-8
          border-t
          border-[#f4f0e8]/10
          pt-5
        "
      >
        <div className="flex items-start gap-3">
          <Users
            className="
              mt-0.5
              h-4
              w-4
              flex-shrink-0
              text-[#b89452]
            "
            strokeWidth={1.4}
          />

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-[#b89452]
              "
            >
              Coverage Team
            </p>

            <p
              className="
                mt-1.5
                text-xs
                leading-5
                text-[#f4f0e8]/50
              "
            >
              {item.team}
            </p>
          </div>
        </div>
      </div>

      {/* Button */}

      <button
        type="button"
        onClick={onEnquire}
        className="
          group/button
          mt-7
          flex
          w-full
          items-center
          justify-center
          gap-3
          border
          border-[#b89452]/35
          px-5
          py-3.5
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-[#c7a35d]
          transition-all
          duration-300
          hover:border-[#b89452]
          hover:bg-[#b89452]
          hover:text-[#171614]
        "
      >
        Enquire About Package

        <ArrowUpRight
          className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover/button:-translate-y-0.5
            group-hover/button:translate-x-0.5
          "
          strokeWidth={1.5}
        />
      </button>
    </article>
  );
}

/* ================================================= */
/* DYNAMIC PRICE COUNTER */
/* ================================================= */

function AnimatedPrice({
  target,
  animate,
  delay = 0,
}: {
  target: number;
  animate: boolean;
  delay?: number;
}) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (!animate) {
      setPrice(0);
      return;
    }

    let animationFrame: number | undefined;
    let startTime: number | null = null;

    const duration = 1400;

    const timeout = window.setTimeout(() => {
      const updatePrice = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        // Smooth ease-out
        const easedProgress =
          1 - Math.pow(1 - progress, 4);

        const currentPrice = Math.floor(
          easedProgress * target
        );

        setPrice(currentPrice);

        if (progress < 1) {
          animationFrame =
            requestAnimationFrame(updatePrice);
        } else {
          setPrice(target);
        }
      };

      animationFrame =
        requestAnimationFrame(updatePrice);
    }, delay);

    return () => {
      window.clearTimeout(timeout);

      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, animate, delay]);

  return (
    <span
      className="
        font-serif
        text-4xl
        font-normal
        tracking-tight
        text-[#c7a35d]
        sm:text-5xl
      "
    >
      ₹{price.toLocaleString('en-IN')}
    </span>
  );
}

/* ================================================= */
/* INFO CARD */
/* ================================================= */

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        border
        border-[#f4f0e8]/10
        bg-[#1b1917]
        p-6
        sm:p-7
      "
    >
      <div
        className="
          mb-7
          flex
          items-center
          gap-3
          border-b
          border-[#f4f0e8]/10
          pb-5
        "
      >
        <span className="text-[#b89452]">
          {icon}
        </span>

        <h3
          className="
            font-serif
            text-xl
            font-normal
            text-[#f4f0e8]
          "
        >
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
}

/* ================================================= */
/* PAYMENT ROW */
/* ================================================= */

function PaymentRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-start
        justify-between
        gap-5
        text-sm
      "
    >
      <span className="text-[#f4f0e8]/50">
        {label}
      </span>

      <span
        className="
          max-w-[55%]
          text-right
          text-[#c7a35d]
        "
      >
        {value}
      </span>
    </div>
  );
}