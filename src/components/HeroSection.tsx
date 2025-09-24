import React from 'react';
import { ArrowRight, Mail, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jaImage from '@/assets/ja.jpg';
import carImage from '@/assets/car.png';
import TripaImage from '@/assets/Tripa.png'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
          className="absolute inset-0 bg-cover bg-center sm:bg-center md:bg-top bg-fixed"
          style={{ backgroundImage: `url(${jaImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>
      
      <div className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white">
        <div className="animate-fade-up">
            <div className="flex justify-center mb-6 -mt-20">
            <img
              src={carImage}
              alt="Eagle Icon"
              className="h-[150px] w-[150px] object-contain drop-shadow-lg"/>
            </div>
          <div className="flex justify-center mb-6 -mt-15 ">
            <img
              src={TripaImage}
              alt="Awards"
              width={120}
              height={186}
              className=" h-45 w-45 object-contain invert"/>
          </div>
        
          <p className="text-xl md:text-2xl text-center font-serif  text-white mb-3 max-w-3xl mx-auto leading-tight">
            In the Heart of the Wilderness.
          </p>
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Discover The Untamed.
          </h1>
           <p className="text-xl  text-center font-serif md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-tight">
            Expect the unexpected.
          </p>

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