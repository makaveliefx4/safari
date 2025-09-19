import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import threeImage from '@/assets/three.png'

const migrationPhases = [
  {
    id: 1,
    name: 'Calving Season',
    location: 'Southern Serengeti & Ndutu Plains',
    image: "https://paramountviewtanzania.com/wp-content/uploads/2024/11/sony-alpha-62-990x490.jpg",
    description: "From December to March, the herds gather on the short-grass plains to give birth. A spectacular event with thousands of calves born daily, drawing a high concentration of predators.",
  },
  {
    id: 2,
    name: 'Northward Trek',
    location: 'Central & Western Serengeti',
    image: "https://sotetours.com/wp-content/uploads/2017/01/big-herd-wildebeest-is-about-mara-river-great-migration-kenya-tanzania-masai-mara-national-park.jpg",
    description: "As the rains end in April and May, the herds begin their journey north in search of fresh grazing. Massive columns stretch for miles across the plains.",
  },
  {
    id: 3,
    name: 'Grumeti River Crossing',
    location: 'Western Serengeti',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4123pynOEjGGskn3xms9d0jK4J43tMbkcQ&s",
    description: "In June and July, the first major river crossing occurs at the Grumeti River. The herds face a new challenge as they navigate crocodile-infested waters.",
  },
  {
    id: 4,
    name: 'Mara River Crossing',
    location: 'Northern Serengeti & Masai Mara',
    image: "https://www.serengeti.com/assets/img/mara-river-crossing-serengeti-national-park.jpg",
    description: "From August to October, the most dramatic part of the migration takes place at the Mara River, where crocodiles and strong currents create a thrilling spectacle.",
  },
  {
    id: 5,
    name: 'Journey South',
    location: 'Lobo & Eastern Serengeti',
    image: "https://www.serengeti.com/assets/img/great-migration-serengeti-game-drive.jpg",
    description: "In November and December, the herds begin their trek south, returning to the southern plains to prepare for the next calving season, completing the great circular journey.",
  },
];

const GreatMigration = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navigation />
      
      <div 
        className="relative w-full h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url('https://yellowzebrasafaris.com/media/28594/greatmigration.jpg?rxy=0.49833333333333335%2C0.18045112781954886&width=2048&height=1024&format=jpg&v=1da5e0f44519a90')` }}
      >
        <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-white pt-24">
          <img
            src={threeImage}
            alt="Wildlife Icon"
            className="mx-auto mb-6 w-20 h-20 object-contain "
          />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            The Great Migration
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            An Unending Journey Through the Heart of Africa
          </p>
        </div>
      </div>
      
      <div className="container mx-auto p-8 lg:p-16 max-w-4xl">
        <article className="prose lg:prose-xl mx-auto text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            The Great Migration is not a singular event but a continuous, circular journey of over two million wildebeest, zebras, and gazelles across the Serengeti-Mara ecosystem. Driven by the search for fresh grazing and water, this epic trek is one of the world's most breathtaking natural spectacles. It is a true testament to the raw power of nature and the circle of life, as the herds face predators and treacherous river crossings in their quest for survival.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 text-center">
            Key Phases of the Migration
          </h2>
          
          <ul className="list-none space-y-8">
            {migrationPhases.map((phase, index) => (
              <li key={phase.id}>
                <Card className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 w-full h-48 md:h-auto overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={phase.image} 
                        alt={phase.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="md:w-1/2 w-full">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{phase.name}</h3>
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        Location: {phase.location}
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {phase.description}
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

export default GreatMigration;