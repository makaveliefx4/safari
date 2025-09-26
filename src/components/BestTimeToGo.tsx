import { title } from "process";
import React, {useState} from "react";
import { WiDaySunnyOvercast, WiRain} from "react-icons/wi";
import timeImage from "@/assets/time.png"

const BestTimeToGo: React.FC = () => {
  const [season, setSeason] = useState<"dry" | "wet">("dry");

  const seasonData = {
    dry: {
      title: "Dry Season",
      description: "om June until October, the dry season offers the best game viewing, as animals migrate into the park and concentrate along the river. Vegetation is also sparse, improving the visibility of the animals.",
      image: "https://www.spaziosafari.com/wp-content/uploads/2023/10/strade-del-tarangire-1-1170x658.jpg",
    },
    wet: {
      title: "Wet Season",
      description: "During the wet season (November – May) some of the park may be inaccessible due to flooding. However, for bird-watchers, this is when they are at their most diverse and abundant.",
      image: "https://www.serengeti.com/assets/img/weather-climate-serengeti.jpg"
    },
  };
  const current = seasonData[season];
  return(
    <div className="py-16 bg-white text-center">
       <img
            src={timeImage}
            alt="African Wildlife Icon"
            className="mx-auto mb-4 w-20 h-20 object-contain"/>
      <h2 className="text-4xl font-bold mb-2">Best time To Go</h2>
            <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-20">
        Discover Optimal Safari timing with our seasonal guide for prime wildlife sightings and unforgettable experiences.
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <button
        onClick={() => setSeason("dry")}
        className={`flex items-center px-6 py-3 rounded-md font-semibold transition-all ${
          season === "dry"
          ? "bg-muted-foreground text-white shadow-lg"
          : "bg-white text-muted-foreground hover:text-white border hover:bg-muted-foreground"}`}>
          <WiDaySunnyOvercast className="mr-2 text-xl"/>Dry Season
        </button>
        <button
        onClick={() => setSeason("wet")}
        className={`flex items-center px-6 py-3 rounded-md font-semibold transition-all ${
          season === "wet"
          ? "bg-muted-foreground text-white shadow-lg"
          : "bg-white text-muted-foreground border hover:bg-amber-100"}`}>
          <WiRain className="mr-2 text-xl"/>Wet Season
        </button>
      </div>
      <div className="max-w-2xl mx-auto mb-10">
       <img
         src={current.image}
         alt={current.title}
         className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md"/>
       <p className="max-w-2xl mx-auto text-muted-foreground mt-6">
         {current.description}
       </p>
     </div>

    </div>
  )
};

export default BestTimeToGo;