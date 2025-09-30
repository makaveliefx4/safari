import React from 'react';
import { ArrowLeft, FormInputIcon, MapPin, Sun, Anchor, HeartHandshake, Ship, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';

const Beaches = [
  {
    id: 1,
    name: 'Nungwi Beach',
    location: 'Zanzibar North',
    image: "https://content.r9cdn.net/rimg/dimg/0e/43/e07aa9f8-city-66698-16f86449d4f.jpg?width=1366&height=768&xhint=1767&yhint=1022&crop=true&watermarkposition=lowerright",
    secondaryImage1: "https://cdn.pixabay.com/photo/2020/05/05/23/08/africa-5135407_1280.jpg",
    secondaryImage2: "https://cdn.pixabay.com/photo/2022/08/11/08/44/beach-7378964_960_720.jpg",
    headline: "The Sunset Capital & Traditional Dhow Building",
    description: "Nungwi isn't just a beach; it's a bustling cultural hub. Famous for its dazzling crystal-clear turquoise waters and soft white sands, it's widely regarded as the best swimming beach on the island, being less affected by tidal changes. Visitors can witness the centuries-old tradition of dhow boat building at the local shipyard, offering a rich glimpse into Zanzibari maritime culture. The evenings culminate in spectacular, fiery sunsets that draw crowds and set the stage for vibrant nightlife.",
    longText: "The consistently high water levels make Nungwi popular for luxury resorts and all-day water activities. Unlike the East Coast, the lack of major tidal shift ensures continuous access to the turquoise waters. Guests often book sunset dhow cruises directly from the beach, a classic Zanzibari experience not to be missed. The local village provides an authentic counterpoint to the tourist energy.",
    keyActivities: ["Dhow Building Tours", "Sunset Cruises", "Vibrant Nightlife", "Luxury Resorts"],
  },
  {
    id: 2,
    name: 'Kendwa Beach',
    location: 'Zanzibar West',
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/54/f8/kendwa.jpg?w=900&h=500&s=1",
    secondaryImage1: "https://cdn.pixabay.com/photo/2017/02/06/12/02/zanzibar-2042787_960_720.jpg",
    secondaryImage2: "https://cdn.pixabay.com/photo/2020/03/19/21/08/zanzibar-4948788_960_720.jpg",
    headline: "Powder-Soft Sand and Full Moon Parties",
    description: "Kendwa boasts arguably the finest, most powdery white sand in all of Zanzibar. Crucially, the tide here remains consistently high, making it one of the few places where you can swim at any time of day. This calm, consistent water makes it an ideal spot for deep-sea diving and simple relaxation. Kendwa is also famous for its legendary full moon parties, which draw travelers from across the globe, combining bohemian beach vibes with spectacular ocean views.",
    longText: "The atmosphere here is generally laid-back and younger, appealing to those who enjoy socializing and beachside fun. The lack of sea urchins and sharp corals makes it excellent for barefoot walking and swimming. Scuba centers line the beach, offering trips to nearby Mnemba Atoll. For divers, the clear conditions here are often cited as the best starting point for coastal explorations.",
    keyActivities: ["All-Day Swimming", "Full Moon Parties", "Relaxation", "Scuba & Diving"],
  },
  {
    id: 3,
    name: 'Paje Beach',
    location: 'Zanzibar East Coast',
    image: "https://www.zanzibar.com/media-assets/paje-beach.jpg",
    secondaryImage1: "https://cdn.pixabay.com/photo/2016/11/21/12/38/visser-1845136_960_720.jpg",
    secondaryImage2: "https://cdn.pixabay.com/photo/2017/06/15/09/50/football-2404634_960_720.jpg",
    headline: "The Kitesurfing Mecca of the Indian Ocean",
    description: "Paje is a paradise for adrenaline seekers and is known globally as the kitesurfing capital of East Africa. Its shallow, warm lagoon and consistent cross-onshore wind create perfect conditions for beginners and experts alike. Beyond the high-octane water sports, Paje maintains a relaxed, bohemian vibe, attracting backpackers and adventurers. The endless stretch of palm-fringed shoreline is beautiful for long morning walks, especially during low tide when sandbars appear.",
    longText: "The tidal variance is pronounced here, creating a vast, shallow turquoise lagoon at high tide, ideal for learning kitesurfing. At low tide, the water recedes dramatically, exposing sand flats where locals often search for sea creatures. This dual environment makes Paje fascinating but requires planning if you only wish to swim. The many beach bars and cafes offer a lively social scene, focused more on casual drinks than large-scale nightlife.",
    keyActivities: ["Kitesurfing Lessons", "Windsurfing", "Lagoon Walks", "Beach Cafés"],
  },
];

const MainContent = {
    history: `The history of Zanzibar is inseparable from its shores. For centuries, these same beaches witnessed the arrival of Persian traders, Omani Sultans, and European explorers, all drawn by the spice trade and strategic maritime location. This blend of cultures—African, Arab, European—is what gives the Tanzanian coast its unique charm, visible everywhere from the architecture of Stone Town to the traditional dhow boats.`,
    marineLife: `The Indian Ocean waters surrounding Zanzibar are a vibrant ecosystem protected by dedicated marine parks. This protection translates to some of the most spectacular diving and snorkeling opportunities in the world. Expect to encounter whale sharks, green sea turtles, vast coral gardens, and schools of tropical fish.`,
    planning: `Choosing the right beach depends entirely on your holiday goals. North Coast (Nungwi, Kendwa) is ideal for consistent swimming and social scenes. The East Coast (Paje, Jambiani) is best for watersports or authentic local experiences. Mafia Island offers unmatched diving exclusivity.`
};

export default function BeachesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen font-serif">
      <Navigation />
      
      <section className="relative h-[90vh] w-full bg-[url('https://tanzania-specialist.com/wp-content/uploads/2023/07/zanzibar_island_boat-1920x800.jpg')] bg-cover bg-center flex items-end justify-start pb-24">
        <div className="relative text-white max-w-6xl mx-auto px-8 text-left">
          <h1 className="text-7xl md:text-7xl font-extrabold mb-4 tracking-tighter leading-none">
            Zanzibar's<br/>
            Coastal Gems
          </h1>
          <p className="text-2xl md:text-4xl font-light max-w-4xl border-l-4 border-muted-foreground pl-4 italic">
            "Your guide to the softest sands and the most impossibly turquoise waters in the world."
          </p>
        </div>
      </section>

     <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-5xl font-extrabold  mb-12 border-b-2 border-muted-foreground pb-2 text-center">
                The Coastal Journal: An In-Depth Look
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-lg  leading-relaxed">
                
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold flex items-center gap-3">
                        <Anchor className="w-6 h-6 "/>
                        The Maritime History
                    </h3>
                    <div className="w-12 h-1 bg-muted-foreground mb-4"></div>
                    <p>{MainContent.history}</p>
                    <p className="text-sm font-semibold text-muted-foreground pt-2">This blend of past and present creates a powerful sense of place that goes beyond relaxation.</p>
                </div>
                
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold  flex items-center gap-3">
                        <HeartHandshake className="w-6 h-6 "/>
                        Marine Life & Conservation
                    </h3>
                    <div className="w-12 h-1 bg-muted-foreground mb-4"></div>
                    <p>{MainContent.marineLife}</p>
                    <p className="text-sm font-semibold text-muted-foreground pt-2">Responsible tourism supports the vital protection of these fragile coral reef ecosystems.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-muted-foreground flex items-center gap-3">
                        <Compass className="w-6 h-6 text-muted-foreground"/>
                        How to Plan Your Beach Stay
                    </h3>
                    <div className="w-12 h-1 bg-amber-400 mb-4"></div>
                    <p>{MainContent.planning}</p>
                    <p className="text-sm font-semibold text-muted-foreground pt-2">We recommend combining the North for relaxation with the East for activities.</p>
                </div>
            </div>
            
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 space-y-24">
            
          {Beaches.map((beach, index) => (
            <div
              key={beach.id}
              className={`p-8 rounded-3xl shadow-2xl transition-shadow duration-500 bg-white border-b-4 ${
                  index % 2 === 0 ? 'border-muted-foreground' : 'border-white'}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-8 mb-8 border-b border-gray-200 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                <div className={`lg:col-span-6 rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.01] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    src={beach.image}
                    alt={`${beach.name} main view`}
                    className="w-full h-[450px] object-cover" />
                </div>

                <div className={`lg:col-span-6 space-y-4 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-lg font-semibold uppercase tracking-widest text-muted-foreground">
                    <MapPin className="w-4 h-4 inline mr-2"/>
                    {beach.location}
                  </p>
                  <h3 className="text-5xl font-extrabold  mb-2">
                    {beach.name}
                  </h3>
                  
                  <p className="text-2xl text-muted-foreground italic border-l-4 border-amber-400 pl-4">
                    {beach.headline}
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                    {beach.description}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed font-light">
                    {beach.longText}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={beach.secondaryImage1}
                    alt={`${beach.name} secondary view 1`}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={beach.secondaryImage2}
                    alt={`${beach.name} secondary view 2`}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
                </div>

                <div className="bg-teal-50 p-6 rounded-xl space-y-3 shadow-md">
                    <h4 className="text-xl font-bold  pb-2">Top Experiences:</h4>
                    <ul className="space-y-1 text-muted-foreground text-base">
                        {beach.keyActivities.map((activity, i) => (
                           <li key={i} className="flex items-center gap-2">
                              <Ship className="w-4 h-4 text-amber-500 flex-shrink-0"/>
                              <span>{activity}</span>
                          </li>
                      ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-4xl font-extrabold text-white mb-4">Ready to Create Your Coastal Journal?</h3>
            <p className="text-xl text-gray-200 mb-10">
                With so much to see and do, let our expert team design a personalized itinerary that flawlessly combines your beach desires with an unforgettable safari.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <Button
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="group w-fit text-white bg-transparent border-gray-400 hover:bg-teal-800 rounded-full shadow-lg px-8 py-3 tracking-wider">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Destinations
                </Button>
                <Button
                    onClick={() => navigate("/contact")}
                    className="group w-fit text-teal-900 bg-amber-400 hover:bg-amber-300 rounded-full shadow-2xl px-12 py-3 font-bold text-lg tracking-wide transform hover:scale-105 transition-transform duration-300">
                    Start Customizing Your Trip
                    <FormInputIcon className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}