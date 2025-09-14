import { Card } from "@/components/ui/card";
import AnimatedPage from "@/components/AnimatedPage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const StoryPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <AnimatedPage>
      <section ref={heroRef} className="relative py-32 md:py-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/jen-p-FoG8lotg7AA-unsplash.jpg')",
            y,
            // Scale the image slightly to prevent showing edges during parallax
            scale: 1.1,
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative mx-auto text-center text-white">
          <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">The Mischief Philosophy</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            It all started with a simple idea: what if a coffee shop could be more?
          </p>
        </div>
      </section>

      <section className="container mx-auto -mt-24">
        <Card className="p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold">Our Origin Story</h2>
              <p className="mt-4 text-muted-foreground">
                Brewzo was born in the heart of Bhopal, not from a business plan, but from a passion for exceptional coffee and a desire to shake things up. We saw a world of cookie-cutter cafes and thought, "We can do better. We can be weirder."
              </p>
              <p className="mt-4 text-muted-foreground">
                We're a team of coffee purists and creative rebels. We respect the bean, but we're not afraid to experiment. Our journey is about exploring the endless possibilities of flavor and creating a space where everyone feels welcome to be their authentic, slightly mischievous selves.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold">What is "Mischief"?</h2>
              <p className="mt-4 text-muted-foreground">
                To us, "Mischief" isn't about causing trouble. It's about playful curiosity. It's the unexpected spice in your mocha, the surprising art on the wall, the spontaneous conversations that spark between strangers.
              </p>
              <p className="mt-4 text-muted-foreground">
                It's our commitment to being unconventional, to challenging the status quo of what a coffee house should be. It's in our unique flavor experiments, our community-driven events, and the vibrant, electric atmosphere we cultivate every day.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="container mx-auto">
        <h2 className="text-center font-serif text-4xl font-bold">Meet the Brew Crew</h2>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg aspect-square"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/coffee-making.jpg" alt="A barista carefully preparing a coffee" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg aspect-square"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/fresh-beans.jpg" alt="A handful of freshly roasted coffee beans" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg aspect-square"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/latte-art.jpg" alt="A cup of coffee with detailed latte art" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default StoryPage;
