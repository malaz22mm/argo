import { AboutHero } from './AboutHero';
import { AboutStats } from './AboutStats';
import { AboutWhoWeAre } from './AboutWhoWeAre';
import { AboutValues } from './AboutValues';
import { AboutMarquee } from './AboutMarquee';
import { AboutTimeline } from './AboutTimeline';
import { AboutCTA } from './AboutCTA';
import { AboutFeatures } from './AboutFeatures';
import { AboutFooter } from './AboutFooter';

export function AboutPage() {
  return (
    <main style={{ width: '100%', backgroundColor: '#fff' }}>
      <AboutHero />
      <AboutStats />
      <AboutWhoWeAre />
      <AboutFeatures />
      <AboutValues />
      <AboutMarquee />
      <AboutTimeline />
      <AboutCTA />
      <AboutFooter />
    </main>
  );
}
