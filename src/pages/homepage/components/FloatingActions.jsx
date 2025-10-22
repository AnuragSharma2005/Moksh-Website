import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210';
    const message = encodeURIComponent('Hi! I\'m interested in your digital services. Can we discuss my project requirements?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const floatingActions = [
    {
      id: 'whatsapp',
      icon: 'MessageCircle',
      label: 'WhatsApp Chat',
      onClick: handleWhatsAppClick,
      className: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl',
      tooltip: 'Chat on WhatsApp'
    },
    {
      id: 'call',
      icon: 'Phone',
      label: 'Call Now',
      onClick: handleCallClick,
      className: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl',
      tooltip: 'Call +91 98765 43210'
    },
    {
      id: 'scroll-top',
      icon: 'ArrowUp',
      label: 'Scroll to Top',
      onClick: scrollToTop,
      className: 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl',
      tooltip: 'Back to Top',
      showOnScroll: true
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3"
        >
          {floatingActions?.map((action, index) => {
            // Skip scroll-to-top button if not scrolled enough
            if (action?.showOnScroll && !isVisible) return null;
            
            return (
              <motion.div
                key={action?.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setShowTooltip(action?.id)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {showTooltip === action?.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
                    >
                      {action?.tooltip}
                      <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Action Button */}
                <motion.button
                  onClick={action?.onClick}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-normal hover-lift ${action?.className}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={action?.label}
                >
                  <Icon name={action?.icon} size={24} />
                </motion.button>
                {/* Pulse Animation for WhatsApp */}
                {action?.id === 'whatsapp' && (
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
                )}
              </motion.div>
            );
          })}

          {/* Emergency Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">We're Online!</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Get instant support for your digital transformation needs.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="xs"
                onClick={handleWhatsAppClick}
                className="flex-1"
              >
                <Icon name="MessageCircle" size={12} className="mr-1" />
                Chat
              </Button>
              <Button
                variant="outline"
                size="xs"
                onClick={handleCallClick}
                className="flex-1"
              >
                <Icon name="Phone" size={12} className="mr-1" />
                Call
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;