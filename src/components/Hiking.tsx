import React, {useState} from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navigation } from '@/components/Navigation';
import hikiImage from '@/assets/hiki.png';
import { Calendar, MapPin } from "lucide-react"; 

const routes = [
    {
      key: 'Marangu',
      label: 'Marangu',
      image: "https://www.easytravel.co.tz/wp-content/uploads/2023/07/Climbers-trekking-Mount-Kilimanjaro-via-Marangu-Route-Easy-Travel-Tanzania-scaled-1.jpg",
      title: "7 Days Marangu Route",
      description: "Dubbed the “Coca-Cola” route, it is popular with inexperienced climbers who'd prefer to stay in huts than tents. This leads to a false belief that it is easier, when in fact, the short duration allows little time for acclimatisation, and a subsequent low summit success rate. To improve chances, it is recommended to tackle over 6 days.",
      landscape: "Starting on the southeast of Kilimanjaro, the trail progresses from forest to moors, before taking on a more alien, rugged appearance. The gradient is relatively gentle until the last day, when it gets very steep until the summit. Trekkers use the same path up and down the mountain, limiting the scenery.",
      highlights: "For some, the sheltered accommodation in huts with cold beverages on offer",
      difficulty: "Relatively easy until summit day, with lowest success rate.",
      distance: "70 km over 5 - 6 Days"
    },
    {
        key: 'Machame',
        label: 'Machame',
        image: 'https://www.shah-tours.com/wp-content/uploads/2025/08/Trekkers-Climbing-Barranco-Wall-on-Mount-Kilimanjaro.jpg',
        title: '8 Days Mt. Kilimanjaro Climbing Summit - Machame Route',
        description: 'Nicknamed the “Whiskey Route”, it is definitely a stiffer challenge than the Marangu Route. However, the extra day or two for acclimatisation to altitude and the ‘climb high, sleep low’ nature of the route makes all the difference and the higher summit success rate is testimony to this. There are some steep sections, but even the fierce-looking Barranco Wall is manageable with the right preparation.',
        landscape: "Starting in the southwest of the mountain the trek passes through forests, moors and 4 distinct climatic zones to reach the beautiful lunar landscape of the Shira Plateau and famed Lava Tower en route to the summit.",
        highlights: "Spectacular scenery.",
        difficulty: "Moderately Difficult with 85% success rate",
        distance: "61 km over 6 - 7 Days",
    },
    {
        key: "Lemosho",
        label: "Lemosho",
        image: "https://ultimatekilimanjaro.com/wp-content/uploads/2022/02/lemosho_route_kilimanjaro.jpg",
        title: "8 Days Mount Kilimanjaro Climbing Group Joining Lemosho Route",
        description: "Both the most scenic and the most expensive route (due to the longer duration), the Lemosho Route begins west of Kilimanjaro, running parallel to the Shira Route. It then heads across the Shira Plateau and up the Barranco Wall before the challenging summit day to Uhuru Peak. The descent is via the Mweka Route on the south of the mountain.",
        landscape: "The trail begins with two days of forest trails before heading over moorlands to the Shira Plateau and the spectacular rock formations that follow. With views of distant Mount Meru, it is regarded as possibly the most breath-taking for its diverse scenery.",
        highlights: "Diverse scenery and high summit success rate, with relatively few people.",
        difficulty: "Moderate difficulty with 90% success rate.",
        distance: "67 km over 7 - 8 Days",
    },
    {
        key: "Shira",
        label: "Shira",
        image: "https://www.snownavi.com/wp/wp-content/uploads/2022/12/22102107_happo.jpg",
        title: "7 Days Shira Route",
        description: "Despite similarities to the Lemosho Route for the latter part of the trek, it eliminates two days spent in the rainforest in favour of a direct steep climb up a 4x4 path, which means you can be driven to the official start at 3500m.  So, while it might be shorter, this means that there is inadequate time to get used to the altitude, and this in turn leads to a low success rate amongst climbers.  Even those that are acclimatised will need to be confident of their ability.",
        landscape: "Missing out entirely on the forest and moors at lower altitudes, much of the hike is spent on the starkly beautiful Shira Plateau (from which the route takes its name), before tackling the Barranco Wall and scree slopes en route to the summit.",
        highlights: "The views of the surrounding landscape below and Mount Meru in the distance. Less people than the Marangu and Machame Routes.",
        difficulty: "Difficult with 80% success rate",
        distance: "58 km over 6 - 7 Days",
    },
    {
        key: 'Rongai',
        label: "Rongai",
        image: "https://mauly-tours.com/wp-content/uploads/2024/07/Marangu3.jpg",
        title: "7 Days Rongai Route",
        description: "As the only route that starts on the northern side of the mountain, it is drier than all the other routes - and hence, preferred in the Wet Season. While it is less scenic as a result, the trail gradient is sufficiently gradual and the camps nicely spaced, meaning that there is ample time to acclimatise. As fewer people choose this route, it also feels wilder and trekkers may even see some wildlife. From day three, the terrain is gentle if rocky and the shortened stage on the day before summiting is a welcome opportunity to rest before setting off at midnight for the summit. The descent trail follows the Marangu Route to the southeast, taking up to 2 days.",
        landscape: "The trail begins in the farmlands before passing through the rainforest. This gives way to woodlands, moors and ultimately the alien landscape of the ‘Saddle’. The descent via Marangu entails moors and rainforest once the rocky upper slopes are left behind. Highlights: For most, the scenic location of the campsite in the shadow of the Mawenxi Peak is the most memorable day of the hike (besides the summit, of course).",
        highlights: "Quiet, remote, and good for rainy season climbs.",
        difficulty: "Relatively easy with 85% success rate.",
        distance: "74 km over 6 - 7 Days"
    },
    {
        key: "Umbwe",
        label: "Umbwe",
        image: "https://cdn.bookatrekking.com/data/images/2024/04/bookatrekking-com-kilimanjaro-v3-4k-00-08-06-05-still051.webp",
        title: "7 Days Umbwe Route",
        description: "The rapid ascent to Barranco Camp in two – as opposed to the usual 3-4 – days, gives trekkers little time to acclimatise to the sharp change in altitude. The trail is steep and exposed, and not for those with a fear of heights. From Barranco, it shares the Machame Route to the summit. Umbwe Route should only be attempted by highly experienced trekkers and using all 7 days.",
        landscape: "The first two days take trekkers through the rainforest before emerging onto that rock flanks of Kilimanjaro.",
        highlights: "It is quiet and remote. Reaching Uhuru Peak – only the most experienced climbers do.",
        difficulty: "Very difficult. Experienced climbers only – 70% success rate.",
        distance: "48 km over 5 - 7 Days",
    },
    {
        key: "Northern Circuit",
        label: "Northern Circuit",
        image: "https://habariadventure.com/assets/images/climbing/Kilimanjaro/Pofu_1.webp",
        title: "10 Days Northern Circuit Route",
        description: "Due to its length, the Northern Circuit, extra time for acclimatisation and ‘climb high, sleep low’ routing, trekkers on the Northern Circuit enjoy the highest success rate. The first two days follow the Lemosho Route before veering toward the Lava Tower and around the empty northern flanks of the mountain at around 4000m, until linking up with the Rongai Route which is followed to the summit at Uhuru Peak. The descent follows the Mweka Route, where the abundance of trekkers stands in stark contrast to the solitude at the start of the climb.",
        landscape: "The first two days pass through rainforest and moorlands before venturing onto the open slopes at altitude.",
        highlights: "The solitude for much of the route and spectacular views, particularly on the northern slope.",
        difficulty: "Relatively easy but long, with 95% success rate.",
        distance: "88 km over 8 - 9 Days",
    }
];

const TanzaniaHikingSafari = () => {
    const navigate = useNavigate();
    const [selectedRoute, setSelectedRoute] = useState(routes[0]);

    return (
        <div className="bg-white font-serif">
            <Navigation/>
            <div className="container mx-auto p-8 lg:p-16 max-w-6xl">
                <div className="max-w-7xl mx-auto px-6 animate-fade-in-out">
                    <img src={hikiImage}
                    alt="icon"
                    className="mx-auto mb-4 w-20 h-20 object-contain"/>
                <div className="text-center mb-16 animate-fade-up">
                    <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
                        Hiking Kilimanjaro Route
                    </p>
                    <div className="mb-8">
                        <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mount Kilimanjaro Overview
                    </h2>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start gap-10">
                <div className="lg:w-1/2 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                    <span className="absolute top-10 left-0 h-1 w-12 bg-yellow-800 mt-2"></span>
                    <span className="ml-14">Overview of Mt.</span>
                    <span className="block ml-14">Kilimanjaro</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Rising 5 895 meters (19,341 ft) above the surrounding landscape, Mount
                    Kilimanjaro holds the dual records of being Africa's highest and the world's
                    tallest freestanding mountain. With habitats ranging from rainforest to
                    alpine desert, it is an ecologically diverse environment blessed with
                    outstanding scenic beauty. As a non-technical, yet challenging climb, it is
                    easily accessible via the nearby towns of Arusha and Moshi, close to
                    Kilimanjaro International Airport. Whether novice or experienced, seen
                    from its base or the summit, Mount Kilimanjaro promises a rewarding
                    experience equal to the challenge of scaling its weathered, sheer slopes.
                </p>
                </div>
                <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
                <img src="https://cdn.pixabay.com/photo/2022/07/10/06/08/mount-kilimanjaro-7312237_960_720.jpg"
                alt="Mount"
                className="w-full h-[400px] rounded-lg shadow-xl object-cover"/>
                </div>
              </div>
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Popular Mt. Kilimanjaro Tours</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {routes.map(route => (
                        <button key={route.key}
                        className={`px-4 py-2 rounded font-semibold border-b-2 ${
                            selectedRoute.key === route.key
                            ? 'bg-muted-foreground text-white border-muted-foreground'
                            : 'bg-white text-muted-foreground border-transparent'
                        }`}
                        onClick={() => setSelectedRoute(route)}>
                            {route.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 w-full">
                    <div className="relative">
                      <img
                        src={selectedRoute.image}
                        alt={selectedRoute.title}
                        className="rounded-lg shadow-lg w-full h-56 object-cover mb-4"/>
                      <div className="absolute left-5 top-[200px] bg-white rounded shadow flex items-center px-4 py-2 gap-4 w-[80%]">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar size={16} className="text-yellow-700" />
                          <span className="font-medium text-sm">{selectedRoute.title.split(' ')[0]} Days</span>
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin size={16} className="text-yellow-700" />
                          <span className="font-medium text-sm">Tanzania</span>
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex gap-1 text-yellow-700">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
                            </svg>
                          ))}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">{selectedRoute.title}</h3>
                      <div className="text-xs text-muted-foreground mt-1">MOUNT KILIMANJARO</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 w-full">
                    <h4 className="text-2xl font-bold mb-4">{selectedRoute.label} Route</h4>
                    <div className="mb-5">
                        <span className="font-semibold">Description</span>
                        <p className="text-muted-foreground">{selectedRoute.description}</p>
                    </div>
                    <div className="mb-5">
                        <span className="font-semibold">Landscape</span>
                        <p className="text-muted-foreground">{selectedRoute.landscape}</p>
                    </div>
                    <div className="mb-5">
                        <span className="font-semibold">Highlights</span>
                        <p className="text-muted-foreground">{selectedRoute.highlights}</p>
                    </div>
                    <div className="mb-5">
                        <span className="font-semibold">Difficulty Level</span>
                        <p className="text-muted-foreground">{selectedRoute.difficulty}</p>
                    </div>
                    <div className="mb-5">
                        <span className="font-semibold">Distance</span>
                        <p className="text-muted-foreground">{selectedRoute.distance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};
export default TanzaniaHikingSafari;