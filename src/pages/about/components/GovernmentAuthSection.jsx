import React from 'react';
import Icon from '../../../components/AppIcon';


const GovernmentAuthSection = () => {
  const certifications = [
    {
      id: 1,
      title: 'Government Digital Services Authorization',
      issuer: 'Ministry of Electronics & IT',
      year: '2020',
      description: 'Official certification for providing digital services to government entities and public sector organizations.',
      certificateNumber: 'MEITY/DGS/2020/1247',
      validUntil: '2025',
      icon: 'Award'
    },
    {
      id: 2,
      title: 'ISO 27001 Information Security',
      issuer: 'International Standards Organization',
      year: '2021',
      description: 'Certified information security management system ensuring data protection and privacy compliance.',
      certificateNumber: 'ISO27001/2021/3456',
      validUntil: '2024',
      icon: 'Shield'
    },
    {
      id: 3,
      title: 'STQC Quality Certification',
      issuer: 'Standardisation Testing & Quality Certification',
      year: '2022',
      description: 'Quality assurance certification for software development and digital service delivery standards.',
      certificateNumber: 'STQC/QC/2022/7890',
      validUntil: '2025',
      icon: 'CheckCircle'
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection & Privacy',
      items: ['GDPR Compliance', 'Data Localization', 'Privacy by Design', 'Secure Data Handling']
    },
    {
      title: 'Security Standards',
      items: ['SSL/TLS Encryption', 'Multi-factor Authentication', 'Regular Security Audits', 'Vulnerability Assessment']
    },
    {
      title: 'Government Protocols',
      items: ['Digital India Guidelines', 'e-Governance Standards', 'Accessibility Compliance', 'Open Source Policy']
    },
    {
      title: 'Quality Assurance',
      items: ['Code Review Process', 'Automated Testing', 'Performance Monitoring', 'Continuous Integration']
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-trust/10 text-trust px-4 py-2 rounded-full mb-4">
            <Icon name="Shield" size={20} className="mr-2" />
            <span className="font-medium">Government Authorized Partner</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Officially recognized and certified to deliver secure, compliant digital solutions for government and enterprise clients
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications?.map((cert) => (
            <div 
              key={cert?.id}
              className="glass-card rounded-xl p-6 hover-lift transition-all duration-normal border-l-4 border-trust"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-trust rounded-lg flex items-center justify-center">
                  <Icon name={cert?.icon} size={24} className="text-trust-foreground" />
                </div>
                <span className="text-xs font-medium text-trust bg-trust/10 px-2 py-1 rounded-full">
                  Valid until {cert?.validUntil}
                </span>
              </div>

              <h3 className="text-lg font-headline font-bold text-foreground mb-2">
                {cert?.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {cert?.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Issued by:</span>
                  <span className="font-medium text-foreground">{cert?.issuer}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Year:</span>
                  <span className="font-medium text-foreground">{cert?.year}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Certificate #:</span>
                  <span className="font-accent text-foreground">{cert?.certificateNumber}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Areas */}
        <div className="bg-muted/20 rounded-2xl p-8">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-8 text-center">
            Compliance & Security Standards
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceAreas?.map((area, index) => (
              <div key={index} className="bg-card rounded-lg p-6">
                <h4 className="text-lg font-headline font-semibold text-foreground mb-4">
                  {area?.title}
                </h4>
                <ul className="space-y-2">
                  {area?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <Icon name="Check" size={14} className="text-trust mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-card rounded-xl p-6 shadow-subtle">
            <div className="flex items-center">
              <Icon name="Shield" size={24} className="text-trust mr-2" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Secure</div>
              </div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center">
              <Icon name="Award" size={24} className="text-accent mr-2" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">5+</div>
                <div className="text-xs text-muted-foreground">Certifications</div>
              </div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center">
              <Icon name="Users" size={24} className="text-secondary mr-2" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">200+</div>
                <div className="text-xs text-muted-foreground">Trusted Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentAuthSection;