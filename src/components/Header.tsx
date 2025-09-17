import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Our Story' },
  { to: '/contact', label: 'Visit Us' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ className, mobile = false }: { className?: string; mobile?: boolean }) => (
    <nav className={className}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            mobile
              ? `block py-3 text-lg font-light transition-colors duration-200 ${
                  isActive 
                    ? 'text-amber-700 font-medium' 
                    : 'text-stone-700 hover:text-amber-700'
                }`
              : `relative text-sm font-light tracking-wide transition-all duration-200 group ${
                  isActive 
                    ? 'text-amber-700' 
                    : 'text-stone-600 hover:text-amber-700'
                }`
          }
        >
          {link.label}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full w-0" />
          )}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/brewzoindias_profile_picture.jpg" 
                alt="Brewzo Logo" 
                className="h-10 w-10 rounded-full object-cover transition-transform duration-200 group-hover:scale-105" 
              />
              <div className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </div>
            <span className="font-serif text-2xl font-light text-stone-800 tracking-wide">
              Brewzo
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <NavLinks className="hidden items-center gap-8 md:flex" />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-10 w-10 hover:bg-amber-50 text-stone-600"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] bg-white border-l border-stone-200"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between py-6 border-b border-stone-100">
                    <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                      <img 
                        src="/brewzoindias_profile_picture.jpg" 
                        alt="Brewzo Logo" 
                        className="h-8 w-8 rounded-full object-cover" 
                      />
                      <span className="font-serif text-xl font-light text-stone-800">
                        Brewzo
                      </span>
                    </NavLink>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 hover:bg-stone-100"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <div className="py-8">
                    <NavLinks className="flex flex-col space-y-1" mobile />
                  </div>
                  
                  {/* Mobile Footer */}
                  <div className="mt-auto py-6 border-t border-stone-100">
                    <p className="text-xs text-stone-500 text-center">
                      Specialty Coffee | Food | Mischief
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
