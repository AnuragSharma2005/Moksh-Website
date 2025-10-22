import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced color mapping for better visual appeal
  const getCardGradient = (color) => {
    const gradients = {
      blue: 'bg-card-gradient-blue',
      purple: 'bg-card-gradient-purple', 
      green: 'bg-card-gradient-green',
      orange: 'bg-card-gradient-orange',
      pink: 'bg-card-gradient-pink',
      teal: 'bg-card-gradient-teal',
      indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      gray: 'bg-gradient-to-br from-gray-500 to-gray-700'
    };
    return gradients?.[color] || 'bg-card-gradient-blue';
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
    return backgrounds?.[color] || 'bg-blue-100 text-blue-600';
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
      <div className="card-interactive rounded-xl p-8 h-full transition-all duration-normal border border-border/50 hover:border-primary/30 hover:shadow-elevated bg-white">
        {/* Service Icon & Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-normal ${
              isHovered ? getCardGradient(service?.cardColor || 'blue') + ' text-white' : getIconBg(service?.cardColor || 'blue')
            }`}>
              <Icon 
                name={service?.icon} 
                size={32} 
                className="transition-colors duration-normal" 
              />
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
                className="bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-xs px-3 py-1 rounded-full font-medium border border-border/50 hover-lift"
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
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-r from-muted/30 to-muted/20 rounded-lg border border-border/30">
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
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button
            variant="default"
            size="default"
            fullWidth
            className={`${getCardGradient(service?.cardColor || 'blue')} hover:opacity-90 text-white font-medium shadow-md hover-lift border-0`}
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Get Quote
          </Button>
          
          <Button
            variant="outline"
            size="default"
            fullWidth
            className="text-primary border-primary/30 hover:bg-primary/5 hover-lift"
          >
            <Icon name="Eye" size={16} className="mr-2" />
            View Portfolio
          </Button>
        </div>

        {/* Enhanced Hover Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 ${getCardGradient(service?.cardColor || 'blue')} backdrop-blur-sm rounded-xl p-8 flex flex-col justify-center`}
          style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        >
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Icon name={service?.icon} size={32} className="text-white" />
            </div>
            <h4 className="font-headline text-lg font-bold mb-4">
              {service?.title} Process
            </h4>
            <div className="space-y-3 text-sm">
              {service?.process?.map((step, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center text-xs font-bold backdrop-blur-sm">
                    {idx + 1}
                  </div>
                  <span className="text-left">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;