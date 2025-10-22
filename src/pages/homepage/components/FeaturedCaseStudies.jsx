import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
  {
    id: 1,
    title: 'E-Government Portal Transformation',
    client: 'Municipal Corporation',
    category: 'Government Platform',
    description: 'Complete digital transformation of citizen services portal with enhanced security and accessibility features.',
    challenge: 'Legacy system with poor user experience and security vulnerabilities affecting 500,000+ citizens.',
    solution: 'Modern responsive platform with biometric authentication, multilingual support, and mobile-first design.',
    results: {
      userSatisfaction: '95%',
      processingTime: '70% faster',
      digitalAdoption: '85%',
      costSavings: '₹2.5 Cr annually'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Blockchain'],
    image: "https://images.unsplash.com/photo-1566386429118-8b8242d22c7f",
    imageAlt: 'Government official using modern digital portal on laptop with secure authentication interface displayed',
    timeline: '8 months',
    testimonial: `"Moksh Digital transformed our entire citizen service delivery. The new platform has revolutionized how we serve our community."`,
    clientRole: 'IT Director, Municipal Corporation'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    client: 'Regional Hospital Network',
    category: 'Healthcare Platform',
    description: 'Comprehensive hospital management system with patient portal, appointment scheduling, and telemedicine integration.',
    challenge: 'Fragmented systems across 15 hospitals causing inefficiencies and poor patient experience.',
    solution: 'Unified platform with real-time data sync, mobile app for patients, and integrated telemedicine capabilities.',
    results: {
      patientSatisfaction: '92%',
      appointmentEfficiency: '60% improvement',
      paperworkReduction: '80%',
      revenueIncrease: '25%'
    },
    technologies: ['React Native', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC'],
    image: "https://images.unsplash.com/photo-1630569470960-ec1e8c077d6b",
    imageAlt: 'Medical professional using tablet displaying patient management dashboard with charts and appointment schedules',
    timeline: '12 months',
    testimonial: `"The integrated system has streamlined our operations across all facilities. Patient care has never been more efficient."`,
    clientRole: 'Chief Medical Officer, Regional Hospital Network'
  },
  {
    id: 3,
    title: 'E-commerce Marketplace Revolution',
    client: 'Local Artisan Collective',
    category: 'E-commerce Platform',
    description: 'Multi-vendor marketplace connecting local artisans with global customers, featuring AR product visualization.',
    challenge: 'Traditional artisans struggling to reach online customers with limited digital presence and sales channels.',
    solution: 'Feature-rich marketplace with AR try-on, multi-language support, and integrated logistics management.',
    results: {
      vendorGrowth: '300%',
      salesIncrease: '450%',
      globalReach: '25 countries',
      customerRetention: '78%'
    },
    technologies: ['Next.js', 'Stripe', 'AR.js', 'Redis', 'Microservices'],
    image: "https://images.unsplash.com/photo-1726066012801-14d892021339",
    imageAlt: 'Artisan craftsperson using smartphone to manage online store with colorful handmade products displayed',
    timeline: '6 months',
    testimonial: `"Our artisan community has flourished online. The platform opened doors to markets we never imagined reaching."`,
    clientRole: 'President, Local Artisan Collective'
  }];


  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Real transformations, measurable results. Discover how we've helped organizations 
            achieve their digital goals and drive meaningful impact.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies?.map((study, index) =>
          <button
            key={study?.id}
            onClick={() => setActiveCase(index)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-normal hover-lift ${
            activeCase === index ?
            'bg-primary text-primary-foreground shadow-medium' :
            'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'}`
            }>

              {study?.category}
            </button>
          )}
        </div>

        {/* Featured Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Case Study Content */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {currentCase?.category}
                </span>
                <span className="text-muted-foreground text-sm">
                  {currentCase?.timeline} project
                </span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {currentCase?.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {currentCase?.client}
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-foreground leading-relaxed">
              {currentCase?.description}
            </p>

            {/* Challenge & Solution */}
            <div className="space-y-4">
              <div className="glass-card rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Icon name="AlertCircle" size={16} className="text-warning mr-2" />
                  Challenge
                </h4>
                <p className="text-sm text-muted-foreground">{currentCase?.challenge}</p>
              </div>
              
              <div className="glass-card rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Icon name="Lightbulb" size={16} className="text-success mr-2" />
                  Solution
                </h4>
                <p className="text-sm text-muted-foreground">{currentCase?.solution}</p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentCase?.technologies?.map((tech, index) =>
                <span
                  key={index}
                  className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">

                    {tech}
                  </span>
                )}
              </div>
            </div>

            {/* Testimonial */}
            <div className="glass-card rounded-lg p-6 bg-trust/5 border-l-4 border-trust">
              <blockquote className="font-body text-foreground italic mb-3">
                "{currentCase?.testimonial}"
              </blockquote>
              <cite className="text-sm text-muted-foreground font-medium">
                — {currentCase?.clientRole}
              </cite>
            </div>
          </div>

          {/* Results & Visual */}
          <div className="space-y-6">
            {/* Project Image */}
            <div className="relative">
              <div className="glass-card rounded-xl overflow-hidden shadow-elevated">
                <Image
                  src={currentCase?.image}
                  alt={currentCase?.imageAlt}
                  className="w-full h-64 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentCase?.results)?.map(([key, value], index) =>
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-lg p-4 text-center hover-scale">

                  <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">
                    {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                  </div>
                </motion.div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                className="flex-1"
                asChild>

                <Link to="/demo-request">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Discuss Your Project
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                asChild>

                <Link to="/contact">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  View More Cases
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₹50Cr+</div>
              <div className="text-sm text-muted-foreground">Client Value Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FeaturedCaseStudies;