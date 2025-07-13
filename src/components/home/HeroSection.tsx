import { ArrowRight, PlayCircle, Map, Calendar, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lalibela.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lalibela rock-hewn churches in Ethiopia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 via-coffee-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Coffee className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">Birthplace of Coffee</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Timeless</span>{" "}
                <span className="bg-gradient-sunset bg-clip-text text-transparent">History</span>
                <br />
                <span className="text-white">Vibrant</span>{" "}
                <span className="bg-gradient-sunset bg-clip-text text-transparent">Culture</span>
                <br />
                <span className="text-white">Breathtaking</span>{" "}
                <span className="bg-gradient-sunset bg-clip-text text-transparent">Landscapes</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Discover Ethiopia, the cradle of humanity and a land of ancient wonders. 
                From the rock-hewn churches of Lalibela to the dramatic landscapes of the Simien Mountains, 
                experience a journey through time and culture.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                <PlayCircle className="w-5 h-5" />
                Watch Video
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">13+</div>
                <div className="text-sm text-white/80">UNESCO Sites</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">80+</div>
                <div className="text-sm text-white/80">Languages</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">3000+</div>
                <div className="text-sm text-white/80">Years History</div>
              </div>
            </div>
          </div>

          {/* Right side - Quick Access Cards */}
          <div className="hidden lg:block">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Map className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Explore Destinations</h3>
                    <p className="text-sm text-white/70">Discover Ethiopia's hidden gems</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-terra-cotta rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Plan Your Trip</h3>
                    <p className="text-sm text-white/70">Custom itineraries for every traveler</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sunset-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Coffee className="w-6 h-6 text-coffee-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Coffee Culture</h3>
                    <p className="text-sm text-white/70">Experience authentic coffee ceremonies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}