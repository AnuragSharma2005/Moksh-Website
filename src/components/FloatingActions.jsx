import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const RadialFloatingMenuRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { id: 'top', icon: 'ArrowUp', label: 'Top', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), color: 'bg-primary hover:bg-primary/90' },
    { id: 'whatsapp', icon: 'MessageCircle', label: 'WhatsApp', onClick: () => window.open('https://wa.me/919877653180', '_blank'), color: 'bg-green-500 hover:bg-green-600' },
    { id: 'call', icon: 'Phone', label: 'Call', onClick: () => window.open('tel:+919877653180', '_self'), color: 'bg-blue-500 hover:bg-blue-600' },
    { id: 'email', icon: 'Mail', label: 'Email', onClick: () => window.open('mailto:mokshdigitalco@gmail.com', '_self'), color: 'bg-purple-500 hover:bg-purple-600' },
  ];

  const createVerticalButtons = (actions, spacing) => {
    return actions.map((action, index) => {
      const x = 0; // horizontally same
      const y = -(index + 1) * spacing; // vertically up
      return (
        <motion.button
          key={action.id}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ x, y, opacity: 1, scale: 1 }}
          exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          onClick={action.onClick}
          className={`absolute w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${action.color}`}
          title={action.label}
        >
          <Icon name={action.icon} size={24} />
        </motion.button>
      );
    });
  };

  return (
    <div className="fixed bottom-12 right-8 sm:bottom-6 sm:right-4 z-50"> {/* Responsive position */}
      <div className="relative w-16 h-16">
        <AnimatePresence>
          {isOpen && createVerticalButtons(actions, 90)}
        </AnimatePresence>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform"
          whileTap={{ scale: 0.95 }}
        >
          <Icon name="MessageCircle" size={28} />
        </motion.button>
      </div>
    </div>
  );
};

export default RadialFloatingMenuRight;
