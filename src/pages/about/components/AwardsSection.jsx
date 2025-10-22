import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AwardsSection = () => {
  const awards = [
  {
    id: 1,
    title: 'Best Digital Transformation Partner 2023',
    organization: 'India Digital Awards',
    year: '2023',
    description: 'Recognized for outstanding contribution to digital transformation of small and medium businesses across India.',
    logo: "https://images.unsplash.com/photo-1640278625269-58fd4cccab4e",
    logoAlt: 'India Digital Awards trophy logo with golden emblem and digital circuit pattern',
    category: 'Industry Excellence',
    icon: 'Trophy'
  },
  {
    id: 2,
    title: 'Excellence in Government Digital Services',
    organization: 'Digital India Initiative',
    year: '2022',
    description: 'Awarded for exceptional quality and compliance in delivering digital solutions for government entities.',
    logo: "https://images.unsplash.com/photo-1674211732480-e303f6f797e3",
    logoAlt: 'Digital India Initiative circular logo with tricolor elements and technology symbols',
    category: 'Government Recognition',
    icon: 'Award'
  },
  {
    id: 3,
    title: 'Innovation in Web Development',
    organization: 'Tech Excellence Forum',
    year: '2023',
    description: 'Honored for innovative approaches in modern web development and user experience design.',
    logo: "https://images.unsplash.com/photo-1631375617996-6160281912c5",
    logoAlt: 'Tech Excellence Forum badge with geometric design and innovation symbols in blue and silver',
    category: 'Technical Innovation',
    icon: 'Lightbulb'
  },
  {
    id: 4,
    title: 'Customer Satisfaction Excellence',
    organization: 'Business Excellence Council',
    year: '2023',
    description: 'Achieved highest customer satisfaction ratings among digital service providers in the region.',
    logo: "https://images.unsplash.com/photo-1531246043480-fabd5d70edd6",
    logoAlt: 'Business Excellence Council star-shaped medallion with customer service icons and quality symbols',
    category: 'Client Relations',
    icon: 'Star'
  }];


  const mediaFeatures = [
  {
    id: 1,
    publication: 'TechCrunch India',
    title: 'Rising Stars in Digital Transformation',
    date: 'March 2023',
    description: 'Featured as one of the top emerging digital agencies transforming Indian businesses.',
    link: '#',
    type: 'Article'
  },
  {
    id: 2,
    publication: 'Economic Times',
    title: 'Government-Authorized Digital Partners',
    date: 'August 2022',
    description: 'Highlighted for excellence in government digital service delivery and compliance.',
    link: '#',
    type: 'News'
  },
  {
    id: 3,
    publication: 'YourStory',
    title: 'Empowering SMEs Through Digital Innovation',
    date: 'November 2023',
    description: 'Success story featuring our impact on small and medium enterprise digital transformation.',
    link: '#',
    type: 'Feature'
  }];


  const partnerships = [
  {
    name: 'Google Cloud Partner',
    logo: "https://images.unsplash.com/photo-1629640341147-e597cad2840e",
    logoAlt: 'Google Cloud Partner certification badge with cloud and technology symbols',
    level: 'Certified Partner'
  },
  {
    name: 'Microsoft Azure',
    logo: "https://images.unsplash.com/photo-1662052955282-da15376f3919",
    logoAlt: 'Microsoft Azure partnership logo with blue cloud infrastructure design',
    level: 'Solution Partner'
  },
  {
    name: 'AWS Partner Network',
    logo: "https://images.unsplash.com/photo-1652849062134-cd7e46a8266e",
    logoAlt: 'AWS Partner Network badge with orange and black cloud computing symbols',
    level: 'Select Tier'
  },
  {
    name: 'Digital India Partner',
    logo: "https://images.unsplash.com/photo-1731182721938-f03242ee5636",
    logoAlt: 'Digital India partnership emblem with tricolor flag elements and digital connectivity icons',
    level: 'Authorized Partner'
  }];


  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry recognition for our commitment to excellence, innovation, and client satisfaction
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {awards?.map((award) =>
          <div
            key={award?.id}
            className="glass-card rounded-xl p-6 hover-lift transition-all duration-normal">

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 bg-muted flex items-center justify-center">
                    <Image
                    src={award?.logo}
                    alt={award?.logoAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {award?.category}
                    </span>
                    <div className="text-sm text-muted-foreground mt-1">{award?.year}</div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-moksha-gradient rounded-lg flex items-center justify-center">
                  <Icon name={award?.icon} size={20} className="text-white" />
                </div>
              </div>

              <h3 className="text-lg font-headline font-bold text-foreground mb-2">
                {award?.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                {award?.organization}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {award?.description}
              </p>
            </div>
          )}
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-8 text-center">
            Media Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature) =>
            <div
              key={feature?.id}
              className="bg-card rounded-lg p-6 hover-lift transition-all duration-normal border border-border">

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {feature?.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{feature?.date}</span>
                </div>

                <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                  {feature?.title}
                </h4>

                <p className="text-sm font-medium text-secondary mb-2">
                  {feature?.publication}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Technology Partnerships */}
        <div className="bg-card rounded-2xl p-8">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-8 text-center">
            Technology Partnerships
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) =>
            <div
              key={index}
              className="text-center p-4 rounded-lg hover:bg-muted/30 transition-colors duration-normal">

                <div className="w-24 h-12 mx-auto mb-3 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                  src={partner?.logo}
                  alt={partner?.logoAlt}
                  className="w-full h-full object-contain" />

                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {partner?.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {partner?.level}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default AwardsSection;