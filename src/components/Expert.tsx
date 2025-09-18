import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import sunsetImage from '@/assets/sunset.jpg';
import './LionPaws.css';

import lionPawWalk1 from '@/assets/lionpaw-walk-1.png';
import lionPawWalk2 from '@/assets/lionpaw-walk-2.png';
import lionPawWalk3 from '@/assets/lionpaw-walk-3.png';
import lionPawWalk4 from '@/assets/lionpaw-walk-4.png';

const pawAnimationFrames = [
  lionPawWalk1,
  lionPawWalk2,
  lionPawWalk3,
  lionPawWalk4,
];

export function Expert() {
  const [scrollX, setScrollX] = useState(0);
  const [currentPawFrame, setCurrentPawFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      if (maxScroll === 0) return;

      const scrollPercent = scrollTop / maxScroll;
      const maxMove = window.innerWidth - 60;
      setScrollX(scrollPercent * maxMove);

      // A simple way to sync animation frames with scroll
      const scrollThresholdForFrameChange = 50; 
      const frameIndex = Math.floor(scrollTop / scrollThresholdForFrameChange) % pawAnimationFrames.length;
      setCurrentPawFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed rounded-3xl"
        style={{ backgroundImage: `url(${sunsetImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Lion Paw Animation */}
      <img
        src={pawAnimationFrames[currentPawFrame]}
        alt="lion paw walking"
        style={{
          position: 'fixed',
          bottom: 20,
          left: scrollX,
          width: 50,
          height: 50,
          transition: 'left 0.1s linear',
          zIndex: 50,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 text-white h-full">
        <div className="animate-fade-up flex flex-col items-center justify-center max-w-lg">
          <p className="text-lg md:text-2xl font-serif tracking-widest text-white/90 mb-4 leading-tight">
            . . . . . . . .
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
            THE ADVENTURE AWAITS ON YOUR .
          </h1>

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