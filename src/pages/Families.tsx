import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";
import { Navigation } from '@/components/Navigation'
import { title } from "process";

const cardData = [
    {
        title: "Serengeti National park",
        image: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/family-journeys/tanzania/tanzania-family-journey-header-2023.jpg",
        description: "Experience the magic of the Great Migration With your family. The visit plains are perfect for the kids to spot a wide variety of animals and create lasting memories.",
        highlights: ["The Greate Migration", "Abundant Wildlife", "Family Friendly Lodges"],
    },
    {
        title:"Ngorongoro Crater",
        image: "https://www.wildernesstravel.com/wp-content/uploads/2023/06/10-NGOROFAM-private-guided-family-safari-elephants-ngorongoro-crater-1680x826.jpg",
        description: "A UNESCO World Heritage Site with breathtaking views and easy game viewing in a contained area, making it ideal for families with young children who prefer shorter driver.",
        highlights: ["Compact Game Drives", "Spotting the Big Five", "Stunning Scenery"]
    },
    { 
       title: "Lake Manyara",
       image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Lion-in-a-tree-in-Lake-Manyara-National-Park.jpg",
       description: "Known for its unique tree Climbing lions and vibrant flamingo flocks. This park provides a diverse safari experience with opportunities for canoening and village walks that are perfect for a family adventure.",
       highlights: ["Unique Tree-Climbing Lions", "Pink Flamingos", "Diverse Activities"],
    },
    {
        title: "Ruaha National park",
        image: "https://encloseafricasafaris.com/wp-content/uploads/2020/10/Ruaha-National-Park.jpg",
        description:"A wild and remote destination for adventurous families with older children. This park offers an authentic bush experience with high predator density and unspoiled nature.",
        highlights: ["Remote Wilderness", "High Predator Density", "Authentic Bush Experience"],
    },
];

export function Families(){
    const navigate = useNavigate();
    return(
        <div>
            <Navigation/>
            <section className="relative bg-[url('https://www.siyabona.com/images/family-safari-africa-786x416.jpg')] py-20 text-center bg-cover bg-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    Family Safaris in Tanzania
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    Create Unforgettable memories on a safaris adventure designed for the whole family. Explore safe and exciting destinations, witness increadible wildlife, and share the wonder of the African bush together.
                </p>
            </section>
            <section className="py-16 px-6 grid gap-8 md:grid-cols-3">
                {cardData.map((card, index) => (
                    <Card
                    key={index}
                    className="rounded-2xl shadow-lg hover:scale-105 transition">
                        <img 
                        src={card.image}
                        alt={card.title}
                        className="rounded-t-2xl h-56 w-full object-cover"/>
               <CardContent className="p-6">
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="text-gray-600 mt-2">{card.description}</p>
                <ul className="text-sm text-gray-500 mt-3 list-dic list-inside">
                    {card.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
               </CardContent>
                    </Card>
                ))}
            </section>

            <section className="text-center py-12 bg-green-50">
                <h3 className="text-3xl font-bold text-gray-700 mb-4">
                    Start Planning Your Family Adventure
                </h3>
                <Button
                className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-green-700"
                onClick={() => navigate("/contact")}>
                    Book your Safari
                </Button>
            </section>
        </div>
    )
}