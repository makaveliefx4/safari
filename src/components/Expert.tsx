import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';


export function Expert() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden rounded-3xl">
=      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed rounded-3xl"
        style={{ backgroundImage: `url('https://www.go2africa.com/wp-content/uploads/2020/04/lion_madikwe_go2africa.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 text-white h-full">
        <div className="animate-fade-up flex flex-col items-center justify-center max-w-lg">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
            THE ADVENTURE AWAITS ON YOUR 
          </h1>
          <p className="text-lg md:text-2xl font-serif tracking-widest text-white/90 mb-4 leading-tight">
            . . . . . . . .
          </p>
          <p className="text-lg md:text-2xl font-serif text-white/90 mb-8 leading-tight">
            Have the Unexpected Safari And Experience the Wilderness.
          </p>

          <a href="tel:+255698809207">
            <Button variant="safari-outline" size="lg" className="animate-fade-in-out">
              Speak to an Expert
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}