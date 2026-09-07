import ParticleField from '../components/ParticleField';

export default function PageHeader({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="relative flex h-[45vh] min-h-[320px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img src={image} alt={title} className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/60 to-charcoal-950/90" />
      </div>
      <ParticleField count={30} color="212,168,74" />
      <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-70" />
      <div className="letterbox-top absolute bottom-0 left-0 right-0 z-20 bg-charcoal-950" />
      <div className="letterbox-top absolute left-0 right-0 top-0 z-20 bg-charcoal-950" />

      <div className="relative z-10 px-5 text-center">
        <h1 className="animate-fade-up font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl" style={{ animationDelay: '0.2s', opacity: 0, textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}>{title}</h1>
        <div className="animate-fade-up mt-4 flex items-center justify-center gap-4" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <span className="h-px w-12 bg-gold-400/60" />
          <p className="max-w-xl text-base text-white/70 sm:text-lg">{subtitle}</p>
          <span className="h-px w-12 bg-gold-400/60" />
        </div>
      </div>
    </section>
  );
}
