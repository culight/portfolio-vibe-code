import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Projects', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary font-sans selection:bg-primary selection:text-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter hover:text-secondary transition-colors">
            ALEX<span className="text-secondary">DEV</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium tracking-wide text-secondary hover:text-primary transition-colors"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile placeholder - keeping it simple for desktop-first prompt focus */}
          <div className="md:hidden text-xs text-secondary">
            MENU
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20 px-6 max-w-6xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm">© {new Date().getFullYear()} Alex Developer.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Github size={18} /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;