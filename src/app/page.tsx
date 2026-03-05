import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';

// Dynamically import below-the-fold components to reduce initial JS payload
const SectionPremium = dynamic(() => import('@/components/SectionPremium/SectionPremium'));
const NewReleases = dynamic(() => import('@/components/NewReleases/NewReleases'));
const AppPromo = dynamic(() => import('@/components/AppPromo/AppPromo'));
const PhysicalMedia = dynamic(() => import('@/components/PhysicalMedia/PhysicalMedia'));
const WeeklyOffer = dynamic(() => import('@/components/WeeklyOffer/WeeklyOffer'));
const DownloadApp = dynamic(() => import('@/components/DownloadApp/DownloadApp'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

export default function Home() {
  return (
    <main>
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
