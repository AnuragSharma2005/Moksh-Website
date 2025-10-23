import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Gradient and icon background mapping
  const getCardGradient = (color) => {
    const gradients = {
      blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
      purple: 'bg-gradient-to-br from-purple-500 to-purple-600', 
      green: 'bg-gradient-to-br from-green-500 to-green-600',
      orange: 'bg-gradient-to-br from-orange-500 to-orange-600',
      pink: 'bg-gradient-to-br from-pink-500 to-pink-600',
      teal: 'bg-gradient-to-br from-teal-500 to-teal-600',
      indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      gray: 'bg-gradient-to-br from-gray-500 to-gray-700'
    };
    return gradients[color] || 'bg-gradient-to-br from-blue-500 to-blue-600';
  };

  const getIconBg = (color) => {
    const backgrounds = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600', 
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      teal: 'bg-teal-100 text-teal-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      gray: 'bg-gray-100 text-gray-600'
    };
    return backgrounds[color] || 'bg-blue-100 text-blue-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-xl p-8 h-full transition-all duration-300 border border-border/50 hover:border-primary/30 hover:shadow-lg bg-white">
        
        {/* Service Icon & Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isHovered ? getCardGradient(service?.cardColor || 'blue') + ' text-white' : getIconBg(service?.cardColor || 'blue')
            }`}>
              <Icon name={service?.icon} size={32} />
            </div>
            {service?.isPopular && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                Popular
              </div>
            )}
          </div>

          {service?.badge && (
            <div className={`${getCardGradient(service?.cardColor || 'blue')} text-white text-xs font-medium px-3 py-1 rounded-full shadow-md`}>
              {service?.badge}
            </div>
          )}
        </div>

        {/* Service Content */}
        <div className="mb-6">
          <h3 className="font-headline text-xl font-bold text-foreground mb-3">
            {service?.title}
          </h3>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            {service?.description}
          </p>

          {/* Key Features */}
          <div className="space-y-2 mb-6">
            {service?.features?.slice(0, 3)?.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                <span className="font-body text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-3 text-sm">Technology Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {service?.technologies?.slice(0, 4)?.map((tech, idx) => (
              <span 
                key={idx}
                className="bg-muted/30 text-muted-foreground text-xs px-3 py-1 rounded-full font-medium border border-border/50"
              >
                {tech}
              </span>
            ))}
            {service?.technologies?.length > 4 && (
              <span className="text-xs text-muted-foreground font-medium">
                +{service?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Timeline */}
        {/* <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/20 rounded-lg border border-border/30">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Starting From</div>
            <div className="font-headline text-lg font-bold text-primary">
              {service?.startingPrice}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Timeline</div>
            <div className="font-medium text-foreground">
              {service?.timeline}
            </div>
          </div>
        </div> */}

        {/* CTA Buttons */}
        {/* <div className="space-y-3">
          <Button
            variant="default"
            size="default"
            fullWidth
            className={`${getCardGradient(service?.cardColor || 'blue')} hover:opacity-90 text-white font-medium shadow-md border-0`}
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Get Quote
          </Button>
          
          <Button
            variant="outline"
            size="default"
            fullWidth
            className="text-primary border-primary/30 hover:bg-primary/5"
          >
            <Icon name="Eye" size={16} className="mr-2" />
            View Portfolio
          </Button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
