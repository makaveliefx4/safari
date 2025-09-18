import React from 'react';
import { Star, Award, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
	{
		icon: Star,
		number: '4.9/5',
		label: 'Average Rating',
		description: 'From 500+ verified reviews',
		color: 'text-accent',
	},
	{
		icon: Globe,
		number: '15+',
		label: 'Years Experience',
		description: 'In luxury African safaris',
		color: 'text-primary',
	},
	{
		icon: Award,
		number: '98%',
		label: 'Customer Satisfaction',
		description: 'Return & recommendation rate',
		color: 'text-accent',
	},
	{
		icon: Heart,
		number: '$2.5M+',
		label: 'Conservation Impact',
		description: 'Contributed to wildlife protection',
		color: 'text-primary',
	},
];

const achievements = [
	'Featured in National Geographic',
	"TripAdvisor Travelers' Choice Award 2024",
	'African Tourism Board Excellence Award',
	'Conde Nast Top Safari Operator',
	'Conservation Partnership Recognition',
	'Luxury Travel Magazine Best African Safari',
];

export function StatsSection() {
	return (
		<section className="py-24 bg-gradient-safari">		
			<div className="max-w-7xl mx-auto px-6 animate-fade-in-out">			
				<div className="flex justify-center mb-6 -mt-15 ">
					<img
						src="https://oscarafrica.com/wp-content/themes/oscarafrica-child/images/tripadvisor-black.svg"
						alt="Awards"
						width={90}
						height={124}
						className="object-contain"/>
			 	</div>
			    <div className="text-center mb-16 animate-fade-up"> 
					<p className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-2">
						Awards & Stats
					</p>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Tripadvisor Rated #1 Safari Operator
				</h2>
				    <div className="mb-8">
						<span className="text-xl tracking-widest text-muted-foreground">
							. . . . . . .
						</span>
				    </div>
				</div>

			
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					{stats.map((stat, index) => (
						<Card
							key={index}
							className="text-center p-8 bg-card/80 backdrop-blur-sm border-0 shadow-[var(--shadow-earth)] safari-hover animate-scale-in"
							style={{ animationDelay: `${index * 0.1}s` }}>
							<div
							className={`bg-${stat.color.replace('text-','')}/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
								<stat.icon className={`h-8 w-8 ${stat.color}`} />
							</div>
							<h3 className={`text-4xl font-bold ${stat.color} mb-2`}>
								{stat.number}
							</h3>
							<h4 className="text-xl font-semibold text-foreground mb-2">
								{stat.label}
							</h4>
							<p className="text-muted-foreground text-sm">
								{stat.description}
							</p>
						</Card>
					))}
				</div>

		
				<div className="text-center">
					<h3 className="text-2xl font-bold text-foreground mb-8 animate-fade-up">
						Awards & Recognition
					</h3>
          <span className="text-xl tracking-widest text-muted-foreground -mt-5 block">
            . . . . . . .
          </span>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
						{achievements.map((achievement, index) => (
							<div
								key={index}
								className="flex items-center p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 animate-slide-in-left"
								style={{ animationDelay: `${index * 0.1}s` }}>
								<Award className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
								<span className="text-foreground text-sm font-medium">
									{achievement}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}