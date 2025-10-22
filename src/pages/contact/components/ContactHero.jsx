import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative bg-moksha-gradient py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="MapPin" size={16} className="text-accent" />
            <span className="text-sm font-medium text-white">Multiple Ways to Connect</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Start Your
            <span className="block text-accent">Digital Journey</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Ready to transform your business? We're here to help with immediate support, 
            detailed consultations, and everything in between. Choose how you'd like to connect.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-cta"
              iconName="Phone"
              iconPosition="left"
            >
              Call Now: +91 98765 43210
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-cta"
              iconName="MessageCircle"
              iconPosition="left"
            >
              WhatsApp Chat
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span className="text-sm">Government Authorized</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span className="text-sm">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;