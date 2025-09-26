import { Button } from '@/components/ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function Something() {
    const navigate = useNavigate();
    return(
        <section className="items-center justify-center">
         <div className="w-full h-[600px] relative overflow-hidden border-0 shadow-[var(--shadow-earth)]">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                'url(https://cloudfront.safaribookings.com/blog/2024/10/00-Top_10_Best_African_Safari_Parks_and_Destinations_of_2024-BW-header1200px.jpg)',
            }}
          ></div>

          <CardContent className="relative z-10 p-12 text-center bg-black/50 flex flex-col justify-center h-full">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Something Different?
            </h3>
            <p className="text-xl text-white mb-8 font-serif max-w-2xl mx-auto">
              Our safari specialists can create a completely custom itinerary tailored to your
              specific interests, budget, and travel dates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="safari-outline"
                size="lg"
                className="bg-transparent text-white w-full md:w-auto px-8 py-6 rounded-full shadow-lg border-2 border-border"
                onClick={() => navigate('/contact')}
              >
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="font-semibold">OUR REVIEWS</span>
              </Button>
            </div>
          </CardContent>
        </div>
        </section>
    )
};
export default Something;