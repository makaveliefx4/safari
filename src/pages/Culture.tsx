import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navigation } from '@/components/Navigation'
import { Card, CardContent } from "@/components/ui/card";

const cardData = [
    {
        title: "Maasai Cultural Safari",
        image: "https://www.andbeyond.com/wp-content/uploads/sites/5/maasai-men-standing-by-a-tree-in-the-masai-mara.jpg",
        description:"Step into the world of the Maasai, one of East Africa’s most iconic tribes. Discover their warrior traditions, vibrant beadwork, and semi-nomadic lifestyle while visiting authentic villages.",
        highlights:["Traditional dances and warrior songs", "Visit Maasai bomas (homesteads)", "Learn about cattle herding culture", "Beadwork and craft demonstrations"]
    },
    {
        title: "Hadzabe Bushmen Safari",
        image: "https://kaonekasafaris.co.tz/wp-content/uploads/2020/01/KILIAN-WEB-COTENTS-2_html_m73c1ba76.jpg",
        description: "Explore the ancient way of life of the Hadza, one of the last hunter-gatherer tribes in Tanzania. Join them in daily activities and experience life in harmony with nature.",
        highlights: ["Hunting with bows and arrows", "Gathering wild fruits and honey", "Tracking wildlife with elders", "Campfire storytelling"]
    },
    {
        title: "Chagga Cultural Safari",
        image: "https://www.lindotravel.com/uploads/463151_1692596414.jpeg",
        description: "Nestled on the slopes of Mount Kilimanjaro, the Chagga people are known for their farming traditions. Visit coffee plantations, underground caves, and taste traditional brews.",
        highlights: ["Coffee and banana farm tours", "Explore Chagga caves", "Taste local banana beer", "Scenic hikes around Kilimanjaro"]
    }
];

export function Culture(){
    const navigate = useNavigate();
    return(
        <div> 
            <Navigation/>
            <section className="relative bg-[url('https://www.africanmeccasafaris.com/wp-content/uploads/tindigatentedcamp4.jpg')] py-20 text-center bg-cover bg-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    Culture Safari In Tanzania
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    Learn diffirent Culture in tanzania, Most famous Culture,
                    as Maasai are Tribe That are the lifestockeeper & Hadzabe 
                    a tribe that Hunt And Gather and Chagga tribe they harvest 
                    coffe and banana and create a Tanzania Mother Drink (Mbenge).
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
                        className="rounded-t-2xl h-56 w-full object-cover" />
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
                    Plan you Ultimate learning Safari Adventure
                </h3>
                <Button
                variant="safari"
                className="py-4 rounded-xl shadow-md"
                onClick={() => navigate("/contact")}>
                    Book your Safari
                </Button>
            </section>
        </div>
    )
}