import { Camera, CirclePlay, Cloud, Film, Heart, Image, Plane, Radio, Users, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useAnimations';

const services = [
  { icon: Camera, title: 'Wedding Photography', desc: 'Full-day coverage, traditional photography, and beautifully edited memories.', accent: 'from-amber-400 to-gold-600' },
  { icon: CirclePlay, title: 'Cinematic Videography', desc: 'Cinematic highlight films and full-length wedding stories with emotion and style.', accent: 'from-rose-400 to-maroon-600' },
  { icon: Heart, title: 'Candid Photography', desc: 'Natural, heartfelt moments captured as they happen.', accent: 'from-pink-400 to-rose-600' },
  { icon: Plane, title: 'Drone Coverage', desc: 'Stunning aerial perspectives for ceremonies, venues, and celebrations.', accent: 'from-sky-400 to-blue-600' },
  { icon: Image, title: 'Photo Albums', desc: 'Premium wedding and photo albums designed to last for generations.', accent: 'from-violet-400 to-purple-600' },
  { icon: Cloud, title: 'Online Gallery', desc: 'Convenient online delivery with gallery access for one, three, or six months.', accent: 'from-teal-400 to-emerald-600' },
  { icon: Film, title: 'Pre-Wedding Shoots', desc: 'Creative outdoor pre-wedding stories made around your personality.', accent: 'from-orange-400 to-amber-600' },
  { icon: Radio, title: 'Live Streaming', desc: 'Share your wedding day with loved ones through live streaming.', accent: 'from-cyan-400 to-sky-600' },
  { icon: Users, title: 'Experienced Team', desc: 'Professional photographers, cameramen, and drone pilots working together.', accent: 'from-gold-400 to-gold-700' },
];

export default function Services() {
  const { ref, isVisible } = useReveal();
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-gold-500 blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-maroon-500 blur-[100px]" />
      </div>

      <div ref={ref} className={`relative mx-auto max-w-7xl reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">What We Do</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-800 sm:text-4xl md:text-5xl">Complete Wedding Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal-700/60">From candid moments to cinematic films, we cover every detail of your celebration.</p>
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-500">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, accent }, i) => <ServiceCard key={title} Icon={Icon} title={title} desc={desc} accent={accent} delay={i * 60} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ Icon, title, desc, accent, delay }: { Icon: typeof Camera; title: string; desc: string; accent: string; delay: number }) {
  const tiltRef = useTilt<HTMLDivElement>(5);
  return (
    <div ref={tiltRef} className="group relative overflow-hidden rounded-2xl border border-gold-200/50 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-900/10" style={{ transitionDelay: `${delay}ms`, transformStyle: 'preserve-3d' }}>
      {/* Animated gradient corner glow */}
      <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />

      {/* Top accent bar */}
      <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${accent} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`} />

      {/* Arrow */}
      <div className="absolute right-5 top-5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
        <ArrowUpRight className="h-5 w-5 text-gold-500" />
      </div>

      <div className="relative" style={{ transform: 'translateZ(40px)' }}>
        {/* Icon */}
        <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-lg font-bold text-charcoal-800 transition-colors duration-300 group-hover:text-gold-700">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-700/70">{desc}</p>
      </div>

      {/* Bottom shine line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-gold-400/0 to-transparent transition-all duration-500 group-hover:via-gold-400/40" />
    </div>
  );
}
