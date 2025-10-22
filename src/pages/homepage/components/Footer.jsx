import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Website Development', path: '/services' },
        { name: 'Mobile App Development', path: '/services' },
        { name: 'E-commerce Solutions', path: '/services' },
        { name: 'UI/UX Design', path: '/services' },
        { name: 'Government Platforms', path: '/services' },
        { name: 'Maintenance & Support', path: '/services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Request Demo', path: '/demo-request' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', path: '/contact' },
        { name: 'Technology Stack', path: '/services' },
        { name: 'Digital Transformation', path: '/about' },
        { name: 'Government Solutions', path: '/services' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/mokshdigital',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/mokshdigital',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/mokshdigital',
      color: 'hover:text-blue-700'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/mokshdigital',
      color: 'hover:text-pink-600'
    },
    {
      name: 'YouTube',
      icon: 'Youtube',
      url: 'https://youtube.com/mokshdigital',
      color: 'hover:text-red-600'
    }
  ];

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Address',
      content: 'Tech Hub, Sector 62, Noida, Uttar Pradesh 201309, India'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      content: '+91 98765 43210'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'hello@mokshdigital.com'
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM IST'
    }
  ];

  const certifications = [
    {
      name: 'Government Authorized',
      icon: 'Shield',
      description: 'Certified Digital Partner'
    },
    {
      name: 'ISO 27001',
      icon: 'Lock',
      description: 'Security Certified'
    },
    {
      name: 'AWS Partner',
      icon: 'Cloud',
      description: 'Cloud Solutions'
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-moksha-gradient rounded-lg flex items-center justify-center shadow-subtle">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-soft"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl font-bold text-background">
                  Moksh Digital
                </span>
                <span className="font-accent text-sm text-background/70 tracking-wide">
                  Digital Liberation
                </span>
              </div>
            </Link>

            {/* Company Description */}
            <p className="font-body text-background/80 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. Your trusted partner 
              for digital transformation with government-authorized excellence.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="font-semibold text-background mb-3">Certifications</h4>
              {certifications?.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-trust/20 rounded-lg flex items-center justify-center">
                    <Icon name={cert?.icon} size={16} className="text-trust" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-background">{cert?.name}</div>
                    <div className="text-xs text-background/60">{cert?.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-8">
              {footerSections?.map((section, index) => (
                <div key={index}>
                  <h3 className="font-headline text-lg font-bold text-background mb-4">
                    {section?.title}
                  </h3>
                  <ul className="space-y-3">
                    {section?.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link?.path}
                          className="font-body text-background/70 hover:text-accent transition-colors duration-normal flex items-center space-x-2 group"
                        >
                          <Icon 
                            name="ArrowRight" 
                            size={14} 
                            className="opacity-0 group-hover:opacity-100 transition-opacity" 
                          />
                          <span>{link?.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-headline text-lg font-bold text-background mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo?.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={info?.icon} size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-background mb-1">{info?.title}</div>
                    <div className="text-sm text-background/70 leading-relaxed">{info?.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-background mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:bg-background/20 transition-all duration-normal hover-lift ${social?.color}`}
                    aria-label={`Follow us on ${social?.name}`}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 p-4 bg-background/5 rounded-lg border border-background/10">
              <h4 className="font-semibold text-background mb-2">Stay Updated</h4>
              <p className="text-sm text-background/70 mb-3">
                Get the latest updates on digital transformation trends.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded text-sm text-background placeholder-background/50 focus:outline-none focus:border-accent"
                />
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded text-sm font-medium hover:bg-accent/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-background/60">
              © {currentYear} Moksh Digital. All rights reserved. | 
              <span className="ml-1">Government Authorized Digital Service Provider</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/contact" 
                className="text-background/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/contact" 
                className="text-background/60 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/contact" 
                className="text-background/60 hover:text-accent transition-colors"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Government Badge */}
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="Shield" size={16} className="text-trust" />
              <span className="text-background/70">Government Authorized</span>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency Contact Strip */}
      <div className="bg-conversion">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-conversion-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span className="text-sm font-medium">24/7 Support: +91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} />
              <span className="text-sm font-medium">WhatsApp: +91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} />
              <span className="text-sm font-medium">Email: hello@mokshdigital.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;