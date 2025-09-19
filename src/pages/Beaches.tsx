import React from 'react';
import { ArrowLeft, FormInputIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import desImage from '@/assets/des.png';
import beachessImage from '@/assets/beachess.png'
const Beaches = [
  {
    id: 1,
    name: 'Nungwi Beach',
    location: 'Zanzibar North',
    image: "https://content.r9cdn.net/rimg/dimg/0e/43/e07aa9f8-city-66698-16f86449d4f.jpg?width=1366&height=768&xhint=1767&yhint=1022&crop=true&watermarkposition=lowerright",
    description: "Nungwi is famous for its crystal-clear turquoise waters, vibrant nightlife, and traditional dhow boat building. It’s one of the best swimming beaches in Zanzibar with stunning sunsets.",
  },
  {
    id: 2,
    name: 'Kendwa Beach',
    location: 'Zanzibar',
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/54/f8/kendwa.jpg?w=900&h=500&s=1", 
    description: 'Kendwa is known for its powdery white sand and calm, swimmable waters. A perfect place for beach parties, snorkeling, and watching the magical full moon celebrations.',
  },
  {
    id: 3,
    name: 'Paje Beach',
    location: 'Zanzibar East Coast',
    image: "https://www.zanzibar.com/media-assets/paje-beach.jpg",
    description: 'Paje is a paradise for kitesurfers and backpackers. Its endless stretch of palm-fringed shoreline and relaxed vibe makes it one of the most popular beaches in Zanzibar.',
  },
  {
    id: 4,
    name: "Mnemba Island",
    location: "North-East Zanzibar",
    image: "https://www.venchatravel.com/media/image-8891-251224013953.jpg",
    description: "A small private island surrounded by a marine reserve. Known for incredible snorkeling and diving, where you’ll find colorful coral reefs, dolphins, and sea turtles.",
  },
  {
    id: 5,
    name: "Mafia Island",
    location: "Southern Tanzania",
    image: "https://www.southerntanzaniasafari.com/wp-content/uploads/2019/11/Mafia-Island-Beach-Tanzania.jpg",
    description: "Mafia Island offers unspoiled beauty with pristine beaches and one of the richest marine ecosystems in East Africa. Perfect for diving with whale sharks and exploring untouched nature.",
  }
];

export default function BeachesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-emerald-50 rounded-[60px]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-[url('https://tanzania-specialist.com/wp-content/uploads/2023/07/zanzibar_island_boat-1920x800.jpg')] bg-cover bg-center rounded-b-[60px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-white animate-fade-up">
          <img
            src={beachessImage}
            alt="Palm Icon"
            className="mx-auto mb-6 w-20 h-20 object-contain drop-shadow-xl"
          />
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Discover Tanzania & Zanzibar Beaches
          </h2>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            From the turquoise waters of Zanzibar to the untouched beauty of Mafia Island, explore Tanzania’s most stunning tropical escapes.
          </p>
        </div>
      </section>

      {/* Beaches List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 font-sans space-y-20">
          {Beaches.map((beach, index) => (
            <Card 
              key={beach.id}
              className="border-0 rounded-[40px] bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Text */}
                <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                  <CardContent className="p-6">
                    <h2 className="text-3xl font-bold text-emerald-700 mb-4">
                      {beach.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {beach.description}
                    </p>
                    <p className="mt-4 text-sm text-emerald-500 font-semibold uppercase tracking-wide">
                      {beach.location}
                    </p>
                  </CardContent>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-[40px] shadow-lg">
                  <img 
                    src={beach.image} 
                    alt={beach.name}
                    className="w-full h-[350px] object-cover transform hover:scale-105 transition-transform duration-500"
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
              className="group w-fit text-emerald-800 bg-white border-emerald-300 hover:bg-emerald-50 rounded-full shadow">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back Home
            </Button>

            <Button 
              variant="safari" 
              size="lg" 
              className="group w-fit text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg px-8"
              onClick={() => navigate('/contact')}>
              Get Your Beach Escape Quote
              <FormInputIcon className="ml-2 h-4 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
