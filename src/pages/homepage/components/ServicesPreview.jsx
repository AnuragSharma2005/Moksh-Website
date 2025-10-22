import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
  {
    id: 1,
    icon: 'Globe',
    title: 'Website Development',
    description: 'Custom responsive websites built with modern technologies for optimal performance and user experience.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First'],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    imageAlt: 'Modern laptop displaying colorful website analytics dashboard with charts and graphs on screen',
    color: 'from-blue-500 to-purple-600',
    projects: '150+',
    startingPrice: '₹25,000'
  },
  {
    id: 2,
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    features: ['Native Performance', 'Cross Platform', 'App Store Ready', 'Push Notifications'],
    image: "https://images.unsplash.com/photo-1607270787560-406a02164403",
    imageAlt: 'Hands holding smartphone displaying modern mobile app interface with clean design and colorful elements',
    color: 'from-green-500 to-teal-600',
    projects: '80+',
    startingPrice: '₹50,000'
  },
  {
    id: 3,
    icon: 'ShoppingCart',
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions with payment integration, inventory management, and analytics.',
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
    image: "https://images.unsplash.com/photo-1502828854506-40046dd51e0f",
    imageAlt: 'Shopping cart icon on laptop keyboard with credit cards and packages representing e-commerce business',
    color: 'from-orange-500 to-red-600',
    projects: '60+',
    startingPrice: '₹40,000'
  },
  {
    id: 4,
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    imageAlt: 'Designer workspace with color palette swatches, sketches, and digital tablet showing UI design mockups',
    color: 'from-pink-500 to-purple-600',
    projects: '200+',
    startingPrice: '₹15,000'
  },
  {
    id: 5,
    icon: 'Shield',
    title: 'Government Platforms',
    description: 'Secure, compliant digital platforms designed specifically for government and public sector needs.',
    features: ['Security Compliance', 'Accessibility Standards', 'Data Protection', 'Scalable Architecture'],
    image: "https://images.unsplash.com/photo-1654588827084-b6f27735ba7d",
    imageAlt: 'Government building with digital overlay showing secure network connections and data protection symbols',
    color: 'from-indigo-500 to-blue-600',
    projects: '25+',
    startingPrice: '₹75,000'
  },
  {
    id: 6,
    icon: 'Settings',
    title: 'Maintenance & Support',
    description: '24/7 technical support and maintenance services to keep your digital assets running smoothly.',
    features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Performance Optimization'],
    image: "https://images.unsplash.com/photo-1589320843284-4b70884083a6",
    imageAlt: 'Technical support team monitoring multiple computer screens showing system performance and analytics',
    color: 'from-gray-500 to-gray-700',
    projects: '300+',
    startingPrice: '₹5,000/month'
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Digital <span className="text-primary">Services</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions designed to transform your business and drive growth. 
            From concept to deployment, we deliver excellence at every step.
          </p>
          
          {/* Service Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) =>
          <motion.div
            key={service?.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredService(service?.id)}
            onMouseLeave={() => setHoveredService(null)}
            className="group relative">

              <div className="glass-card rounded-xl overflow-hidden hover-lift transition-all duration-normal h-full">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                  src={service?.image}
                  alt={service?.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-normal group-hover:scale-110" />

                  <div className={`absolute inset-0 bg-gradient-to-br ${service?.color} opacity-80`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon name={service?.icon} size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Project Count */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">{service?.projects}</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredService === service?.id &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center">

                      <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-foreground"
                    asChild>

                        <Link to="/services">
                          View Details
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </motion.div>
                }
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service?.title}
                    </h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {service?.startingPrice}
                    </span>
                  </div>
                  
                  <p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service?.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service?.features?.map((feature, idx) =>
                  <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                  )}
                  </div>

                  {/* CTA */}
                  <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  asChild>

                    <Link to="/demo-request">
                      Get Started
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="text-center mt-16"
>
  <div className="glass-card rounded-2xl p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <h3 className="font-headline text-2xl font-bold text-white mb-4">
      Ready to Transform Your Business?
    </h3>
    <p className="font-body text-white mb-6 max-w-2xl mx-auto">
      Let's discuss your project requirements and create a custom solution that drives results.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        variant="default"
        size="lg"
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta"
        asChild
      >
        <Link to="/demo-request">
          <Icon name="Calendar" size={20} className="mr-2" />
          Schedule Consultation
        </Link>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border-white/30 text-white hover:bg-white/10"
        asChild
      >
        <Link to="/services">
          <Icon name="Eye" size={20} className="mr-2" />
          View All Services
        </Link>
      </Button>
    </div>
  </div>
</motion.div>
      </div>
    </section>);

};

export default ServicesPreview;