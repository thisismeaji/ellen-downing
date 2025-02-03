import CanvasSection from '@/components/section/canvas/CanvasSection';
import HeroSection from '@/components/section/hero/HeroSection';
import JourneySection from '@/components/section/journey/JourneySection';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroSection/>
      <CanvasSection/>
      <JourneySection/>
    </>
  )
}
