import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'CEO',
    company: 'TechVision Solutions',
    avatar: "https://images.unsplash.com/photo-1659323593305-ad05297db6a2",
    avatarAlt: 'Professional headshot of Indian businessman in navy suit with confident smile',
    service: 'Website Development',
    rating: 5,
    content: `Moksh Digital transformed our online presence completely. Their team delivered a stunning website that not only looks professional but also drives real business results. Our lead generation increased by 300% within the first month of launch.`,
    projectDetails: {
      duration: '3 weeks',
      budget: '₹45,000',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    results: [
    '300% increase in lead generation',
    '45% improvement in conversion rate',
    '60% faster page load times']

  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Founder',
    company: 'EduTech Academy',
    avatar: "https://images.unsplash.com/photo-1590649880765-91b1956b8276",
    avatarAlt: 'Professional photo of Indian woman in blue blazer with warm smile in office setting',
    service: 'Mobile App Development',
    rating: 5,
    content: `The mobile app they developed for our educational platform exceeded all expectations. The user interface is intuitive, and the performance is flawless. Our student engagement has improved dramatically since the app launch.`,
    projectDetails: {
      duration: '8 weeks',
      budget: '₹85,000',
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    results: [
    '85% increase in student engagement',
    '4.8/5 app store rating',
    '50,000+ downloads in first quarter']

  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Director',
    company: 'GreenEarth Retail',
    avatar: "https://images.unsplash.com/photo-1718392372853-fa38c8ff37c8",
    avatarAlt: 'Professional headshot of Indian man in gray suit with friendly expression',
    service: 'E-commerce Platform',
    rating: 5,
    content: `Our e-commerce platform built by Moksh Digital has revolutionized our business operations. The seamless integration with our inventory system and the user-friendly interface have significantly boosted our online sales.`,
    projectDetails: {
      duration: '6 weeks',
      budget: '₹65,000',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    results: [
    '250% increase in online sales',
    '40% reduction in cart abandonment',
    '99.9% uptime reliability']

  },
  {
    id: 4,
    name: 'Dr. Sunita Reddy',
    position: 'Principal',
    company: 'Modern Public School',
    avatar: "https://images.unsplash.com/photo-1701492024391-bc3189fb911b",
    avatarAlt: 'Professional photo of Indian woman educator in formal attire with confident pose',
    service: 'Government Platform',
    rating: 5,
    content: `As a government-authorized partner, Moksh Digital delivered a compliant and secure platform for our school management system. Their understanding of government requirements and attention to security details is exceptional.`,
    projectDetails: {
      duration: '10 weeks',
      budget: '₹1,20,000',
      technologies: ['Angular', 'Spring Boot', 'Oracle']
    },
    results: [
    '100% government compliance achieved',
    '75% reduction in administrative time',
    'Zero security incidents']

  },
  {
    id: 5,
    name: 'Vikram Singh',
    position: 'Marketing Head',
    company: 'Creative Minds Agency',
    avatar: "https://images.unsplash.com/photo-1663720527180-4c60a78fe3b7",
    avatarAlt: 'Professional headshot of Indian man in black shirt with creative background',
    service: 'Branding & UI/UX',
    rating: 5,
    content: `The branding and UI/UX work done by Moksh Digital completely transformed our brand identity. The new design system is not only visually appealing but also highly functional, resulting in better user engagement across all touchpoints.`,
    projectDetails: {
      duration: '4 weeks',
      budget: '₹35,000',
      technologies: ['Figma', 'Adobe Creative Suite', 'Framer']
    },
    results: [
    '180% increase in brand recognition',
    '65% improvement in user engagement',
    '90% client satisfaction score']

  }];


  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with Moksh Digital and the results they achieved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonial Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {testimonials?.map((testimonial, index) =>
              <motion.button
                key={testimonial?.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleTestimonialChange(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-normal ${
                activeTestimonial === index ?
                'bg-primary text-primary-foreground shadow-medium' :
                'bg-card border border-border hover:bg-muted hover-lift'}`
                }>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.avatarAlt}
                      className="w-full h-full object-cover" />

                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline font-bold text-sm truncate">
                        {testimonial?.name}
                      </h4>
                      <p className="text-xs opacity-80 truncate">
                        {testimonial?.position}, {testimonial?.company}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        <span className="text-xs font-medium bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                          {testimonial?.service}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              )}
            </div>

            {/* Auto-play Control */}
            <div className="mt-6 flex items-center justify-center space-x-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-normal">

                <Icon name={isAutoPlaying ? 'Pause' : 'Play'} size={16} />
                <span>{isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation</span>
              </button>
            </div>
          </div>

          {/* Active Testimonial */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-xl p-8 border border-border/50">

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonials?.[activeTestimonial]?.avatar}
                        alt={testimonials?.[activeTestimonial]?.avatarAlt}
                        className="w-full h-full object-cover" />

                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold text-foreground">
                        {testimonials?.[activeTestimonial]?.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {testimonials?.[activeTestimonial]?.position}, {testimonials?.[activeTestimonial]?.company}
                      </p>
                      <div className="flex items-center space-x-1 mt-2">
                        {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) =>
                        <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {testimonials?.[activeTestimonial]?.service}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="font-body text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-headline font-bold text-foreground mb-3 flex items-center">
                      <Icon name="Info" size={16} className="mr-2 text-primary" />
                      Project Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground">
                          {testimonials?.[activeTestimonial]?.projectDetails?.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment:</span>
                        <span className="font-medium text-foreground">
                          {testimonials?.[activeTestimonial]?.projectDetails?.budget}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Technologies:</span>
                        <div className="flex flex-wrap gap-1">
                          {testimonials?.[activeTestimonial]?.projectDetails?.technologies?.map((tech, index) =>
                          <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">
                              {tech}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-success/10 rounded-lg p-4">
                    <h4 className="font-headline font-bold text-foreground mb-3 flex items-center">
                      <Icon name="TrendingUp" size={16} className="mr-2 text-success" />
                      Key Results
                    </h4>
                    <div className="space-y-2">
                      {testimonials?.[activeTestimonial]?.results?.map((result, index) =>
                      <div key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{result}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials?.map((_, index) =>
                    <button
                      key={index}
                      onClick={() => handleTestimonialChange(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-normal ${
                      activeTestimonial === index ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground/30'}`
                      } />

                    )}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {activeTestimonial + 1} of {testimonials?.length}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

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
    </section>);

};

export default ServiceTestimonials;