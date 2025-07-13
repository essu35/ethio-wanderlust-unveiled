import { useState } from "react";
import { ArrowRight, PlayCircle, Map, Calendar, Coffee, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lalibela.jpg";
import { Link } from "react-router-dom";

const QuickAccessCard = ({ to, icon: Icon, title, subtitle, bg, iconColor }) => (
  <Link
    to={to}
    className="block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
  >
    <div className="flex items-center space-x-4">
      <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{subtitle}</p>
      </div>
    </div>
  </Link>
);

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
<div className="absolute inset-0 z-0">
  <img
    src={heroImage}
    alt="Lalibela rock-hewn churches in Ethiopia"
    className="w-full h-full object-cover opacity-90"
  />
</div>



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Coffee className="w-4 h-4 text-accent" aria-hidden="true" />
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
              <Link to="/destinations" className="group">
                <Button variant="hero" size="lg" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>

              <Button
                onClick={() => setShowVideo(true)}
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" aria-hidden="true" />
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
              <QuickAccessCard
                to="/destinations"
                icon={Map}
                title="Explore Destinations"
                subtitle="Discover Ethiopia's hidden gems"
                bg="bg-primary"
                iconColor="text-primary-foreground"
              />
              <QuickAccessCard
                to="/plan-trip"
                icon={Calendar}
                title="Plan Your Trip"
                subtitle="Custom itineraries for every traveler"
                bg="bg-terra-cotta"
                iconColor="text-white"
              />
              <QuickAccessCard
                to="/food"
                icon={Coffee}
                title="Coffee Culture"
                subtitle="Experience authentic coffee ceremonies"
                bg="bg-sunset-gold"
                iconColor="text-coffee-dark"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/HwgnhdZBI-M?autoplay=1"
              title="Ethiopia Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white hover:text-red-500 transition"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

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
