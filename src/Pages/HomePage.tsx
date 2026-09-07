import { ArrowRight, CalendarCheck, Phone, Camera, Heart, Award, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import ParticleField from '../components/ParticleField';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useAnimations';
import { galleryImages } from '../data/gallery';
import type { Route } from '../hooks/useRouter';

const highlights = [
  { icon: Camera, value: 500, suffix: '+', label: 'Weddings Covered' },
  { icon: Heart, value: 100, suffix: '%', label: 'Customer Satisfaction' },
  { icon: Award, value: 15, suffix: '+', label: 'Years of Experience' },
  { icon: MapPin, value: 0, suffix: 'NCR', label: 'Delhi Coverage', textOnly: true },
];

export default function HomePage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <Hero />
      <About />

      {/* Stats strip */}
      <section className="relative overflow-hidden bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 py-16">
        <ParticleField count={20} color="212,168,74" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, value, suffix, label, textOnly }) => {
              const { ref: cRef, value: cVal } = useCounter(value);
              return (
                <div key={label} className="text-center">
                  <Icon className="mx-auto mb-3 h-8 w-8 text-gold-400" />
                  <p className="font-serif text-3xl font-bold text-white sm:text-4xl">
                    {textOnly ? <span ref={cRef}>{suffix}</span> : <span ref={cRef}>{cVal}{suffix}</span>}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <GalleryPreview navigate={navigate} />

      {/* CTA */}
      <CTASection navigate={navigate} />
    </>
  );
}

function GalleryPreview({ navigate }: { navigate: (r: Route) => void }) {
  const { ref, isVisible } = useReveal();
  const preview = galleryImages.slice(0, 6);
  return (
    <section className="section-pad bg-cream-50">
      <div ref={ref} className={`mx-auto max-w-7xl reveal-scale ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">Our Work</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl md:text-5xl">Moments We Have Captured</h2>
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-500">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {preview.map((img, i) => (
            <div key={i} className="group relative cursor-pointer overflow-hidden rounded-2xl" onClick={() => navigate('gallery')}>
              <img src={img.url} alt={img.alt} className="ken-burns h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-serif text-base font-semibold text-white">{img.label}</span>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-gold-400/0 transition-all duration-500 group-hover:border-gold-400/50" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => navigate('gallery')} className="group inline-flex items-center gap-2 rounded-full bg-gold-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gold-700 hover:shadow-xl">
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CTASection({ navigate }: { navigate: (r: Route) => void }) {
  const { ref, isVisible } = useReveal();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100 py-20">
      <div ref={ref} className={`relative mx-auto max-w-4xl px-5 text-center reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-br from-charcoal-900 to-charcoal-950 p-10 sm:p-16">
          <ParticleField count={30} color="212,168,74" />
          <div className="relative">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">Ready to Capture Your Story?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">Let us turn your special day into memories that last forever. Get in touch to check availability and book your date.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button onClick={() => navigate('services')} className="shimmer-sweep relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:from-gold-700 hover:to-gold-600">
                <CalendarCheck className="h-4 w-4" />View Packages
              </button>
              <button onClick={() => navigate('contact')} className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                <Phone className="h-4 w-4" />Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
