import React from "react";
import AfricaImage from '@/assets/Africa.png'
import { Button } from "@/components/ui/button";
import MaasaiImage from "@/assets/Maasai.png"

export function Connect() {
    return(
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div className="text-center mb-16">
           <img
           src={AfricaImage}
           alt="Africa Outline"
           className="mx-auto mb-4 w-20 h-20 object-contain"/>
           <p className="text-sm font-light uppercase tracking-widest mb-2 text-gray-700">
               HOW TO BOOK YOUR
           </p>
           <div className="mb-6">
           <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
                <h2 className="text-4xl md:text-5xl font-bold ">
                    Dream Africa Holiday
                </h2>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start px-6">
                <div className="flex flex-col items-center text-center">
                    <span className="text-8xl font-bold text-gray-300 mb-4">1</span>
                    <h3 className="text-2xl font-bold mb-2">Connect With us</h3>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                        Share your wish list and we'll start planning your adventure.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-8xl font-bold text-gray-300 mb-4">2</span>
                    <h3 className="text-2xl font-bold mb-2">Customise</h3>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                        Your dedicated travel expert will be in touch within 24 hours to start designing your bespoke African itinerary.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-8xl font-bold text-gray-300 mb-4">3</span>
                    <h3 className="text-2xl font-bold mb-2">Confirm & Travel</h3>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                        We won't stop refining your plans untill we get the perfect trip at the best price.
                    </p>
                </div>
            </div>

          <div className="text-center mt-16">
            <a href="tel:+255698809107">
           <Button variant="safari" className="text-white px-8 py-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            CHAT WITH US
           </Button>
           </a>
            </div>
        </section>
    )
}