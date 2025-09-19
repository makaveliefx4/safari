import React from 'react';
import { ArrowLeft, PawPrint, FormInputIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';

const friendly = [
  {
    id: 1,
    name: 'The Big 5 Challenge',
    location: 'Serengeti National Park & Ngorongoro Crater',
    image: "https://goodearthtours.com/wp-content/uploads/2024/12/1.jpg.webp",
    description: "Kids can become junior detectives on a mission to spot Africa's most famous animals: lions, elephants, leopards, buffalo, and rhinos! With our expert guides, every game drive is a thrilling scavenger hunt.",
  },
  {
    id: 2,
    name: 'Cultural Encounters with the Maasai',
    location: 'Ngorongoro Highlands',
    image: "https://www.ernestmagictours.com/wp-content/uploads/2023/12/family-2-1800x1080-1.jpg",
    description: "Step into a Maasai village and meet new friends! Children can learn traditional songs and dances, watch a spear-throwing demonstration, and get a peek into a different way of life. It’s an unforgettable lesson in culture and community.",
  },
  {
    id: 3,
    name: 'Canoeing and Boat Safaris',
    location: 'Lake Manyara & Nyerere National Park',
    image: "https://uploads.prod01.london.platform-os.com/instances/730/assets/uploads/2020/02/father-and-his-children-enjoying-family-days-out-canoeing-on-the-beaulieu-river-fun-things-to-do-with-kids-in-the-new-forest.jpg?updated=1621410433",
    description: "Trade the safari vehicle for a boat! Paddle along serene lakes and rivers to see hippos, crocodiles, and a spectacular variety of birds up close. It's a different, quieter way to experience the wild and a big hit with all ages.",
  },
];

const TanzaniaFamilySafari = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navigation />

      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center p-6"
        style={{ backgroundImage: `url('https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            Tanzania Family Safari: An Adventure for All Ages!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Create lifelong memories on a magical safari designed for the whole family. From spotting playful lion cubs to meeting local communities, a Tanzanian adventure is the ultimate playground.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <article className="prose lg:prose-xl mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <PawPrint className="w-12 h-12 text-yellow-600 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Adventures for the Whole Family
            </h2>
            <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
              Safari isn’t just about watching from a car. It's about engaging, learning, and discovering together. We’ve handpicked activities that are fun, safe, and educational for every member of the family.
            </p>
          </div>

          <ul className="list-none space-y-16 p-0">
            {friendly.map((activity, index) => (
              <li key={activity.id} className="relative group">
                <Card className={`rounded-[40px] shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2 ${index % 2 === 0 ? 'bg-white' : 'bg-yellow-50'}`}>
                  <div className={`p-8 md:p-12 lg:flex items-center gap-12 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-[30px] shadow-lg flex-shrink-0 lg:w-1/2 mb-6 lg:mb-0">
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 lg:w-1/2">
                      <h3 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">
                        {activity.name}
                      </h3>
                      <p className="text-base font-medium text-gray-600 mb-4">
                        Location: {activity.location}
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </article>

        {/* Buttons */}
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
            className="group w-fit bg-yellow-600 text-white hover:bg-yellow-700 rounded-full px-8 py-3 shadow-md transition-all duration-300"
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

export default TanzaniaFamilySafari;