import HeroSection from './components/HeroSection';
import PlansSection from './components/PlansSection';
import AmenitiesSection from './components/AmenitiesSection';
import InfoSection from './components/InfoSection';
import AccessSection from './components/AccessSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';
import SectionWave from '../../components/SectionWave';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <article>
        <HeroSection />
        <PlansSection />
        <AmenitiesSection />
        <InfoSection />
        <AccessSection />
        <ReservationSection />
      </article>
      <ScrollToTop />
      <Footer />
    </main>
  );
}