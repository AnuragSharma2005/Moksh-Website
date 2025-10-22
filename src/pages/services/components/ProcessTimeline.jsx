import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: 'Discovery & Planning',
      icon: 'Search',
      duration: '1-2 weeks',
      description: 'We analyze your requirements, research your market, and create a comprehensive project roadmap.',
      activities: [
        'Requirement gathering and analysis',
        'Market research and competitor analysis',
        'Technical feasibility assessment',
        'Project timeline and milestone planning',
        'Resource allocation and team assignment'
      ],
      deliverables: [
        'Project Requirements Document (PRD)',
        'Technical Architecture Plan',
        'Project Timeline & Milestones',
        'Resource Allocation Matrix'
      ]
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      icon: 'Palette',
      duration: '2-3 weeks',
      description: 'Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution.',
      activities: [
        'User experience (UX) research and design',
        'User interface (UI) design and branding',
        'Interactive prototype development',
        'Design system creation',
        'Client feedback integration'
      ],
      deliverables: [
        'Wireframes and User Flow Diagrams',
        'High-Fidelity UI Mockups',
        'Interactive Prototype',
        'Design System & Style Guide'
      ]
    },
    {
      id: 3,
      title: 'Development & Integration',
      icon: 'Code',
      duration: '4-8 weeks',
      description: 'Our development team builds your solution using modern technologies and best practices.',
      activities: [
        'Frontend development and implementation',
        'Backend API development and database design',
        'Third-party service integrations',
        'Security implementation and testing',
        'Performance optimization'
      ],
      deliverables: [
        'Fully Functional Application',
        'API Documentation',
        'Database Schema',
        'Security Audit Report'
      ]
    },
    {
      id: 4,
      title: 'Testing & Quality Assurance',
      icon: 'CheckCircle',
      duration: '1-2 weeks',
      description: 'Comprehensive testing ensures your solution is bug-free, secure, and performs optimally.',
      activities: [
        'Functional and integration testing',
        'Performance and load testing',
        'Security vulnerability assessment',
        'Cross-browser and device compatibility',
        'User acceptance testing (UAT)'
      ],
      deliverables: [
        'Test Cases and Results',
        'Performance Audit Report',
        'Security Assessment',
        'UAT Sign-off Document'
      ]
    },
    {
      id: 5,
      title: 'Deployment & Launch',
      icon: 'Rocket',
      duration: '1 week',
      description: 'We deploy your solution to production and ensure a smooth launch with monitoring and support.',
      activities: [
        'Production environment setup',
        'Domain and SSL configuration',
        'Database migration and optimization',
        'Go-live monitoring and support',
        'Team training and documentation'
      ],
      deliverables: [
        'Live Production Application',
        'Deployment Documentation',
        'User Training Materials',
        'Monitoring Dashboard'
      ]
    },
    {
      id: 6,
      title: 'Support & Maintenance',
      icon: 'Settings',
      duration: 'Ongoing',
      description: 'Continuous support, updates, and enhancements to keep your solution running smoothly.',
      activities: [
        'Regular security updates and patches',
        'Performance monitoring and optimization',
        'Feature enhancements and improvements',
        'Technical support and troubleshooting',
        'Backup and disaster recovery'
      ],
      deliverables: [
        'Monthly Performance Reports',
        'Security Update Logs',
        'Feature Enhancement Roadmap',
        'Support Ticket Resolution'
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Development Process
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures quality delivery, transparent communication, and successful project outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-4">
            {processSteps?.map((step, index) => (
              <motion.div
                key={step?.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-normal ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`glass-card rounded-xl p-6 border transition-all duration-normal ${
                  activeStep === index
                    ? 'border-primary bg-primary/5 shadow-elevated'
                    : 'border-border/50 hover:border-primary/30'
                }`}>
                  <div className="flex items-center space-x-4">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-normal ${
                        activeStep === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={step?.icon} size={24} />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-headline font-bold transition-colors duration-normal ${
                          activeStep === index ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step?.title}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                          {step?.duration}
                        </span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">
                        {step?.description}
                      </p>
                    </div>

                    {/* Active Indicator */}
                    {activeStep === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-primary rounded-full"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8 border border-primary/20 bg-card"
          >
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={processSteps?.[activeStep]?.icon} size={32} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-foreground">
                    {processSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Duration: {processSteps?.[activeStep]?.duration}
                  </p>
                </div>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                {processSteps?.[activeStep]?.description}
              </p>
            </div>

            {/* Activities */}
            <div className="mb-6">
              <h4 className="font-headline font-bold text-foreground mb-3 flex items-center">
                <Icon name="Activity" size={20} className="mr-2 text-primary" />
                Key Activities
              </h4>
              <div className="space-y-2">
                {processSteps?.[activeStep]?.activities?.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <Icon name="ArrowRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="font-headline font-bold text-foreground mb-3 flex items-center">
                <Icon name="Package" size={20} className="mr-2 text-success" />
                Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {processSteps?.[activeStep]?.deliverables?.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-2 bg-success/10 text-success px-3 py-2 rounded-lg"
                  >
                    <Icon name="Check" size={14} className="flex-shrink-0" />
                    <span className="font-body text-xs font-medium">{deliverable}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">
                  Step {activeStep + 1} of {processSteps?.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(((activeStep + 1) / processSteps?.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeStep + 1) / processSteps?.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-normal"
          >
            <Icon name="ChevronLeft" size={16} />
            <span>Previous</span>
          </button>
          
          <div className="flex space-x-2">
            {processSteps?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-normal ${
                  activeStep === index ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveStep(Math.min(processSteps?.length - 1, activeStep + 1))}
            disabled={activeStep === processSteps?.length - 1}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-normal"
          >
            <span>Next</span>
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;