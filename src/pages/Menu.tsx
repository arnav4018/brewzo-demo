import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedPage from "@/components/AnimatedPage";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
  image?: string;
};

const menuData: Record<string, MenuItem[]> = {
  "Hot Coffee": [
    { name: "Espresso", description: "A concentrated coffee brew.", price: "₹120" },
    { name: "Americano", description: "Espresso with hot water.", price: "₹150" },
    { name: "Cappuccino", description: "Espresso, steamed milk, and foam.", price: "₹180" },
    { name: "Latte", description: "Espresso with a lot of steamed milk.", price: "₹180" },
    { name: "Mischievous Mocha", description: "Espresso, dark chocolate, and a hint of chili.", price: "₹220", featured: true, image: "/jen-p-FoG8lotg7AA-unsplash.jpg" },
  ],
  "Cold Brew": [
    { name: "Classic Cold Brew", description: "Smooth, low-acid coffee steeped for 18 hours.", price: "₹200" },
    { name: "Nitro Cold Brew", description: "Infused with nitrogen for a creamy head.", price: "₹250" },
    { name: "The Alchemist's Cold Brew", description: "Slow-dripped and infused with citrus and spice.", price: "₹280", featured: true, image: "/laura-adai-MpKiQTIJTP8-unsplash.jpg" },
  ],
  "Brewzo Signatures": [
    { name: "Orange Zest Affogato", description: "A scoop of vanilla ice cream drowned in a shot of hot espresso and orange zest.", price: "₹250" },
    { name: "Spiced Turmeric Latte", description: "An earthy, warming blend of turmeric, spices, and steamed milk.", price: "₹200" },
    { name: "Rose Cardamom Kiss", description: "A fragrant latte with notes of rose and cardamom.", price: "₹220" },
  ],
  "Food": [
    { name: "Avocado Smash", description: "Sourdough toast with fresh avocado, feta, and a sprinkle of mischief.", price: "₹350", featured: true, image: "/Every_bite_tells_a_story_of_cheesy_indulgence_and_.jpg" },
    { name: "Mushroom & Truffle Croissant", description: "Flaky croissant filled with creamy mushrooms and truffle oil.", price: "₹300" },
    { name: "Spicy Paneer Sandwich", description: "Grilled sandwich with a spicy paneer filling and mint chutney.", price: "₹280" },
  ],
};

const MenuPage = () => {
  return (
    <AnimatedPage>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground">Our Menu</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            A carefully curated list of our finest brews and bites, each with a touch of Brewzo's signature mischief.
          </p>
        </div>
      </section>

      <section className="container mx-auto -mt-20">
        <Tabs defaultValue="Hot Coffee" className="w-full">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4">
              {Object.keys(menuData).map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
          </div>
          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Card key={item.name} className="flex flex-col">
                    {item.featured && item.image && (
                      <img src={item.image} alt={item.name} className="aspect-[4/3] w-full rounded-t-lg object-cover" />
                    )}
                    <CardHeader>
                      <CardTitle className="flex justify-between items-baseline">
                        <span className="font-serif">{item.name}</span>
                        <span className="text-lg font-sans font-semibold text-primary">{item.price}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </AnimatedPage>
  );
};

export default MenuPage;
