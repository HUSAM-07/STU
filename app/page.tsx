import Hero from '@/components/hero';
import Features from '@/components/features';
import LatestNews from '@/components/latest-news';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <LatestNews />
    </div>
  );
}