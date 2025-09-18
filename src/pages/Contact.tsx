import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, Send, CheckCircle, EyeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { useToast } from '@/components/ui/use-toast';
import bzImage from '@/assets/bz.png';
import aboutImage from '@/assets/about.png';
import whatImage from '@/assets/what.png';
import bothImage from '@/assets/both.png';
import moneyImage from "@/assets/money.png";
import formImage from "@/assets/form.png";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import iconImage from '@/assets/icon.png';

const MessageModal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 shadow-xl z-10 w-full max-w-md animate-scaleIn">
        <h2 className="text-xl font-bold mb-4">Your Message</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Name:</strong> {formData.name || 'N/A'}</p>
          <p><strong>Email:</strong> {formData.email || 'N/A'}</p>
          <p><strong>Phone:</strong> {formData.phone || 'N/A'}</p>
          <p><strong>Contact Preference:</strong> {formData.contactPreference || 'N/A'}</p>
          <p className="mt-4"><strong>Message:</strong></p>
          <p className="border border-gray-200 p-2 rounded-md bg-gray-50">{formData.message || 'N/A'}</p>
        </div>
        <Button onClick={onClose} className="mt-6 w-full">Close</Button>
      </div>
    </div>
  );
};

const howWeWorkItems = [
  {
    icon: formImage,
    title: 'Safari experts',
    description: 'We have extensive knowledge of the destinations, wildlife, and lodges. We ensure unbiased advice or recommendations'
  },
  {
    icon: whatImage,
    title: '24/7 On-safari support',
    description: 'Highest-rated tour operator in Tanzania'
  },
  {
    icon: bothImage,
    title: 'Hand-Crafted Safaris',
    description: 'Custom itineraries designed just for you'
  },
  {
    icon: moneyImage,
    title: 'Responsible Travel',
    description: 'Sustainability Impact'
  }
];

export function Contact() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactPreference: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, contactPreference: e.target.value }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
     
      await addDoc(collection(db, "contacts"), {
          ...formData,
        createdAt: new Date(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        contactPreference: formData.contactPreference,
        timestamp: new Date()
      });
      

      toast({
        title: "Success! 🎉",
        description: "Your message has been sent successfully.",
        variant: "success",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactPreference: '',
      });
      

    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Error 😕",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
         
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white">
          <div className="animate-fade-up">
         
            <div className="flex justify-center mb-6 -mt-20">
              <img
                src={iconImage}
                alt="Eagle Icon"
                className="h-24 w-24 object-contain drop-shadow-lg filter invert"/>
            </div>
          
         
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Book Your Unforgettable
              </h2>
              <div className="mb-8">
                <span className="text-xl tracking-widest text-white">. . . . . . .</span>
              </div>
              <p className="text-sm font-semibold text-white tracking-widest mb-2">
                African Safari Today
              </p>
            </div>      
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">      
        <div className="animate-fade-up">
           <img
             src={formImage}
             alt="contact form"
             className="mx-auto mb-4 w-20 h-20 object-contain"/>
           <div className="text-center mb-16 animate-fade-up">
             <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
                Get in Touch
             </p>
             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
               Contact Us
             </h2>
             <div className="mb-8">
               <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
             </div>
           </div>
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Name*
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent"/>
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number / WhatsApp Number*
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent"/>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Any special requests for your safari?
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-transparent"/>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    What's the best way to contact you?
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="whatsapp"
                        name="contactPreference"
                        value="WhatsApp"
                        checked={formData.contactPreference === 'WhatsApp'}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-primary focus:ring-primary"/>
                      <Label htmlFor="whatsapp" className="ml-2">WhatsApp</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="phonecall"
                        name="contactPreference"
                        value="Phone Call"
                        checked={formData.contactPreference === 'Phone Call'}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-primary focus:ring-primary"/>
                      <Label htmlFor="phonecall" className="ml-2">Phone Call</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="email"
                        name="contactPreference"
                        value="Email"
                        checked={formData.contactPreference === 'Email'}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-primary focus:ring-primary"/>
                      <Label htmlFor="email" className="ml-2">Email</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <Button type="submit" variant="safari-outline" className="flex-1 rounded-full text-black shadow-lg border-2 border-border" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="safari" 
                    className="flex-1 rounded-full shadow-lg border-2 border-border"
                    onClick={() => setIsModalOpen(true)}>
                    <EyeIcon className="mr-2 h-4 w-4" /> View Your Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
     
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
          </div>
        </section>

        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 animate-fade-in-out">
            <div className="text-center mb-16 animate-fade-up">
              <img
                src={bzImage}
                alt="African Wildlife Icon"
                className="mx-auto mb-4 w-20 h-20 object-contain" />
              <p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
                Reasons to travel with us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Go with Safari Africa
              </h2>
              <div className="mb-8">
                <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
              </div>
            </div>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Safari experts
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    10 years safari experience
                  </p>
                  <p className="text-gray-600 text-sm">
                    We have extensive knowledge of the destinations, wildlife, and
                    lodges. We ensure unbiased advice or recommendations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    24/7 On-safari support
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    Highest-rated tour operator in Tanzania
                  </p>
                  <p className="text-gray-600 text-sm">
                    Book with us and we’ll be alongside you from our first chat,
                    offering 24/7 assistance and local know-how from the right time
                    zone, whenever you need it.
                  </p>
                </div>
              </div>
            
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Hand-Crafted Safaris
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    Custom itineraries designed just for you
                  </p>
                  <p className="text-gray-600 text-sm">
                    Tailor-make your safari itinerary to suit your specific
                    interests, preferences, and budget.
                  </p>
                </div>
              </div>
     
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Responsible Travel
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    Sustainability Impact
                  </p>
                  <p className="text-gray-600 text-sm">
                    We are committed to sustainable tourism practices, such as
                    supporting local communities and protecting wildlife and the
                    environment.
                  </p>
                </div>
              </div>
              <img
                src={iconImage}
                alt="Eagle"
                className="hidden md:block absolute right-[-100px] top-1/2 -translate-y-1/2 w-72 opacity-30 pointer-events-none"
                style={{ zIndex: 0 }}/>
            </div>
          </div>
        </section>
        
        
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6 text-center">
              Start Planning <span className="italic font-normal">your</span> adventure
            </h1>
            <div className="mb-8 text-center">
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
              <div className="flex-1 flex flex-col items-center text-center">
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
        
      </div>
      
  
      <MessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}/>
    </div>
  );
}

export default Contact;