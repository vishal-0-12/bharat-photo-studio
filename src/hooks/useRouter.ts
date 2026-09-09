import { useEffect, useState } from 'react';

export type Route = 'home' | 'packages' | 'contact';

function getRoute(): Route {
  const hash = window.location.hash;

  if (hash === '#/packages') {
    return 'packages';
  }

  if (hash === '#/contact') {
    return 'contact';
  }

  return 'home';
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRoute();

      setRoute(newRoute);

      /*
       * Separate pages should ALWAYS open from the top.
       */
      if (newRoute === 'packages' || newRoute === 'contact') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }

      /*
       * Home page also starts at the top when
       * the actual Home route is opened.
       */
      if (newRoute === 'home' && window.location.hash === '#/') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (newRoute: Route) => {
    const currentRoute = getRoute();

    /*
     * If already on the same route, manually go to top.
     */
    if (currentRoute === newRoute) {
      if (newRoute === 'home' || newRoute === 'packages' || newRoute === 'contact') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }

      return;
    }

    /*
     * Navigate to Home.
     */
    if (newRoute === 'home') {
      window.location.hash = '#/';
      return;
    }

    /*
     * Navigate to Packages or Contact.
     */
    window.location.hash = `#/${newRoute}`;
  };

  const scrollToSection = (
    sectionId: 'gallery' | 'services'
  ) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(`Section #${sectionId} was not found`);
      return;
    }

    const navbarHeight = 90;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return {
    route,
    navigate,
    scrollToSection,
  };
}