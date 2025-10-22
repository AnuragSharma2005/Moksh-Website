import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    // Testimonials data remains here if needed for CTA or logic
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <div className="glass-card rounded-xl p-8 bg-primary/5 border border-primary/20">
            <h3 className="font-headline text-xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven digital solutions and expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-normal hover-lift flex items-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Start Your Project</span>
              </button>
              <button className="border border-primary/30 text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-medium transition-all duration-normal hover-lift flex items-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
