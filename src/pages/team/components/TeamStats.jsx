import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TeamStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "15+",
      label: "Team Members",
      description: "Skilled professionals"
    },
    {
      icon: "Award",
      value: "50+",
      label: "Certifications",
      description: "Industry recognized"
    },
    {
      icon: "Code",
      value: "25+",
      label: "Technologies",
      description: "Mastered & deployed"
    },
    {
      icon: "Trophy",
      value: "100+",
      label: "Projects Delivered",
      description: "Successfully completed"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-medium transition-shadow duration-normal border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name={stat?.icon} size={24} className="text-primary" />
            </div>
            <div className="text-3xl font-headline font-bold text-foreground mb-1">
              {stat?.value}
            </div>
            <div className="text-sm font-semibold text-foreground mb-1">
              {stat?.label}
            </div>
            <div className="text-xs text-muted-foreground">
              {stat?.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamStats;