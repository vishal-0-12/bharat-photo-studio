import { useEffect, useState, useCallback } from 'react';

export type Route = 'home' | 'packages' | 'contact';

function getHash() {
  return window.location.hash;
}

function parseRoute(): Route {
  const hash = getHash();

  if (hash === '#/packages') {
    return 'packages';
  }

  if (hash === '#/contact') {
    return 'contact';
  }

  return 'home';
}

function getSectionFromHash(): string | null {
  const hash = getHash();

  if (hash === '#gallery') {
    return 'gallery';
  }

  if (hash === '#services') {
    return 'services';
  }

  return null;
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseRoute());

  useEffect(() => {
    const handleHashChange = () => {
      const hash = getHash();

      /*
       * -----------------------------------------------
       * HOME SECTIONS
       * -----------------------------------------------
       */

      const section = getSectionFromHash();

      if (section) {
        // First switch back to Home
        setRoute('home');

        /*
         * React needs one render cycle to put the
         * Home page back into the DOM.
         *
         * Then we scroll to the requested section.
         */
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const element = document.getElementById(section);

            if (element) {
              const navbarOffset = 90;

              const elementPosition =
                element.getBoundingClientRect().top +
                window.scrollY;

              window.scrollTo({
                top: elementPosition - navbarOffset,
                behavior: 'smooth',
              });
            }
          });
        });

        return;
      }

      /*
       * -----------------------------------------------
       * NORMAL ROUTES
       * -----------------------------------------------
       */

      const newRoute = parseRoute();

      setRoute(newRoute);

      // Only scroll to top for actual pages
      if (
        hash === '#/' ||
        hash === '#/packages' ||
        hash === '#/contact'
      ) {
        window.scrollTo({
          top: 0,
          behavior: 'instant' as ScrollBehavior,
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = useCallback((route: Route) => {
    const newHash = route === 'home' ? '#/' : `#/${route}`;

    if (window.location.hash === newHash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    window.location.hash = newHash;
  }, []);

  return {
    route,
    navigate,
  };
}