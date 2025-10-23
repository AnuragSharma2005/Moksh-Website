import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
// import ServiceComparison from './components/ServiceComparison';
import TechnologyStack from './components/TechnologyStack';
import ProcessTimeline from './components/ProcessTimeline';
import ServiceTestimonials from './components/ServiceTestimonials';
import ServiceCTA from './components/ServiceCTA';
import FloatingActions from '../../components/FloatingActions';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'website-development',
      title: 'Website Development',
      icon: 'Globe',
      description: 'Create stunning, responsive websites that drive engagement and conversions. From corporate sites to complex web applications, we build digital experiences that represent your brand perfectly.',
      features: [
        'Responsive design for all devices',
        'SEO-optimized architecture',
        'Fast loading performance',
        'Content management system',
        'Security & SSL integration',
        'Analytics & tracking setup'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      startingPrice: '₹25,000',
      timeline: '2-4 weeks',
      isPopular: true,
      badge: 'Most Popular',
      cardColor: 'blue',
      process: [
        'Requirements Analysis',
        'Design & Wireframing',
        'Development & Testing',
        'Launch & Optimization'
      ]
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      icon: 'Smartphone',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to Android, we create apps that users love and businesses rely on.',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
        'Real-time synchronization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      startingPrice: '₹75,000',
      timeline: '6-10 weeks',
      isPopular: false,
      badge: 'High ROI',
      cardColor: 'purple',
      process: [
        'App Strategy & Planning',
        'UI/UX Design',
        'Development & Integration',
        'Testing & Store Submission'
      ]
    },
    // {
    //   id: 'ecommerce-platform',
    //   title: 'E-commerce Platform',
    //   icon: 'ShoppingCart',
    //   description: 'Launch your online store with powerful e-commerce solutions. Complete with payment gateways, inventory management, and customer analytics to grow your business.',
    //   features: [
    //     'Multi-payment gateway integration',
    //     'Inventory management system',
    //     'Order tracking & management',
    //     'Customer analytics dashboard',
    //     'Mobile-responsive design',
    //     'SEO & marketing tools'
    //   ],
    //   technologies: ['Next.js', 'Stripe', 'PayPal', 'PostgreSQL', 'Redis', 'AWS'],
    //   startingPrice: '₹50,000',
    //   timeline: '4-8 weeks',
    //   isPopular: false,
    //   badge: 'Revenue Boost',
    //   cardColor: 'green',
    //   process: [
    //     'Business Analysis',
    //     'Platform Setup',
    //     'Payment Integration',
    //     'Launch & Marketing'
    //   ]
    // },
    {
      id: 'branding-uiux',
      title: 'Branding & UI/UX',
      icon: 'Palette',
      description: 'Create compelling brand identities and user experiences that resonate with your audience. From logos to complete design systems, we craft visual stories that convert.',
      features: [
        'Brand identity design',
        'Logo & visual assets',
        'User experience research',
        'Interface design systems',
        'Prototyping & testing',
        'Brand guidelines'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Framer', 'Sketch', 'InVision', 'Principle'],
      startingPrice: '₹15,000',
      timeline: '1-3 weeks',
      isPopular: false,
      badge: 'Creative Excellence',
      cardColor: 'pink',
      process: [
        'Brand Discovery',
        'Concept Development',
        'Design Execution',
        'Guidelines & Handoff'
      ]
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      icon: 'Search',
      description: 'Boost your online visibility with comprehensive SEO strategies. Drive organic traffic, improve search rankings, and increase your digital presence with data-driven optimization techniques.',
      features: [
        'Technical SEO audits',
        'Keyword research & strategy',
        'On-page optimization',
        'Content optimization',
        'Local SEO setup',
        'Performance tracking'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Schema.org', 'PageSpeed Insights'],
      startingPrice: '₹12,000',
      timeline: '2-4 weeks',
      isPopular: true,
      badge: 'High Impact',
      cardColor: 'orange',
      process: [
        'SEO Audit & Analysis',
        'Strategy Development',
        'Implementation',
        'Monitoring & Reporting'
      ]
    },
    {
      id: 'content-writing',
      title: 'Content Writing',
      icon: 'FileText',
      description: 'Engage your audience with compelling, SEO-optimized content. From blog posts to website copy, we create content that resonates with your audience and drives conversions.',
      features: [
        'SEO-optimized blog posts',
        'Website copywriting',
        'Social media content',
        'Email marketing copy',
        'Product descriptions',
        'Content strategy planning'
      ],
      technologies: ['WordPress', 'Grammarly', 'Yoast SEO', 'Google Docs', 'Canva', 'Buffer'],
      startingPrice: '₹8,000',
      timeline: '1-2 weeks',
      isPopular: true,
      badge: 'Content Excellence',
      cardColor: 'teal',
      process: [
        'Content Strategy',
        'Research & Planning',
        'Writing & Editing',
        'Publishing & Promotion'
      ]
    },
    // {
    //   id: 'government-platforms',
    //   title: 'Government Platforms',
    //   icon: 'Shield',
    //   description: 'Develop secure, compliant digital solutions for government and public sector organizations. Built with highest security standards and regulatory compliance.',
    //   features: [
    //     'Government compliance standards',
    //     'Advanced security protocols',
    //     'Accessibility compliance',
    //     'Data privacy protection',
    //     'Audit trail systems',
    //     'Multi-language support'
    //   ],
    //   technologies: ['Angular', 'Spring Boot', 'Oracle', 'PostgreSQL', 'Docker', 'Kubernetes'],
    //   startingPrice: '₹1,20,000',
    //   timeline: '8-16 weeks',
    //   isPopular: false,
    //   badge: 'Authorized Partner',
    //   cardColor: 'indigo',
    //   process: [
    //     'Compliance Assessment',
    //     'Security Architecture',
    //     'Development & Testing',
    //     'Certification & Deployment'
    //   ]
    // },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      icon: 'Settings',
      description: 'Keep your digital assets running smoothly with our comprehensive maintenance and support services. Regular updates, security patches, and performance optimization.',
      features: [
        '24/7 monitoring & support',
        'Regular security updates',
        'Performance optimization',
        'Backup & disaster recovery',
        'Bug fixes & improvements',
        'Technical consultation'
      ],
      technologies: ['Monitoring Tools', 'CI/CD', 'Docker', 'AWS', 'GitHub Actions', 'Sentry'],
      startingPrice: '₹8,000/month',
      timeline: 'Ongoing',
      isPopular: false,
      badge: 'Peace of Mind',
      cardColor: 'gray',
      process: [
        'System Assessment',
        'Monitoring Setup',
        'Regular Maintenance',
        'Performance Reports'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Services - Website, Mobile App, SEO & Content Writing | Moksh Digital</title>
        <meta 
          name="description" 
          content="Comprehensive digital services including website development, mobile apps, e-commerce platforms, SEO optimization, content writing, branding & UI/UX, government platforms, and maintenance. Government-authorized digital partner with 150+ successful projects." 
        />
        <meta name="keywords" content="website development, mobile app development, e-commerce platform, SEO optimization, content writing, branding, UI/UX design, government platforms, digital services, Moksh Digital" />
        <meta property="og:title" content="Digital Services - Transform Your Business | Moksh Digital" />
        <meta property="og:description" content="Expert digital services from website development to mobile apps, SEO optimization, and content writing. Government-authorized partner delivering quality solutions with 98% client satisfaction." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mokshdigital.com/services" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ServiceHero />

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Digital Services
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions designed to transform your business and drive growth in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service, index) => (
                <ServiceCard 
                  key={service?.id} 
                  service={service} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        {/* <ServiceComparison /> */}

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Client Testimonials */}
        <ServiceTestimonials />

        {/* Call to Action */}
        <ServiceCTA />
        
        {/* Floating Actions */}
        <FloatingActions />
      </div>
    </>
  );
};

export default ServicesPage;