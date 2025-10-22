import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionVisionSection = () => {
  const missionVisionData = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: 'Target',
      content: `To liberate businesses from digital limitations and guide them toward technological enlightenment. We believe that behind every website and app is a business dream waiting to flourish, and we're here to make that transformation possible.`,
      highlights: [
        'Digital Liberation for All Businesses','Technology as a Pathway to Growth','Empowering Dreams Through Innovation'
      ]
    },
    {
      id: 'vision',title: 'Our Vision',icon: 'Eye',
      content: `To become the premier digital transformation partner that businesses trust for their journey from digital constraints to technological freedom. We envision a world where every organization can harness the full power of digital innovation.`,
      highlights: [
        'Premier Digital Transformation Hub','Trusted Technology Partnership','Universal Digital Empowerment'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Mission & Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Moksh - meaning liberation in Sanskrit - reflects our core purpose of freeing businesses from digital limitations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {missionVisionData?.map((item) => (
            <div 
              key={item?.id}
              className="glass-card rounded-xl p-8 hover-lift transition-all duration-normal"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-moksha-gradient rounded-lg flex items-center justify-center mr-4">
                  <Icon name={item?.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  {item?.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item?.content}
              </p>

              <div className="space-y-3">
                {item?.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;