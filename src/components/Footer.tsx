import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <NavLink to="/" className="mb-4 flex items-center gap-2">
              <img src="/logo.svg" alt="Brewzo Logo" className="h-10 w-10" />
              <span className="font-serif text-3xl font-bold text-coffee-brown">Brewzo</span>
            </NavLink>
            <p className="font-serif text-lg text-coffee-brown/80">Specialty Coffee | Food | Mischief</p>
          </div>

          <div className="md:text-center">
            <h3 className="mb-4 font-serif text-xl font-bold text-coffee-brown">Visit Us</h3>
            <p className="text-coffee-brown/80">E-4/68, Arera Colony,</p>
            <p className="text-coffee-brown/80">Bhopal, Madhya Pradesh 462016</p>
            <p className="mt-2 text-coffee-brown/80">9:00 AM to 11:00 PM Daily</p>
          </div>

          <div className="md:text-right">
            <h3 className="mb-4 font-serif text-xl font-bold text-coffee-brown">Stay Connected</h3>
            <div className="flex justify-start gap-4 md:justify-end">
              <a href="#" className="text-coffee-brown/80 hover:text-burnt-orange transition-colors"><Instagram /></a>
              <a href="#" className="text-coffee-brown/80 hover:text-burnt-orange transition-colors"><Twitter /></a>
              <a href="#" className="text-coffee-brown/80 hover:text-burnt-orange transition-colors"><Facebook /></a>
            </div>
            <p className="mt-4 font-bold text-burnt-orange">#brewzoindia</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-coffee-brown/60">
          <p>&copy; {new Date().getFullYear()} Brewzo Coffee House. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
