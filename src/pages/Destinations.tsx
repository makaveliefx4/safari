import React from 'react';
import { ArrowLeft, ArrowRight, FormInputIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import desImage from '@/assets/des.png';

const destinations = [
  {
    id: 1,
    name: 'Ngorongoro Crater',
    location: 'Northern Tanzania',
    image: "https://media.safarideal.com/wp-content/uploads/2020/08/ngorongoro-conservation-area-236123.jpg",
    description: "It's one of Africa's most spectacular natural wonders, supporting over 25,000 animals - including the Big 5. A diverse ecosystem of savannah, lakes and forest, the crater is renowned for its geological splendour, out-of-this-world cliff-top accommodation, and delivering East Africa's most reliable Big 5 game viewing.",
  },
  {
    id: 2,
    name: 'Tarangire',
    location: 'Northern Tanzania',
    image: "https://www.exploretanzaniatours.com/wp-content/uploads/2020/09/Trangire-national-park.jpg", 
    description: 'Famous for its baobabs and massive elephant herds, Tarangire is the fourth and final park on Tanzania’s renowned northern safari circuit. The northern part of Tarangire is dominated by the perennial Tarangire River, which attracts colossal herds of elephants during the dry season (June to October). The lesser-visited south is home to a series of vast swamps and wetlands that support a wide variety of wild animals.',
  },
  {
    id: 3,
    name: 'Serengeti',
    location: 'Northern Tanzania',
    image: "https://i0.wp.com/ellamckendrick.com/wp-content/uploads/2025/03/ndutu-tanzania-p1014304.webp?resize=1024%2C769&ssl=1",
    description: 'The Serengeti is renowned for its annual migration of wildebeest and zebra, as well as its large populations of lions, leopards, and elephants. The park features a variety of ecosystems, including grasslands, savannahs, and riverine forests, making it one of the most diverse wildlife habitats in Africa.',
  },
  {
    id: 4,
    name: "Maasai Culture",
    image: "https://www.masaimara.travel/images/Maasai%20Ceremonial%20Dance.jpg",
    description: "The Maasai are a semi-nomadic pastoralist community known for their distinctive customs, dress, and vibrant culture. Visiting a Maasai village offers a unique opportunity to learn about their traditional way of life, including their rituals, dances, and craftsmanship. Many tours include visits to Maasai villages where you can interact with the community and gain insights into their rich heritage.",
  },
  {
    id: 5,
    name: "hadzabe Culture",
    image: "https://dustywheels-travel.com/wp-content/uploads/2020/04/Hadzabe-Feature-Imgae-1-of-1.jpg",
    description: "The hadzabe are a hunter-gatherer community living in the Lake Eyasi region of Tanzania. They are known for their unique click language and their deep knowledge of the local flora and fauna. Visiting the hadzabe offers a rare glimpse into a way of life that has remained largely unchanged for thousands of years.",
  }
];

export default function Destinations() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-fixed rounded-[80px] ">
      <Navigation />
      <section className="relative pt-24 pb-10 bg-[url('https://media.cntraveler.com/photos/67c88c107adab1d6ec095028/16:9/w_2560%2Cc_limit/thornton-safaris-we-go-where-no-one-goes.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 animate-fade-in-out">
          <img
            src={desImage}
            alt="African Wildlife Icon"
            className="mx-auto mb-4 w-20 h-20 object-contain"
          />
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-sm font-semibold uppercase text-white tracking-widest mb-2">
              Combine With
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Other Top Destinations
            </h2>
            <div className="mb-8">
              <span className="text-xl tracking-widest text-accent">. . . . . . .</span>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 rounded-[80px]">
        <div className="max-w-7xl mx-auto px-6 font-serif">
          <div className="space-y-16">
          {destinations.map((destination, index) => (
             <Card 
                key={destination.id}
                className="border-0 rounded-[80px] shadow-none bg-transparent animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}>
                <div 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                    <CardContent className="p-0 rounded-[80px]">
                      <h2 className="text-4xl font-bold text-foreground mb-6">
                        {destination.name} 
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {destination.description}
                      </p>
                    </CardContent>
                  </div>

                  <div className={`relative overflow-hidden rounded-lg shadow-lg`}>
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-auto object-cover rounded-[80px] border-10 border-white"/>
                  </div>
                </div>
              </Card>
            ))}
            <div className="flex justify-center items-center mb-5 animate-fade-in-out">
              <Button
                variant="safari-outline"
                onClick={() => navigate('/')}
                className="group w-fit text-black bg-white border-emerald-300 ">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back  Home
              </Button>
            </div>
            <div className="flex justify-center items-center mb-4 animate-fade-in-out">
              <Button 
                variant="safari" 
                size="lg" 
                className="group w-fit text-black  border-white "
                onClick={() => navigate('/contact')}>
                GET YOUR SAFARI QUOTE
                <FormInputIcon className="ml-2 h-3 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}