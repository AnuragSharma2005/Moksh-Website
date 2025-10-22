import React from 'react';
import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const MissionVisionSection = () => {
  const missionVisionData = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: 'Target',
      content: `To liberate businesses from digital limitations and guide them toward technological enlightenment. We believe that behind every website and app is a business dream waiting to flourish, and we're here to make that transformation possible.`,
      highlights: [
        'Digital Liberation for All Businesses',
        'Technology as a Pathway to Growth',
        'Empowering Dreams Through Innovation',
      ],
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: 'Eye',
      content: `To become the premier digital transformation partner that businesses trust for their journey from digital constraints to technological freedom. We envision a world where every organization can harness the full power of digital innovation.`,
      highlights: [
        'Premier Digital Transformation Hub',
        'Trusted Technology Partnership',
        'Universal Digital Empowerment',
      ],
    },
  ];

  return (
    <section className="mt-20 py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-4">
            Mission & Vision
          </h2>
          <p className="text-lg text-black/80 max-w-3xl mx-auto">
            Moksh - meaning liberation in Sanskrit - reflects our core purpose of freeing businesses from digital limitations
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {missionVisionData.map((item, idx) => (
            <motion.div
              key={item.id}
              className="glass-card rounded-xl p-12 shadow-lg hover:shadow-2xl bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-300 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-12 h-12 bg-moksha-gradient rounded-lg flex items-center justify-center mr-4"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon name={item.icon} size={24} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-headline font-bold text-black">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <p className="text-black mb-6 leading-relaxed">
                {item.content}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {item.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-black">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
