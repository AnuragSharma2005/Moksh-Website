import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactMethods = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.open('https://wa.me/919876543210?text=Hi! I need help with my digital project.', '_blank')
    },
    {
      id: 'phone',
      label: 'Call Now',
      icon: 'Phone',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => window.open('tel:+919876543210', '_self')
    },
    {
      id: 'email',
      label: 'Email',
      icon: 'Mail',
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => window.open('mailto:hello@mokshdigital.com?subject=Demo Request Inquiry', '_self')
    }
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="mb-4 space-y-3">
          {contactMethods?.map((method, index) => (
            <div
              key={method?.id}
              className="animate-slide-up opacity-0"
              style={{
                animation: `slide-up 0.3s ease-out ${index * 0.1}s forwards`
              }}
            >
              <button
                onClick={method?.action}
                className={`${method?.color} text-white p-3 rounded-full shadow-elevated hover-lift transition-all duration-300 flex items-center space-x-2 group`}
              >
                <Icon name={method?.icon} size={20} />
                <span className="text-sm font-medium whitespace-nowrap pr-1">
                  {method?.label}
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        className={`w-14 h-14 rounded-full shadow-elevated transition-all duration-300 flex items-center justify-center hover-lift ${
          isExpanded
            ? 'bg-error hover:bg-error/90 text-error-foreground rotate-45'
            : 'bg-primary hover:bg-primary/90 text-primary-foreground'
        }`}
        aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
      >
        <Icon 
          name={isExpanded ? 'X' : 'Headphones'} 
          size={24} 
          className="transition-transform duration-300"
        />
      </button>
      {/* Pulse Animation for Main Button */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default FloatingActions;