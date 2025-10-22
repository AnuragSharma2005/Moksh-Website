import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialWall = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    role: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1659323593305-ad05297db6a2",
    avatarAlt: "Professional headshot of Indian businessman in navy suit with confident smile",
    rating: 5,
    category: "website",
    date: "2025-09-15",
    testimonial: `Moksh Digital transformed our startup's digital presence completely. Their team understood our vision and delivered a website that not only looks stunning but also converts visitors into customers. The government authorization gave us extra confidence in their credibility.`,
    project: "E-commerce Website Development",
    result: "300% increase in online sales"
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "EduTech Institute",
    role: "Director",
    avatar: "https://images.unsplash.com/photo-1686931102593-4c5af482fa38",
    avatarAlt: "Professional photo of Indian woman in blue blazer with warm smile",
    rating: 5,
    category: "mobile",
    date: "2025-08-22",
    testimonial: `The mobile app they developed for our educational platform exceeded all expectations. Students love the intuitive interface, and we've seen a 400% increase in engagement. Their support team is incredibly responsive and professional.`,
    project: "Educational Mobile App",
    result: "400% increase in student engagement"
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "GreenTech Industries",
    role: "Marketing Head",
    avatar: "https://images.unsplash.com/photo-1718392372853-fa38c8ff37c8",
    avatarAlt: "Headshot of middle-aged Indian man in gray suit with professional demeanor",
    rating: 5,
    category: "branding",
    date: "2025-10-05",
    testimonial: `Outstanding branding and UI/UX work! Moksh Digital created a brand identity that perfectly represents our sustainable technology focus. The design system they developed is being used across all our digital touchpoints with great success.`,
    project: "Complete Brand Identity & UI/UX",
    result: "Brand recognition increased by 250%"
  },
  {
    id: 4,
    name: "Dr. Sunita Reddy",
    company: "HealthCare Plus",
    role: "Chief Administrator",
    avatar: "https://images.unsplash.com/photo-1663664971647-59de765183c1",
    avatarAlt: "Professional portrait of Indian woman doctor in white coat with stethoscope",
    rating: 5,
    category: "government",
    date: "2025-09-30",
    testimonial: `Their expertise in government-compliant platforms is exceptional. They helped us navigate complex healthcare regulations while building a patient management system that's both secure and user-friendly. Highly recommended for compliance-critical projects.`,
    project: "Healthcare Management Platform",
    result: "100% compliance with healthcare regulations"
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "RetailMax Chain",
    role: "Operations Manager",
    avatar: "https://images.unsplash.com/photo-1724716263030-fbdd1c5ccc40",
    avatarAlt: "Business portrait of Indian man in checkered shirt with confident expression",
    rating: 5,
    category: "ecommerce",
    date: "2025-10-12",
    testimonial: `Moksh Digital's e-commerce solution revolutionized our retail operations. The inventory management integration and multi-store functionality work flawlessly. Our online revenue has tripled since the launch, and customer satisfaction scores are at an all-time high.`,
    project: "Multi-Store E-commerce Platform",
    result: "300% increase in online revenue"
  },
  {
    id: 6,
    name: "Neha Gupta",
    company: "Creative Studios",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1614940685083-c5409b57da6e",
    avatarAlt: "Portrait of young Indian woman with creative styling and bright smile",
    rating: 5,
    category: "maintenance",
    date: "2025-10-18",
    testimonial: `Their maintenance and support service is top-notch. We've been working with Moksh Digital for over two years, and they've consistently kept our systems running smoothly. Quick response times and proactive monitoring have saved us from potential downtime multiple times.`,
    project: "Ongoing Website Maintenance",
    result: "99.9% uptime maintained for 2+ years"
  }];


  const categories = [
  { id: 'all', label: 'All Reviews', count: testimonials?.length },
  { id: 'website', label: 'Website Development', count: testimonials?.filter((t) => t?.category === 'website')?.length },
  { id: 'mobile', label: 'Mobile Apps', count: testimonials?.filter((t) => t?.category === 'mobile')?.length },
  { id: 'ecommerce', label: 'E-commerce', count: testimonials?.filter((t) => t?.category === 'ecommerce')?.length },
  { id: 'branding', label: 'Branding & UI/UX', count: testimonials?.filter((t) => t?.category === 'branding')?.length },
  { id: 'government', label: 'Government Platforms', count: testimonials?.filter((t) => t?.category === 'government')?.length },
  { id: 'maintenance', label: 'Maintenance', count: testimonials?.filter((t) => t?.category === 'maintenance')?.length }];


  const filteredTestimonials = activeFilter === 'all' ?
  testimonials :
  testimonials?.filter((t) => t?.category === activeFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={16}
      className={index < rating ? 'text-accent fill-current' : 'text-muted-foreground'} />

    );
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who've experienced digital transformation with Moksh Digital. 
            Their success stories speak louder than any marketing message.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveFilter(category?.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-normal ${
            activeFilter === category?.id ?
            'bg-primary text-primary-foreground shadow-subtle' :
            'bg-card text-muted-foreground hover:text-foreground hover:bg-muted'}`
            }>

              {category?.label}
              <span className="ml-1 text-xs opacity-75">({category?.count})</span>
            </button>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials?.map((testimonial) =>
          <div key={testimonial?.id} className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover" />

                  <div>
                    <h4 className="font-medium text-foreground">{testimonial?.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial?.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex space-x-1 mb-1">
                    {renderStars(testimonial?.rating)}
                  </div>
                  <p className="text-xs text-muted-foreground">{formatDate(testimonial?.date)}</p>
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-sm text-foreground mb-4 leading-relaxed">
                "{testimonial?.testimonial}"
              </blockquote>

              {/* Project Details */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Project:</span>
                  <span className="font-medium text-foreground">{testimonial?.project}</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-muted-foreground">Result:</span>
                  <span className="font-medium text-success">{testimonial?.result}</span>
                </div>
              </div>

              {/* Verification Badge */}
              <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span className="text-xs text-muted-foreground">Verified Client Review</span>
              </div>
            </div>
          )}
        </div>

        {/* Google Reviews Integration */}
        <div className="mt-16 bg-card rounded-xl p-8 shadow-subtle text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img
              src="https://images.unsplash.com/photo-1678483790053-71367bc7a02c"
              alt="Google logo"
              className="w-8 h-8" />

            <h3 className="font-headline text-xl font-semibold text-foreground">
              Google Reviews
            </h3>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">4.9</div>
              <div className="flex justify-center space-x-1 mb-1">
                {renderStars(5)}
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">150+</div>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our clients consistently rate us highly on Google for our professional service, 
            technical expertise, and commitment to delivering exceptional digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open('https://www.google.com/search?q=moksh+digital+reviews', '_blank')}>

              View All Google Reviews
            </Button>
            <Button
              variant="default"
              iconName="Star"
              iconPosition="left"
              onClick={() => window.open('https://www.google.com/search?q=moksh+digital+reviews', '_blank')}>

              Leave a Review
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how we can help transform your business with our proven digital solutions. 
            Your success story could be featured here next!
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-conversion hover:bg-conversion/90 text-conversion-foreground font-cta"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>

            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>);

};

export default TestimonialWall;