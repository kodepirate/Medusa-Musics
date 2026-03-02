import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import SectionPremium from '@/components/SectionPremium/SectionPremium';
import NewReleases from '@/components/NewReleases/NewReleases';
import AppPromo from '@/components/AppPromo/AppPromo';
import PhysicalMedia from '@/components/PhysicalMedia/PhysicalMedia';
import WeeklyOffer from '@/components/WeeklyOffer/WeeklyOffer';
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionPremium />
      <NewReleases />
      <AppPromo />
      <PhysicalMedia />
      <WeeklyOffer />
      <DownloadApp />
      <Footer />
    </main>
  );
}
