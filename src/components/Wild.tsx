import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import opImage from '@/assets/op.png'

const cardsData = [
  {
    title: 'BEACHES',
    description: 'Experience the allure of our meticulously selected beaches. With pristine sands and azure waters.',
    imageUrl: 'https://altezzatravel.com/upload/medialibrary/681/j7hdoumiko515vfodf8ukvcualcx3bew.webp',
    path: '/beaches'
  },
  {
    title: 'BIG FIVE',
    description: 'Encounter Africa\'s legendary Big Five - lions, elephants, buffaloes, leopards, and rhinoceros.',
    imageUrl: 'https://www.explorerwandatours.com/wp-content/uploads/2019/10/Big-5-7-750x450.jpg',
    path: '/big-five'
  },
  {
    title: 'HIKING',
    description: 'Enhance your African tour with invigorating hikes. Traverse scenic landscapes, breathe in fresh mountain.',
    imageUrl: 'https://fascinatingafrica.com/wp-content/uploads/2020/09/rhodes-trails.jpg',
    path: '/hiking'
  },
  {
    title: 'GREAT MIGRATION',
    description: 'An annual natural marvel where vast herds of wildebeest and zebras traverse the Serengeti-Mara.',
    imageUrl: 'https://www.asiliaafrica.com/wp-content/uploads/2024/04/Herds-of-zebra-and-wildebeest-Great-Migration.jpg',
    path: '/great-migration'
  },
  {
    title: 'CHILD FRIENDLY',
    description: 'Our tours are thoughtfully crafted with your little explorers in mind. From engaging activities.',
    imageUrl: 'https://yellowzebrasafaris.com/media/37662/family-safari-kenya.jpg?width=750&height=500&format=jpg&v=1da5e167e88b1b0',
    path: '/friendly'
  }
];

const ImageCard = ({ title, description, imageUrl, onClick }) => (
  <div
    className="relative w-full h-[32rem] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    onClick={onClick}
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-4 text-left transition-all duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:items-center group-hover:justify-center group-hover:text-center">
      <h2 className="text-2xl font-bold text-white mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        {title}
      </h2>
      <p className="text-md text-gray-200 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        {description}
      </p>
    </div>
  </div>
);

const ImageCardSmall = ({ title, description, imageUrl, onClick }) => (
  <div
    className="relative w-full h-[15rem] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    onClick={onClick}
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-4 text-left transition-all duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:items-center group-hover:justify-center group-hover:text-center">
      <h2 className="text-xl font-bold text-white mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        {title}
      </h2>
      <p className="text-sm text-gray-200 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        {description}
      </p>
    </div>
  </div>
);

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center my-12">
             <img
		   	src={opImage}
		   	alt="African Wildlife Icon"
		   	className="mx-auto mb-4 w-20 h-20 object-contain"/>
            <h1 className="text-4xl font-bold mb-4">Explore handpicked experiences</h1>
            <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our selection offers serene beaches, wildlife encounters, invigorating hikes, and family-friendly getaways.
            </p>
            <p className='text-gray-500 mx-auto font-mono cursor-pointer'>
                <b>press</b> the <b>image </b> to see more information
            </p>
            
            
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:row-span-2 lg:col-span-1">
            <ImageCard
                title={cardsData[0].title}
                description={cardsData[0].description}
                imageUrl={cardsData[0].imageUrl}
                onClick={() => navigate(cardsData[0].path)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageCardSmall
              title={cardsData[1].title}
              description={cardsData[1].description}
              imageUrl={cardsData[1].imageUrl}
              onClick={() => navigate(cardsData[1].path)}
            />
            <ImageCardSmall
              title={cardsData[2].title}
              description={cardsData[2].description}
              imageUrl={cardsData[2].imageUrl}
              onClick={() => navigate(cardsData[2].path)}
            />
            <ImageCardSmall
              title={cardsData[3].title}
              description={cardsData[3].description}
              imageUrl={cardsData[3].imageUrl}
              onClick={() => navigate(cardsData[3].path)}
            />
            <ImageCardSmall
              title={cardsData[4].title}
              description={cardsData[4].description}
              imageUrl={cardsData[4].imageUrl}
              onClick={() => navigate(cardsData[4].path)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}