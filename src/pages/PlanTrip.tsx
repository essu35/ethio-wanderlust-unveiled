import { useState } from "react";
import { Calendar, Users, MapPin, Clock, Star, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const tripStyles = [
  {
    id: "cultural",
    name: "Cultural Heritage",
    description: "Churches, festivals, traditional ceremonies",
    duration: "7-14 days",
    highlights: ["Lalibela", "Axum", "Gondar", "Local festivals"]
  },
  {
    id: "adventure",
    name: "Adventure & Nature",
    description: "Trekking, wildlife, dramatic landscapes", 
    duration: "10-21 days",
    highlights: ["Simien Mountains", "Danakil Depression", "Bale Mountains", "Omo Valley"]
  },
  {
    id: "coffee",
    name: "Coffee & Cuisine",
    description: "Food tours, coffee ceremonies, markets",
    duration: "5-10 days", 
    highlights: ["Coffee origins", "Cooking classes", "Market tours", "Local restaurants"]
  },
  {
    id: "photography",
    name: "Photography Tour",
    description: "Capture Ethiopia's stunning landscapes and culture",
    duration: "12-18 days",
    highlights: ["Golden hour shoots", "Portrait sessions", "Landscape photography", "Cultural events"]
  }
];

const sampleItineraries = [
  {
    title: "Northern Historical Circuit",
    duration: "10 days",
    price: "$2,890",
    rating: 4.9,
    includes: ["Lalibela", "Axum", "Gondar", "Blue Nile Falls"],
    style: "cultural"
  },
  {
    title: "Adventure Explorer",
    duration: "14 days", 
    price: "$3,650",
    rating: 4.8,
    includes: ["Simien Mountains", "Danakil Depression", "Erta Ale", "Salt flats"],
    style: "adventure"
  },
  {
    title: "Coffee Trail Experience",
    duration: "8 days",
    price: "$2,190",
    rating: 4.9,
    includes: ["Kaffa region", "Coffee ceremonies", "Jimma", "Addis Ababa"],
    style: "coffee"
  }
];

export default function PlanTrip() {
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelers: "",
    duration: "",
    startDate: "",
    budget: "",
    interests: [] as string[]
  });

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trip Planning</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Plan Your Perfect
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Ethiopian Journey</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let us help you create an unforgettable Ethiopian adventure tailored to your interests, 
            schedule, and travel style.
          </p>
        </div>
      </section>

      {/* Trip Styles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Adventure Style</h2>
            <p className="text-muted-foreground">What kind of Ethiopian experience are you looking for?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tripStyles.map((style) => (
              <Card 
                key={style.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-warm ${
                  selectedStyle === style.id 
                    ? 'border-primary shadow-card ring-2 ring-primary/20' 
                    : 'hover:border-primary/50'
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{style.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{style.description}</p>
                  
                  <Badge variant="outline" className="mb-4">
                    {style.duration}
                  </Badge>
                  
                  <div className="space-y-1">
                    {style.highlights.map((highlight, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center justify-center">
                        <Check className="w-3 h-3 mr-1 text-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Itineraries</h2>
            <p className="text-muted-foreground">Get inspired by our most loved travel packages</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sampleItineraries.map((itinerary, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-warm transition-all duration-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-accent text-accent-foreground capitalize">
                      {itinerary.style}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm font-medium">{itinerary.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{itinerary.title}</h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{itinerary.price}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {itinerary.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    View Full Itinerary
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              View All Itineraries
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Trip Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Plan a Custom Trip</h2>
            <p className="text-muted-foreground">Tell us about your dream Ethiopian adventure and we'll create a personalized itinerary</p>
          </div>

          <Card className="p-8">
            <form className="space-y-8">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Trip Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Select value={formData.travelers} onValueChange={(value) => setFormData(prev => ({...prev, travelers: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Traveler</SelectItem>
                      <SelectItem value="2">2 Travelers</SelectItem>
                      <SelectItem value="3-5">3-5 Travelers</SelectItem>
                      <SelectItem value="6+">6+ Travelers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">Trip Duration</Label>
                  <Select value={formData.duration} onValueChange={(value) => setFormData(prev => ({...prev, duration: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-7">5-7 days</SelectItem>
                      <SelectItem value="8-10">8-10 days</SelectItem>
                      <SelectItem value="11-14">11-14 days</SelectItem>
                      <SelectItem value="15+">15+ days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range (USD)</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-3500">$2,000 - $3,500</SelectItem>
                      <SelectItem value="3500-5000">$3,500 - $5,000</SelectItem>
                      <SelectItem value="5000+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="startDate">Preferred Start Date</Label>
                <Input 
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({...prev, startDate: e.target.value}))}
                />
              </div>

              {/* Interests */}
              <div>
                <Label>What interests you most? (Select all that apply)</Label>
                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  {[
                    "Historical sites", "Cultural experiences", "Adventure activities",
                    "Wildlife viewing", "Photography", "Food & cuisine",
                    "Religious sites", "Local festivals", "Mountain trekking",
                    "Desert exploration", "Coffee culture", "Art & crafts"
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleInterestChange(interest)}
                      />
                      <Label htmlFor={interest} className="text-sm">{interest}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" className="px-12">
                  Get My Custom Itinerary
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll contact you within 24 hours with a personalized proposal
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}