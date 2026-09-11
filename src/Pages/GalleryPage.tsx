import { ZoomIn } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useParallax } from '../hooks/useAnimations';
import { useLightbox, Lightbox } from '../components/Lightbox';
import { galleryImages } from '../data/gallery';
import PageHeader from '../components/PageHeader';

export default function GalleryPage() {
  const { ref, isVisible } = useReveal();
  const lb = useLightbox();
  const parallaxRef = useParallax<HTMLDivElement>(0.15);

  return (
    <>
      <PageHeader title="Gallery" subtitle="Every photo tells a story — here are some of our most memorable creations." image="https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=1920" />
      <section className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="absolute left-0 top-1/2 h-64 w-32 -translate-y-1/2 bg-gradient-to-r from-gold-200/20 to-transparent" />
        <div className="absolute right-0 top-1/2 h-64 w-32 -translate-y-1/2 bg-gradient-to-l from-gold-200/20 to-transparent" />
        <div ref={ref} className={`relative mx-auto max-w-7xl reveal-scale ${isVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`group relative cursor-pointer overflow-hidden rounded-2xl ${img.span}`} onClick={() => lb.show(i)}>
                <img src={img.url} alt={img.alt} className="ken-burns h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-900/10 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 scale-0">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-serif text-base font-semibold text-white drop-shadow-lg">{img.label}</span>
                  <div className="mt-1 h-0.5 w-8 rounded-full bg-gold-400" />
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-gold-400/0 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-inner" />
              </div>
            ))}
          </div>
          <div ref={parallaxRef} className="mt-12 text-center">
            <p className="font-serif text-lg italic text-charcoal-700/50">Click any photo to view full size</p>
          </div>
        </div>
        <Lightbox images={galleryImages} state={lb} />
      </section>
    </>
  );
}