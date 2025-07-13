import { Coffee, Utensils, Leaf, Clock, MapPin, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coffeeImage from "@/assets/coffee-ceremony.jpg";
import foodImage from "@/assets/ethiopian-food.jpg";

const dishes = [
  {
    name: "Injera",
    description: "Spongy sourdough flatbread made from teff grain, serves as both plate and utensil",
    type: "Staple",
    spiceLevel: "Mild",
    vegetarian: true,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Doro Wat",
    description: "Ethiopia's national dish - spicy chicken stew with berbere spice and hard-boiled eggs",
    type: "Main Course",
    spiceLevel: "Very Hot",
    vegetarian: false,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Kitfo",
    description: "Ethiopian-style steak tartare seasoned with mitmita spice and clarified butter",
    type: "Main Course",
    spiceLevel: "Medium",
    vegetarian: false,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Shiro",
    description: "Creamy stew made from ground chickpeas or broad beans, perfect for vegetarians",
    type: "Main Course",
    spiceLevel: "Medium",
    vegetarian: true,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Tibs",
    description: "Sautéed meat (usually beef or lamb) with vegetables and aromatic spices",
    type: "Main Course",
    spiceLevel: "Medium",
    vegetarian: false,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Vegetarian Combination",
    description: "Assortment of vegetarian dishes served together, common during fasting periods",
    type: "Combination",
    spiceLevel: "Varies",
    vegetarian: true,
    image: foodImage
  }
];

const drinkingCulture = [
  {
    name: "Coffee Ceremony",
    description: "Sacred ritual involving roasting, grinding, and brewing coffee beans, performed 3 times daily",
    duration: "1-2 hours",
    significance: "Community bonding and spiritual practice"
  },
  {
    name: "Tej",
    description: "Traditional honey wine, often served in special flask-shaped glasses called berele",
    strength: "Mild to Strong",
    significance: "Ceremonial and celebratory drink"
  },
  {
    name: "Tella",
    description: "Traditional beer made from barley, hops, and gesho (buckthorn)",
    strength: "Low alcohol",
    significance: "Daily social drink"
  }
];

const restaurants = [
  {
    name: "Yod Abyssinia",
    location: "Addis Ababa",
    type: "Traditional",
    priceRange: "$$",
    specialty: "Cultural dinner with traditional music and dance",
    rating: 4.8
  },
  {
    name: "Kategna Restaurant",
    location: "Addis Ababa",
    type: "Traditional",
    priceRange: "$",
    specialty: "Authentic Ethiopian cuisine in traditional setting",
    rating: 4.6
  },
  {
    name: "Lime Tree Restaurant",
    location: "Addis Ababa",
    type: "Fusion",
    priceRange: "$$$",
    specialty: "Ethiopian-international fusion with garden setting",
    rating: 4.7
  },
  {
    name: "Tomoca Coffee",
    location: "Addis Ababa",
    type: "Coffee House",
    priceRange: "$",
    specialty: "Historic coffee shop serving traditional Ethiopian coffee",
    rating: 4.9
  }
];

export default function Food() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-sunset overflow-hidden">
          <div className="absolute inset-0 bg-sunset-gold/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Coffee className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Birthplace of Coffee</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Ethiopian Food & Drink
              <span className="block">Culture</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the rich flavors and ancient traditions of Ethiopian cuisine, 
              from the sacred coffee ceremony to the communal dining experience.
            </p>
          </div>
        </section>

        {/* Coffee Culture Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  The Sacred Coffee Ceremony
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Experience the heart of Ethiopian culture through the traditional coffee ceremony. 
                  This sacred ritual, performed by women, involves roasting green coffee beans over an open flame, 
                  grinding them by hand, and brewing the coffee in a clay pot called a jebena.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Duration</h4>
                      <p className="text-muted-foreground">1-2 hours for the complete ceremony</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Coffee className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Three Rounds</h4>
                      <p className="text-muted-foreground">Abol (first), Tona (second), Baraka (third - blessing)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={coffeeImage}
                  alt="Traditional Ethiopian coffee ceremony"
                  className="w-full h-96 object-cover rounded-xl shadow-warm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 via-transparent to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Dishes */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Must-Try Dishes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ethiopian cuisine is known for its bold spices, communal dining style, and vegetarian-friendly options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dishes.map((dish, index) => (
                <Card key={dish.name} className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {dish.vegetarian && (
                        <span className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Leaf className="w-3 h-3 mr-1" />
                          Vegetarian
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-background/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        {dish.spiceLevel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{dish.name}</h3>
                      <span className="text-sm text-muted-foreground">{dish.type}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Drinking Culture */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Traditional Drinks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Beyond coffee, Ethiopia has a rich tradition of ceremonial and social beverages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {drinkingCulture.map((drink, index) => (
                <Card key={drink.name} className="p-6 text-center shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-3">{drink.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{drink.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    {drink.duration && (
                      <div className="flex justify-center items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{drink.duration}</span>
                      </div>
                    )}
                    {drink.strength && (
                      <div className="flex justify-center items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{drink.strength}</span>
                      </div>
                    )}
                    <p className="text-primary font-medium mt-3">{drink.significance}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Restaurants */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Where to Eat
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From traditional restaurants to modern cafés, these establishments offer authentic Ethiopian experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {restaurants.map((restaurant, index) => (
                <Card key={restaurant.name} className="p-6 shadow-card hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground">{restaurant.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{restaurant.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{restaurant.type}</span>
                      <span className="text-primary font-medium">{restaurant.priceRange}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                    {restaurant.specialty}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Food Etiquette */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="bg-gradient-hero text-white p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Dining Etiquette</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Do's</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Wash hands before and after eating
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Use only your right hand for eating
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Share from the communal plate
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Accept coffee ceremony invitations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Don'ts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Don't use utensils with injera
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Don't reach across the communal plate
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Don't refuse food offered to you
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Don't waste food - it's considered disrespectful
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}