import CanvasSection from '@/components/section/canvas/CanvasSection';
import CommissionsSection from '@/components/section/Commissions/CommissionsSection';
import HeroSection from '@/components/section/hero/HeroSection';
import JourneySection from '@/components/section/journey/JourneySection';
import QuotesSection from '@/components/section/quotes/QuotesSection';
import WorkSection from '@/components/section/work/WorkSection';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroSection/>
      <CanvasSection/>
      <JourneySection/>
      <WorkSection/>
      <QuotesSection/>
      <CommissionsSection/>
    </>
  )
}
