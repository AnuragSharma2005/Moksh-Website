import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const clientLogos = [
  {
    name: 'Municipal Corporation Delhi',
    logo: "https://images.unsplash.com/photo-1656337710884-8f60f1b52964",
    logoAlt: 'Municipal Corporation Delhi official government seal with emblem and text'
  },
  {
    name: 'Regional Hospital Network',
    logo: "https://images.unsplash.com/photo-1657071917204-d2f8e17940c0",
    logoAlt: 'Regional Hospital Network medical cross logo in blue and white colors'
  },
  {
    name: 'Artisan Collective India',
    logo: "https://images.unsplash.com/photo-1555828077-8a3b9fe973b8",
    logoAlt: 'Artisan Collective India traditional craft logo with colorful design elements'
  },
  {
    name: 'Tech Startup Hub',
    logo: "https://images.unsplash.com/photo-1706007496099-a3e4fea6a835",
    logoAlt: 'Tech Startup Hub modern geometric logo in gradient colors'
  },
  {
    name: 'Education Board',
    logo: "https://images.unsplash.com/photo-1564607783737-6f7bc67299e4",
    logoAlt: 'Education Board official logo with book and graduation cap symbols'
  },
  {
    name: 'Financial Services Ltd',
    logo: "https://images.unsplash.com/photo-1693996797678-d3ebd1cde1e1",
    logoAlt: 'Financial Services Ltd professional banking logo with shield and currency symbols'
  }];


  const certifications = [
  {
    name: 'Government Authorized',
    icon: 'Shield',
    description: 'Certified digital service provider',
    color: 'text-trust'
  },
  {
    name: 'ISO 27001 Certified',
    icon: 'Lock',
    description: 'Information security management',
    color: 'text-success'
  },
  {
    name: 'AWS Partner',
    icon: 'Cloud',
    description: 'Amazon Web Services certified',
    color: 'text-warning'
  },
  {
    name: 'Google Partner',
    icon: 'Star',
    description: 'Google Cloud certified partner',
    color: 'text-primary'
  }];


  const testimonials = [
  {
    id: 1,
    content: `"Moksh Digital transformed our entire citizen service delivery. The new platform has revolutionized how we serve our community with 95% user satisfaction."`,
    author: 'Rajesh Gupta',
    role: 'IT Director',
    company: 'Municipal Corporation',
    rating: 5,
    image: "https://images.unsplash.com/photo-1701492024391-bc3189fb911b",
    imageAlt: 'Professional headshot of Indian government official in formal attire with confident expression'
  },
  {
    id: 2,
    content: `"The integrated healthcare system streamlined operations across all our facilities. Patient care efficiency improved by 60% within the first quarter."`,
    author: 'Dr. Priya Mehta',
    role: 'Chief Medical Officer',
    company: 'Regional Hospital Network',
    rating: 5,
    image: "https://images.unsplash.com/photo-1663664971647-59de765183c1",
    imageAlt: 'Professional female doctor in white coat with stethoscope smiling in hospital setting'
  },
  {
    id: 3,
    content: `"Our artisan community flourished online with 450% sales increase. The AR features and global reach opened markets we never imagined."`,
    author: 'Amit Sharma',
    role: 'President',
    company: 'Artisan Collective',
    rating: 5,
    image: "https://images.unsplash.com/photo-1717956842132-1bd3791c2dfe",
    imageAlt: 'Artisan craftsperson with traditional Indian attire working with handmade products in workshop'
  }];


  const successMetrics = [
  {
    value: '500+',
    label: 'Projects Delivered',
    icon: 'CheckCircle',
    description: 'Successfully completed projects'
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    icon: 'Heart',
    description: 'Average client satisfaction rate'
  },
  {
    value: '₹50Cr+',
    label: 'Value Generated',
    icon: 'TrendingUp',
    description: 'Total client value created'
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

        {/* Client Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16">

          <div className="glass-card rounded-xl p-8">
            <h3 className="text-center font-semibold text-muted-foreground mb-8">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {clientLogos?.map((client, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center hover-scale">

                  <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center">
                    <Image
                    src={client?.logo}
                    alt={client?.logoAlt}
                    className="w-12 h-12 object-contain opacity-60 hover:opacity-100 transition-opacity" />

                  </div>
                </motion.div>
              )}
            </div>
          </div>
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16">

          <h3 className="text-center font-headline text-2xl font-bold text-foreground mb-8">
            Certifications & Partnerships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) =>
            <div key={index} className="glass-card rounded-lg p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className={cert?.color} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground">{cert?.description}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}>

          <h3 className="text-center font-headline text-2xl font-bold text-foreground mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) =>
            <motion.div
              key={testimonial?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 hover-lift">

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                )}
                </div>

                {/* Testimonial Content */}
                <blockquote className="font-body text-foreground mb-6 leading-relaxed">
                  {testimonial?.content}
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                    src={testimonial?.image}
                    alt={testimonial?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial?.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial?.role}, {testimonial?.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Government Authorization Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center">

          <div className="glass-auth rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-trust-foreground" />
              </div>
              <div className="text-left">
                <h4 className="font-headline text-xl font-bold text-foreground">
                  Government Authorized Partner
                </h4>
                <p className="text-muted-foreground">
                  Certified digital service provider for government and public sector projects
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span>Security Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span>Data Protection</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span>Accessibility Standards</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TrustIndicators;