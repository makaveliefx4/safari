import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FormInputIcon, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import bigfiveImage from "@/assets/bigfive.png";
import originImage from "@/assets/origin.jpg";

const BigFiveData = [
  {
    id: 1,
    name: "African Lion",
    location: "Serengeti & Ngorongoro",
    image: "https://photos.tpn.to/gs/kl/kt/tn/1600x900.jpg",
    description: "Famously lazy, lions are most active in the early morning, late afternoon and at night, when temperatures drop. Lions sleep up to 23 hours per day and, unusually, the lions of Lake Manyara National Park often sleep in trees. The most social big cats, lions live in prides which may number up to 50 individuals. Males are larger than females and have distinctive manes around their heads and upper body. Lions prefer fairly open habitats, such as savannah and acacia woodlands for hunting. They are widely distributed in Tanzania and can be seen year-round in the following Tanzania national parks and reserves :",
    otherLocations: [
      "Serengeti National Park",
      "Ngorongoro Crater and Conservation Area",
      "Tarangire National Park",
      "Manyara National Park (famous for tree-climbing lions)",
      "Ruaha National Park",
      "Nyerere National Park"
    ],
  },
  {
    id: 2,
    name: "Leopard",
    location: "Tarangire",
    image: "https://karentourstanzania.com/wp-content/uploads/2024/09/Game-Drive-Adventure.jpg",
    description: "Solitary and secretive, leopards are typically active in the cooler morning, late afternoon and at night, although you may be lucky to see them mobile during the day. Known to climb trees. both as a lookout and to keep their prey from scavengers. While they do venture into open territory on occasion, they are normally associated with habitats with dense to fairly dense vegetation, where their cryptic markings help them blend into the background. Can be seen year-round in the following Tanzania national parks and reserves:",
    otherLocations: [
      "Serengeti National Park",
      "Ngorongoro Crater and Conservation Area",
      "Tarangire National Park",
      "Katavi National Park",
      "Ruaha National Park",
      "Nyerere National Park",
    ],
  },
  {
    id: 3, 
    name: "Elephants",
    location: "Tarangire",
    image: "https://cdn.pixabay.com/photo/2020/01/02/14/53/elephant-4736008_1280.jpg",
    description: "The world’s largest mammal — weighing up to 6 tons — are active day and night, constantly moving in search of food. Elephants are found in a variety of habitats, ranging from swamps to woodlands to open plains. Living in large social groups, they are generally peaceful creatures and it is always interesting to watch their social interactions. Older bulls sometimes form small bachelor groups with younger bulls, separate from breeding herds. Elephants drink frequently and seem to enjoy swimming and mud baths. Visitors have an excellent chance of seeing elephants throughout the year at the following national parks and reserves:",
    otherLocations: [
      "Tarangire National Park",
      "Lake Manyara National Park",
      "Serengeti National Park",
      "Ruaha National Park",
      "Nyerere National Park",
    ],
  },
  {
    id: 4,
    name: "Rhinoceros",
    location: "Ngorongoro Crater",
    image: "https://d1jyxxz9imt9yb.cloudfront.net/animal/214/meta_image/regular/AdobeStock_456205385_420075_reduced.jpg",
    description: "Both black and white rhinos are found in Tanzania and can be seen throughout the day. Black rhinos. also known as hook-lipped rhinos, are known for their aggressive temperament. Weighing up to 1400 kg, they are about 1.5 m (4.9 ft) at the shoulder. White rhinos, also called square-lipped rhinos. are significantly bigger at up to 2300 kg and 1.9 m (6.1 ft) and are more docile. Both occur either individually or in small groups. Black rhinos browse on leaves, while white rhinos graze on grass Rhinos have been heavily poached for their horns, but thanks to intensive measures to protect them. can still be seen in the following national parks and reserves:",
    otherLocations: [
      "Serengeti National Park",
      "Ngorongoro Crater and Conservation Area",
      "Mkomazi National Park",
      "Nyerere National Park (Rare sightings)",
    ],
  },
  {
    id: 5,
    name: "Cape buffalo",
    location: "Katavi",
    description: "These large bovids, weighing 500 – 900 kg and standing about 1.5 m (4.9 ft), are found in herds that may number over 1000 individuals. They are generally found in open grasslands and near water, although they will move into wooded areas in search of grazing and shelter. Active throughout the day, they find safety in numbers. The older males often form smaller groups and are renowned for their fearsome temperament when threatened. They are known to come to the aid of fellow herd members when they are in danger. Widespread, buffalo can be seen in the following national parks and reserves:",
    image: "https://i.natgeofe.com/n/de7be89d-3715-4e89-b83b-ab697ef781b8/thumbnail-cape-buffalo-nationalgeographic_1976203_16x9.jpg?w=1200",
    otherLocations: [
      "Serengeti National Park",
      "Ngorongoro Crater and Conservation Area",
      "Tarangire National Park",
      "Katavi National Park",
      "Ruaha National Park",
      "Nyerere National Park",
    ],
  },
];

export default function BigFivePage() {
  const navigate = useNavigate();
  return(
    <div className="bg-white min-h-screen font-serif">
      <Navigation />
      <section className="relative h-[80vh] w-full bg-[url('https://yellowzebrasafaris.com/media/45479/ross-couper-48.jpg?width=1960&height=700&format=jpg&v=1da5e0eab838fd0')] bg-cover bg-center flex item-center justify-center">
   <div className="absolute insert-0 bg-black/50" />
     <div className="relative text-center text-white max-w-4xl mx-auto px-6">
        <img src={bigfiveImage}
        alt="Big Five Icon"
        className="mx-auto mb-6 w-28 h-28 object-contain  drop-shadow-xl"/>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center">
          Tanzania's Big Five
        </h1>
        <p className="text-xl md:text-2xl font-light">
         Meet Africa's most iconic wildlife — Lion, Elephant, Leopard, Rhino,
         and Buffalo — across Tanzania's legendary safari parks.
        </p>
      </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-extrabold  mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-muted-foreground rounded-full"></span>
              The Origin Of The Big Five
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Way back in the 19th century, Big game hunter in Africa first coined the 
                term, 'The Big Five' about the five animals they considered the most 
                dangerous to hunt on foot, especially when cornered or wounded. The 
                reasons each of the five animals made it onto the list may have varied 
                somewhat but invariably it boiled down to the temperament when pursued,
                their cunning and their ability to defend themselves
              </p>
              <p>The Five species that make uo the Big 5 are :</p>
              <ul className="list-disc list-inside space-y-2 text-yellow-600">
                <li>Africa Lion</li>
                <li>Leopard</li>
                <li>Africa Elephant</li>
                <li>Black (and White) rhinoceros</li>
                <li>Cape buffalo</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="https://www.onthegotours.com/repository/Lions-in-Grass-Africa-Overland-Safaris--Africa-Lodge-Safaris--Africa-Tours--On-The-Go-Tours-228181391179700.jpg"
              alt="Original of big Five"
              className="w-full h-[500px] object-cover"/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols md:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://www.bornfree.org.uk/wp-content/uploads/2023/10/Edwina-with-17Male-son-and-her-grandson-1600-WIDEc-ATE.jpg"
            alt="Elephant"
            className="w-full h-[500px] object-cover"/>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Sadly, due to their  near-mythical status amongst hunters, each of the species was heavily persecuted, particularly the largest specimens of their kind, thus removing their DNA from the gene pool forever.
            </p>
            <p>
              With the emergence of photographic safaris, the term lives on and species retain their iconic status among wildlife enthusiasts. whichever of the species one encounters in its natural habitat, you can be assured of a primal sense of awe and reverence
            </p>
            <p>
              As one of the leading safari destinations in Africa, Tanzania is home to all members of the Big 5. Thanks to the country’s expansive system of national parks. reserves and conservancies, it is now relatively easy to get to the areas where the species live in their natural habitats.
            </p>
            <p className="text-yellow-600 underline cursor-pointer font-mono" style={{textAlign: "center"}}> Come To See the Big Five Majestic Creature</p>
          </div>
        </div>
      </section>
       <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4">
          The Big Five - When & Where to See Them
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
          In that each of the species is resident year-round in the areas mentioned below, the only factor that
          might affect your chances of seeing them is whether it is the wet or dry season. In general, spotting
          animals is easier in the dry season, which occurs from June to October.
        </p>
      </section>

      <section className="py-10 max-w-7xl mx-auto px-6 space-y-20">
        {BigFiveData.map((animal, index) => (
          <div
            key={animal.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <div className={`rounded-xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'order-2' : ''}`}>
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-[540px] object-cover"/>
            </div>

            <div className={`${index % 2 !== 0 ? 'order-1' : ''}`}>
              <h3 className="text-4xl font-extrabold text-stone-800 mb-4 flex items-center gap-4">
                <span className="w-12 h-1 bg-muted-foreground rounded-full"></span>
                {animal.name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {animal.description}
              </p>
              <ul className="list-disc list-inside text-yellow-600 space-y-2">
                {animal.otherLocations.map((location, i) => (
                  <li key={i}>{location}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <section className="pt-20 pb-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl font-extrabold text-stone-800 mb-4">
                    The Big 5 and the Big Picture
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    As impressive and legendary as the various members of the Big 5 are, focusing on them to the exclusion of everything else can make for a frustrating and unsatisfactory safari experience. The Big 5 are all part of larger ecosystems which comprise thousands of different animals, birds, reptiles, insects, plants and more. By making time to learn about the greater workings of the ecosystems and habitats where they live, you’ll get a much better understanding of how amazing they are — and why we must preserve the areas that they and all other species need for survival.
                </p>
            </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
           <div className="rounded-xl overflow-hidden shadow-xl">
               <img
                   src="https://cdn.pixabay.com/photo/2019/08/28/13/41/kilimanjaro-4436821_960_720.jpg" 
                   alt="Tanzania Landscape"
                   className="w-full h-[400px] object-cover"/>
           </div>
           
           <div className="space-y-4 pt-4">
               <h3 className="text-3xl font-extrabold  mb-4 flex flex-col gap-2">
                   Where to see the Big 5 in one place in Tanzania
                   <span className="w-12 h-1 bg-amber-500 rounded-full self-start"></span>
               </h3>
               <p className="text-lg text-muted-foreground leading-relaxed">
                   If you have limited time and want to focus on seeing the Big 5 in Tanzania, 
                   your best bet is to visit either the **Serengeti National Park** or **Ngorongoro Crater
                    (and Conservation Area)**, in the north. If you are traveling further south, your best 
                    chance of seeing all members of the Big 5 is the **Nyerere National Park**.
               </p>
           </div>
            </div>
        </section>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-20">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="group w-fit text-stone-700 bg-white border-stone-300 hover:bg-stone-50 rounded-full shadow-md px-6 py-3">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back Home
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            className="group w-fit text-white bg-yellow-700 hover:bg-yellow-800 rounded-full shadow-xl px-10 py-3 font-semibold tracking-wide">
            Plan Your Safari Adventure
            <FormInputIcon className="ml-2 h-4 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
}