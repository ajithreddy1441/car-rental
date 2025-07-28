import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
            style={{ backgroundColor: '#f9dd17', color: '#25344b' }}
          >
            G
          </div>
          <span className="text-xl font-bold text-white">
            GOZOLT
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#f9dd17' }}
              ></span>
            </a>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white hover:text-yellow-400 transition-colors duration-300 px-4 py-2 font-medium">
            Sign In
          </button>
          <button 
            className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#f9dd17', color: '#25344b' }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="pt-4 pb-2 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-white hover:text-yellow-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 space-y-2">
            <button className="block w-full text-left text-white hover:text-yellow-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10">
              Sign In
            </button>
            <button 
              className="block w-full text-left px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              style={{ backgroundColor: '#f9dd17', color: '#25344b' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}