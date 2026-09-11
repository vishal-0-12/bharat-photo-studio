import { ArrowUpRight, ZoomIn } from 'lucide-react';
import { useState } from 'react';

import { useReveal } from '../hooks/useReveal';
import {
  useLightbox,
  Lightbox,
  type LightboxImage,
} from './Lightbox';

type GalleryCategory =
  | 'All'
  | 'Wedding'
  | 'Engagement'
  | 'Haldi'
  | 'Couple'
  | 'Celebration';

type GalleryImage = LightboxImage & {
  span: string;
  number: string;
  category: Exclude<GalleryCategory, 'All'>;
};

/* =====================================================
   GALLERY IMAGES
   ===================================================== */

const galleryImages: GalleryImage[] = [
  /* =====================================================
     WEDDING
     ===================================================== */

  {
    url: '/img/img1.JPG',
    alt: 'Wedding photography',
    label: 'The Ceremony',
    number: '01',
    category: 'Wedding',
    span: 'lg:col-span-2 lg:row-span-2',
  },

  {
    url: '/img/img2.jpg',
    alt: 'Wedding ceremony',
    label: 'Sacred Vows',
    number: '02',
    category: 'Wedding',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/30184675/pexels-photo-30184675.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Indian bride and groom during traditional wedding ceremony',
    label: 'The Wedding',
    number: '03',
    category: 'Wedding',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/31002333/pexels-photo-31002333.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian bride and groom in traditional wedding attire',
    label: 'Forever Begins',
    number: '04',
    category: 'Wedding',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/28210860/pexels-photo-28210860.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian bride and groom surrounded by family',
    label: 'The Ritual',
    number: '05',
    category: 'Wedding',
    span: 'lg:col-span-2',
  },

  {
    url: 'https://images.pexels.com/photos/12603609/pexels-photo-12603609.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Traditional Indian wedding ceremony',
    label: 'Together Forever',
    number: '06',
    category: 'Wedding',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/32325264/pexels-photo-32325264.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Elegant Indian wedding ceremony',
    label: 'The Wedding',
    number: '07',
    category: 'Wedding',
    span: '',
  },

  /* =====================================================
     ENGAGEMENT
     ===================================================== */

  {
    url: '/img/img3.JPG',
    alt: 'Engagement photography',
    label: 'The Promise',
    number: '08',
    category: 'Engagement',
    span: '',
  },

  {
    url: '/img/img5.JPG',
    alt: 'Engagement ceremony',
    label: 'The Ring',
    number: '09',
    category: 'Engagement',
    span: 'lg:col-span-2',
  },

  {
    url: 'https://images.pexels.com/photos/35354275/pexels-photo-35354275.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian couple celebrating engagement ceremony',
    label: 'Engaged',
    number: '10',
    category: 'Engagement',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/31965607/pexels-photo-31965607.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian couple exchanging golden rings',
    label: 'The Ring',
    number: '11',
    category: 'Engagement',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/31733607/pexels-photo-31733607.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian engagement ceremony with mehndi',
    label: 'Together',
    number: '12',
    category: 'Engagement',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/14144664/pexels-photo-14144664.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Indian bride and groom exchanging rings',
    label: 'The Promise',
    number: '13',
    category: 'Engagement',
    span: 'lg:col-span-2 lg:row-span-2',
  },

  /* =====================================================
     HALDI
     ===================================================== */

  {
    url: '/img/img7.JPG',
    alt: 'Haldi ceremony',
    label: 'Haldi',
    number: '14',
    category: 'Haldi',
    span: 'lg:col-span-2 lg:row-span-2',
  },

  {
    url: '/img/img8.JPG',
    alt: 'Haldi celebration',
    label: 'The Colors',
    number: '15',
    category: 'Haldi',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/33078524/pexels-photo-33078524.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Indian couple enjoying Haldi ceremony',
    label: 'Pure Joy',
    number: '16',
    category: 'Haldi',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/33318103/pexels-photo-33318103.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian bride in traditional yellow Haldi attire',
    label: 'Haldi Bride',
    number: '17',
    category: 'Haldi',
    span: 'lg:col-span-2',
  },

  {
    url: 'https://images.pexels.com/photos/32325926/pexels-photo-32325926.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Colorful Indian Haldi ceremony',
    label: 'The Colors',
    number: '18',
    category: 'Haldi',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/32500047/pexels-photo-32500047.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Joyful Indian Haldi ceremony',
    label: 'Celebration',
    number: '19',
    category: 'Haldi',
    span: '',
  },

  /* =====================================================
     COUPLE
     ===================================================== */

  {
    url: '/img/img9.JPG',
    alt: 'Couple photography',
    label: 'Just Us',
    number: '20',
    category: 'Couple',
    span: '',
  },

  {
    url: '/img/img10.JPG',
    alt: 'Couple portrait',
    label: 'Together',
    number: '21',
    category: 'Couple',
    span: 'lg:col-span-2 lg:row-span-2',
  },

  {
    url: 'https://images.pexels.com/photos/17657740/pexels-photo-17657740.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Indian couple in traditional clothing',
    label: 'Always',
    number: '22',
    category: 'Couple',
    span: 'lg:col-span-2',
  },

  {
    url: 'https://images.pexels.com/photos/36523477/pexels-photo-36523477.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian bride and groom enjoying an outdoor moment',
    label: 'In The Moment',
    number: '23',
    category: 'Couple',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/36248948/pexels-photo-36248948.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian couple sharing a tender wedding moment',
    label: 'In Between',
    number: '24',
    category: 'Couple',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/35635687/pexels-photo-35635687.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian couple celebrating their traditional wedding',
    label: 'Forever',
    number: '25',
    category: 'Couple',
    span: '',
  },

  /* =====================================================
     CELEBRATION
     ===================================================== */

  {
    url: '/img/img11.JPG',
    alt: 'Wedding celebration',
    label: 'Celebration',
    number: '26',
    category: 'Celebration',
    span: 'lg:col-span-2 lg:row-span-2',
  },

  {
    url: '/img/img12.JPG',
    alt: 'Wedding celebration moments',
    label: 'Wedding Joy',
    number: '27',
    category: 'Celebration',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/31906103/pexels-photo-31906103.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Joyful Indian wedding procession',
    label: 'The Celebration',
    number: '28',
    category: 'Celebration',
    span: 'lg:col-span-2',
  },

  {
    url: 'https://images.pexels.com/photos/30902343/pexels-photo-30902343.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian wedding reception celebration',
    label: 'After Dark',
    number: '29',
    category: 'Celebration',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/30215313/pexels-photo-30215313.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Joyful Indian wedding ceremony',
    label: 'The Celebration',
    number: '30',
    category: 'Celebration',
    span: '',
  },

  {
    url: 'https://images.pexels.com/photos/31002342/pexels-photo-31002342.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Indian bride and groom celebrating wedding',
    label: 'Wedding Joy',
    number: '31',
    category: 'Celebration',
    span: '',
  },
];

/* =====================================================
   CATEGORIES
   ===================================================== */

const categories: GalleryCategory[] = [
  'All',
  'Wedding',
  'Engagement',
  'Haldi',
  'Couple',
  'Celebration',
];

/* =====================================================
   GALLERY COMPONENT
   ===================================================== */

export default function Gallery() {
  const { ref, isVisible } = useReveal();

  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>('All');

  const lb = useLightbox();

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const openImage = (image: GalleryImage) => {
    const originalIndex = galleryImages.findIndex(
      (item) => item.number === image.number
    );

    if (originalIndex !== -1) {
      lb.show(originalIndex);
    }
  };

  return (
    <section
      id="gallery"
      className="gallery-section relative overflow-hidden bg-[#f4f0e8]"
    >
      {/* =================================================
          GRAIN
      ================================================= */}

      <div className="gallery-grain pointer-events-none absolute inset-0" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 ${
          isVisible ? 'gallery-visible' : ''
        }`}
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-end">
          <div className="gallery-heading">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#a88952]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#7c6848]">
                Selected Stories
              </span>
            </div>

            <h2 className="font-serif text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[0.85] tracking-[-0.05em] text-[#171614]">
              Moments
              <br />

              <span className="ml-[10vw] italic text-[#9a7b45]">
                that remain.
              </span>
            </h2>
          </div>

          <div className="gallery-intro lg:pb-3">
            <p className="max-w-md text-sm leading-7 text-[#171614]/55">
              A collection of Indian wedding moments captured
              across ceremonies, celebrations, rituals and
              beautiful stories of togetherness.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#171614]/35">
              <span>Weddings</span>
              <span>•</span>
              <span>Chandigarh</span>
              <span>•</span>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div className="gallery-categories mt-12 overflow-x-auto pb-3">
          <div className="flex min-w-max items-center gap-7 sm:gap-9">
            {categories.map((category) => {
              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`
                    group
                    relative
                    py-2
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    transition-all
                    duration-300
                    ease-out
                    focus:outline-none

                    ${
                      isActive
                        ? 'text-[#171614]'
                        : 'text-[#171614]/40 hover:text-[#171614]'
                    }
                  `}
                >
                  <span
                    className="
                      transition-all
                      duration-300
                      ease-out
                      group-hover:tracking-[0.28em]
                    "
                  >
                    {category}
                  </span>

                  {/* UNDERLINE */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-px
                      bg-[#9a7b45]
                      transition-all
                      duration-500
                      ease-out

                      ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }
                    `}
                  />

                  {/* SMALL GOLD DOT */}

                  <span
                    className={`
                      absolute
                      -bottom-[2px]
                      right-0
                      h-[3px]
                      w-[3px]
                      rounded-full
                      bg-[#9a7b45]
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? 'scale-100 opacity-100'
                          : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            CATEGORY INFO
        ================================================= */}

        <div className="mt-8 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#171614]/40">
            Showing{' '}
            <span className="text-[#9a7b45]">
              {activeCategory}
            </span>
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#171614]/30">
            {filteredImages.length} Stories
          </p>
        </div>

        {/* =================================================
            GALLERY GRID
        ================================================= */}

        <div
          className="
            gallery-grid
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
            lg:auto-rows-[260px]
          "
        >
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={`${image.number}-${image.url}`}
              image={image}
              index={index}
              onClick={() => openImage(image)}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="gallery-statement mt-20 grid gap-8 border-t border-[#171614]/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#7c6848]">
              Our approach
            </span>

            <p className="mt-5 max-w-2xl font-serif text-2xl leading-relaxed text-[#171614]/65 sm:text-3xl">
              We don't chase perfect photographs.
              <span className="italic text-[#9a7b45]">
                {' '}
                We look for honest ones.
              </span>
            </p>
          </div>

          {/* =================================================
              VIEW FULL GALLERY BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              lb.show(0);
            }}
            className="
              group
              relative
              flex
              w-fit
              items-center
              gap-4
              border-b
              border-[#171614]/20
              pb-3
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#171614]/60
              transition-all
              duration-300
              ease-out
              hover:border-[#9a7b45]
              hover:text-[#9a7b45]
              focus:outline-none
            "
          >
            <span
              className="
                transition-transform
                duration-300
                ease-out
                group-hover:translate-x-1
              "
            >
              View full gallery
            </span>

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                ease-out
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
              strokeWidth={1.2}
            />
          </button>
        </div>
      </div>

      {/* =================================================
          LIGHTBOX
      ================================================= */}

      <Lightbox
        images={galleryImages}
        state={lb}
      />
    </section>
  );
}

/* =====================================================
   GALLERY ITEM
   ===================================================== */

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        gallery-item
        ${image.span}
        group
        relative
        min-h-[380px]
        w-full
        cursor-pointer
        overflow-hidden
        rounded-sm
        text-left
        transition-transform
        duration-500
        ease-out
        hover:-translate-y-[2px]
        focus:outline-none
        sm:min-h-[340px]
        lg:min-h-0
        lg:h-full
      `}
      style={{
        animationDelay: `${index * 70}ms`,
      }}
      aria-label={`Open ${image.label}`}
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <img
        src={image.url}
        alt={image.alt}
        loading={index < 4 ? 'eager' : 'lazy'}
        decoding="async"
        className="
          absolute
          inset-0
          block
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-[1000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[1.045]
        "
        onError={(e) => {
          console.error(
            `Gallery image failed to load: ${image.url}`
          );

          e.currentTarget.style.opacity = '0';
        }}
      />

      {/* =================================================
          CINEMATIC OVERLAY
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-black/0
          via-black/0
          to-black/60
          transition-all
          duration-700
          ease-out
          group-hover:from-black/[0.08]
          group-hover:via-black/[0.02]
          group-hover:to-black/75
        "
      />

      {/* =================================================
          SUBTLE INNER BORDER
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          border
          border-white/0
          transition-all
          duration-700
          ease-out
          group-hover:border-white/20
        "
      />

      {/* =================================================
          NUMBER
      ================================================= */}

      <div className="pointer-events-none absolute left-5 top-5">
        <span
          className="
            text-[10px]
            tracking-[0.2em]
            text-white/60
            transition-colors
            duration-300
            group-hover:text-[#e4d09f]
          "
        >
          {image.number}
        </span>
      </div>

      {/* =================================================
          ZOOM ICON
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-5
          flex
          h-9
          w-9
          translate-y-1
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/10
          text-white/80
          opacity-0
          backdrop-blur-sm
          transition-all
          duration-500
          ease-out
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <ZoomIn
          className="
            h-4
            w-4
            transition-transform
            duration-500
            group-hover:scale-90
          "
          strokeWidth={1.2}
        />
      </div>

      {/* =================================================
          CATEGORY
      ================================================= */}

      <div className="pointer-events-none absolute left-5 top-14">
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-white/55
            transition-colors
            duration-300
            group-hover:text-[#e4d09f]
          "
        >
          {image.category}
        </span>
      </div>

      {/* =================================================
          BOTTOM CONTENT
      ================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 sm:p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p
              className="
                font-serif
                text-xl
                font-normal
                text-white
                transition-transform
                duration-500
                ease-out
                group-hover:-translate-y-1
                sm:text-2xl
              "
            >
              {image.label}
            </p>

            {/* GOLD LINE */}

            <span
              className="
                mt-3
                block
                h-px
                w-7
                bg-[#c3a66c]
                transition-all
                duration-500
                ease-out
                group-hover:w-12
              "
            />
          </div>

          {/* ARROW */}

          <ArrowUpRight
            className="
              h-5
              w-5
              text-white/55
              transition-all
              duration-500
              ease-out
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-[#e4d09f]
            "
            strokeWidth={1.1}
          />
        </div>
      </div>
    </button>
  );
}