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
        {/* Header */}
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

        {/* Flex Container for Timeline + Detail */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch">
          
          {/* Left Timeline */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer transition-transform duration-200 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div className={`glass-card rounded-xl p-6 border h-full transition-all duration-normal ${
                  activeStep === index
                    ? 'border-primary bg-primary/5 shadow-elevated'
                    : 'border-border/50 hover:border-primary/30'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted text-muted-foreground">
                      <Icon name={step.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-headline font-bold ${activeStep === index ? 'text-primary' : 'text-foreground'}`}>
                          {step.title}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                          {step.duration}
                        </span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

            {/* Right Detail Box */}
            <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-between">
              <div className="glass-card rounded-xl p-8 border border-primary/20 bg-card flex flex-col h-full">
                
                {/* Icon + Title */}
                <div className="flex items-center space-x-5 mb-6">
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name={processSteps[activeStep].icon} size={36} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground mt-2">
                      Duration: {processSteps[activeStep].duration}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  {processSteps[activeStep].description}
                </p>

                {/* Activities */}
                <div className="mb-6">
                  <h4 className="font-headline font-bold text-xl md:text-2xl text-foreground mb-3 flex items-center">
                    <Icon name="Activity" size={22} className="mr-3 text-primary" />
                    Key Activities
                  </h4>
                  <div className="space-y-3">
                    {processSteps[activeStep].activities.map((activity, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Icon name="ArrowRight" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span className="font-body text-lg md:text-xl text-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-headline font-bold text-xl md:text-2xl text-foreground mb-3 flex items-center">
                    <Icon name="Package" size={22} className="mr-3 text-success" />
                    Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {processSteps[activeStep].deliverables.map((d, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-success/10 text-success px-4 py-2 rounded-lg">
                        <Icon name="Check" size={16} />
                        <span className="font-body text-lg md:text-xl font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>


        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
