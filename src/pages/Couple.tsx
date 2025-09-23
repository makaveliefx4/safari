import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";
import { Navigation } from '@/components/Navigation'

export function Couple() {
    const navigate = useNavigate();

 return(
    <div>
        <Navigation />
        <section className="relative bg-[url('https://totoafricaadventures.com/wp-content/uploads/2023/08/Tanzania-Luxury-Safari-Holidays-for-seniors.jpg')] py-20 text-center bg-cover bg-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Romantic & Honeymoon Safaris
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover Tanzania's most enchanting destination, from breathtaking savannah sunsets
            to idyllic beach escapes in Zanzibar. Perfect for couple seeking unforgettable memories.
        </p>
        </section>

        <section className="py-16 px-6 grid gap-8 md:grid-cols-3">
            <Card className="rounded-2xl shadow-lg hover:scale-105 transition">
                <img src="https://easguides.travel/wp-content/uploads/2025/03/tanzania-couple-serengeti-1536x864.webp"
                alt="Serengeti"
                className="rounded-t-2xl h-56 w-full object-cover" />
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold">Serengeti Plains</h2>
                    <p className="text-gray-600 mt-2">
                        Witness the magic of endless horizons, golden sunsets, and private bush dinners under the stars.
                    </p>
                </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:scale-105 transition">
                <img src="https://www.arcadiasafaris.com/wp-content/uploads/2023/08/8-day-honeymoon-package-with-zanzibar-experience.jpg"
                alt="Zanzibar"
                className="rounded-t-2xl h-56 w-full object-cover"/>
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold">Zanzibar Beaches</h2>
                    <p className="text-gray-600 mt-2">
                        Escape to turquoise waters, white sand beaches, and luxury resorts ideal for honeymoons.
                    </p>
                </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:scale-105 transition">
                <img src="https://image-tc.galaxy.tf/wijpeg-65d17o9hc4ietlkuc3256cer5/serenangorongoro-264.jpg?width=1600&height=1066" alt="Ngorongoro" className="rounded-t-2xl h-56 w-full object-cover"/>
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold">Ngorongoro Crater</h2>
                    <p className="text-gray-600 mt-2">
                        Experience the breathtaking views, romantic picnics, and close encounters with wildlife.
                    </p>
                </CardContent>
            </Card>
        </section>
        <section className="text-center py-12 bg-rose-50">
            <h3 className="text-3xl font-bold text-gray-700 mb-4">
                Start Your Love Story in Tanzania
            </h3>
            <Button
            className="bg-rose-500 text-white px-8 py-4 rounded-xl shadow-md hover:bg-rose-600"
            onClick={() => navigate("/contact")}>
                Book your Dream Safari
            </Button>
        </section>
    </div>
 );
}

