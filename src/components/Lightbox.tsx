import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage { url: string; alt: string; label: string; }

export function useLightbox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const show = (i: number) => { setIndex(i); setOpen(true); };
  const close = () => setOpen(false);
  const next = () => setIndex((p) => p + 1);
  const prev = () => setIndex((p) => p - 1);
  return { open, index, show, close, next, prev };
}

export function Lightbox({
  images, state,
}: {
  images: LightboxImage[];
  state: ReturnType<typeof useLightbox>;
}) {
  const { open, index, close, next, prev } = state;
  const current = images[((index % images.length) + images.length) % images.length];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open, close, next, prev]);

  if (!open || !current) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-md animate-fade-in" onClick={close}>
      <button className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20" onClick={(e) => { e.stopPropagation(); close(); }}><X className="h-6 w-6" /></button>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20" onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft className="h-6 w-6" /></button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20" onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight className="h-6 w-6" /></button>
      <figure className="mx-4 max-h-[85vh] max-w-4xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <img src={current.url.replace('w=800', 'w=1400')} alt={current.alt} className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl" />
        <figcaption className="mt-4 text-center font-serif text-lg text-gold-300">{current.label}</figcaption>
      </figure>
    </div>
  );
}
