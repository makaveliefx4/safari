import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import hikingImage from '@/assets/hiking.png'

const hiking = [
  {
    id: 1,
    name: 'Mount Kilimanjaro',
    location: 'Northeastern Tanzania',
    image: "https://trekwithbeck.blog/wp-content/uploads/2023/07/20230616_154654-1.jpg",
    description: "Known as the 'Roof of Africa,' Mount Kilimanjaro is the continent's highest peak. Trekkers can choose from several routes, including the scenic Machame and Lemosho, for a challenging yet rewarding climb that doesn't require technical mountaineering skills.",
  },
  {
    id: 2,
    name: 'Mount Meru',
    location: 'Arusha National Park',
    image: "https://lh3.googleusercontent.com/proxy/5Kqs6YvuGghDRQ2ZC9U6l7nW5Z0EsU4061DqA3DGUUfaKBQfQMR7QZlhckXBwOgS1Nyi9_X_jduPxpoLgPd7hgQlKwR_U8gE2BVX6Ht7ZKWQFj0NJEOEPIlPdgyIrXBD5roJBA",
    description: "Often called Kilimanjaro's little brother, Mount Meru is an active stratovolcano that offers a thrilling 3-4 day climb. The trek takes you through diverse landscapes, with excellent chances to spot wildlife like giraffes, buffalos, and colobus monkeys on the lower slopes.",
  },
  {
    id: 3,
    name: 'Ngorongoro Highlands',
    location: 'Ngorongoro Conservation Area',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIG9gxPp-d-S4EKjKSL50VXlDFyQsx71xChg&s",
    description: "This area offers a different kind of trekking experience, blending wildlife viewing with cultural encounters. You can hike through volcanic craters like Empakaai, past remote Maasai villages, and see the unique geological features of the region.",
  },
  {
    id: 4,
    name: 'Ol Doinyo Lengai',
    location: 'Northern Tanzania',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEuoJfoT3rwY7Kff-LwNioCZpK1DvF5vPbw&s",
    description: "Known as the 'Mountain of God' to the Maasai, this is an active volcano that offers a unique and difficult night climb. The ascent is steep and challenging, but reaching the summit for a sunrise view over the Great Rift Valley is a truly unforgettable experience.",
  },
  {
    id: 5,
    name: 'Udzungwa Mountains',
    location: 'Southern Tanzania',
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/6c/c7/6a/udzungwa-mountain-hiking.jpg",
    description: "Referred to as the 'African Galápagos' due to its exceptional biodiversity, this national park is a paradise for hikers. Trails like the Sanje Waterfall lead you through dense rainforest filled with endemic birds and primates.",
  },
];

const TanzaniaHikingSafari = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navigation />
      
      <div 
        className="relative w-full h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url('https://www.exploretanzania.nl/wp-content/uploads/2018/10/hiking-en-trekking-Tanzania-1340x450-2-1240x420.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-white pt-24">
                <img
                  src={hikingImage}
                  alt="Wildlife Icon"
                  className="mx-auto mb-6 w-20 h-20 object-contain invert "
                />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Tanzania Hiking Safari
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Beyond the Vehicle: An Unforgettable Journey on Foot
          </p>
        </div>
        </div>
      </div>
      
      <div className="container mx-auto p-8 lg:p-16 max-w-4xl">
        <article className="prose lg:prose-xl mx-auto text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            A hiking safari in Tanzania is a thrilling and immersive experience that allows you to connect with nature on a deeper level. While game drives offer a spectacular view of the wildlife, exploring on foot brings a unique perspective, allowing you to appreciate the small details of the ecosystem—from animal tracks to exotic flora. Tanzania offers a wide variety of trails, from the high-altitude challenges of Mount Kilimanjaro to the gentle, scenic walks in the Ngorongoro Highlands.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 text-center">
            Top Hiking Destinations
          </h2>
          
          <ul className="list-none space-y-8">
            {hiking.map((trail, index) => (
              <li key={trail.id}>
                <Card className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 w-full h-48 md:h-auto overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={trail.image} 
                        alt={trail.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="md:w-1/2 w-full">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{trail.name}</h3>
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        Location: {trail.location}
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {trail.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </article>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
          <Button
            onClick={() => navigate('/')}
            className="group w-fit bg-gray-200 text-gray-800 hover:bg-gray-300 border-none rounded-full px-6 py-3 shadow-md transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          <Button
            size="lg"
            className="group w-fit bg-gray-800 text-white hover:bg-gray-700 rounded-full px-8 py-3 shadow-md transition-all duration-300"
            onClick={() => navigate('/contact')}
          >
            Plan Your Safari Adventure
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TanzaniaHikingSafari;