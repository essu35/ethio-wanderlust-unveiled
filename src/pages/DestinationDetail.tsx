import { useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Star, Users, Camera, Mountain, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import simienImage from "@/assets/simien-mountains.jpg";
import coffeeImage from "@/assets/coffee-ceremony.jpg";
import denakilImage from "@/assets/danakil-depression.jpg";
import lalibelaImage from "@/assets/hero-lalibela.jpg";
import lalibela1 from "@/assets/destination/lalibela1.jpeg";
import lalibela2 from "@/assets/destination/lalibela2.jpeg";
import lalibela3 from "@/assets/destination/lalibela3.jpeg";
import denkali1 from "@/assets/destination/denkali1.jpeg";
import denkali2 from "@/assets/destination/denkali2.jpeg";  
import denkali3 from "@/assets/destination/denkali3.jpeg";
import coffe1 from "@/assets/destination/coffe1.jpeg";
import coffe2 from "@/assets/destination/coffe2.jpeg"; 
import coffe3 from "@/assets/destination/coffe3.jpeg";
import semien1 from "@/assets/destination/semien1.jpeg";
import semien2 from "@/assets/destination/semien2.jpeg";
import semien3 from "@/assets/destination/semien3.jpeg";
import addisImage from "@/assets/addis.jpg";
import omoImage from "@/assets/omo.jpg";
import addis1 from "@/assets/destination/addis1.jpg";
import addis2 from "@/assets/destination/addsi2.jpg";  
import addis3 from "@/assets/destination/addis3.jpg";
import omo1 from "@/assets/destination/omo1.jpeg";
import omo2 from "@/assets/destination/omo2.jpg";
import omo3 from "@/assets/destination/omo3.jpeg";

const destinations = {
  lalibela: {
    id: "lalibela",
    name: "Lalibela",
    region: "Amhara Region",
    description: "Marvel at the 12th-century rock-hewn churches, carved directly from volcanic rock and still used for worship today.",
    longDescription: "Lalibela, often called the 'New Jerusalem', is home to eleven magnificent rock-hewn churches dating from the 12th century. Carved directly from volcanic rock during the reign of King Lalibela, these architectural marvels continue to serve as active places of worship for Ethiopian Orthodox Christians. The churches are connected by a series of trenches and tunnels, creating a sacred landscape that has remained virtually unchanged for 800 years.",
    image: lalibelaImage,
    gallery: [lalibela1, lalibela2, lalibela3],
    duration: "2-3 days",
    bestTime: "October to March",
    highlights: [
      "Church of St. George (Bete Giyorgis)",
      "Church of St. Mary (Bete Maryam)", 
      "Timkat Festival celebrations",
      "Underground tunnels and trenches",
      "Traditional coffee ceremonies"
    ],
    activities: [
      { name: "Guided church tours", icon: Users, duration: "3-4 hours" },
      { name: "Photography workshops", icon: Camera, duration: "2 hours" },
      { name: "Cultural ceremonies", icon: Calendar, duration: "1-2 hours" }
    ],
    rating: 4.9,
    difficulty: "Easy",
    tag: "UNESCO World Heritage"
  },
  "simien-mountains": {
    id: "simien-mountains",
    name: "Simien Mountains",
    region: "Amhara Region", 
    description: "Trek through dramatic landscapes and encounter endemic wildlife including Gelada monkeys and Ethiopian wolves.",
    longDescription: "The Simien Mountains National Park offers some of Africa's most spectacular mountain scenery. This UNESCO World Heritage site features dramatic escarpments, deep valleys, and high plateaus that are home to endemic species like the Gelada monkey and the rare Ethiopian wolf. The park's diverse ecosystems range from montane grasslands to Afro-alpine moorlands, providing trekkers with an unforgettable wilderness experience.",
    image: simienImage,
    gallery: [semien1, semien2, semien3],
    duration: "4-7 days",
    bestTime: "October to March",
    highlights: [
      "Ras Dashen Peak (4,550m)",
      "Gelada monkey troops",
      "Ethiopian wolf sightings",
      "Dramatic escarpments",
      "Traditional highland villages"
    ],
    activities: [
      { name: "Multi-day trekking", icon: Mountain, duration: "4-7 days" },
      { name: "Wildlife watching", icon: Camera, duration: "Half day" },
      { name: "Village visits", icon: Users, duration: "2-3 hours" }
    ],
    rating: 4.8,
    difficulty: "Moderate to Challenging",
    tag: "Adventure"
  },
  "danakil-depression": {
    id: "danakil-depression",
    name: "Danakil Depression",
    region: "Afar Region",
    description: "Explore one of the hottest and lowest places on Earth, with active volcanoes, salt flats, and colorful hot springs.",
    longDescription: "The Danakil Depression is one of the most geologically active and inhospitable places on Earth. Located at the junction of three tectonic plates, this alien landscape features active volcanoes, sulfur springs, salt flats, and lava lakes. Despite the extreme conditions, the region is home to the Afar people who have adapted to this harsh environment and continue their traditional salt mining practices.",
    image: denakilImage,
    gallery: [denkali1, denkali2, denkali3],
    duration: "3-4 days",
    bestTime: "November to February",
    highlights: [
      "Erta Ale volcano and lava lake",
      "Dallol hydrothermal field",
      "Salt mining operations",
      "Colorful mineral deposits",
      "Afar cultural encounters"
    ],
    activities: [
      { name: "Volcano expeditions", icon: Mountain, duration: "2 days" },
      { name: "Salt mining tours", icon: Users, duration: "4 hours" },
      { name: "Geological photography", icon: Camera, duration: "Full day" }
    ],
    rating: 4.7,
    difficulty: "Extreme",
    tag: "Extreme Adventure"
  },
  "coffee-regions": {
    id: "coffee-regions",
    name: "Coffee Culture Experience",
    region: "Multiple Regions",
    description: "Discover the birthplace of coffee through traditional ceremonies and visits to ancient coffee forests.",
    longDescription: "Ethiopia is the birthplace of coffee, and the country's coffee culture runs deep through its social fabric. From the ancient coffee forests of Kaffa to the elaborate coffee ceremonies performed in homes across the country, coffee is more than a beverage – it's a way of life. Experience the journey from bean to cup while learning about the ritual significance of coffee in Ethiopian society.",
    image: coffeeImage,
    gallery: [coffe1, coffe2, coffe3],
    duration: "1-2 days",
    bestTime: "Year-round",
    highlights: [
      "Traditional coffee ceremonies",
      "Ancient coffee forest visits",
      "Bean roasting experiences",
      "Local market tours",
      "Coffee cooperative visits"
    ],
    activities: [
      { name: "Coffee ceremony participation", icon: Users, duration: "2 hours" },
      { name: "Forest coffee tours", icon: Mountain, duration: "Half day" },
      { name: "Roasting workshops", icon: Calendar, duration: "3 hours" }
    ],
    rating: 4.9,
    difficulty: "Easy",
    tag: "Cultural"
  },
  "addis-ababa": {
    id: "addis-ababa",
    name: "Addis Ababa",
    region: "Addis Ababa",
    description: "Explore Ethiopia's vibrant capital city, home to the African Union, National Museum, and rich cultural heritage.",
    longDescription: "Addis Ababa, meaning 'New Flower' in Amharic, is Ethiopia's sprawling capital and the diplomatic heart of Africa. Home to the African Union headquarters, this high-altitude city offers a fascinating blend of traditional and modern Ethiopian culture. From the National Museum housing Lucy's remains to bustling markets and world-class restaurants, Addis Ababa provides an authentic gateway to understanding Ethiopia.",
    image: addisImage,
    gallery: [addis1, addis2, addis3],
    duration: "2-3 days",
    bestTime: "October to March",
    highlights: [
      "National Museum and Lucy exhibit",
      "Holy Trinity Cathedral", 
      "Merkato - Africa's largest market",
      "Ethnological Museum",
      "Mount Entoto viewpoint"
    ],
    activities: [
      { name: "City tours", icon: Users, duration: "4-6 hours" },
      { name: "Museum visits", icon: Calendar, duration: "2-3 hours" },
      { name: "Market exploration", icon: Camera, duration: "3-4 hours" }
    ],
    rating: 4.6,
    difficulty: "Easy",
    tag: "Urban Culture"
  },
  "omo-valley": {
    id: "omo-valley",
    name: "Omo Valley",
    region: "Southern Nations",
    description: "Discover the diverse tribal cultures and traditions in one of Africa's most ethnically diverse regions.",
    longDescription: "The Omo Valley is a UNESCO World Heritage site and one of the most culturally diverse regions in Africa. Home to over 20 distinct ethnic groups, each with their own unique traditions, languages, and customs. From the lip plates of the Mursi people to the body painting of the Karo tribe, the Omo Valley offers an unparalleled opportunity to experience authentic African tribal cultures that have remained largely unchanged for centuries.",
    image: omoImage,
    gallery: [omo1, omo2, omo3],
    duration: "5-7 days",
    bestTime: "September to March",
    highlights: [
      "Mursi tribe and lip plates",
      "Karo tribe body painting",
      "Hamar bull jumping ceremony",
      "Traditional tribal markets",
      "Omo River landscapes"
    ],
    activities: [
      { name: "Tribal village visits", icon: Users, duration: "Full day" },
      { name: "Cultural ceremonies", icon: Calendar, duration: "2-4 hours" },
      { name: "Photography tours", icon: Camera, duration: "Full day" }
    ],
    rating: 4.8,
    difficulty: "Moderate",
    tag: "Cultural Heritage"
  }
};

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations[id as keyof typeof destinations];

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
            <Link to="/destinations" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Destinations
            </Link>
            
            <div className="flex items-center space-x-4 mb-4">
              <Badge className="bg-accent text-accent-foreground">
                {destination.tag}
              </Badge>
              <div className="flex items-center space-x-1 text-white">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">{destination.rating}</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-2">{destination.name}</h1>
            <p className="text-xl text-white/90 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              {destination.region}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {destination.longDescription}
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Gallery</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {destination.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${destination.name} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Activities</h3>
                <div className="space-y-4">
                  {destination.activities.map((activity, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center space-x-4">
                        <activity.icon className="w-8 h-8 text-primary" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{activity.name}</h4>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {activity.duration}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Trip Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best Time</span>
                    <span className="font-medium">{destination.bestTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium">{destination.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Plan Your Visit</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to explore {destination.name}? Let us help you plan the perfect trip.
                </p>
                <Button variant="hero" className="w-full mb-3">
                  Book This Experience
                </Button>
                <Button variant="outline" className="w-full">
                  Download Guide
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}