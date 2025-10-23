import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Briefcase' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Team', path: '/team', icon: 'Users' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path || (path === '/homepage' && location?.pathname === '/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-medium border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover-lift focus-ring rounded-md p-2 -ml-2"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-moksha-gradient rounded-lg flex items-center justify-center shadow-subtle">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-soft"></div>
            </div>
            <div className="flex flex-col bg-blue-600 rounded-md px-3 py-1">
  <span className="font-headline text-lg font-bold text-white">
    Moksh Digital
  </span>
  <span className="font-accent text-xs text-white/90 tracking-wide">
    Digital Liberation
  </span>
</div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-normal hover-lift focus-ring ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-subtle'
                    : 'text-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <Button
                variant="default"
                size="sm"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground font-cta"
                asChild
              >
                <Link to="/demo-request">
                  Request Demo
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted focus-ring"
              aria-label="Toggle navigation menu"
            >
              <Icon 
                name={isMenuOpen ? 'X' : 'Menu'} 
                size={24} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border shadow-elevated">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-normal ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-subtle'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  size="default"
                  fullWidth
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground font-cta"
                  asChild
                >
                  <Link to="/demo-request" onClick={closeMenu}>
                    Request Demo
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Government Authorization Badge - Floating */}
      <div className="hidden xl:block fixed top-20 right-6 z-40">
        <div className="glass-auth rounded-lg p-3 max-w-xs hover-scale cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
              <Icon name="Shield" size={16} className="text-trust-foreground" />
            </div>
            {/* <div>
              <p className="text-xs font-semibold text-foreground">Government Authorized</p>
              <p className="text-xs text-muted-foreground">Digital Partner</p>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;