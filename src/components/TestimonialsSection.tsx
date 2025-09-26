import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import happyImage from '@/assets/happy.png';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Our honeymoon safari exceeded every expectation! The luxury lodges, private game drives, and incredible wildlife sightings made this the trip of a lifetime. The attention to detail was remarkable.',
    experience: 'Honeymoon Safari - 10 Days',
  },
  {
    id: 2,
    name: 'Dr. James Mitchell',
    location: 'London, UK',
    rating: 5,
    text: 'As a wildlife photographer, I needed the best guides and prime locations. This safari delivered beyond my wildest dreams. We witnessed the Great Migration up close - absolutely breathtaking!',
    experience: 'Photography Safari - 12 Days',
  },
  {
    id: 3,
    name: 'The Thompson Family',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'Traveling with three kids, we were worried about logistics, but everything was perfectly organized. The kids loved the educational programs and we all had an incredible adventure together.',
    experience: 'Family Safari - 7 Days',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-white rounded-[40px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="text-center mb-16 animate-fade-up">
          <div className="text-center mb-16 animate-fade-up">
            <img
						src={happyImage}
						alt="African Wildlife Icon"
						className="mx-auto mb-4 w-20 h-20 object-contain"
					/>
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
            Our Travelers Say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Safari Styles
          </h2>
          <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-card/80 backdrop-blur-sm border-0 shadow-[var(--shadow-earth)] luxury-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-accent mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {testimonial.location}
                  </p>
                  <p className="text-accent text-sm font-medium">
                    {testimonial.experience}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}