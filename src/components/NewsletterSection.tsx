import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import bothImage from '@/assets/both.png'; 
import iconImage from '@/assets/icon.png';
import planingImage from '@/assets/planing.png'

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
    toast({
      title: "Welcome to Safari Luxury!",
      description: "You're now subscribed to exclusive safari deals and wildlife updates.",
      duration: 5000,
    });
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <>
      <section className="bg-white py-16 rounded-[40px]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
           <img
            src={planingImage}
						alt="African Wildlife Icon"
						className="mx-auto mb-4 w-20 h-20 object-contain"/>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6 text-center">
            Start Planning <span className="italic font-normal">your</span> adventure
          </h1>
         <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="flex-1 flex flex-col items-center text-center">
              <img src="https://img.icons8.com/ios/50/000000/africa.png" alt="Africa" className="h-12 mb-2" />
              <h3 className="text-xl font-serif font-medium mb-2">We Know Africa</h3>
              <p className="text-gray-600 text-sm">
                We are an unique, bespoke travel company led by professional guides with over 10 years of experience
              </p>
            </div>
            <div className="hidden md:block h-24 border-l border-dotted" style={{ borderColor: '#bfa14a' }}></div>
            <div className="flex-1 flex flex-col items-center text-center ">
              <img src={bothImage} alt="Tree" className="h-12 mb-2" />
              <h3 className="text-xl font-serif font-medium mb-2">Responsible Travel</h3>
              <p className="text-gray-600 text-sm">
                We are dedicated to assisting communities through thoughtful and respectful tourism.
              </p>
            </div>
            <div className="hidden md:block h-24 border-l border-dotted" style={{ borderColor: '#bfa14a' }}></div>
            <div className="flex-1 flex flex-col items-center text-center">
              <img src="https://img.icons8.com/ios/50/000000/giraffe.png" alt="Giraffe" className="h-12 mb-2" />
              <h3 className="text-xl font-serif font-medium mb-2">Unique Encounters</h3>
              <p className="text-gray-600 text-sm">
                Crafted tailormade safari packages that is around your travel budget and safari requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white rounded-[40px] ">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
          <div className="hidden md:flex flex-col items-center justify-center w-1/2 pr-8">
            <img
              src={iconImage}
              alt="Eagle"
              className="w-48 h-auto mb-4"
              style={{ filter: 'grayscale(100%)', objectFit: 'contain' }}/>
            <span className="text-xl font-bold tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
          <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-lg p-10 ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-left">
              Inspired to Join the Safari Community?
            </h2>
            <p className="text-gray-600 mb-6 font-mono text-left">
              Get exclusive access to safari deals, wildlife tips, and conservation updates.
            </p>
            <div className="flex justify-center items-center mb-2" style={{ marginTop: '-12px' }}>
              <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
            </div>
           
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="text-sm font-medium text-gray-700 text-left" htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border border-gray-300 rounded-md h-11 px-4 text-base"/>
                <Button
                  type="submit"
                  variant='safari'
                  className="mt-2  text-white font-semibold rounded-md h-11 text-base"
                  size="lg">
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="flex items-center text-green-600 mt-4">
                <CheckCircle className="h-7 w-7 mr-2" />
                <span className="text-lg font-semibold">Thanks for subscribing!</span>
              </div>
            )}
            <div className="mt-6 text-xs text-gray-500 text-left">
              <p>Join 2,500+ adventure seekers • No spam, unsubscribe anytime</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}