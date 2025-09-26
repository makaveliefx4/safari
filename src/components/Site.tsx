import React from "react";
import AfricImage from "@/assets/Afric.png"

export function Site() {
  return (
    <section className="py-20  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div className="text-center mb-16">
        <img
          src={AfricImage}
          alt="African Wildlife Icon"
          className="mx-auto mb-4 w-20 h-20 object-contain"
        />
        <h2 className="text-4xl font-bold  mb-4">
          Destinations to Inspire
        </h2>
        <div className="mb-8">
        <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
          Embark on an extraordinary safari experience through our thoughtfully
          curated destinations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative">
          <img src="https://cdn.pixabay.com/photo/2020/11/10/18/26/game-drive-5730684_960_720.jpg"
            alt="Tanzania Coast"
            className="w-full h-[350px] object-cover rounded-xl shadow-lg"/>
          <div className="absolute bottom-[-30px] right-[-20px] w-[250px] h-[160px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://www.arushapark.com/wp-content/uploads/2023/03/mara-ballooning-hot-air-ballooning-safari-786x416-1.jpg"
              alt="Hot Air Balloon"
              className="w-full h-full object-cover"/>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold  mb-4">Tanzania</h3>
          <p className="text-muted-foreground font-serif mb-6">
            Experience the richness of Tanzania, where each destination tells
            its own captivating tale. From the expansive Serengeti to the
            mystical beaches of Zanzibar, our carefully curated destinations
            promise an unparalleled thrill and cultural experience.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-semibold text-yellow-600 hover:text-yellow-800 transition duration-5000 hover:underline">
            → VISIT TANZANIA
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 className="text-2xl font-bold mb-4">Walking Safaris</h3>
          <p className="text-muted-foreground font-serif mb-6">
            For a more intimate and immersive experience, 
            walking safaris allow you to explore the bush 
            on foot with an experienced armed guide. 
            This provides a different perspective,
            focusing on the smaller details of the ecosystem,
            such as animal tracks, insects, and flora.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-semibold text-yellow-600 hover:text-yellow-800 transition hover:underline">
             → DISCOVER THE NATURE
          </a>
        </div>
        <div className="relative">
          <img src="https://yellowzebrasafaris.com/media/20924/rps_2012-09-140e_-_copy.jpg?width=2048&height=1024&format=jpg&v=1da5e144f9c9670"
            alt="Walking Safari"
            className="w-full h-[350px] object-cover rounded-xl shadow-lg"/>
          <div className="absolute bottom-[-30px] left-[-20px] w-[250px] h-[160px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://cdn.pixabay.com/photo/2024/11/21/19/04/elephant-9214527_960_720.jpg"
              alt="Elephants"
              className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://safari-consultants.com/wp-content/uploads/2019/10/CANOE-Time-Tide-Chongwe-canoe-elephant-C_TAT.jpg"
            alt="Boat Safari"
            className="w-full h-[350px] object-cover rounded-xl shadow-lg"/>

          <div className="absolute bottom-[-30px] right-[-20px] w-[250px] h-[160px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="https://aardvarksafaris.com/wp-content/uploads/2015/11/EXP_Gallery_canoe_0005_MokoroWaterBar-CampO-9441-camp-okavango.jpg"
              alt="Canon Safari"
              className="w-full h-full object-cover"/>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold  mb-4">Water safari</h3>
          <p className="text-muted-foreground font-serif mb-6">
            In parks with rivers or lakes, like Nyerere National Park 
            (formerly Selous Game Reserve) or Arusha National Park,
            you can take a boat or canoe safari. This allows you to get up
            close to aquatic wildlife like hippos and crocodiles and to view a wide variety of birds.
          </p>
          <a href="#" className="inline-flex items-center font-semibold text-yellow-600 hover:text-yellow-800 transition hover:underline">
            → SEE THE NATURE
          </a>
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 className="text-2xl font-bold  mb-4">Camping Safaris</h3>
          <p className="text-muted-foreground font-serif mb-6">
            For the adventurous and budget-conscious traveler, 
            camping safaris offer an immersive and raw wilderness experience.
             You stay in comfortable tents, with a support team handling all the logistics, 
             cooking, and camp setup
          </p>
          <a
            href="#"
            className="inline-flex items-center font-semibold text-yellow-600 hover:text-yellow-800 transition hover:underline">
             → DISCOVER THE NATURE
          </a>
        </div>
        <div className="relative">
          <img src="https://wildlifesafaritanzania.com/wp-content/uploads/2021/11/camping.jpg"
            alt="Camping Safari"
            className="w-full h-[350px] object-cover rounded-xl shadow-lg"/>
          <div className="absolute bottom-[-30px] left-[-20px]  w-[250px] h-[160px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://yellowzebrasafaris.com/media/44408/serengeti-safari-camp-main-area-tanzania-yellow-zebra-safaris.jpg?width=2048&height=1024&format=jpg&v=1da5e179bec62f0"
              alt="Camping"
              className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Site;
