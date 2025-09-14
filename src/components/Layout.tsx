import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useSmoothScroll();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
