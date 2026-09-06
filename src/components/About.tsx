import { Award, Camera, Heart, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useAnimations';

const highlights = [
  { icon: Camera, value: 500, suffix: '+', label: 'Weddings Covered' },
  { icon: Heart, value: 100, suffix: '%', label: 'Customer Satisfaction' },
  { icon: Award, value: 15, suffix: '+', label: 'Years of Experience' },
  { icon: MapPin, value: 0, suffix: 'NCR', label: 'Delhi Coverage', textOnly: true },
];

export default function About() {
  const { ref, isVisible } = useReveal();
  return (
    <section className="section-pad bg-cream-50">
      <div ref={ref} className={`mx-auto max-w-7xl reveal-left ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img src="/Screenshot_2026-09-06_at_5.01.01_PM.png" alt="Bharat Photo Studio package quotation" className="h-auto w-full object-cover shadow-xl transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl border-2 border-gold-400/30 sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40" />
            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-2xl border-2 border-gold-400/30 sm:-top-6 sm:-left-6 sm:h-40 sm:w-40" />
          </div>
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">About Bharat Photo Studio</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl">Your memories deserve to be remembered forever.</h2>
            <div className="mt-4 flex items-center gap-3"><span className="h-px w-12 bg-gold-400" /><span className="text-gold-500">✦</span></div>
            <p className="mt-5 text-base leading-relaxed text-charcoal-700/70">We do not just take photos; we capture the emotions, energy, and little details that make your celebration uniquely yours. From candid smiles to grand cinematic frames, our experienced team brings every story to life.</p>
            <p className="mt-3 text-base leading-relaxed text-charcoal-700/70">Based in Badhra on Loharu Road, NCR Delhi, Bharat Photo Studio offers complete wedding coverage for intimate moments and full-day celebrations.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, value, suffix, label, textOnly }) => {
                const { ref: cRef, value: cVal } = useCounter(value);
                return (
                  <div key={label} className="group rounded-xl border border-gold-200/50 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-md">
                    <Icon className="mx-auto mb-2 h-6 w-6 text-gold-600 transition-transform duration-300 group-hover:scale-125" />
                    <p className="font-serif text-xl font-bold text-charcoal-800">
                      {textOnly ? <span ref={cRef}>{suffix}</span> : <span ref={cRef}>{cVal}{suffix}</span>}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-charcoal-700/50">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
