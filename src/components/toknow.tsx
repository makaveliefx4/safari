import React from 'react';
import { Mail } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import anounceImage from '@/assets/anounce.png';
import { Button } from '@/components/ui/button';

const know = [
  {
    question: 'What is the best time to visit Tanzania for safari?',
    answer: 'The best time depends on your priorities. June to October offers the Great Migration in Serengeti and excellent wildlife viewing with minimal rainfall. December to March provides green landscapes, newborn animals, and fewer crowds. Each season offers unique experiences and wildlife encounters.',
  },
  {
    question: 'What should I pack for an African safari?',
    answer: 'Pack neutral-colored clothing (khaki, brown, olive), comfortable walking shoes, sun hat, sunglasses, sunscreen (SPF 50+), insect repellent, binoculars, camera with extra batteries, and personal medications. We provide a detailed packing list upon booking. Avoid bright colors and camouflage patterns.',
  },
  {
    question: 'Are safaris safe? What about wildlife encounters?',
    answer: 'Safari tourism has an excellent safety record. Our experienced guides are trained in wildlife behavior and emergency procedures. Vehicles are equipped with communication devices and first aid kits. We maintain strict protocols for wildlife encounters and have partnerships with medical facilities.',
  },
  {
    question: 'What accommodation standards can I expect?',
    answer: 'Our accommodations range from luxury tented camps to premium lodges, all featuring en-suite bathrooms, comfortable beds, excellent dining, and prime wildlife viewing locations. Most include amenities like swimming pools, spa services, and 24-hour electricity from generators or solar power.',
  },
  {
    question: 'Do I need vaccinations or special health preparations?',
    answer: 'Yellow fever vaccination is required if traveling from endemic countries. Malaria prophylaxis is recommended for most areas. We suggest consulting your physician 4-6 weeks before travel. Our team provides detailed health guidelines and can recommend travel clinics for vaccinations.',
  },
  {
    question: 'Can you accommodate dietary restrictions or special needs?',
    answer: 'Absolutely! Our lodges accommodate vegetarian, vegan, gluten-free, and other dietary requirements with advance notice. We also cater to mobility needs and can arrange accessible accommodations and modified activities. Please inform us of any requirements during booking.',
  },
  {
    question: 'What is your cancellation and travel insurance policy?',
    answer: 'We recommend comprehensive travel insurance covering trip cancellation, medical emergencies, and evacuation. Our cancellation policy varies by season and proximity to travel dates. We offer flexible rebooking options and work with insurance providers to ensure you\'re protected.',
  },
  {
    question: 'How do safaris support conservation and local communities?',
    answer: '25% of every safari booking goes directly to conservation projects and community development. We employ local guides, source from community suppliers, and support anti-poaching efforts. Your safari directly contributes to protecting wildlife and improving local livelihoods.',
  },
];

export function Know() {
  return (
    <section className="py-24 bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div className="max-w-7xl mx-auto px-6 animate-fade-in-out">
        <img
          src={anounceImage}
          alt="African Wildlife Icon"
          className="mx-auto mb-4 w-20 h-20 object-contain"
        />
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm font-semibold uppercase text-emerald-600 tracking-widest mb-2">
            Should know before you travel
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Good to Know
          </h2>
          <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        </div>

        <Card className="border-0 shadow-[var(--shadow-earth)] animate-fade-up">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {know.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl shadow-sm overflow-hidden 
                             transition-all data-[state=open]:shadow-lg data-[state=open]:border-emerald-500"
                >
                  <AccordionTrigger
                    className="flex w-full px-6 py-5 text-left 
                               bg-gray-50 hover:bg-gray-100 
                               font-semibold text-gray-800
                               data-[state=open]:bg-white data-[state=open]:text-emerald-700"
                  >
                    <span className="text-lg">{faq.question}</span>
                  </AccordionTrigger>

                  <AccordionContent
                    className="px-6 pb-6 text-gray-600 font-serif leading-relaxed border-t border-gray-100 
                               bg-white data-[state=open]:animate-slide-down 
                               data-[state=closed]:animate-slide-up"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
          <a href="mailto:info@safari.com">
            <Button
              variant="safari-outline"
              size="lg"
              className="w-full text-black md:w-auto px-8 py-6 rounded-full shadow-lg border-2 border-border"
            >
              <span className="font-semibold">Email Our Experts</span>
            </Button>
          </a>
          <a href="tel:+255698809207">
            <Button
              variant="safari"
              size="lg"
              className="w-full md:w-auto px-8 py-6 rounded-full shadow-lg flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span className="font-semibold">Call +255 698 809 207</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
