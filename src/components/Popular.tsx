import React, {useState} from "react";
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';
import popuImage from '@/assets/popu.png'

const allTours = [
    {
        id: 1,
        categories: ['Tanzania',],
        title: 'Combine Kenya and Zanzibar beach Holiday',
        days: 10,
        location: 'Tanzania',
        details: 'ABERDARE, LAKE NAKURU, MASAI MARA, ZANZIBAR',
        imageUrl: "https://www.serengetiparktanzania.com/wp-content/uploads/2019/07/Activities-in-Zanzibar-Island-750x450.jpg",
        rating: 5,
    },
    {
        id: 2,
        categories: ['Tanzania'],
        title: '9 Days Wildlife Safari & Zanzibar Beach Holiday (Bush to Beach)',
        days: 9,
        location: 'Tanzania',
        details: 'TARANGIRE, SERENGETI, NGORONGORO CRATER, ZANZIBAR',
        imageUrl: 'https://edentours.travel/wp-content/uploads/2019/01/Jambiani-Beach-2-1200x675.jpg',
        rating: 5
    },
    {
        id: 3,
        categories: ['Tanzania'],
        title: '9 Days souls of Tanzania Safari Fly in Safati',
        days: 9,
        location: 'Tanzania',
        details: 'TARANGIRE, SERENGETI, LAKE MANYARA, NGORONGORO',
        imageUrl: 'https://s3.amazonaws.com/cdn.micato.com/wp-content/uploads/2018/09/07233425/balloon-1.jpg',
        rating: 5,
    },
    {
        id: 4,
        categories: ['Mt Kilimanjaro'],
        title: '8 Days Mount Kilimanjaro Climbing Group Joining Lemosho Route',
        days: 7,
        location: 'Tanzania',
        details: 'MOUNT KILIMANJARO',
        imageUrl: 'https://www.kilimanjaroparktanzania.com/wp-content/uploads/2022/04/hiking-kilimanjaro.jpg',
        rating: 5,
    },
    {
        id: 5,
        categories: ['Mt Kilimanjaro'],
        title: '7 Days Mt Kilimanjaro Climbing Group Joining Tour Machame Route',
        days: 7,
        location: 'Tanzania',
        details: 'MOUNT KILIMANJARO',
        imageUrl: 'https://www.serengetiparktanzania.com/wp-content/uploads/2021/11/7-Days-Lemosho-Route-Kilimanjaro-Climbing.jpg',
        rating: 5,
    },
    {
        id: 6,
        categories: ['Mt Kilimanjaro'], 
        title: '9 Days Kilimanjaro Summit Climbing Lemosho Route',
        days: 9,
        location: 'Tanzania',
        details: 'MOUNT KILIMANJARO',
        imageUrl: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/ipf/YKXM.jpg',
        rating: 5,
    },
    {
        id: 7,
        categories: ['Great Migration'],
        title: '10 Days Exclusive Serengeti Safari (Journey for Migration River Crossing)',
        days: 10,
        location: 'Tanzania',
        details: 'Tarangire, Lake Manyara, Ngorongoro Conservation Area, Serengeti',
        imageUrl: 'https://www.discoverafrica.com/wp-content/uploads/2021/11/sanctuary-kichakani-serengeti-camp-tanzania-safari-green-season-great-migration-scaled.jpg',
        rating: 5,
    },
    {
        id: 8,
        categories: ['Great Migration'],
        title: '10 Days Serengeti Wildebeest Migration Safari Fly In Drive Out',
        days: 10,
        location: 'Tanzania',
        details: 'Serengeti, Ngorongoro, Lake Manyara, Tarangire',
        imageUrl: 'https://meruslopestours.com/wp-content/uploads/2025/02/82-scaled.jpg',
        rating: 5,
    },
    {
        id: 9,
        categories: ['Great Migration'],
        title: '5 Days Wildebeest Migration Calving Safari',
        days: 5, 
        location: 'Tanzania',
        details: 'Ndutu, Serengeti National Park',
        imageUrl: 'https://www.andbeyond.com/wp-content/uploads/sites/5/zebra-and-wildebeest-in-east-africa.jpg',
        rating: 5,
    },
    {
        id: 10,
        categories: ['Zanzibar'],
        title: '8 Days Explore Zanzibar and Pemba Islands',
        days: 8,
        location: 'Zanzibar',
        details: 'ZANZIBAR, STONE TOWN',
        imageUrl: 'https://www.shadowsofafrica.com/travel-africa/wp-content/uploads/2018/08/zanzibar-stone-town-view-min-800x600.jpg',
        rating: 5,
    },
    {
        id: 11,
        categories: ['Zanzibar'],
        title: '5 Days Explore Zanzibar Luxury Beach Holiday',
        days: 5,
        location: 'Zanzibar',
        details: 'ZANZIBAR',
        imageUrl: 'https://wildlifesafaritanzania.com/wp-content/uploads/2022/06/zanzibar-beaches-GettyImages-1136453253-0aac4dd3f8e1.jpg',
        rating: 5,
    },
    {
        id: 12,
        categories: ['Zanzibar'],
        title: '3-Day Zanzibar Stone Town Experience',
        days: 3,
        location: 'Zanzibar',
        details: 'STONE TOWN, ZANZIBAR, JOZANI FOREST',
        imageUrl: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/41c3b9b31bfc949f61109b109a232547e2ad2539ceb890237deb09fddfa4533e.jpg',
        rating: 5,
    },
    {
        id: 13,
        categories: ['Kruger South Africa'],
        title: '3 Days Adventure Kruger Tented Safari',
        days: 3,
        location: 'South Africa',
        details: 'Kruger',
        imageUrl: "https://cdn.kiwicollection.com/media/property/PR005143/xl/005143-07-ngala_tented_room7.jpg?cb=1434659994",
        rating: 5,
    },
    {
        id: 14,
        categories: ['Kruger South Africa'], 
        title: '5 Days Luxury Kruger Safari',
        days: 5,
        location: 'South Africa',
        details: 'Kruger',
        imageUrl: "https://www.southerndestinations.com/wp-content/uploads/2024/01/rhino_walking_safaris_-_tent_interior_1_-_credit_guy_upfold.jpeg",
        rating: 5,
    },
    {
        id: 15,
        categories: ['Kruger South Africa'],
        title: '4 Days Kruger Panorama Safari',
        days: 4,
        location: 'South Africa',
        details: 'Kruger',
        imageUrl: "https://safari-tours-africa.b-cdn.net/wp-content/uploads/safari-in-kruger-national-park-scaled.webp",
        rating: 5,
    },
];

const categories = [
  "Tanzania",
  "Great Migration",
  "Mt Kilimanjaro",
  "Zanzibar",
  "Kruger South Africa",
];

interface TourCardProps {
  tour: typeof allTours[0];
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const renderStars = (rating: number) =>
    Array(rating)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-yellow-500 text-sm">
          ★
        </span>
      ));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-56 sm:h-52">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-white/90 p-2 rounded flex items-center space-x-3 text-xs font-semibold shadow">
          <span className="flex items-center">
            <IoCalendarOutline className="mr-1" /> {tour.days} Days
          </span>
          <span className="flex items-center">
            <IoLocationOutline className="mr-1" /> {tour.location}
          </span>
        </div>
      </div>

      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex mb-1">{renderStars(tour.rating)}</div>
          <h3 className="text-base font-bold mb-1 leading-snug">
            {tour.title}
          </h3>
          <p className="text-xs text-gray-600 uppercase tracking-wide">
            {tour.details}
          </p>
        </div>
        <div className="mt-2 flex justify-end">
          <button className="text-muted-foreground font-semibold text-lg hover:text-amber-600 transition-colors">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};



const PopularTours: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tanzania");
  const filteredTours = allTours.filter((tour) =>
    tour.categories.includes(activeCategory)
  );

  return (
    <div className="py-16 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <img
          src={popuImage}
          alt="African Wildlife Icon"
          className="mx-auto mb-4 w-20 h-20 object-contain"/>
          <h2 className="text-4xl font-bold mb-6">Popular Tours</h2>
          <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
          <p className="text-lg text-muted-foreground font-serif max-w-3xl mx-auto">
            Discover Africa's wonders with our expertly crafted tours.
            Experience captivating landscapes and vibrant cultures on
            unforgettable journeys.
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 my-1 rounded-full text-sm font-semibold transition-all duration-200
                ${
                  activeCategory === category
                    ? "bg-muted-foreground text-white shadow-md font-serif"
                    : "bg-white text-muted-foreground hover:bg-gray-400 hover:text-muted-foreground"}`}>
              {category}
            </button>
          ))}
        </div>

        <hr className="mb-10 border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />))
          ) : (
            <div className="col-span-full text-center py-10 text-muted-foreground text-xl">
              No tours found for this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularTours;