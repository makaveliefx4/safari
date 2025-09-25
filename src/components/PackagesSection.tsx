import React from 'react';
import { ArrowRight, CheckCircle, Star, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import mapImage from '@/assets/map.png'; // Assuming you have this image

const packages = [
  {
    id: 1,
    name: 'Essential Safari',
    duration: '5 Days',
    price: '$2,500',
    originalPrice: '$3,200',
    popular: false,
    description: 'Perfect introduction to Tanzania wildlife with comfortable lodges and expert guides.',
    destinations: ['Serengeti', 'Ngorongoro Crater'],
    includes: [
      'Luxury lodge accommodation',
      'All meals and drinks',
      'Professional guide and vehicle',
      'Park entry fees',
      'Airport transfers',
    ],
    highlights: ['Big Five encounters', 'Crater game drives', 'Maasai cultural visit'],
    maxGuests: '8 guests',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Premium Adventure',
    duration: '8 Days',
    price: '$4,200',
    originalPrice: '$5,500',
    popular: true,
    description: 'Comprehensive safari experience combining multiple destinations with luxury amenities.',
    destinations: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Zanzibar'],
    includes: [
      'Ultra-luxury accommodation',
      'Private guide and vehicle',
      'Hot air balloon safari',
      'All premium meals and beverages',
      'Spa treatments included',
      'Beach extension in Zanzibar',
    ],
    highlights: ['Great Migration viewing', 'Balloon safari', 'Beach relaxation', 'Premium lodges'],
    maxGuests: '6 guests',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Ultimate Luxury',
    duration: '12 Days',
    price: '$8,500',
    originalPrice: '$11,000',
    popular: false,
    description: 'The pinnacle of safari luxury with exclusive access and personalized experiences.',
    destinations: ['Private Conservancies', 'Exclusive Camps', 'Zanzibar Luxury Resort'],
    includes: [
      'Private camp accommodation',
      'Personal butler service',
      'Private aircraft transfers',
      'Exclusive conservancy access',
      'Michelin-level dining',
      'Photography workshops',
      'Spa and wellness program',
    ],
    highlights: ['Private conservancies', 'Butler service', 'Helicopter tours', 'Photography masterclass'],
    maxGuests: '4 guests',
    rating: 5.0,
  },
];

const packageFeatures = [
  { icon: Calendar, label: 'Flexible Dates' },
  { icon: Users, label: 'Small Groups' },
  { icon: Star, label: '5-Star Service' },
  { icon: CheckCircle, label: 'All-Inclusive' },
];

export function PackagesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 animate-fade-in-out">
          <img
            src={mapImage}
						alt="African Wildlife Icon"
						className="mx-auto mb-4 w-20 h-20 object-contain"/>
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
            Popular Areas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find The Best Majestic Place
          </h2>
          <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {packageFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{feature.label}</h3>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`overflow-hidden border-0 shadow-[var(--shadow-earth)] luxury-hover animate-scale-in relative ${
                pkg.popular ? 'ring-2 ring-accent' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }} >
              {pkg.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                    <div className="text-left">
                      <span className="text-sm text-muted-foreground line-through block">{pkg.originalPrice}</span>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <span>{pkg.duration}</span>
                    <span>•</span>
                    <span>{pkg.maxGuests}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                      <span>{pkg.rating}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 font-serif leading-relaxed text-center">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Destinations</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((destination) => (
                      <span 
                        key={destination}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium" >
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Includes</h4>
                  <div className="space-y-2">
                    {pkg.includes.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground font-serif text-sm">{item}</span>
                      </div>
                    ))}
                    {pkg.includes.length > 4 && (
                      <p className="text-xs text-muted-foreground ml-7">
                        + {pkg.includes.length - 4} more inclusions
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium" >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant={pkg.popular ? 'safari-outline' : 'safari-outline'} 
                  size="lg" 
                  className="w-full text-black group w-full md:w-auto px-8 py-6 rounded-full shadow-lg border-2 border-border"
                  onClick={() => navigate('/contact')}>
                  Book This Package
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className='bg-[url("https://cloudfront.safaribookings.com/blog/2024/10/00-Top_10_Best_African_Safari_Parks_and_Destinations_of_2024-BW-header1200px.jpg")] rounded-2xl bg-fixed bg-cover bg-center shadow-[var(--shadow-earth)]'>
         <div className="absolute inset-0 rounded-full "></div>
          <CardContent className="p-12 text-center bg-black/50">
            <h3 className="text-3xl font-bold  text-white mb-4">
              Need Something Different?
            </h3>
            <p className="text-xl text-white mb-8 font-serif max-w-2xl mx-auto">
              Our safari specialists can create a completely custom itinerary tailored to your 
              specific interests, budget, and travel dates.
            </p>
            <div className="flex flex-col rounded-full sm:flex-row gap-4 justify-center">
               <Button
                variant="safari-outline"
                size="lg"
                className="bg-transparent text-white w-full md:w-auto px-8 py-6 rounded-full shadow-lg border-2 border-border"
                onClick={() => navigate('/contact')}>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="font-semibold">OUR REVIEWS</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}