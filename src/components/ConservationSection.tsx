import React from 'react';
import { Heart, Shield, Users, TreePine, CheckCircle, EyeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import bzImage from '@/assets/bz.png';
const initiatives = [
	{
	  icon: Shield,
	  title: 'Anti-Poaching Support',
	  description:'Funding ranger patrols and advanced technology to protect endangered species from illegal hunting.',
	  impact: '500+ animals protected monthly',
	},
	{
	  icon: TreePine,
	  title: 'Habitat Restoration',
	  description:'Restoring degraded ecosystems and creating wildlife corridors for animal migration.',
	  impact: '2,000 hectares restored',
	},
	{
	  icon: Users,
	  title: 'Community Empowerment',
	  description:'Creating sustainable livelihoods for local communities through eco-tourism and education.',
	  impact: '50+ families supported',
	},
	{
	  icon: Heart,
	  title: 'Wildlife Rescue',
	  description:'Rescuing and rehabilitating injured wildlife with our partner veterinary clinics.',
	  impact: '200+ animals treated annually',
	},
];
const partners = [
	'Tanzania Wildlife Authority',
	'African Wildlife Foundation',
	'Conservation International',
	'Local Maasai Communities',
];
export function ConservationSection() {
	const navigate = useNavigate();
	return (
	<section className="w-full bg-white py-20 rounded-[40px]">
		   <div className="max-w-7xl mx-auto px-6 animate-fade-in-out">
            <img
			src={bzImage}
			alt="African Wildlife Icon"
			className="mx-auto mb-4 w-20 h-20 object-contain"/>
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm font-serif font-semibold uppercase text-muted-foreground tracking-widest mb-2">
            Reasons to travel with us
          </p>
		     <div className="mb-8">
            <span className="text-xl tracking-widest text-muted-foreground">. . . . . . .</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Go with Safari Luxury
          </h2>
       
        </div>

	     <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
			<div className="flex items-start gap-4">
				<span className="flex-shrink-0 w-10 h-10 rounded-full  flex items-center justify-center">
					<CheckCircle className="h-6 w-6 text-accent" />
					</span>
					<div>
					<h3 className="font-bold text-lg ">
						Safari experts
					</h3>
					<p className="text-sm font-serif font-semibold text-gray-500 mb-1">
							10 years safari experience
					</p>
						<p className="text-muted-foreground font-serif text-sm">
							We have extensive knowledge of the destinations, wildlife, and
							lodges. We ensure unbiased advice or recommendations.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<span className="flex-shrink-0 w-10 h-10 rounded-full  flex items-center justify-center">
					<CheckCircle className="h-6 w-6 text-accent" />
					</span>
					<div>
						<h3 className="font-bold text-lg ">
							24/7 On-safari support
						</h3>
						<p className="text-sm font-semibold text-gray-500 mb-1">
							Highest-rated tour operator in Tanzania
						</p>
						<p className="text-muted-foreground font-serif text-sm">
							Book with us and we’ll be alongside you from our first chat,
							offering 24/7 assistance and local know-how from the right time
							zone, whenever you need it.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<span className="flex-shrink-0 w-10 h-10 rounded-full  flex items-center justify-center">
						<CheckCircle className="h-6 w-6 text-accent" />
					</span>
					<div>
						<h3 className="font-bold text-lg ">
							Hand-Crafted Safaris
						</h3>
						<p className="text-sm font-semibold font-serif  text-gray-500 mb-1">
							Custom itineraries designed just for you
						</p>
						<p className="text-muted-foreground font-serif text-sm">
							Tailor-make your safari itinerary to suit your specific
							interests, preferences, and budget.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<span className="flex-shrink-0 w-10 h-10 rounded-full  flex items-center justify-center">
					<CheckCircle className="h-6 w-6 text-accent" />
					</span>
					<div>
						<h3 className="font-bold text-lg ">
							Responsible Travel
						</h3>
						<p className="text-sm font-serif font-semibold text-gray-500 mb-1">
							Sustainability Impact
						</p>
						<p className="text-muted-foreground font-serif text-sm">
							We are committed to sustainable tourism practices, such as
							supporting local communities and protecting wildlife and the
							environment.
						</p>
					</div>
				</div>				
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
		  <a href='https://www.tripadvisor.com/'>
          <Button
            variant="safari-outline"
            size="lg"
            className="w-full md:w-auto text-black px-8 py-6 rounded-full shadow-lg border-2 border-border">
            <span className="font-semibold">TRIPADVISOR REVIEWS</span>
          </Button>
		  </a>
          <a href='https://www.trustpilot.com/'>
          <Button
            variant="safari"
            size="lg"
            className="w-full md:w-auto px-8 py-6 rounded-full shadow-lg flex items-center justify-center">
            <EyeIcon className="mr-2 h-4 w-4" />
            <span className="font-semibold">TRUSTPILOT REVIEWS</span>
          </Button>
		  </a>
            </div>
		 </div>
	</section>
	);
}