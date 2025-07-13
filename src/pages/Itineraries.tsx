import { Calendar, Clock, MapPin, Users, Star, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const itineraries = [
  {
    id: "classic-north",
    title: "Classic Northern Circuit",
    duration: "10 days",
    difficulty: "Easy to Moderate",
    bestFor: "First-time visitors",
    price: "From $1,200",
    rating: 4.9,
    highlights: ["Lalibela rock churches", "Gondar castles", "Simien Mountains", "Lake Tana monasteries"],
    image: "/api/placeholder/600/400",
    description: "Experience Ethiopia's most famous historical sites and dramatic mountain landscapes in this comprehensive northern circuit.",
    itinerary: [
      { day: "Day 1-2", location: "Addis Ababa", activities: "Arrival, city tour, National Museum" },
      { day: "Day 3-4", location: "Bahir Dar", activities: "Lake Tana boat trip, Blue Nile Falls" },
      { day: "Day 5-6", location: "Gondar", activities: "Royal Enclosure, Debre Berhan Selassie Church" },
      { day: "Day 7-8", location: "Simien Mountains", activities: "Trekking, wildlife viewing" },
      { day: "Day 9-10", location: "Lalibela", activities: "Rock-hewn churches tour, cultural experiences" }
    ]
  },
  {
    id: "adventure-extreme",
    title: "Extreme Adventure: Danakil & Simien",
    duration: "14 days",
    difficulty: "Hard",
    bestFor: "Adventure seekers",
    price: "From $2,800",
    rating: 4.7,
    highlights: ["Erta Ale volcano", "Dallol hot springs", "Simien trekking", "Afar culture"],
    image: "/api/placeholder/600/400",
    description: "For the ultimate adventure, combine the otherworldly Danakil Depression with epic Simien Mountains trekking.",
    itinerary: [
      { day: "Day 1-2", location: "Addis Ababa", activities: "Arrival, preparation, briefings" },
      { day: "Day 3-6", location: "Danakil Depression", activities: "Erta Ale volcano, Dallol, salt mining" },
      { day: "Day 7-8", location: "Mekelle", activities: "Rest, cultural exploration" },
      { day: "Day 9-13", location: "Simien Mountains", activities: "Multi-day trekking, Ras Dashen attempt" },
      { day: "Day 14", location: "Addis Ababa", activities: "Departure preparations" }
    ]
  },
  {
    id: "cultural-south",
    title: "Cultural Journey: Omo Valley & Coffee Routes",
    duration: "12 days",
    difficulty: "Moderate",
    bestFor: "Culture enthusiasts",
    price: "From $1,800",
    rating: 4.8,
    highlights: ["Tribal cultures", "Coffee ceremony", "Traditional markets", "Anthropological sites"],
    image: "/api/placeholder/600/400",
    description: "Immerse yourself in Ethiopia's diverse cultures and discover the origins of coffee in this unique southern journey.",
    itinerary: [
      { day: "Day 1-2", location: "Addis Ababa", activities: "City tour, Ethnological Museum" },
      { day: "Day 3-4", location: "Arba Minch", activities: "Dorze village, Nechisar National Park" },
      { day: "Day 5-7", location: "Omo Valley", activities: "Mursi, Hamer, Karo tribes visits" },
      { day: "Day 8-9", location: "Turmi", activities: "Traditional ceremonies, local markets" },
      { day: "Day 10-11", location: "Coffee Regions", activities: "Coffee farms, ceremony participation" },
      { day: "Day 12", location: "Addis Ababa", activities: "Shopping, departure" }
    ]
  },
  {
    id: "quick-highlights",
    title: "Ethiopia Highlights Express",
    duration: "7 days",
    difficulty: "Easy",
    bestFor: "Time-constrained travelers",
    price: "From $950",
    rating: 4.6,
    highlights: ["Lalibela churches", "Addis Ababa culture", "Lake Tana", "Local experiences"],
    image: "/api/placeholder/600/400",
    description: "Perfect for those with limited time who want to experience Ethiopia's essential highlights.",
    itinerary: [
      { day: "Day 1", location: "Addis Ababa", activities: "Arrival, city orientation" },
      { day: "Day 2-3", location: "Lalibela", activities: "Rock-hewn churches, local culture" },
      { day: "Day 4-5", location: "Bahir Dar", activities: "Lake Tana, Blue Nile Falls" },
      { day: "Day 6", location: "Addis Ababa", activities: "Shopping, cultural dinner" },
      { day: "Day 7", location: "Departure", activities: "Airport transfer" }
    ]
  }
];

const travelSeasons = [
  {
    season: "Dry Season (Oct-May)",
    description: "Best for most destinations with clear skies and accessible roads",
    pros: ["Perfect weather", "Best wildlife viewing", "All roads accessible"],
    cons: ["Higher prices", "More crowds", "Dusty conditions"]
  },
  {
    season: "Rainy Season (Jun-Sep)",
    description: "Lush landscapes but challenging road conditions",
    pros: ["Lower prices", "Fewer tourists", "Green landscapes"],
    cons: ["Road challenges", "Limited access to some areas", "Unpredictable weather"]
  }
];

export default function Itineraries() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-highland overflow-hidden">
          <div className="absolute inset-0 bg-highland-green/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Custom Travel Itineraries</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Plan Your Perfect
              <span className="block">Ethiopian Adventure</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From quick getaways to epic adventures, discover carefully crafted itineraries 
              that showcase the best of Ethiopia's history, culture, and landscapes.
            </p>
          </div>
        </section>

        {/* Itineraries Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Choose Your Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each itinerary is designed to give you the most authentic and memorable Ethiopian experience.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {itineraries.map((itinerary) => (
                <Card key={itinerary.id} className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-500">
                  <div className="relative h-64">
                    <img
                      src={itinerary.image}
                      alt={itinerary.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent" />
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm font-medium text-white">{itinerary.rating}</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {itinerary.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{itinerary.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{itinerary.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{itinerary.bestFor}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {itinerary.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {itinerary.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sample Itinerary */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Sample Itinerary</h4>
                      <div className="space-y-2">
                        {itinerary.itinerary.slice(0, 3).map((item, index) => (
                          <div key={index} className="flex items-start space-x-3 text-sm">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-foreground">{item.day}</span>
                              <span className="text-muted-foreground"> - {item.location}: {item.activities}</span>
                            </div>
                          </div>
                        ))}
                        {itinerary.itinerary.length > 3 && (
                          <p className="text-xs text-muted-foreground pl-5">...and more</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="hero" className="flex-1 group">
                        Book Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Seasons */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                When to Visit
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the best time for your Ethiopian adventure based on weather, activities, and personal preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {travelSeasons.map((season, index) => (
                <Card key={season.season} className="p-8 shadow-card">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{season.season}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{season.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-success mb-3">Pros</h4>
                      <ul className="space-y-2">
                        {season.pros.map((pro, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-destructive mb-3">Cons</h4>
                      <ul className="space-y-2">
                        {season.cons.map((con, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="bg-gradient-hero text-white p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Planning?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let our experts help you create a custom itinerary tailored to your interests, 
                budget, and travel style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Custom Quote
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Download Planning Guide
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}