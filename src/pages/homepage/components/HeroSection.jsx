import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const services = [
  {
    icon: 'Globe',
    title: 'Website Development',
    description: 'Custom responsive websites'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Apps',
    description: 'iOS & Android applications'
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description: 'Online store solutions'
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'User-centered design'
  }];


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-moksha-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left">

            {/* Government Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-trust/10 backdrop-blur-sm border border-trust/20 rounded-full px-4 py-2 mb-6">

              <Icon name="Shield" size={16} className="text-trust" />
              <span className="text-sm font-medium text-trust">Government Authorized Digital Partner</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">

              Your Digital
              <span className="block text-accent animate-pulse-soft">Transformation</span>
              Partner
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">

              Empowering businesses with cutting-edge digital solutions. From websites to mobile apps, 
              we transform your vision into digital reality with government-authorized excellence.
            </motion.p>

            {/* Service Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">

              {services?.map((service, index) =>
              <div
                key={index}
                className="glass-card rounded-lg p-4 text-center hover-scale cursor-pointer">

                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon name={service?.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="font-medium text-white text-sm mb-1">{service?.title}</h3>
                  <p className="text-xs text-white/70">{service?.description}</p>
                </div>
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Button
                variant="default"
                size="lg"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground font-cta shadow-elevated hover-lift"
                asChild>

                <Link to="/demo-request">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Request Free Demo
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-medium hover-lift"
                asChild>

                <Link to="/services">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-white/80">

              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span className="text-sm">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} />
                <span className="text-sm">100% Success Rate</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative">

            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10 glass-card rounded-2xl overflow-hidden shadow-elevated hover-lift">
                <Image
                  src="https://images.unsplash.com/photo-1531537264351-c1952d1db1f5"
                  alt="Modern office workspace with diverse team collaborating on digital projects using laptops and tablets"
                  className="w-full h-96 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Success Metrics */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -top-4 -left-4 glass-auth rounded-lg p-4 z-20">

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-success-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">98%</p>
                    <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute -bottom-4 -right-4 glass-auth rounded-lg p-4 z-20">

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">24/7</p>
                    <p className="text-xs text-muted-foreground">Support Available</p>
                  </div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-soft"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float"></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">

        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}>

            <Icon name="ChevronDown" size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;