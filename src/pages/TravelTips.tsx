import { Shield, Plane, CreditCard, Clock, Users, AlertTriangle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const travelTips = [
  {
    icon: Plane,
    title: "Visa & Entry Requirements",
    content: [
      "Most visitors can obtain a visa on arrival at Addis Ababa Bole International Airport",
      "Tourist visa valid for 30 or 90 days",
      "Passport must be valid for at least 6 months",
      "Yellow fever vaccination certificate required if coming from infected areas"
    ]
  },
  {
    icon: CreditCard,
    title: "Money & Currency",
    content: [
      "Ethiopian Birr (ETB) is the local currency",
      "US Dollars widely accepted at hotels and tour operators",
      "Credit cards accepted in major hotels and restaurants in Addis Ababa",
      "ATMs available in major cities, but carry cash for rural areas"
    ]
  },
  {
    icon: Clock,
    title: "Best Time to Visit",
    content: [
      "Dry season (October to March) is ideal for most regions",
      "Rainy season (June to September) brings lush landscapes but difficult roads",
      "Danakil Depression best visited November to February",
      "Highland regions can be visited year-round but pack warm clothes"
    ]
  },
  {
    icon: Users,
    title: "Cultural Etiquette",
    content: [
      "Dress modestly, especially when visiting religious sites",
      "Remove shoes when entering churches and mosques",
      "Coffee ceremony is sacred - accept when offered",
      "Use right hand for greetings and eating",
      "Photography: Always ask permission before photographing people"
    ]
  },
  {
    icon: Shield,
    title: "Safety & Health",
    content: [
      "Ethiopia is generally safe for tourists",
      "Drink bottled or purified water",
      "Consult travel doctor for recommended vaccinations",
      "Travel with reputable tour operators in remote areas",
      "Keep copies of important documents"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Important to Know",
    content: [
      "Ethiopia follows its own calendar (13 months)",
      "Local time is different - ask for 'Ethiopia time' vs 'foreign time'",
      "Altitude sickness possible in highland areas",
      "English widely spoken in tourist areas",
      "Tipping is appreciated but not mandatory"
    ]
  }
];

const practicalInfo = [
  {
    title: "Climate",
    description: "Ethiopia has diverse climate zones from cool highlands to hot deserts. Pack layers and check regional weather.",
    details: ["Highland: 15-25°C year-round", "Lowland: 20-40°C", "Rainy season: June-September"]
  },
  {
    title: "Transportation",
    description: "Domestic flights connect major cities. Road travel offers scenic routes but can be challenging.",
    details: ["Ethiopian Airlines domestic network", "4WD recommended for rural areas", "Buses available but can be crowded"]
  },
  {
    title: "Accommodation",
    description: "Options range from luxury lodges to budget guesthouses. Book in advance during peak season.",
    details: ["International chains in Addis Ababa", "Community lodges in rural areas", "Camping possible in some regions"]
  },
  {
    title: "Food & Water",
    description: "Ethiopian cuisine is vegetarian-friendly. Try local dishes but be cautious with spice levels.",
    details: ["Injera is the staple bread", "Many fasting days = vegetarian meals", "Street food can be risky for sensitive stomachs"]
  }
];

export default function TravelTips() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-highland overflow-hidden">
          <div className="absolute inset-0 bg-success/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Essential Travel Tips
              <span className="block">for Ethiopia</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Everything you need to know for a safe, enjoyable, and culturally respectful 
              journey through the cradle of humanity.
            </p>
          </div>
        </section>

        {/* Essential Tips Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Before You Go
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential information to help you prepare for your Ethiopian adventure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {travelTips.map((tip, index) => (
                <Card key={tip.title} className="p-6 shadow-card hover:shadow-warm transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <tip.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{tip.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {tip.content.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Practical Information
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional details to help you navigate Ethiopia with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {practicalInfo.map((info, index) => (
                <Card key={info.title} className="p-8 shadow-card">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{info.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{info.description}</p>
                  
                  <ul className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="bg-gradient-hero text-white p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Emergency Information</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Police</h3>
                    <p className="text-lg">991</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fire Service</h3>
                    <p className="text-lg">993</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Medical Emergency</h3>
                    <p className="text-lg">907</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Always inform your embassy or consulate of your travel plans and keep their contact information handy.
                  </p>
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