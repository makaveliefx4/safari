import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import moneyImage from '@/assets/money.png';
import binImage from '@/assets/bin.png';
import iconImage from '@/assets/icon.png';
export function ActivitiesSection() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-background text-center relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <img
            src={moneyImage}
            alt="African Wildlife Icon"
            className="mx-auto mb-4 w-20 h-20 object-contain"/>
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
            Safari Cost
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Much is a Tanzania Safari?
          </h2>
          <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
        </div>
        <Card className="w-full max-w-2xl mx-auto p-8 border border-border rounded-xl shadow-[var(--shadow-earth)]">
          <CardContent className="p-0">
            <div className="mb-8">
             <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto bg-card">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-muted-foreground"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
        </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Starts from $280 Per Person / Day
            </h3>

            <p className="text-muted-foreground font-serif leading-relaxed max-w-xl mx-auto">
              Tanzania safari prices vary depending on several factors such as the time of the year you wish to travel, the type of accommodation you prefer, the duration of your safari, and the number of people in your group. On average, a Tanzania safari can cost anywhere from $280 to $1000 per person per day. Budget-friendly safaris typically involve camping and using public campsites while luxury safaris offer private lodges and more personalized services. Safari Africa as a reputable tour operator we will provide you with an accurate quote based on your preferences and budget.
            </p>
          </CardContent>
        </Card>
        <img
        src={iconImage}
        alt="Binoculars"
        className="hidden md:block absolute right-[-10px] top-1/2 -translate-y-1/2 w-72 opacity-30 pointer-events-none"
        style={{ zIndex: 0 }} />

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
          <Button
            variant="safari-outline"
            size="lg"
            className="w-full md:w-auto group px-8 py-4 text-black rounded-md shadow-lg border-border"
            onClick={() => navigate('/Contact')} >
            <Phone className="mr-2 h-4 w-4" />
            <span className="font-semibold">REQUEST A CALL BACK</span>
          </Button>
          <a
            href="mailto:makaveliefx474@gmail.com"
            className="w-full md:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-green/40 hover:text-accent-foreground px-8 py-4 group rounded-md shadow-lg border-border">
            <Mail className="mr-2 h-4 w-4" />
            <span className="font-semibold">SEND AN EMAIL</span>
          </a>
        </div>
      </div>
    </section>
  );
}