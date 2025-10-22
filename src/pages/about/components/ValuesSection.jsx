import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const valuesData = [
    {
      id: 'trust',
      title: 'Trust & Transparency',
      icon: 'Shield',
      description: 'Building lasting relationships through honest communication and reliable delivery.',
      example: `We maintain complete transparency in our project timelines, costs, and challenges. Our clients always know exactly where their project stands and what to expect next.`,
      principles: [
        'Open Communication',
        'Honest Pricing',
        'Reliable Delivery'
      ]
    },
    {
      id: 'innovation',
      title: 'Innovation & Excellence',
      icon: 'Lightbulb',
      description: 'Pushing boundaries with cutting-edge technology while maintaining the highest quality standards.',
      example: `We continuously invest in learning new technologies and frameworks, ensuring our clients benefit from the latest innovations in web development and digital solutions.`,
      principles: [
        'Continuous Learning',
        'Quality First',
        'Future-Ready Solutions'
      ]
    },
    {
      id: 'partnership',
      title: 'Partnership Approach',
      icon: 'Handshake',
      description: 'We don\'t just build websites; we become strategic allies in your digital success journey.',
      example: `Our relationship doesn't end at project delivery. We provide ongoing support, strategic advice, and growth recommendations to ensure long-term success.`,
      principles: [
        'Long-term Relationships','Strategic Guidance','Ongoing Support'
      ]
    },
    {
      id: 'empowerment',title: 'Digital Empowerment',icon: 'Users',description: 'Democratizing technology to help businesses of all sizes achieve their digital transformation goals.',
      example: `From small startups to large enterprises, we tailor our solutions to fit every budget and requirement, ensuring no business is left behind in the digital revolution.`,
      principles: [
        'Inclusive Solutions','Scalable Approaches','Accessible Technology'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every decision, every project, and every relationship we build
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {valuesData?.map((value) => (
            <div 
              key={value?.id}
              className="glass-card rounded-xl p-8 hover-lift transition-all duration-normal group"
            >
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-moksha-gradient rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-normal">
                  <Icon name={value?.icon} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                    {value?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value?.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  In Practice
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed bg-muted/30 p-4 rounded-lg">
                  {value?.example}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Key Principles
                </h4>
                <div className="space-y-2">
                  {value?.principles?.map((principle, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-foreground">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;