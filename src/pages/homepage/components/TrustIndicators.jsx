import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
 
  const successMetrics = [
  {
    value: '5+',
    label: 'Projects Delivered',
    icon: 'CheckCircle',
    description: 'Successfully completed projects'
  },
  {
    value: '99%',
    label: 'Client Satisfaction',
    icon: 'Heart',
    description: 'Average client satisfaction rate'
  },
  {
    value: '5+',
    label: 'Happy Clients',
    icon: 'TrendingUp',
    description: 'Businesses empowered through technology'
  },
  {
    value: '24/7',
    label: 'Support Available',
    icon: 'Clock',
    description: 'Round-the-clock assistance'
  }];


  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-primary">Leading Organizations</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their digital presence with our expertise. 
            Government-authorized excellence you can trust.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {successMetrics?.map((metric, index) =>
          <div key={index} className="glass-card rounded-lg p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric?.value}</div>
              <div className="font-medium text-foreground mb-1">{metric?.label}</div>
              <div className="text-sm text-muted-foreground">{metric?.description}</div>
            </div>
          )}
        </motion.div>
       
      </div>
    </section>);

};

export default TrustIndicators;