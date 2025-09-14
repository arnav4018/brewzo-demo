import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/story', label: 'Our Story' },
  { to: '/contact', label: 'Visit Us' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={className}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-burnt-orange ${
              isActive ? 'text-burnt-orange' : 'text-foreground/80'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/brewzoindias_profile_picture.jpg" alt="Brewzo Logo" className="h-8 w-8" />
          <span className="font-serif text-2xl font-bold text-coffee-brown">Brewzo</span>
        </NavLink>

        <NavLinks className="hidden items-center gap-6 md:flex" />

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <div className="p-4">
                <NavLink to="/" className="mb-8 flex items-center gap-2">
                  <img src="/brewzoindias_profile_picture.jpg" alt="Brewzo Logo" className="h-8 w-8" />
                  <span className="font-serif text-2xl font-bold text-coffee-brown">Brewzo</span>
                </NavLink>
                <NavLinks className="flex flex-col items-start gap-6" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
