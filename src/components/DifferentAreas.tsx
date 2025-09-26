import React, {useState} from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import areaImage from '@/assets/area.png'
const areas = [
  {
    id: "north",
    title: "Northen Section",
    description: "The main entrance, airstrip and park headquarters are found in this area. The entrance sits on a bend in the Tarangire River, giving arriving visitors their first glimpse of the park’s most important resource. Entering the park the terrain is fairly flat, made up of grasslands with occasional woodlands. Standing out amongst the trees are the baobabs, unique for their bulbous trunks that can hold hundreds of litres of water and this is the northernmost limit of their range in Tanzania. Progressing into the park, the terrain becomes quite hilly, with views of distant Lake Manyara and the Milima Mitatu peaks. During the wet season, Lake Burungi is home to good numbers of hippos, crocodiles and various species of waterfowl, while it sometimes dries completely in the dry season, revealing a sparkling bed of salt crystals. The Silale Swamps are home to a resident lion pride.",
    image: "https://www.kilimanjaroparktanzania.com/wp-content/uploads/2021/08/Tarangire-National-Parksss.jpg"
  },
  {
    id: "river",
    title: "Tarangire River",
    description: "Flowing from south to north through the park, the river can be considered the artery that brings life to the entire national park. As waterholes and seasonal rivers dry up after the rains, animals that had been dispersed for grazing outside the park converge on the river in what is regarded as Tanzania’s mini-migration. The influx of wildlife into the area, while not on the scale of the Great Migration, is impressive in its own right. And like the scenes witnessed in the Serengeti, the arriving herds attract all of the large predator species. Year-round, the river is home to a significant population of both hippos and some truly impressive crocodiles. The water and lush vegetation on the riverbanks are a haven for birdlife, and leopards are common in the thickets.",
    image: "https://acaciasafari.co.ug/wp-content/uploads/2016/11/samburu_national-park.jpg"
  },
  {
    id: "west",
    title: "Western Section",
    description: "The predominant habitat in this section of Tarangire is made up of the nutritious grassland found in the Gursi Plains, along with pockets of combretum and acacia woodlands. The two habitats are favourable for the presence of two of the park’s mega-herbivores, elephants and Cape buffalos. Other herbivorous species also benefit from the excellent grazing and browsing, making this a good area to spot predators. Good sightings of lion and spotted hyenas are frequently had and the area is also considered the best place to see Africa’s second most endangered large carnivore, the African wild dog (also known as the painted wolf). These highly successful hunters are mostly seen near the Kitibong Hills.",
    image: "https://safariheroes.com/wp-content/uploads/2016/01/tar2.jpg"
  },
  {
    id: "south",
    title: "Southern Section",
    description: "For those who truly wish to experience the wild wilderness of East Africa, the southern reaches of Tarangire are a haven of unspoilt remoteness. There is little in the way of infrastructure in this region, with only a few camps and minimal park facilities. Access to many of the roads is occasionally impossible in the wet season, due to the swamps and wetlands that form. These limitations in human terms, mean that the south is the location for most of the walking safaris offered in the park. For the wildlife, the low number of tourists, along with lower populations of lions and hyenas, mean that cheetahs and ostriches are seen fairly frequently. The swamps and wetlands are also a haven for waterbirds until they dry up in the dry season.",
    image: "https://serengetinationalparksafaris.com/wp-content/uploads/2022/06/serengeti-tanzania-greatmigration-exploringafrica-safariadv-moments-returntosouth-savannah-savana-750x450.jpg",
  },
];

export function DifferentAreas() {
  const [activeArea,  setActiveArea] = useState<string | null>(null);
  const currentArea = areas.find((a) => a.id === activeArea);

  return (
    <section className="py-20 bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div className="text-center mb-12">
        <img
            src={areaImage}
            alt="African Wildlife Icon"
            className="mx-auto mb-4 w-20 h-20 object-contain"/>
        <h2 className="text-3xl font-bold mb-2">Different Area of The Tarangire?</h2>
        <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        <p className="text-muted-foreground font-serif">
          Know the different site of Tarangire and the occasional.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Areas of the Tarangire
          </h2>
          <Accordion type="single" collapsible value={activeArea || ""} onValueChange={setActiveArea}>
            {areas.map((area) => (
              <AccordionItem key={area.id} value={area.id} className="border-b border-muted-foreground">
                <AccordionTrigger className="flex justify-between items-center py-4 text-lg font-semibold text-left hover:text-muted-foreground [&>svg]:hidden">
                  <span>{area.title}</span>
                  <span>
                    {activeArea === area.id ? (
                      <Minus className="w-5 h-5 text-muted-foreground"/>
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground"/>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg font-serif pb-4">
                  {area.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      
      <div className="flex justify-center items-center">
        <img
            src={currentArea ? currentArea.image :"https://karibu2024.b-cdn.net/wp-content/uploads/2024/08/Animal-Family_1480282913-scaled.jpg"}
            alt={currentArea ? currentArea.title : "Default Tarangire"}
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"/>
      </div>
    </div>
    </section>
  );
};
export default DifferentAreas