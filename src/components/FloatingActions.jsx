import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);
  const [dismissedActions, setDismissedActions] = useState({});

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
    const phoneNumber = '+919877653180';
    const message = encodeURIComponent(
      "Hi! I'm interested in your digital services. Can we discuss my project requirements?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919877653180', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:mokshdigitalco@gmail.com?subject=Inquiry About Digital Services', '_self');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const dismissAction = (actionId) => {
    setDismissedActions((prev) => ({
      ...prev,
      [actionId]: true,
    }));
  };

  const floatingActions = [
    {
      id: 'whatsapp',
      icon: 'MessageCircle',
      label: 'WhatsApp Chat',
      onClick: handleWhatsAppClick,
      className: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl',
      tooltip: 'Chat on WhatsApp',
      dismissible: true,
    },
    {
      id: 'call',
      icon: 'Phone',
      label: 'Call Now',
      onClick: handleCallClick,
      className: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl',
      tooltip: 'Call +91 98776 53180',
      dismissible: true,
    },
    {
      id: 'email',
      icon: 'Mail',
      label: 'Email Us',
      onClick: handleEmailClick,
      className: 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-xl',
      tooltip: 'Send Email',
      dismissible: true,
    },
    {
      id: 'scroll-top',
      icon: 'ArrowUp',
      label: 'Scroll to Top',
      onClick: scrollToTop,
      className: 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl',
      tooltip: 'Back to Top',
      showOnScroll: true,
      dismissible: false,
    },
  ];

  const visibleActions = floatingActions.filter((action) => {
    if (dismissedActions[action.id]) return false;
    if (action.showOnScroll && !isVisible) return false;
    return true;
  });

  return (
    <AnimatePresence>
      {isVisible && visibleActions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3"
        >
          {visibleActions.map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setShowTooltip(action.id)}
              onMouseLeave={() => setShowTooltip(null)}
            >
              {/* Dismiss Button */}
              {action.dismissible && (
                <motion.button
                  onClick={() => dismissAction(action.id)}
                  className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name="X" size={12} />
                </motion.button>
              )}

              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip === action.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
                  >
                    {action.tooltip}
                    <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Button */}
             <motion.button
                onClick={action.onClick}
                className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-normal hover-lift ${action.className}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={action.label}
              >
                <Icon name={action.icon} size={24} />
              </motion.button>

              {/* Pulse Animation for WhatsApp */}
              {action.id === 'whatsapp' && (
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;
