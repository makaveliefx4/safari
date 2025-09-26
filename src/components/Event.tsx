import React, { useState } from "react";
import monthImage from '@/assets/month.png'
import { Link } from "react-router-dom";

type MonthData = {
  title: string;
  description: string;
  image: string;
};

const months: { [key: string]: MonthData } = {
  Jan: {
    title: "January",
    description:
      "The herds gather in the southern Serengeti plains, preparing for the calving season. Predators stay close, waiting for opportunities.",
    image: "https://www.go2africa.com/wp-content/uploads/2024/01/scenic-view-of-an-open-field-full-of-wildebeests-s-2023-11-27-05-19-00-resize.jpg",
  },
  Feb: {
    title: "February",
    description:
      "The calving season continues, and you will witness mature wildebeests forming barricades around the calves to protect them from the lethal predators. Thanks to the intense action, drama, and wonders, this season is one you can’t afford to miss.",
    image: "https://live.staticflickr.com/5296/5477802865_a1c43a0d52_b.jpg",
  },
  Mar: {
    title: "March",
    description:
      "The last batch of calves is born this month. The animals feed on leftover grasses. They also gather as the long journey heading northwards is about to start.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/march.webp",
  },
  Apr: {
    title: "April",
    description:
      "As April kicks in, the migration begins as the animals seek fresh water and good pasture in the north. They are scattered between the central and western areas of the Serengeti.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/herd.webp",
  },
  May: {
    title: "May",
    description:
      "During May, the animals are around Moru Kopjes and are seen in large herds. They are joined by plenty of gazelles and zebras.",
    image: "https://www.shutterstock.com/image-photo/plains-zebras-equus-burchelli-grassland-600nw-2467073169.jpg",
  },
  Jun: {
    title: "June",
    description:
      "The herds arrive on the southern side of the Grumeti River in June. They pile up in large groups to cross. The river isn’t continuous, and thus, the crossing is less bloody.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/june.webp",
  },
  Jul: {
    title: "July",
    description:
      "It is the month for the “World Cup of Wildlife” – Mara River crossing. The dramatic event happens towards the end of the month, and only the strong and lucky animals survive the crocodile and hippo-infested waters.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/july.webp",
  },
  Aug: {
    title: "August",
    description:
      "The crossing proceeds as the animals enter the neighboring Masai Mara National Reserve in Kenya. Thousands of animals die while the survivors celebrate as they feast on the fresh grasses in Masai Mara.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/april.webp",
  },
  Sep: {
    title: "September",
    description:
      "Large herds of wildebeests, antelopes, kudus, gazelles, and zebras continue herding in the Masai Mara Game Reserve.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/september.webp",
  },
  Oct: {
    title: "October",
    description:
      "Animals start moving back from Kenya into Tanzania. They head to the Lombo valley and Grumeti Reserve.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/october.webp",
  },
  Nov: {
    title: "November",
    description:
      "The rains begin in November, triggering the animals to move southwards towards western Loliondo (fertile plains of Serengeti).",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/november.webp",
  },
  Dec: {
    title: "December",
    description:
      "During this last, the herds cluster in south Serengeti and then disperse into the plains to feed on the fresh pastures as the calving season starts. The cycle begins again.",
    image: "https://goshenisafaris.com/wp-content/uploads/2023/09/december.webp",
  },
};

export default function Event() {
  const [activeMonth, setActiveMonth] = useState("Jan");

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div className="text-center mb-12">
        <img
            src={monthImage}
            alt="African Wildlife Icon"
            className="mx-auto mb-4 w-20 h-20 object-contain"/>
        <h2 className="text-3xl font-bold mb-2">What happens month by Month?</h2>
        <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        <p className="text-muted-foreground font-serif">
          Each month of the year marks a different occurrence.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {Object.keys(months).map((month) => (
          <button
            key={month}
            onClick={() => setActiveMonth(month)}
            className={`text-lg font-semibold px-2 ${
              activeMonth === month
                ? "text-green-600 border-b-2 border-green-600 font-mono"
                : "text-muted-foreground font-serif hover:font-mono  hover:border-green-600"
            }`}>
            {month}
          </button>))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center" >
        <div className="mb-10" style={{textAlign: 'right'}}>
          <h3 className="text-3xl  font-serif font-bold mb-6">
            {months[activeMonth].title}
          </h3>
          <p className="text-lg text-muted-foreground font-serif leading-relaxed mb-8" >
            {months[activeMonth].description}
          </p>
          <Link to="/contact">
          <button className="text-yellow-600 font-semibold hover:underline text-lg" >
            → VIEW TOURS
            
          </button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={months[activeMonth].image}
            alt={months[activeMonth].title}
            className="w-[500px] h-[400px] object-cover rounded-2xl shadow-xl"/>
        </div>
      </div>
    </section>
  );
}
