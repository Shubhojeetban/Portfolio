import React from 'react';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import About from './About';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <About />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}
