import { ZoomIn } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useParallax } from '../hooks/useAnimations';
import { useLightbox, Lightbox, type LightboxImage } from '../components/Lightbox';

const galleryImages: (LightboxImage & { span: string })[] = [
  { url: 'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian couple wedding ceremony', label: 'Wedding Ceremony', span: 'lg:col-span-2 lg:row-span-2' },
  { url: 'https://images.pexels.com/photos/18706408/pexels-photo-18706408.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Ring exchange ceremony', label: 'Ring Ceremony', span: '' },
  { url: 'https://images.pexels.com/photos/18897190/pexels-photo-18897190.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Haldi ceremony groom', label: 'Haldi Ceremony', span: '' },
  { url: 'https://images.pexels.com/photos/33078527/pexels-photo-33078527.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bride applying turmeric', label: 'Haldi Ritual', span: '' },
  { url: 'https://images.pexels.com/photos/19613670/pexels-photo-19613670.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Newlywed couple portrait', label: 'Couple Portrait', span: 'lg:col-span-2' },
  { url: 'https://images.pexels.com/photos/32483856/pexels-photo-32483856.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Joyful Indian wedding celebration', label: 'Celebration', span: '' },
  { url: 'https://images.pexels.com/photos/30169492/pexels-photo-30169492.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Night wedding ceremony', label: 'Night Ceremony', span: '' },
  { url: 'https://images.pexels.com/photos/31953140/pexels-photo-31953140.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Black and white wedding portrait', label: 'Classic Portrait', span: '' },
];

export default function Gallery() {
  const { ref, isVisible } = useReveal();
  const lb = useLightbox();
  const parallaxRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section id="gallery" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
      {/* Decorative side accents */}
      <div className="absolute left-0 top-1/2 h-64 w-32 -translate-y-1/2 bg-gradient-to-r from-gold-200/20 to-transparent" />
      <div className="absolute right-0 top-1/2 h-64 w-32 -translate-y-1/2 bg-gradient-to-l from-gold-200/20 to-transparent" />

      <div ref={ref} className={`relative mx-auto max-w-7xl reveal-scale ${isVisible ? 'is-visible' : ''}`}>
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">Our Work</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl md:text-5xl">Gallery</h2>
          <p className="mt-4 text-base text-charcoal-700/60">Every photo tells a story — here are some of our most memorable creations.</p>
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-500">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-3">
          {galleryImages.map((img, i) => (
            <div key={i} className={`group relative cursor-pointer overflow-hidden rounded-2xl ${img.span}`} onClick={() => lb.show(i)}>
              {/* Image with Ken Burns */}
              <img src={img.url} alt={img.alt} className="ken-burns h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-900/10 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Zoom icon */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 scale-0">
                <ZoomIn className="h-5 w-5 text-white" />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-serif text-base font-semibold text-white drop-shadow-lg">{img.label}</span>
                <div className="mt-1 h-0.5 w-8 rounded-full bg-gold-400" />
              </div>

              {/* Gold border frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gold-400/0 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-inner" />
            </div>
          ))}
        </div>

        {/* Parallax hint */}
        <div ref={parallaxRef} className="mt-12 text-center">
          <p className="font-serif text-lg italic text-charcoal-700/50">Click any photo to view full size</p>
        </div>
      </div>

      <Lightbox images={galleryImages} state={lb} />
    </section>
  );
}
