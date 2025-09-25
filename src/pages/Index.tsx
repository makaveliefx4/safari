import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { DestinationsSection } from '@/components/DestinationsSection';
import { SafariExperiencesSection } from '@/components/SafariExperiencesSection';
import { AccommodationSection } from '@/components/AccommodationSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { WildlifeSection } from '@/components/WildlifeSection';
import { PackagesSection } from '@/components/PackagesSection';
import { StatsSection } from '@/components/StatsSection';
import { Maasai } from '@/components/Maasai'
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ConservationSection } from '@/components/ConservationSection';
import { Expert } from '@/components/Expert'
import { Know } from '@/components/toknow';
import  Wild  from '@/components/Wild'
import Site from '@/components/Site'
import Event from '@/components/Event'
import { Connect } from '@/components/Connect'
import { NewsletterSection } from '@/components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

    
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <DestinationsSection />
        <SafariExperiencesSection />
        <AccommodationSection />
        <ActivitiesSection />
        <WildlifeSection />
        <PackagesSection />
        <StatsSection />
        <Maasai />
        <TestimonialsSection />
        <ConservationSection />
        <Expert />
        <Know />
        <Wild />
        <Connect />
        <Site/>
        <Event/>
        <NewsletterSection />
      </main>

      <footer className=" bg-primary font-mono  mt-16 bg-gradient-to-b from-white to-yellow/500 text-green/20 relative py-[15px] md:py-[25px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gradient-luxury mb-4">
                Safari Luxury
              </h3>
              <p className="text-sm sm:text-base text-green leading-relaxed">
                Creating unforgettable African safari experiences while supporting 
                conservation and local communities.
              </p>
            </div>

            <div>        
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm sm:text-base text-green/80">
                <li>Serengeti National Park</li>
                <li>Ngorongoro Crater</li>
                <li>Zanzibar Island</li>
                <li>Tarangire Park</li>
              </ul>
            </div>
    
            <div>
              <h4 className="font-semibold mb-4">Experiences</h4>
              <ul className="space-y-2 text-sm sm:text-base text-green/90">
                <li>Luxury Safari</li>
                <li>Family Safari</li>
                <li>Honeymoon Safari</li>
                <li>Photography Tours</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm sm:text-base text-green/90">
                <li>+255 698 809 207</li>
                <li>hsafariluxury@.com</li>
                <li>Arusha, Tanzania</li>
                <li>Mon-Frd 8AM-6PM EAT</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-xs sm:text-sm text-primary-foreground/60">
            <p>
              &copy; 2025 Safari Luxury. All rights reserved. •
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
