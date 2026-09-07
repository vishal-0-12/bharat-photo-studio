import Contact from '../components/Contact';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Tell us about your celebration and our team will get back to you soon." image="https://images.pexels.com/photos/30169492/pexels-photo-30169492.jpeg?auto=compress&cs=tinysrgb&w=1920" />
      <Contact />
    </>
  );
}
