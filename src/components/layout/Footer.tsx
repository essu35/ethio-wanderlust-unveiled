import { Link } from "react-router-dom";
import { MapPin, Coffee, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  destinations: [
    { name: "Lalibela", href: "/destinations/lalibela" },
    { name: "Addis Ababa", href: "/destinations/addis-ababa" },
    { name: "Simien Mountains", href: "/destinations/simien-mountains" },
    { name: "Danakil Depression", href: "/destinations/danakil" },
    { name: "Omo Valley", href: "/destinations/omo-valley" },
  ],
  resources: [
    { name: "Travel Tips", href: "/travel-tips" },
    { name: "Itineraries", href: "/itineraries" },
    { name: "Food Guide", href: "/food" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
  ],
  practical: [
    { name: "Visa Information", href: "/travel-tips/visa" },
    { name: "Best Time to Visit", href: "/travel-tips/when-to-go" },
    { name: "Safety Guidelines", href: "/travel-tips/safety" },
    { name: "Cultural Etiquette", href: "/travel-tips/culture" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Coffee className="w-3 h-3 text-accent-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Discover</span>
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">Ethiopia</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Your trusted guide to exploring Ethiopia's timeless history, vibrant culture, and breathtaking landscapes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Top Destinations</h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Practical Info</h3>
            <ul className="space-y-3">
              {footerLinks.practical.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Discover Ethiopia. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Promoting sustainable and responsible tourism in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}