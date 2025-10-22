import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: '2019',
      title: 'Foundation & Vision',
      description: 'Moksh Digital was founded with a vision to democratize digital transformation for businesses of all sizes.',
      details: `Started with a small team of passionate developers and designers. Established core values of trust, innovation, and client-first approach. Secured initial government authorizations for digital services.`,
      icon: 'Rocket',
      achievement: 'Company Founded',
      stats: '3 Founding Members'
    },
    {
      id: 2,
      year: '2020',
      title: 'Government Authorization',
      description: 'Achieved official government authorization as a certified digital service provider, establishing trust and credibility.',
      details: `Completed rigorous certification process for government digital services. Implemented security protocols and compliance frameworks. Launched specialized government platform development services.`,
      icon: 'Shield',
      achievement: 'Official Certification',
      stats: '15+ Compliance Standards'
    },
    {
      id: 3,
      year: '2021',
      title: 'Digital Excellence',
      description: 'Expanded service portfolio and delivered 100+ successful digital transformation projects across various industries.',
      details: `Developed expertise in e-commerce, educational platforms, and enterprise solutions. Built strategic partnerships with technology providers. Established 24/7 support and maintenance services.`,
      icon: 'Award',
      achievement: '100+ Projects Delivered',
      stats: '50+ Happy Clients'
    },
    {
      id: 4,
      year: '2022',
      title: 'Innovation Hub',
      description: 'Launched advanced technology solutions including AI integration, mobile-first development, and cloud infrastructure.',
      details: `Invested in cutting-edge technologies and team training. Developed proprietary frameworks for faster development. Introduced AI-powered solutions for client businesses.`,
      icon: 'Zap',
      achievement: 'Technology Innovation',
      stats: '25+ Team Members'
    },
    {
      id: 5,
      year: '2023',
      title: 'Market Leadership',
      description: 'Recognized as a leading digital transformation partner with industry awards and expanded regional presence.',
      details: `Won multiple industry awards for excellence in digital services. Expanded to serve clients across multiple states. Established partnerships with international technology providers.`,
      icon: 'Trophy',
      achievement: 'Industry Recognition',
      stats: '200+ Projects Completed'
    },
    {
      id: 6,
      year: '2024',
      title: 'Future Ready',
      description: 'Continuing innovation with next-generation technologies and sustainable digital solutions for tomorrow\'s challenges.',
      details: `Focusing on sustainable technology solutions and green digital practices. Developing AI-first applications and blockchain integration capabilities. Expanding team expertise in emerging technologies.`,
      icon: 'Sparkles',
      achievement: 'Future Innovation',
      stats: '40+ Expert Team'
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a vision to transform businesses digitally to becoming a trusted government-authorized partner
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-8">
            {timelineData?.map((milestone, index) => (
              <div 
                key={milestone?.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredMilestone(milestone?.id)}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-moksha-gradient rounded-full flex items-center justify-center z-10 shadow-medium">
                  <Icon 
                    name={milestone?.icon} 
                    size={16} 
                    className="text-white" 
                  />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-card rounded-xl p-6 hover-lift transition-all duration-normal">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-headline font-bold text-primary">
                        {milestone?.year}
                      </span>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {milestone?.achievement}
                      </span>
                    </div>

                    <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                      {milestone?.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {milestone?.description}
                    </p>

                    {hoveredMilestone === milestone?.id && (
                      <div className="animate-slide-up">
                        <div className="border-t border-border pt-4 mb-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {milestone?.details}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {milestone?.stats}
                          </span>
                          <Icon name="ArrowRight" size={16} className="text-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;