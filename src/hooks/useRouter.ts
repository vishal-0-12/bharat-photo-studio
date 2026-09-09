import { useEffect, useState } from 'react';

export type Route = 'home' | 'packages' | 'contact';

function getRoute(): Route {
  const hash = window.location.hash;

  if (hash === '#/packages') return 'packages';
  if (hash === '#/contact') return 'contact';

  return 'home';
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (newRoute: Route) => {
    if (newRoute === 'home') {
      window.location.hash = '#/';
      return;
    }

    window.location.hash = `#/${newRoute}`;
  };

  const scrollToSection = (
    sectionId: 'gallery' | 'services'
  ) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const navbarHeight = 90;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return {
    route,
    navigate,
    scrollToSection,
  };
}