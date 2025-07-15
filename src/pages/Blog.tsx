import { Calendar, Clock, User, ArrowRight, Search, Users, Mountain, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import coffeeImage from "@/assets/coffee-ceremony.jpg";
import hararImage from "@/assets/harar-city.jpg";
import simienImage from "@/assets/simien-mountains.jpg";
import wildlifeImage from "@/assets/blog/ethiopia-wildlife.jpg";
import natureImage from "@/assets/blog/ethiopia-nature.jpg";
import omoImage from "@/assets/blog/omo-valley-culture.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Sacred Coffee Ceremony: Heart of Ethiopian Culture",
    excerpt: "Discover the spiritual and social significance of Ethiopia's ancient coffee ceremony, a ritual that brings communities together.",
    image: coffeeImage,
    author: "Sarah Mitchell",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Culture",
    featured: true
  },
  {
    id: 2,
    title: "Hyena Men of Harar: An Ancient Bond",
    excerpt: "Journey into the walled city of Harar to witness the extraordinary relationship between locals and wild hyenas.",
    image: hararImage,
    author: "Ahmed Hassan",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Wildlife"
  },
  {
    id: 3,
    title: "Trekking the Simien Mountains: A Complete Guide",
    excerpt: "Everything you need to know for an unforgettable adventure in Ethiopia's most spectacular mountain range.",
    image: simienImage,
    author: "Michael Chen",
    date: "December 5, 2024",
    readTime: "12 min read",
    category: "Adventure"
  },
  {
    id: 4,
    title: "Timkat Festival: Ethiopia's Greatest Celebration",
    excerpt: "Experience the vibrant colors, ancient rituals, and joyous atmosphere of Ethiopian Orthodox Epiphany.",
    image: wildlifeImage,
    author: "Rahel Tadesse",
    date: "November 28, 2024",
    readTime: "10 min read",
    category: "Festivals"
  },
  {
    id: 5,
    title: "Hidden Gems of the Omo Valley",
    excerpt: "Explore the remote tribes and pristine landscapes of one of Africa's most culturally diverse regions.",
    image: omoImage,
    author: "David Park",
    date: "November 20, 2024",
    readTime: "9 min read",
    category: "Culture"
  },
  {
    id: 6,
    title: "Ethiopian Cuisine: Beyond Injera",
    excerpt: "A culinary journey through Ethiopia's diverse regional flavors and lesser-known delicacies.",
    image: natureImage,
    author: "Marta Gonzalez",
    date: "November 15, 2024",
    readTime: "7 min read",
    category: "Food"
  },
  {
    id: 7,
    title: "Photography Guide: Capturing Ethiopia's Beauty",
    excerpt: "Essential tips for photographing Ethiopia's stunning landscapes, wildlife, and cultural ceremonies.",
    image: simienImage,
    author: "James Wilson",
    date: "November 8, 2024",
    readTime: "11 min read",
    category: "Photography"
  },
  {
    id: 8,
    title: "Addis Ababa: Gateway to Ancient Ethiopia",
    excerpt: "Discover the bustling capital where modernity meets tradition, museums, markets, and authentic Ethiopian culture.",
    image: hararImage,
    author: "Alemayehu Teshome",
    date: "October 30, 2024",
    readTime: "8 min read",
    category: "Culture"
  },
  {
    id: 9,
    title: "Rock Churches of Lalibela: A Spiritual Journey",
    excerpt: "Deep dive into the construction, history, and spiritual significance of Ethiopia's most famous churches.",
    image: coffeeImage,
    author: "Sister Mary Catherine",
    date: "October 22, 2024",
    readTime: "14 min read",
    category: "Culture"
  }
];

const categories = ["All", "Culture", "Adventure", "Wildlife", "Festivals", "Food", "Photography"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Travel Stories & Insights</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Discover Ethiopia
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Stories</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Personal experiences, cultural insights, and practical advice from travelers 
            exploring the wonders of Ethiopia.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search stories..." 
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Story</h2>
            <p className="text-muted-foreground">Don't miss our editor's pick</p>
          </div>

          {blogPosts
            .filter(post => post.featured)
            .map(post => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-warm transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="hero" className="self-start">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => !post.featured)
              .map(post => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-warm transition-all duration-500 hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="outline" size="sm" className="w-full group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Connected with Ethiopia
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get weekly travel insights, cultural stories, and exclusive Ethiopia travel tips 
            delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address"
              className="flex-1"
              type="email"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 10,000+ travelers exploring Ethiopia. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Explore by Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Cultural Heritage", count: 15, icon: Users, color: "bg-blue-500" },
              { name: "Adventure Tours", count: 12, icon: Mountain, color: "bg-green-500" },
              { name: "Food & Cuisine", count: 8, icon: Calendar, color: "bg-orange-500" },
              { name: "Wildlife", count: 10, icon: Camera, color: "bg-purple-500" },
              { name: "Photography", count: 6, icon: Camera, color: "bg-pink-500" },
              { name: "Festivals", count: 9, icon: Calendar, color: "bg-red-500" }
            ].map((category) => (
              <Card key={category.name} className="p-6 hover:shadow-warm transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${category.color} text-white group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} articles</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}