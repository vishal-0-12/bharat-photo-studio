import { ArrowUpRight, ZoomIn } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import {
  useLightbox,
  Lightbox,
  type LightboxImage,
} from './Lightbox';

const galleryImages: (LightboxImage & {
  span: string;
  number: string;
})[] = [
  {
    url: 'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Indian couple wedding ceremony',
    label: 'The Ceremony',
    number: '01',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/18706408/pexels-photo-18706408.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Ring exchange ceremony',
    label: 'The Promise',
    number: '02',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/18897190/pexels-photo-18897190.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Haldi ceremony groom',
    label: 'Haldi',
    number: '03',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/33078527/pexels-photo-33078527.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Bride applying turmeric',
    label: 'The Rituals',
    number: '04',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/19613670/pexels-photo-19613670.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Newlywed couple portrait',
    label: 'Together',
    number: '05',
    span: 'lg:col-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/32483856/pexels-photo-32483856.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Joyful Indian wedding celebration',
    label: 'Celebration',
    number: '06',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/30169492/pexels-photo-30169492.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Night wedding ceremony',
    label: 'After Dark',
    number: '07',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/31953140/pexels-photo-31953140.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Black and white wedding portrait',
    label: 'In Between',
    number: '08',
    span: '',
  },
];

export default function Gallery() {
  const { ref, isVisible } = useReveal();
  const lb = useLightbox();

  return (
    <section
      id="gallery"
      className="gallery-section relative overflow-hidden bg-[#f4f0e8]"
    >
      {/* subtle texture */}
      <div className="gallery-grain pointer-events-none absolute inset-0" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 ${
          isVisible ? 'gallery-visible' : ''
        }`}
      >
        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

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
              A collection of real moments from celebrations we've had the
              privilege of documenting. Nothing staged. Nothing repeated.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#171614]/35">
              <span>Weddings</span>
              <span>•</span>
              <span>Chandigarh</span>
              <span>•</span>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* GALLERY GRID */}
        {/* ================================= */}

        <div className="gallery-grid mt-20 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:grid-rows-[260px_260px_260px]">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.number}
              image={image}
              index={index}
              onClick={() => lb.show(index)}
            />
          ))}
        </div>

        {/* ================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================= */}

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

          <button
            onClick={() => lb.show(0)}
            className="gallery-view-button group flex items-center gap-4 border-b border-[#171614]/20 pb-3 text-[10px] uppercase tracking-[0.25em] text-[#171614]/60 transition-colors duration-300 hover:border-[#9a7b45] hover:text-[#9a7b45]"
          >
            View full gallery

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.2}
            />
          </button>
        </div>
      </div>

      <Lightbox images={galleryImages} state={lb} />
    </section>
  );
}


/* ========================================= */
/* GALLERY ITEM */
/* ========================================= */

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: (typeof galleryImages)[number];
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`gallery-item ${image.span} group relative min-h-[220px] cursor-pointer overflow-hidden text-left`}
      aria-label={`Open ${image.label}`}
    >
      {/* Image */}
      <img
        src={image.url}
        alt={image.alt}
        loading={index < 4 ? 'eager' : 'lazy'}
        className="gallery-image h-full w-full object-cover"
      />

      {/* Soft cinematic overlay */}
      <div className="gallery-overlay absolute inset-0" />

      {/* Top information */}
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <span className="gallery-number text-[10px] tracking-[0.2em] text-white/70">
          {image.number}
        </span>

        <span className="gallery-zoom flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-sm">
          <ZoomIn
            className="h-4 w-4"
            strokeWidth={1.2}
          />
        </span>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
        <div className="gallery-label flex items-end justify-between gap-4">
          <div>
            <p className="font-serif text-xl font-normal text-white sm:text-2xl">
              {image.label}
            </p>

            <span className="mt-2 block h-px w-8 bg-[#c3a66c]" />
          </div>

          <ArrowUpRight
            className="h-5 w-5 text-white/70"
            strokeWidth={1.2}
          />
        </div>
      </div>
    </button>
  );
}