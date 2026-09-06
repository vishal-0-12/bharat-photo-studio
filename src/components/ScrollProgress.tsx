import { useScrollProgress } from '../hooks/useAnimations';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 transition-[width] duration-75 ease-out"
        style={{ width: `${progress * 100}%`, boxShadow: '0 0 8px rgba(212,168,74,0.6)' }}
      />
    </div>
  );
}
