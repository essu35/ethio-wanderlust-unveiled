import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import simienImage from "@/assets/simien-mountains.jpg";
import coffeeImage from "@/assets/coffee-ceremony.jpg";
import denakil from "@/assets/danakil-depression.jpg";
import lalibela from "@/assets/hero-lalibela.jpg";

const destinations = [
  {
    id: "lalibela",
    name: "Lalibela",
    region: "Amhara",
    description: "Marvel at the 12th-century rock-hewn churches, carved directly from volcanic rock and still used for worship today.",
    image: lalibela,
    duration: "2-3 days",
    highlights: ["Rock-hewn churches", "Orthodox pilgrimage", "Ancient architecture"],
    rating: 4.9,
    tag: "UNESCO World Heritage"
  },
  {
    id: "simien",
    name: "Simien Mountains",
    region: "Amhara",
    description: "Trek through dramatic landscapes and encounter endemic wildlife including Gelada monkeys and Ethiopian wolves.",
    image: simienImage,
    duration: "4-7 days",
    highlights: ["Trekking", "Endemic wildlife", "Dramatic peaks"],
    rating: 4.8,
    tag: "Adventure"
  },
  {
    id: "danakil",
    name: "Danakil Depression",
    region: "Afar",
    description: "Explore one of the hottest and lowest places on Earth, with active volcanoes, salt flats, and colorful hot springs.",
    image: denakil,
    duration: "3-4 days",
    highlights: ["Active volcanoes", "Salt mining", "Erta Ale volcano"],
    rating: 4.7,
    tag: "Extreme Adventure"
  },
  {
    id: "coffee",
    name: "Coffee Culture Experience",
    region: "Multiple Regions",
    description: "Discover the birthplace of coffee through traditional ceremonies and visits to ancient coffee forests.",
    image: coffeeImage,
    duration: "1-2 days",
    highlights: ["Coffee ceremony", "Ancient forests", "Local traditions"],
    rating: 4.9,
    tag: "Cultural"
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Destinations</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover Ethiopia's
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Wonders</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From ancient rock-hewn churches to dramatic mountain landscapes, 
            explore the destinations that make Ethiopia truly unforgettable.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-card hover:shadow-warm transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {destination.tag}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span className="text-sm font-medium text-white">{destination.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{destination.name}</h3>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group" asChild>
                  <Link to={`/destinations/${destination.id}`}>
                    Explore {destination.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/destinations">
              View All Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}