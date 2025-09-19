import React from 'react';
import { ArrowLeft, PawPrint, FormInputIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import desImage from '@/assets/des.png';
import bigfiveImage from '@/assets/bigfive.png'
const BigFive = [
  {
    id: 1,
    name: 'African Lion',
    location: 'Serengeti & Ngorongoro',
    image: "https://i.natgeofe.com/k/1d33938b-3d02-4773-91e3-70b113c3b8c7/lion-male-roar.jpg?wp=1&w=1084.125&h=609",
    description: "The king of the jungle, lions roam Tanzania’s savannahs in prides. The Serengeti is world-famous for its lion populations and dramatic hunting scenes during the Great Migration.",
  },
  {
    id: 2,
    name: 'African Elephant',
    location: 'Tarangire & Ruaha',
    image: "https://iucn.org/sites/default/files/content/images/2021/african_savanna_elephant_annabel_wynyard.jpeg",
    description: "Tanzania is home to some of the largest elephant herds in Africa. Tarangire National Park is especially renowned for its massive gatherings of elephants among ancient baobab trees.",
  },
  {
    id: 3,
    name: 'Leopard',
    location: 'Serengeti & Manyara',
    image: "https://www.pbs.org/wnet/nature/files/2021/04/pexels-pixabay-39857-scaled-e1618327223218.jpg",
    description: "Elusive and elegant, leopards are expert climbers often seen resting on tree branches. They embody stealth and beauty, making sightings a true safari highlight.",
  },
  {
    id: 4,
    name: "Black Rhino",
    location: "Ngorongoro Crater",
    image: "https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/hero_small/3yuabfu3jq_white_rhino_42993643.jpg",
    description: "Critically endangered and heavily protected, black rhinos are among Tanzania’s most treasured sightings. The Ngorongoro Crater offers one of the best chances to see them in the wild.",
  },
  {
    id: 5,
    name: "African Buffalo",
    location: "Serengeti & Katavi",
    image: "https://www.kenyawildparks.com/wp-content/uploads/2022/07/African-Cape-Buffalo.jpg",
    description: "Known for their strength and unpredictable nature, African buffalo move in massive herds. They play a key role in the Big Five and are often seen grazing Tanzania’s grasslands.",
  }
];

export default function BigFivePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-100 to-stone-200 rounded-[50px]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-[url('https://maasaimara.ke/wp-content/uploads/2025/02/mara-big-five.webp')] bg-cover bg-center rounded-b-[50px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-white animate-fade-up">
          <img
            src={bigfiveImage}
            alt="Wildlife Icon"
            className="mx-auto mb-6 w-20 h-20 object-contain drop-shadow-xl invert"
          />
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
            Tanzania’s Big Five
          </h2>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            Meet Africa’s most iconic wildlife — Lion, Elephant, Leopard, Rhino, and Buffalo — across Tanzania’s legendary safari parks.
          </p>
        </div>
      </section>

      {/* Big Five List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 font-serif space-y-20">
          {BigFive.map((animal, index) => (
            <Card 
              key={animal.id}
              className="border-0 rounded-[30px] bg-stone-50 shadow-xl hover:shadow-2xl transition duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Text */}
                <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                  <CardContent className="p-6">
                    <h2 className="text-3xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                      <PawPrint className="w-6 h-6 text-amber-500" />
                      {animal.name}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {animal.description}
                    </p>
                    <p className="mt-4 text-sm text-amber-600 font-semibold uppercase tracking-wide">
                      {animal.location}
                    </p>
                  </CardContent>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-[30px] shadow-lg">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-[380px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Card>
          ))}

          {/* Buttons */}
          <div className="flex flex-col items-center gap-6 mt-12 animate-fade-in-out">
            <Button
              variant="safari-outline"
              onClick={() => navigate('/')}
              className="group w-fit text-yellow-900 bg-white border-amber-400 hover:bg-amber-100 rounded-full shadow">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back Home
            </Button>

            <Button 
              variant="safari" 
              size="lg" 
              className="group w-fit text-white bg-yellow-700 hover:bg-yellow-800 rounded-full shadow-lg px-8"
              onClick={() => navigate('/contact')}>
              Plan Your Safari Adventure
              <FormInputIcon className="ml-2 h-4 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
