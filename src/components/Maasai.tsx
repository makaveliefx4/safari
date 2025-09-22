import React from 'react';
import { Button } from '@/components/ui/button';
import MaasaiImage from '@/assets/Maasai.png';

export function Maasai() {
  return (
    <section className="py-20">
      <div style={{ textAlign: 'center' }}>
        <img
          src={MaasaiImage}
          alt="Culture"
          className="mx-auto mb-4 w-20 h-20 object-contain"
        />
        <p className="text-lg font-semibold uppercase text-muted-foreground tracking-widest mb-2">
          Learn From Locals
        </p>
        <div className="mb-8">
          <span className="text-xl tracking-widest text-muted-foreground">
            . . . . . . .
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20">
          Know The Culture Of Africa
        </h2>
      </div>

      {/* First section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 animate-fade-in-out">
        {/* Image first */}
        <div className="relative w-full h-[500px] lg:h-[800px] rounded-[20px] overflow-hidden order-1 lg:order-1">
          <img
            src="https://oscarafrica.com/wp-content/themes/oscarafrica-child/images/nw-13.jpg"
            alt="Local"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text second */}
        <div className="flex flex-col space-y-6 order-2 lg:order-2">
          <div>
            <p className="text-lg font-semibold uppercase tracking-widest text-gray-600">
              Culture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Experiences
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            The spirit and heartbeat of any place lies in its people. We'll
            introduce you to local families and cultural specialists to hear
            their stories, savor their cooking, and gain a deep understanding of
            Africa.
          </p>

          <div style={{ textAlign: 'center' }}>
            <a href="tel:+255698809207">
              <Button
                variant="safari"
                className="text-white px-6 py-3 rounded shadow-md transition"
              >
                Meet the Locals
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 animate-fade-in-out mt-16">
        {/* Image first on mobile, second on desktop */}
        <div className="relative w-full h-[400px] lg:h-[600px] rounded-[20px] overflow-hidden order-1 lg:order-2">
          <img
            src="https://wrongturnagain.com/wp-content/uploads/2023/12/hadza_DSF8945-scaled.jpg"
            alt="Local"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text second on mobile, first on desktop */}
        <div className="flex flex-col space-y-6 order-2 lg:order-1">
          <div>
            <p className="text-lg font-semibold uppercase tracking-widest text-gray-600">
              Popular
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Experiences
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            African culture is incredibly rich and diverse, encompassing the
            customs, traditions, languages, and arts of thousands of distinct
            ethnic groups across the continent. It is not a single, uniform
            culture but a vast tapestry of varied traditions.
          </p>

          <div style={{ textAlign: 'center' }}>
            <a href="mailto:makaveliefx474@gmail.com">
              <Button
                variant="safari"
                className="text-white text-lg px-6 py-3 rounded shadow-md transition"
              >
                Email the Local
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
