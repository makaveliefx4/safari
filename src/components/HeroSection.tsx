import React from 'react';
import { ArrowRight, Mail, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import trueImage from '@/assets/true.jpg';
import iconImage from '@/assets/icon.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
          <div
          className="absolute inset-0 bg-cover bg-center sm:bg-center md:bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${trueImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>
      

      {/* Content */}
      <div className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white">
        <div className="animate-fade-up">
          {/* Eagle Icon */}
            <div className="flex justify-center mb-6 -mt-20">
            <img
              src={iconImage}
              alt="Eagle Icon"
              className="h-24 w-24 object-contain drop-shadow-lg filter invert"
            />
            </div>
          {/* Awards Image */}
          <div className="flex justify-center mb-6 -mt-15 ">
            <img
              src="https://oscarafrica.com/wp-content/themes/oscarafrica-child/images/awards.png"
              alt="Awards"
              width={80}
              height={124}
              className="object-contain"
            />
          </div>
        
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-center font-serif italic text-white/90 mb-5 max-w-3xl mx-auto leading-tight">
            In the Heart of the Wilderness.
          </p>
            {/* Main Heading */}
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover The Untamed.
          </h1>
           <p className="text-xl italic text-center font-serif md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-tight">
            Expect the unexpected.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
             <Button variant="outline" size="lg" className="bg-transparent border-white hover:border-accent hover:bg-transparent hover:text-accent px-8 py-6 rounded-full shadow-lg duration-500 ease-in-out">
             <Mail className="font-semibold" />
            <span>REQUEST A QUOTE</span>
           </Button>

          </div>
        </div>
      </div>
    </section>
  );
}