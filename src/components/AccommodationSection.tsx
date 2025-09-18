import React from 'react';
import { useNavigate } from 'react-router-dom';
import acoooImage from '@/assets/acooo.png';
const cardData = [
  {
    title: 'Couples',
    subtitle: 'Discover the best couples destinations in Tanzania, hand-picked by our expert Travel Designers.',
    image: "https://i.pinimg.com/564x/8e/b3/19/8eb31914946cabb3fb1dc01852bd5e17.jpg",
  },
  {
    title: 'Wildlife Safaris',
    subtitle: 'Experience the thrill of wildlife safaris in Tanzania’s national parks.',
    image: "https://images.news18.com/webstories/uploads/2025/02/1-2025-02-1460233b9bd006095945e63eb152b244.png",
  },
  {
    title: 'Families',
    subtitle: 'Create unforgettable family memories in Tanzania’s stunning landscapes.',
    image: "https://ameliyasafaris.com/wp-content/uploads/2024/08/SKP7985-683x1024.jpg",
  },
  {
    title: 'Culture Safari',
    subtitle: 'Immerse yourself in the rich cultures of Tanzania’s diverse communities.',
    image: "https://africasafarimagazine.com/wp-content/uploads/2024/02/05_Authentic-cultural-experiences-on-safari_01.jpg",
  },
];
export function AccommodationSection() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 animate-fade-in-out">
        <img
						src={acoooImage}
						alt="African Wildlife Icon"
						className="mx-auto mb-4 w-20 h-20 object-contain"/>
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
            Popular Experiences
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Holiday Styles & Special interests
          </h2>
          <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate('/Contact')}>
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>              
              {card.subtitle && (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm font-light leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              )}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}