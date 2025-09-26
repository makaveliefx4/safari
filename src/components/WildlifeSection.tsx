import React from 'react';
import { useNavigate } from 'react-router-dom';
import whatImage from '@/assets/what.png';
import NatureImage from '@/assets/Nature.jpg'

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
        <div className="relative w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://www.discoverafrica.com/wp-content/uploads/2018/09/13anantarastanley-livingstonevictoria-fallshotelsafari-activities1920x0137-Medium.jpg"
            alt="Moment"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col space-y-8" >
          <div className="animate-fade-up text-center  " >
            <p className="text-sm font-semibold  justify-center  uppercase text-muted-foreground tracking-widest mb-2" style={{textAlign: 'center'}}>
              Where to go
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Outstanding Destinations
            </h2>
            <div className="mb-8 flex justify-center " style={{textAlign: 'center'}}>
              <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed">
              Explore the breathtaking landscapes and rich biodiversity of Tanzania's most outstanding destinations. From the endless plains of the Serengeti to the iconic Ngorongoro Crater, each location offers a unique and unforgettable safari experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://leopardorchidsafaris.co.ke/wp-content/uploads/2021/12/d1e0e2aecf6fe245a59-800.jpg"
                alt="Ngorongoro Crater"
                className="w-full h-full object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Wildlife Safari</h3>
                <p className="text-sm text-muted-foreground">Ngorongoro Crater.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/4d/e4/8f/serengeti-national-park.jpg?w=600&h=400&s=1"
                alt="Serengeti National Park"
                className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}