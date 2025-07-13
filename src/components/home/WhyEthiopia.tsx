import { Crown, Coffee, Mountain, Users, Calendar, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Crown,
    title: "Never Colonized",
    description: "Ethiopia maintained its independence throughout the colonial period, preserving its authentic culture and traditions.",
    color: "text-primary"
  },
  {
    icon: Coffee,
    title: "Birthplace of Coffee",
    description: "Experience the origin of coffee culture with traditional ceremonies that have been practiced for over 1,000 years.",
    color: "text-coffee-dark"
  },
  {
    icon: Mountain,
    title: "Roof of Africa",
    description: "Home to some of Africa's highest peaks and most dramatic landscapes, perfect for trekking and adventure.",
    color: "text-highland-green"
  },
  {
    icon: Users,
    title: "Cradle of Humanity",
    description: "Where Lucy, our 3.2 million-year-old ancestor, was discovered, making it humanity's birthplace.",
    color: "text-terra-cotta"
  },
  {
    icon: Calendar,
    title: "Unique Calendar",
    description: "Follow the ancient Ethiopian calendar with 13 months and experience a completely different concept of time.",
    color: "text-sunset-gold"
  },
  {
    icon: Globe,
    title: "Living Heritage",
    description: "Witness ancient traditions, languages, and cultures that have survived for thousands of years.",
    color: "text-primary"
  }
];

export default function WhyEthiopia() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Ethiopia?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ethiopia offers experiences you can't find anywhere else on Earth. 
            Discover what makes this ancient land truly extraordinary.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-8 bg-card rounded-xl shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className={`w-8 h-8 text-primary-foreground`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">{reason.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Real Africa?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered the magic of Ethiopia. 
              Your adventure of a lifetime awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/destinations" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center">
                  Start Planning
                </Link>
                <a
                  href="/guide.pdf"
                  download
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Download Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}