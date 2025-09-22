import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import safImage from '@/assets/saf.jpg'

export function DestinationsSection() {
  const navigate = useNavigate();
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="relative w-full lg:w-1/2 min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 max-w-full h-auto object-contain"></div>
          <div className="relative z-10 p-8 flex flex-col justify-center h-full text-muted-foreground">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-muted-foreground">
              TANZANIA
              </h2>
              <p className="text-2xl font-serif mb-6 text-black">
              Defines Adventure Excellence
              </p>
            </div>           
            <div className="mb-8">
                <div className="flex justify-center">
                <span className="text-xl items-center tracking-widest">. . . . . . .</span>
                </div>
            </div>
            <p className="max-w-xl leading-relaxed font-mono mb-8 text-muted-foreground">
              There are experiences that can only be enjoyed in Africa. Listen to the roar of the lions on the savannah, soak up the aromas of nature or admire the cornucopia of colors in the sky over the savannah. Unique experiences enjoying the indescribable pleasure of seeing wild animals in their natural habitat.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="group w-fit text-black bg-white hover:bg-gray-200"
              onClick={() => navigate('/Contact')}>
              GET YOUR SAFARI QUOTE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end py-12">
          <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up lg:col-span-2">
                <div className="relative">
                  <img src={safImage}
                      alt="Serengeti National Park" 
                      className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}