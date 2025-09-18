import React from 'react';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import bothImage from '@/assets/both.png'; // 

const keyPoints = [
  {
    title: 'Wildlife Safaris',
    subtitle: 'Superb, Year-round Game Viewing',
    description: 'Home to some of the world’s most famous national parks and game reserves, including the Serengeti National Park, the Ngorongoro Conservation Area, and the Selous Game Reserve. These parks are known for their abundance of wildlife, including lions, elephants, giraffes, zebras, wildebeest, and more.',
  },
  {
    title: 'The Serengeti',
    subtitle: 'Witness the Wildebeest Migration',
    description: 'Hardly any other destination on Earth can offer a wildlife encounter to match the annual Wildebeest Migration. Forming the centrepiece of most Tanzania safari itineraries, the Migration is a mind-blowing display of nature at her most extraordinary.',
  },
  {
    title: 'Zanzibar',
    subtitle: 'Pristine White Sand Beaches',
    description: 'Tanzania is home to the beautiful island of Zanzibar, which is known for its pristine beaches, turquoise waters, and rich cultural history. Experience a range of activities on the island, including snorkeling, scuba diving, and exploring the historic Stone Town.',
  },
  {
    title: 'Exclusive Lodges & Camps',
    subtitle: 'Luxury Accommodation Options',
    description: 'Tanzania has a variety of accommodation options, ranging from luxury lodges to luxury tented camps. Experience glamping at the highest level.',
  },
];

export function SafariExperiencesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center  mb-16 animate-fade-up">
					<img
						src={bothImage}
						alt="African Wildlife Icon"
						className="mx-auto mb-4 w-20 h-20 object-contain"/>
        <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
          Land of the Safari
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Why Go to Tanzania?
        </h2>
        <div className="mb-16">
          <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
        </div>

   
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mb-16 text-left">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                <p className="font-semibold text-muted-foreground mb-2">{point.subtitle}</p>
                <p className="text-muted-foreground font-serif leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
          <Button
            variant="safari-outline"
            size="lg"
            className="w-full md:w-auto px-8 py-6 rounded-full shadow-lg border-2 text-black border-border"
            onClick={() => navigate('/destinations')}>
            <span className="font-semibold">OUR REVIEWS</span>
          </Button>

          <Button
            variant="safari"
            size="lg"
            className="w-full md:w-auto px-8 py-6 rounded-full shadow-lg flex items-center justify-center"
            onClick={() => navigate('/contact')}>
            <Mail className="mr-2 h-4 w-4" />
            <span className="font-semibold">REQUEST A QUOTE</span>
          </Button>
        </div>
      </div>

        <div className="absolute right-0 bottom-0 lg:w-1/4 xl:w-1/5 -z-10 opacity-30">
          <img src={bothImage} alt="Decorative bird" className="w-full h-auto" />
      </div>
    </section>
  );
}