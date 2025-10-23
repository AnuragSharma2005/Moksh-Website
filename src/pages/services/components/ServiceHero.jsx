import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-moksha-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-secondary/30 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="Shield" size={16} className="text-accent" />
              <span className="text-white text-sm font-medium">Government Authorized Digital Partner</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Services That
              <span className="block text-accent">Transform Businesses</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From concept to deployment, we deliver comprehensive digital solutions that drive growth, enhance user experience, and establish your competitive advantage in the digital marketplace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta px-8 py-4"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Schedule Consultation
            </Button>
            
            {/* <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4"
            >
              <Icon name="Play" size={20} className="mr-2" />
              View Our Work
            </Button> */}
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "5+", label: "Years Experience" }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-headline text-2xl md:text-3xl font-bold text-accent mb-2">
                  {stat?.number}
                </div>
                <div className="font-body text-sm text-white/80">
                  {stat?.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;