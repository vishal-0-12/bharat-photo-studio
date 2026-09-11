import { useEffect, useState } from 'react';

export type Route =
  | 'home'
  | 'services'
  | 'portfolio'
  | 'packages'
  | 'contact';

function getRoute(): Route {
  const hash = window.location.hash;

  if (hash === '#/services') {
    return 'services';
  }

  if (hash === '#/portfolio') {
    return 'portfolio';
  }

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
       * Every separate page opens from the top.
       */
      if (newRoute !== 'home') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }

      /*
       * Home also starts from top when opened directly.
       */
      if (
        newRoute === 'home' &&
        window.location.hash === '#/'
      ) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }
    };

    window.addEventListener(
      'hashchange',
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange
      );
    };
  }, []);

  const navigate = (newRoute: Route) => {
    const currentRoute = getRoute();

    /*
     * Already on the same page.
     */
    if (currentRoute === newRoute) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      return;
    }

    /*
     * Home
     */
    if (newRoute === 'home') {
      window.location.hash = '#/';
      return;
    }

    /*
     * Separate pages
     */
    window.location.hash = `#/${newRoute}`;
  };

  /*
   * These are kept only for compatibility.
   * Services and Portfolio no longer need to use
   * these for navigation.
   */
  const scrollToSection = (
    sectionId: 'gallery' | 'services'
  ) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(
        `Section #${sectionId} was not found`
      );
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