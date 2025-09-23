import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";
import { Navigation } from '@/components/Navigation'
import { title } from "process";

const cardData = [
    {
        title: "Serengeti National Park",
        image: "https://cdn.pixabay.com/photo/2020/04/16/14/22/antelope-5050847_960_720.jpg",
        description: "Home of the Great Migration and Africa's most iconix wildlife experience. Perfect for game drives and witnessing big cats in action.",
        highlights:["Great Migration", "Big Cats", "Endless Plains"],
    },
    {
        title: "Ngorongoro Crater",
        image: "https://cdn.pixabay.com/photo/2021/04/18/17/12/rhinoceros-6189065_960_720.jpg",
        description: "A UNESCO World Heritage Site, offering breathaking views and close encounters with lions, elephants, and rhinos in a compact area.",
        highlights: ["World Heritage Site", "Big Five", "Scenic Views"],
    },
    {
        title: "Tarangire National Park",
        image: "https://cdn.pixabay.com/photo/2013/12/03/13/03/elephant-222965_960_720.jpg",
        description: "Famous for large elephant herds and towering baobab trees. A hidden gem with fewer crowds and rich birdlife.",
        highlights: ["Elephant Herds", "Baobab Trees", "BirdWatching"],
    },
    {
        title: "Lake Manyara",
        image: "https://www.lakemanyaranationalparks.com/wp-content/uploads/2021/05/lake-mayara-national-park.jpg",
        description: "Known for tree-climbing lions, flamingos, and lush groundwater forests. Ideal for a short but diverse safari experience.",
        highlights: ["Tree-Climbing Lions", "Flamingos", "Forests"],
    },
    {
        title: "Ruaha National park",
        image: "https://www.kilimanjaroparktanzania.com/wp-content/uploads/2025/03/ruaha2-620x450.jpg",
        description:"One of Tanzania's largest parks, offering a raw wilderness with high predator density and fewer tourists.",
        highlights: ["Remote Wilderness", "Predators", "Unspoiled Nature"],
    },
];

export function Wildlife(){
    const navigate = useNavigate();
    return(
        <div>
            <Navigation/>
            <section className="relative bg-[url('https://www.kilimanjaroparktanzania.com/wp-content/uploads/2021/11/7-Days-Kenya-and-Tanzania-Wildlife-Safari-1024x450-1.jpg')] py-20 text-center bg-cover bg-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    Wildlife Safaris in Tanzania
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    Explore Tanzania's most famous national parks and reserves.Witness
                    the Big Five, stunning landscapes, and the raw beauty of Africa 
                    wilderness.
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
                    Plan your Ultimate Safari Adventure
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