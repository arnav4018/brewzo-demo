import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
import CircularGallery from "@/components/CircularGallery";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const featuredItems = [
  {
    name: "Mischievous Mocha",
    description: "A rich espresso with dark chocolate and a hint of chili.",
    image: "/How_about_One_sip_at_brewzo_and_your_mood_transfor.jpg",
  },
  {
    name: "Avocado Smash",
    description: "Sourdough toast with fresh avocado, feta, and a sprinkle of mischief.",
    image: "/Its_always_sunny_side_up_at_brewzo_brewzoindia_bho.jpg",
  },
  {
    name: "The Alchemist's Cold Brew",
    description: "Slow-dripped for 18 hours, infused with citrus and spice.",
    image: "/Something_you_need_to_watch_out_with_us_We_are_ope.jpg",
  },
];

const galleryItems = [
  { image: "/How_about_One_sip_at_brewzo_and_your_mood_transfor.jpg", text: "Mood Transformer" },
  { image: "/Its_always_sunny_side_up_at_brewzo_brewzoindia_bho.jpg", text: "Sunny Side Up" },
  { image: "/Morning_bliss_at_Brewzo_Experience_serene_breakfas.jpg", text: "Morning Bliss" },
  { image: "/Photo_by_Brewzo_cafe_in_Brewzo_cafe.jpg", text: "Cafe Vibes" },
  { image: "/what_kind_of_books_do_you_read_shot_at_brewzoindia.jpg", text: "Book & Coffee" },
  { image: "/Morning_miles_and_Coffee_smiles_with_genrunclub_Ou.jpg", text: "Morning Miles" },
];


const HomePage = () => {
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.video
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
          src="/768521885_8428de3f39_o.jpg"
          poster="/768521885_8428de3f39_o.jpg"
        />
        {/* Enhanced gradient overlay for better text visibility */}
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-amber-900/60 via-orange-900/50 to-red-900/40" />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-amber-950/30 to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-amber-100 via-orange-200 to-amber-50 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Brewzo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl font-medium text-amber-50 drop-shadow-lg tracking-wide"
          >
            Specialty Coffee | Food | Mischief
          </motion.p>
          <NavLink to="/contact">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="mt-10 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-base font-medium"
              >
                Visit Our Hideout <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </NavLink>
          
          {/* Decorative elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-300/50 to-transparent" />
            <div className="w-2 h-2 bg-amber-400 rounded-full mx-auto -mt-1 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* More Than Just Coffee - Minimal Design */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              More Than Just Coffee
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed"
            >
              At Brewzo, we believe coffee is a catalyst for creativity, connection, and a little bit of playful chaos. 
              We're crafting experiences that go beyond the cup.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group p-6 rounded-2xl border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-lg">☕</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Artisan Coffee Culture</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From single-origin beans to innovative brewing techniques, we celebrate the art of coffee-making with precision and passion.
                </p>
                <div className="text-sm text-muted-foreground">
                  Single Origin • Cold Brew • Latte Art
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group p-6 rounded-2xl border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-lg">🍽️</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Culinary Excellence</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our kitchen crafts dishes where traditional meets innovative, using quality ingredients to tell stories through flavor.
                </p>
                <div className="text-sm text-muted-foreground">
                  Farm Fresh • Artisan Bread • Global Fusion
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group p-6 rounded-2xl border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-lg">🎨</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Creative Space</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A sanctuary for artists and dreamers, designed with cozy nooks and inspiring atmosphere that nurtures creativity.
                </p>
                <div className="text-sm text-muted-foreground">
                  Art Gallery • Book Club • Open Mic
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group p-6 rounded-2xl border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-lg">👥</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Community Hub</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  More than a café—a meeting place where connections flourish and communities grow, from business to friendship.
                </p>
                <div className="text-sm text-muted-foreground">
                  Events • Workshops • Networking
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group p-6 rounded-2xl border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-lg">🌱</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Sustainable Practices</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Committed to environmental responsibility through ethical sourcing and supporting local communities.
                </p>
                <div className="text-sm text-muted-foreground">
                  Fair Trade • Eco-Friendly • Local Support
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group p-6 rounded-2xl border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-lg">✨</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">The Mischief Factor</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We inject playfulness into every experience—from surprise flavors to themed events that create lasting memories.
                </p>
                <div className="text-sm text-muted-foreground">
                  Surprise Flavors • Themed Events • Fun Vibes
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground italic">
              Come for the brew, stay for the mischief, leave with memories
            </p>
          </motion.div>
        </div>
      </section>

      {/* ScrollStack Cards */}
      <section className="relative">
        <ScrollStack 
          useWindowScroll={true} 
          className="min-h-screen"
          itemDistance={150}
          itemStackDistance={20}
          stackPosition="30%"
          scaleEndPosition="20%"
          baseScale={0.9}
        >
          <ScrollStackItem itemClassName="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src={featuredItems[0].image} 
                alt={featuredItems[0].name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-lg flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-orange-900 mb-4">{featuredItems[0].name}</h2>
                <p className="text-orange-800 text-base md:text-lg leading-relaxed">{featuredItems[0].description}</p>
                <div className="mt-4 inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Signature Brew
                </div>
              </div>
            </div>
          </ScrollStackItem>
          
          <ScrollStackItem itemClassName="bg-gradient-to-br from-stone-50 to-amber-50 border-l-4 border-amber-400">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src={featuredItems[1].image} 
                alt={featuredItems[1].name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-lg flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-amber-900 mb-4">{featuredItems[1].name}</h2>
                <p className="text-amber-800 text-base md:text-lg leading-relaxed">{featuredItems[1].description}</p>
                <div className="mt-4 inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Fresh & Healthy
                </div>
              </div>
            </div>
          </ScrollStackItem>
          
          <ScrollStackItem itemClassName="bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-yellow-600">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src={featuredItems[2].image} 
                alt={featuredItems[2].name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-lg flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-yellow-900 mb-4">{featuredItems[2].name}</h2>
                <p className="text-yellow-800 text-base md:text-lg leading-relaxed">{featuredItems[2].description}</p>
                <div className="mt-4 inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Artisan Craft
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>

      {/* Interactive Gallery */}
      <section className="bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">
            Join the #brewzoindia Tribe
          </h2>
          <p className="text-center text-muted-foreground mt-4 mb-8">
            Scroll through our interactive gallery to experience the Brewzo vibe
          </p>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery 
              items={galleryItems}
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollEase={0.02}
              font="bold 24px Figtree"
            />
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section>
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl rounded-lg bg-muted/50 p-8 shadow-xl md:p-12">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left">
              <div>
                <h3 className="font-serif text-2xl font-bold">Visit Our Hideout</h3>
                <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="text-muted-foreground">E-4/68, Arera Colony, Bhopal</p>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">Hours of Mischief</h3>
                <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                  <Clock className="h-6 w-6 text-primary" />
                  <p className="text-muted-foreground">9:00 AM - 11:00 PM, Every Single Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default HomePage;
