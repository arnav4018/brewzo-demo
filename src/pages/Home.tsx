import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";

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

const instagramPosts = [
  "/How_about_One_sip_at_brewzo_and_your_mood_transfor.jpg",
  "/Its_always_sunny_side_up_at_brewzo_brewzoindia_bho.jpg",
  "/Morning_bliss_at_Brewzo_Experience_serene_breakfas.jpg",
  "/Photo_by_Brewzo_cafe_in_Brewzo_cafe.jpg",
  "/what_kind_of_books_do_you_read_shot_at_brewzoindia.jpg",
  "/Morning_miles_and_Coffee_smiles_with_genrunclub_Ou.jpg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

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
          className="absolute left-0 top-0 h-full w-full object-cover brightness-75"
          src="/768521885_8428de3f39_o.jpg"
          poster="/768521885_8428de3f39_o.jpg"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl font-black md:text-7xl lg:text-8xl"
          >
            Brewzo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg font-medium md:text-xl"
          >
            Specialty Coffee | Food | Mischief
          </motion.p>
          <NavLink to="/menu">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="mt-8">
                Explore Our Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </NavLink>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            More Than Just Coffee
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            At Brewzo, we believe coffee is a catalyst for creativity, connection, and a little bit of playful chaos. We're not just serving drinks; we're crafting experiences. Come for the brew, stay for the mischief.
          </p>
        </div>
      </section>

      {/* Featured Items */}
      <section>
        <div className="container mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">
            Curated with Mischief
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border-primary/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
                  <CardContent className="p-0">
                    <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">
            Join the #brewzoindia Tribe
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
            {instagramPosts.map((src, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={src} alt={`Instagram post ${index + 1}`} className="h-full w-full object-cover" />
              </motion.div>
            ))}
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
