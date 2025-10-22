import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ServiceCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const serviceOptions = [
    { value: 'website', label: 'Website Development' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'branding', label: 'Branding & UI/UX' },
    { value: 'government', label: 'Government Platform' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'consultation', label: 'Technical Consultation' }
  ];

  const budgetOptions = [
    { value: '25k-50k', label: '₹25,000 - ₹50,000' },
    { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
    { value: '100k-250k', label: '₹1,00,000 - ₹2,50,000' },
    { value: '250k-500k', label: '₹2,50,000 - ₹5,00,000' },
    { value: '500k+', label: '₹5,00,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: '1-2weeks', label: '1-2 weeks' },
    { value: '3-4weeks', label: '3-4 weeks' },
    { value: '1-2months', label: '1-2 months' },
    { value: '3-6months', label: '3-6 months' },
    { value: '6months+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak directly with our experts',
      value: '+91 98765 43210',
      action: 'tel:+919876543210',
      color: 'text-success'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      description: 'Get detailed project proposals',
      value: 'hello@mokshdigital.com',
      action: 'mailto:hello@mokshdigital.com',
      color: 'text-primary'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      description: 'Quick chat for instant queries',
      value: '+91 98765 43210',
      action: 'https://wa.me/919876543210',
      color: 'text-success'
    },
    {
      icon: 'Calendar',
      title: 'Schedule Meeting',
      description: 'Book a consultation slot',
      value: 'Available 9 AM - 6 PM',
      action: '/demo-request',
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-16 bg-moksha-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Get a free consultation and detailed project proposal. Let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-auth rounded-xl p-8"
          >
            <div className="mb-6">
              <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                Get Your Free Consultation
              </h3>
              <p className="font-body text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                required
              />

              <Select
                label="Service Required"
                placeholder="Select a service"
                options={serviceOptions}
                value={formData?.service}
                onChange={(value) => handleInputChange('service', value)}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Budget Range"
                  placeholder="Select budget"
                  options={budgetOptions}
                  value={formData?.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                />
                <Select
                  label="Timeline"
                  placeholder="Select timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-cta"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Get Free Consultation
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl p-6 border border-white/20">
              <h3 className="font-headline text-xl font-bold text-white mb-4">
                Prefer Direct Contact?
              </h3>
              <p className="font-body text-white/80 mb-6">
                Choose your preferred way to connect with our team. We're here to help you succeed.
              </p>

              <div className="space-y-4">
                {contactMethods?.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method?.action}
                    target={method?.action?.startsWith('http') ? '_blank' : '_self'}
                    rel={method?.action?.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-normal hover-lift group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-normal`}>
                      <Icon name={method?.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-headline font-bold text-white mb-1">
                        {method?.title}
                      </h4>
                      <p className="text-sm text-white/70 mb-1">
                        {method?.description}
                      </p>
                      <p className="text-sm font-medium text-accent">
                        {method?.value}
                      </p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-white/60 group-hover:text-white transition-colors duration-normal" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card rounded-xl p-6 border border-white/20">
              <h4 className="font-headline font-bold text-white mb-4 text-center">
                Why Choose Moksh Digital?
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '24hrs', label: 'Response Time' },
                  { number: '150+', label: 'Projects Delivered' },
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '5+', label: 'Years Experience' }
                ]?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-headline text-xl font-bold text-accent mb-1">
                      {stat?.number}
                    </div>
                    <div className="font-body text-xs text-white/80">
                      {stat?.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Authorization Badge */}
            <div className="glass-card rounded-xl p-6 border border-accent/30 bg-accent/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-white">
                    Government Authorized
                  </h4>
                  <p className="text-sm text-white/80">
                    Certified Digital Partner
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                We are an authorized government digital service provider, ensuring compliance and security in all our solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;