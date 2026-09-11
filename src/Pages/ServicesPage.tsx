import Package from '../components/Package';
import Services from '../components/Portfolio';
import PageHeader from '../components/PageHeader';

import type { Route } from '../hooks/useRouter';

type ServicesPageProps = {
  navigate: (route: Route) => void;
};

export default function ServicesPage({
  navigate,
}: ServicesPageProps) {
  return (
    <>
      <PageHeader
        title="Services & Packages"
        subtitle="Complete wedding photography and cinematic videography services tailored to your celebration."
        image="https://images.pexels.com/photos/12603609/pexels-photo-12603609.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Services />

      <Package
        navigate={navigate}
      />
    </>
  );
}