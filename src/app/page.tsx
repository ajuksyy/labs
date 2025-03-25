'use client';
import { useState } from 'react';
import BenefitsSection from '@/components/ui/sections/BenefitsSection';
import BlogSection from '@/components/ui/sections/BlogSection';
import FaqSection from '@/components/ui/sections/FaqSection';
import Hero from '@/components/ui/sections/Hero';
import ProductOverview from '@/components/ui/sections/ProductOverview';
import StatsSection from '@/components/ui/sections/StatsSection';
import TeamSection from '@/components/ui/sections/TeamSection';
import ComponentLibrary from '@/components/ComponentLibrary';


export default function Home() {
  const [showComponentLibrary, setShowComponentLibrary] = useState(false);

  const handleGetStartedClick = () => {
    setShowComponentLibrary(true);
  };

  const handleCloseComponentLibrary = () => {
    setShowComponentLibrary(false);
  };

  return (
    <div className="h-max">
      {showComponentLibrary ? (
        <div className="fixed inset-0 z-50">
          <ComponentLibrary onBackToHome={handleCloseComponentLibrary} />
        </div>
      ) : (
        <>
          <div id="hero">
            <Hero onGetStartedClick={handleGetStartedClick} />
          </div>
          <div id="product">
            <ProductOverview />
          </div>
          <div id="stats">
            <StatsSection />
          </div>
          <div id="benefits">
            <BenefitsSection />
          </div>
          <div id="team">
            <TeamSection />
          </div>
          <div id="faq">
            <FaqSection/>
          </div>
          <div id="blog">
            <BlogSection />
          </div>
        </>
      )}
    </div>
  );
}