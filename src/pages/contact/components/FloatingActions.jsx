import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAction, setActiveAction] = useState(null);

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

  const floatingActions = [
    {
      id: 'whatsapp',
      icon: 'MessageCircle',
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white',
      action: () => window.open('https://wa.me/919876543210?text=Hi! I need help with digital services.', '_blank'),
      tooltip: 'Chat on WhatsApp'
    },
    {
      id: 'call',
      icon: 'Phone',
      label: 'Call',
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-white',
      action: () => window.open('tel:+919876543210', '_self'),
      tooltip: 'Call Now'
    },
    {
      id: 'email',
      icon: 'Mail',
      label: 'Email',
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-white',
      action: () => window.open('mailto:hello@mokshdigital.app?subject=Digital Services Inquiry', '_self'),
      tooltip: 'Send Email'
    }
  ];

  const handleActionClick = (action) => {
    setActiveAction(action?.id);
    action?.action();
    
    // Reset active state after animation
    setTimeout(() => {
      setActiveAction(null);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Floating Action Buttons */}
      {floatingActions?.map((action, index) => (
        <div key={action?.id} className="relative group">
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal pointer-events-none">
            <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-elevated">
              {action?.tooltip}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-foreground border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => handleActionClick(action)}
            className={`w-14 h-14 rounded-full ${action?.color} ${action?.textColor} shadow-elevated hover-lift focus-ring transition-all duration-normal ${
              activeAction === action?.id ? 'scale-110' : 'scale-100'
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: isVisible ? 'slideInRight 0.3s ease-out forwards' : 'none'
            }}
            aria-label={action?.tooltip}
          >
            <Icon 
              name={action?.icon} 
              size={24} 
              className={`transition-transform duration-normal ${
                activeAction === action?.id ? 'scale-110' : 'scale-100'
              }`}
            />
          </button>

          {/* Ripple Effect */}
          {activeAction === action?.id && (
            <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
          )}
        </div>
      ))}
      {/* Emergency Contact Badge */}
      <div className="mt-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-elevated max-w-xs">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
          <span className="text-xs font-medium text-foreground">Available Now</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Need immediate assistance? Our team is ready to help with your digital transformation needs.
        </p>
        <Button
          variant="outline"
          size="xs"
          className="w-full mt-2 text-xs"
          iconName="Zap"
          iconPosition="left"
          onClick={() => window.open('tel:+919876543210', '_self')}
        >
          Priority Support
        </Button>
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-12 h-12 bg-muted hover:bg-muted/80 text-foreground rounded-full shadow-medium hover-lift focus-ring transition-all duration-normal mt-4"
        aria-label="Scroll to top"
      >
        <Icon name="ArrowUp" size={20} />
      </button>
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActions;