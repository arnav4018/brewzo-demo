import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Facebook, Instagram, MapPin, Twitter } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";

const ContactPage = () => {
  return (
    <AnimatedPage>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground">Come Say Hello</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            We're waiting for you. Find us, follow us, and join the mischief.
          </p>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="font-serif">Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brewzo Cafe</p>
                <p>E-4/68, Arera Colony,</p>
                <p>Bhopal, Madhya Pradesh 462016</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="font-serif">Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Every Day</p>
                <p>9:00 AM - 11:00 PM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="font-bold text-primary text-2xl">#</span>
                  <span className="font-serif">Follow Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
                </div>
                <p className="mt-4 font-bold text-primary">#brewzoindia</p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 h-[400px] lg:h-auto w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.431181105914!2d77.4330333154015!3d23.22733798484966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4268aaaaaaab%3A0x1c73d653c2881b7!2sBrewzo%20Cafe!5e0!3m2!1sen!2sin!4v1683024313123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brewzo Cafe Location"
            ></iframe>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default ContactPage;
