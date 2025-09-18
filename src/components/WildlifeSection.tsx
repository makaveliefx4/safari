import React from 'react';
import { useNavigate } from 'react-router-dom';
import whatImage from '@/assets/what.png';

export function WildlifeSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="text-center mb-16 animate-fade-up">
					<img
						src={whatImage}
						alt="African Wildlife Icon"
						className="mx-auto mb-4 w-20 h-20 object-contain"/>
           <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
						Iconic African Wildlife
					</h2>
        </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://media.istockphoto.com/id/478924237/photo/african-lion-couple-and-safari-jeep.jpg?s=612x612&w=0&k=20&c=5_AFHVAd2GF2s51ZYtenE0NTKy5hiaofGjOtbjtHALI="
            alt="Lion Moment"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col space-y-8">
          <div className="animate-fade-up text-center md:text-left">
            <p className="text-sm font-semibold flex justify-center md:justify-start uppercase text-muted-foreground tracking-widest mb-2">
              Where to go
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Outstanding Destinations
            </h2>
            <div className="mb-8 flex justify-center md:justify-start">
              <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed">
              Explore the breathtaking landscapes and rich biodiversity of Tanzania's most outstanding destinations. From the endless plains of the Serengeti to the iconic Ngorongoro Crater, each location offers a unique and unforgettable safari experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://wildsafariguide.com/wp-content/uploads/2024/11/Ngorongoro-Crater-in-Tanzania.jpg"
                alt="Ngorongoro Crater"
                className="w-full h-full object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Wildlife Safari</h3>
                <p className="text-sm text-muted-foreground">Ngorongoro Crater.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://serengetinationalparksafaris.com/wp-content/uploads/2022/06/serenge.jpg"
                alt="Serengeti National Park"
                className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}