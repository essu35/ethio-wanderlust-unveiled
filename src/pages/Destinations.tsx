import { useState } from "react";
import { Search, Filter, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-lalibela.jpg";
import simienImage from "@/assets/simien-mountains.jpg";
import coffeeImage from "@/assets/coffee-ceremony.jpg";
import omovalleyImage from "@/assets/omo.jpg";
import addis from "@/assets/addis.jpg";
import dankali from "@/assets/danakil-depression.jpg";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: "lalibela",
    name: "Lalibela",
    region: "Amhara Region",
    description: "Marvel at the 12th-century rock-hewn churches, carved directly from volcanic rock and still used for worship today. This UNESCO World Heritage site is often called the 'New Jerusalem'.",
    image: heroImage,
    duration: "2-3 days",
    bestTime: "Oct-Mar",
    highlights: ["Rock-hewn churches", "Orthodox pilgrimage", "Ancient architecture", "Timkat festival"],
    rating: 4.9,
    difficulty: "Easy",
    category: "Historical"
  },
  {
    id: "simien-mountains",
    name: "Simien Mountains",
    region: "Amhara Region",
    description: "Trek through dramatic landscapes and encounter endemic wildlife including Gelada monkeys and Ethiopian wolves. Experience Africa's most spectacular mountain scenery.",
    image: simienImage,
    duration: "4-7 days",
    bestTime: "Oct-Mar",
    highlights: ["Trekking", "Endemic wildlife", "Dramatic peaks", "Ras Dashen summit"],
    rating: 4.8,
    difficulty: "Moderate to Hard",
    category: "Adventure"
  },
  {
    id: "addis-ababa",
    name: "Addis Ababa",
    region: "Capital City",
    description: "Explore Ethiopia's vibrant capital with world-class museums, bustling markets, and thriving nightlife. The political and cultural heart of Africa.",
    image: addis,
    duration: "2-3 days",
    bestTime: "Year-round",
    highlights: ["National Museum", "Merkato market", "Holy Trinity Cathedral", "Cultural restaurants"],
    rating: 4.6,
    difficulty: "Easy",
    category: "Cultural"
  },
  {
    id: "danakil-depression",
    name: "Danakil Depression",
    region: "Afar Region",
    description: "Explore one of the hottest and lowest places on Earth, with active volcanoes, salt flats, and colorful hot springs. An otherworldly experience.",
    image: dankali,
    duration: "3-4 days",
    bestTime: "Nov-Feb",
    highlights: ["Erta Ale volcano", "Salt mining", "Dallol hot springs", "Extreme landscapes"],
    rating: 4.7,
    difficulty: "Hard",
    category: "Adventure"
  },
  {
    id: "coffee-regions",
    name: "Coffee Regions",
    region: "Multiple Regions",
    description: "Discover the birthplace of coffee through traditional ceremonies, visits to ancient coffee forests, and meeting local farmers.",
    image: coffeeImage,
    duration: "1-3 days",
    bestTime: "Oct-Mar",
    highlights: ["Coffee ceremony", "Ancient forests", "Local traditions", "Farm visits"],
    rating: 4.9,
    difficulty: "Easy",
    category: "Cultural"
  },
  {
    id: "omo-valley",
    name: "Omo Valley",
    region: "Southern Nations Region",
    description: "Experience one of Africa's most culturally diverse regions, home to indigenous tribes with unique traditions and ways of life.",
    image: omovalleyImage,
    duration: "4-6 days",
    bestTime: "Oct-Mar",
    highlights: ["Tribal cultures", "Traditional markets", "Bull jumping ceremony", "Cultural immersion"],
    rating: 4.7,
    difficulty: "Moderate",
    category: "Cultural"
  }
];

const categories = ["All", "Historical", "Adventure", "Cultural"];
const difficulties = ["All", "Easy", "Moderate", "Hard"];

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || destination.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || destination.difficulty.includes(selectedDifficulty);
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Explore Ethiopia's
              <span className="block">Incredible Destinations</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From ancient rock-hewn churches to dramatic mountain landscapes,
              discover the places that make Ethiopia truly unforgettable.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>


            </div>
          </div>
        </section>

        {/* Destinations Grid */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredDestinations.map((destination) => (
        <Card
          key={destination.id}
          className="group overflow-hidden border-0 shadow-card hover:shadow-warm transition-all duration-500 hover:scale-[1.02] flex flex-col"
        >
          {/* Image & Badges */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                {destination.category}
              </span>
            </div>

            {/* Rating */}
            <div className="absolute top-3 right-3 flex items-center space-x-1 bg-background/20 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="w-3 h-3 text-accent fill-current" />
              <span className="text-xs font-medium text-white">{destination.rating}</span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 flex flex-col flex-1">
            {/* Title & Region & Duration */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{destination.name}</h3>
                <p className="text-sm text-muted-foreground">{destination.region}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{destination.duration}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {destination.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1 mb-4">
              {destination.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Best Time & Difficulty */}
            <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
              <span>Best: {destination.bestTime}</span>
              <span>Difficulty: {destination.difficulty}</span>
            </div>

            {/* Button pinned at bottom */}
            <div className="mt-auto pt-2">
              <Button variant="outline" className="w-full group" onClick={() => { console.log("Clicked destination id:", destination.id); }}>
                <Link
                  to={`/destinations/${destination.id}`}
                  className="flex items-center justify-center gap-2 group w-full"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>

    {/* Empty state */}
    {filteredDestinations.length === 0 && (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No destinations found matching your criteria.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("All");
            setSelectedDifficulty("All");
          }}
          className="mt-4"
        >
          Clear Filters
        </Button>
      </div>
    )}
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}