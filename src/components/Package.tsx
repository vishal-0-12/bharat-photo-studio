import {
  Check,
  Crown,
  IndianRupee,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';

import { useReveal } from '../hooks/useReveal';
import ParticleField from '../components/ParticleField';
import type { Route } from '../hooks/useRouter';

type AccentKey = 'blue' | 'purple' | 'gold';

type Package = {
  name: string;
  price: string;
  subtitle: string;
  accent: AccentKey;
  features: string[];
  team: string;
  icon: typeof Crown;
};

type PackageProps = {
  navigate: (route: Route) => void;
};

const accentMap: Record<
  AccentKey,
  {
    gradient: string;
    border: string;
    glow: string;
    badge: string;
    iconBg: string;
    priceText: string;
    check: string;
    teamBg: string;
    btn: string;
    btnHover: string;
    ring: string;
  }
> = {
  blue: {
    gradient:
      'from-sky-900/60 via-charcoal-800/80 to-charcoal-800/80',
    border: 'border-sky-400/30',
    glow: 'group-hover:shadow-sky-500/20',
    badge: 'from-sky-600 to-sky-800',
    iconBg:
      'from-sky-400/20 to-sky-600/20 text-sky-300',
    priceText: 'text-sky-200',
    check: 'text-sky-400',
    teamBg: 'bg-sky-500/10',
    btn: 'from-sky-600 to-sky-700',
    btnHover:
      'hover:from-sky-500 hover:to-sky-600',
    ring: 'ring-sky-400/30',
  },

  purple: {
    gradient:
      'from-fuchsia-900/50 via-charcoal-800/80 to-charcoal-800/80',
    border: 'border-fuchsia-400/30',
    glow:
      'group-hover:shadow-fuchsia-500/20',
    badge: 'from-fuchsia-700 to-fuchsia-900',
    iconBg:
      'from-fuchsia-400/20 to-fuchsia-600/20 text-fuchsia-300',
    priceText: 'text-fuchsia-200',
    check: 'text-fuchsia-400',
    teamBg: 'bg-fuchsia-500/10',
    btn: 'from-fuchsia-600 to-fuchsia-700',
    btnHover:
      'hover:from-fuchsia-500 hover:to-fuchsia-600',
    ring: 'ring-fuchsia-400/30',
  },

  gold: {
    gradient:
      'from-gold-900/50 via-charcoal-800/80 to-charcoal-800/80',
    border: 'border-gold-400/50',
    glow:
      'group-hover:shadow-gold-500/30',
    badge: 'from-gold-500 to-gold-700',
    iconBg:
      'from-gold-400/20 to-gold-600/20 text-gold-300',
    priceText: 'text-gold-300',
    check: 'text-gold-400',
    teamBg: 'bg-gold-500/10',
    btn: 'from-gold-500 to-gold-600',
    btnHover:
      'hover:from-gold-400 hover:to-gold-500',
    ring: 'ring-gold-400/40',
  },
};

const packages: Package[] = [
  {
    name: 'Normal Package',
    price: '₹25,000/-',
    subtitle:
      'Simple Moments, Beautiful Memories',
    accent: 'blue',
    icon: Sparkles,
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
    price: '₹45,000/-',
    subtitle:
      'More Coverage, More Emotions',
    accent: 'purple',
    icon: Zap,
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
  },

  {
    name: 'Gold Package',
    price: '₹75,000/-',
    subtitle:
      'Luxury Coverage, Lifetime Memories',
    accent: 'gold',
    icon: Crown,
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

export default function Package({
  navigate,
}: PackageProps) {
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
        bg-gradient-to-b
        from-charcoal-950
        via-charcoal-900
        to-charcoal-950
      "
    >
      {/* =========================================
          AMBIENT GLOWS
      ========================================= */}

      <div className="absolute inset-0 opacity-10">
        <div
          className="
            absolute
            -left-32
            top-20
            h-96
            w-96
            rounded-full
            bg-gold-500
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-1/3
            h-80
            w-80
            rounded-full
            bg-maroon-600
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/3
            h-72
            w-72
            rounded-full
            bg-gold-400
            blur-[100px]
          "
        />
      </div>

      <ParticleField
        count={30}
        color="212,168,74"
      />

      <div
        ref={ref}
        className={`
          relative
          mx-auto
          w-full
          max-w-7xl
          reveal
          ${
            isVisible
              ? 'is-visible'
              : ''
          }
        `}
      >
        {/* =========================================
            HEADING
        ========================================= */}

        <div
          className="
            mb-12
            text-center
            sm:mb-14
            md:mb-16
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-gold-400
              sm:text-xs
              md:text-sm
              md:tracking-[0.25em]
            "
          >
            Wedding Photography Packages
          </span>

          <h2
            className="
              mt-3
              font-serif
              text-2xl
              font-bold
              leading-tight
              text-white
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
            "
          >
            Choose Your Perfect Package
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              px-2
              text-sm
              leading-relaxed
              text-white/60
              sm:text-base
            "
          >
            We do not just take photos, we capture
            your emotions for a lifetime.
          </p>

          <div
            className="
              mx-auto
              mt-5
              flex
              items-center
              justify-center
              gap-2
              sm:gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                to-gold-500/60
                sm:w-16
              "
            />

            <span className="text-gold-400">
              ✦
            </span>

            <span
              className="
                h-px
                w-10
                bg-gradient-to-l
                from-transparent
                to-gold-500/60
                sm:w-16
              "
            />
          </div>
        </div>

        {/* =========================================
            PACKAGE CARDS

            PHONE  : 1 column
            TABLET : 2 columns
            DESKTOP: 3 columns
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {packages.map((item, i) => (
            <div
              key={item.name}
              className={`
                ${
                  i === 2
                    ? 'md:col-span-2 lg:col-span-1'
                    : ''
                }
              `}
            >
              <PackageCard
                item={item}
                featured={i === 2}
                onEnquire={handleEnquire}
              />
            </div>
          ))}
        </div>

        {/* =========================================
            INFORMATION CARDS

            PHONE  : 1 column
            TABLET : 2 columns
            DESKTOP: 3 columns
        ========================================= */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
            lg:mt-8
            lg:grid-cols-3
          "
        >
          {/* Additional Services */}

          <InfoCard
            title="Additional Services"
            icon={
              <Star className="h-5 w-5" />
            }
            accent="gold"
          >
            <ul className="space-y-3">
              {extraServices.map(
                (service) => (
                  <li
                    key={service}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-relaxed
                      text-white/75
                    "
                  >
                    <Check
                      className="
                        mt-0.5
                        h-4
                        w-4
                        flex-shrink-0
                        text-gold-400
                      "
                    />

                    <span>
                      {service}
                    </span>
                  </li>
                )
              )}
            </ul>

            <p
              className="
                mt-5
                text-[11px]
                leading-relaxed
                text-white/40
                sm:text-xs
              "
            >
              All prices are subject to GST
              18% applicable.
            </p>
          </InfoCard>

          {/* Payment Terms */}

          <InfoCard
            title="Payment Terms"
            icon={
              <IndianRupee className="h-5 w-5" />
            }
            accent="maroon"
          >
            <ul
              className="
                space-y-4
                text-sm
                text-white/75
              "
            >
              <li
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                <span>
                  Booking Advance
                </span>

                <strong
                  className="
                    whitespace-nowrap
                    text-gold-300
                  "
                >
                  ₹10,000/-
                </strong>
              </li>

              <li
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                <span>
                  Balance Before Event
                </span>

                <span
                  className="
                    text-right
                    text-gold-300
                  "
                >
                  As per package
                </span>
              </li>

              <li
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                <span>
                  Mode of Payment
                </span>

                <span
                  className="
                    max-w-[55%]
                    text-right
                    text-gold-300
                  "
                >
                  Cash / UPI / Bank Transfer
                </span>
              </li>
            </ul>

            <div
              className="
                mt-5
                border-t
                border-white/10
                pt-4
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-gold-400
                  sm:text-xs
                "
              >
                Quotation Validity
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  leading-relaxed
                  text-white/70
                "
              >
                This quotation is valid for
                15 days from the date of issue.
              </p>
            </div>
          </InfoCard>

          {/* Why Choose Us */}

          <div className="md:col-span-2 lg:col-span-1">
            <InfoCard
              title="Why Choose Us?"
              icon={
                <Sparkles className="h-5 w-5" />
              }
              accent="gold"
            >
              <ul className="space-y-3">
                {reasons.map(
                  (reason) => (
                    <li
                      key={reason}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-relaxed
                        text-white/75
                      "
                    >
                      <Check
                        className="
                          mt-0.5
                          h-4
                          w-4
                          flex-shrink-0
                          text-gold-400
                        "
                      />

                      <span>
                        {reason}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================================================
   PACKAGE CARD
================================================= */

function PackageCard({
  item,
  featured,
  onEnquire,
}: {
  item: Package;
  featured: boolean;
  onEnquire: () => void;
}) {
  const a = accentMap[item.accent];
  const Icon = item.icon;

  return (
    <div
      className={`
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        ${a.border}
        bg-gradient-to-br
        ${a.gradient}
        p-5
        shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-1
        ${a.glow}
        hover:shadow-2xl
        sm:rounded-3xl
        sm:p-6
        md:p-7
        ${
          featured
            ? 'lg:-translate-y-4 lg:scale-105'
            : ''
        }
      `}
    >
      {/* Top accent bar */}

      <div
        className={`
          absolute
          left-0
          right-0
          top-0
          h-1.5
          bg-gradient-to-r
          ${a.badge}
        `}
      />

      {/* Corner flourish */}

      <div
        className={`
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-gradient-to-br
          ${a.badge}
          opacity-10
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-20
        `}
      />

      {/* Featured badge */}

      {featured && (
        <div
          className="
            absolute
            right-3
            top-4
            z-10
            flex
            items-center
            gap-1
            rounded-full
            bg-gradient-to-r
            from-gold-400
            to-gold-600
            px-2.5
            py-1
            text-[8px]
            font-bold
            uppercase
            tracking-wider
            text-white
            shadow-lg
            shadow-gold-900/30
            sm:right-5
            sm:top-5
            sm:gap-1.5
            sm:px-3
            sm:py-1.5
            sm:text-[10px]
          "
        >
          <Crown
            className="
              h-2.5
              w-2.5
              sm:h-3
              sm:w-3
            "
          />

          Most Complete
        </div>
      )}

      {/* Package icon + name */}

      <div
        className={`
          mb-5
          inline-flex
          w-fit
          max-w-[calc(100%-0px)]
          items-center
          gap-2
          rounded-full
          bg-gradient-to-r
          ${a.badge}
          px-3
          py-2
          text-[10px]
          font-bold
          uppercase
          tracking-wider
          text-white
          shadow-lg
          sm:gap-2.5
          sm:px-4
          sm:text-xs
        `}
      >
        <Icon
          className="
            h-3.5
            w-3.5
            flex-shrink-0
            sm:h-4
            sm:w-4
          "
        />

        <span className="truncate">
          {item.name}
        </span>
      </div>

      {/* Subtitle */}

      <p
        className="
          text-sm
          italic
          leading-relaxed
          text-white/55
        "
      >
        {item.subtitle}
      </p>

      {/* Price */}

      <div
        className="
          mt-4
          flex
          items-baseline
          gap-1
        "
      >
        <span
          className={`
            font-serif
            text-3xl
            font-bold
            ${a.priceText}
            sm:text-4xl
          `}
        >
          {item.price}
        </span>
      </div>

      {/* Divider */}

      <div
        className="
          my-5
          flex
          items-center
          gap-2
        "
      >
        <span
          className={`
            h-px
            flex-1
            bg-gradient-to-r
            from-transparent
            ${
              item.accent === 'blue'
                ? 'via-sky-500/30'
                : item.accent === 'purple'
                  ? 'via-fuchsia-500/30'
                  : 'via-gold-500/40'
            }
            to-transparent
          `}
        />

        <span className="text-white/20">
          ✦
        </span>

        <span
          className={`
            h-px
            flex-1
            bg-gradient-to-l
            from-transparent
            ${
              item.accent === 'blue'
                ? 'via-sky-500/30'
                : item.accent === 'purple'
                  ? 'via-fuchsia-500/30'
                  : 'via-gold-500/40'
            }
            to-transparent
          `}
        />
      </div>

      {/* Features */}

      <ul
        className="
          flex-1
          space-y-3
        "
      >
        {item.features.map(
          (feature) => (
            <li
              key={feature}
              className="
                flex
                items-start
                gap-3
                text-sm
                leading-relaxed
                text-white/80
                transition-colors
                duration-300
                group-hover:text-white/90
              "
            >
              <span
                className={`
                  mt-0.5
                  flex
                  h-5
                  w-5
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  ${a.iconBg}
                `}
              >
                <Check
                  className={`
                    h-3
                    w-3
                    ${a.check}
                  `}
                />
              </span>

              <span className="min-w-0">
                {feature}
              </span>
            </li>
          )
        )}
      </ul>

      {/* Team */}

      <div
        className={`
          mt-6
          flex
          items-start
          gap-3
          rounded-2xl
          ${a.teamBg}
          border
          border-white/5
          p-3.5
          sm:p-4
        `}
      >
        <Users
          className={`
            mt-0.5
            h-5
            w-5
            flex-shrink-0
            ${a.check}
          `}
        />

        <div className="min-w-0">
          <p
            className={`
              text-[10px]
              uppercase
              tracking-wider
              ${a.check}
              sm:text-xs
            `}
          >
            Team
          </p>

          <p
            className="
              mt-1
              text-sm
              leading-relaxed
              text-white/75
            "
          >
            {item.team}
          </p>
        </div>
      </div>

      {/* CTA */}

      <button
        type="button"
        onClick={onEnquire}
        className={`
          shimmer-sweep
          relative
          mt-6
          flex
          min-h-[48px]
          w-full
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          ${a.btn}
          px-4
          py-3.5
          text-center
          text-xs
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          ${a.btnHover}
          hover:shadow-xl
          active:scale-[0.98]
          sm:text-sm
        `}
      >
        Enquire About This Package
      </button>
    </div>
  );
}

/* =================================================
   INFO CARD
================================================= */

function InfoCard({
  title,
  icon,
  children,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  accent: 'gold' | 'maroon';
}) {
  const headerGradient =
    accent === 'gold'
      ? 'from-gold-400 to-gold-600'
      : 'from-maroon-400 to-maroon-600';

  const iconBg =
    accent === 'gold'
      ? 'bg-gold-500/15 text-gold-300'
      : 'bg-maroon-500/15 text-maroon-300';

  return (
    <div
      className="
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-gold-500/15
        bg-gradient-to-br
        from-charcoal-800/60
        to-charcoal-900/60
        p-5
        backdrop-blur-sm
        transition-all
        duration-500
        hover:border-gold-400/30
        hover:shadow-xl
        sm:rounded-3xl
        sm:p-6
      "
    >
      {/* Header accent */}

      <div
        className={`
          absolute
          left-0
          right-0
          top-0
          h-1
          bg-gradient-to-r
          ${headerGradient}
          opacity-60
        `}
      />

      {/* Title */}

      <div
        className="
          mb-5
          flex
          items-center
          gap-3
        "
      >
        <span
          className={`
            flex
            h-10
            w-10
            flex-shrink-0
            items-center
            justify-center
            rounded-xl
            ${iconBg}
          `}
        >
          {icon}
        </span>

        <h3
          className="
            font-serif
            text-lg
            font-bold
            leading-tight
            text-white
            sm:text-xl
          "
        >
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
}