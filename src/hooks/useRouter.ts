import { useEffect, useState, useCallback } from 'react';

export type Route = 'home' | 'gallery' | 'services' | 'contact';

function parseHash(): Route {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash === 'gallery' || hash === 'services' || hash === 'contact') return hash;
  return 'home';
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((r: Route) => {
    window.location.hash = r === 'home' ? '/' : `/${r}`;
  }, []);

  return { route, navigate };
}
