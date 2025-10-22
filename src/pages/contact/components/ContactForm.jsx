import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    projectBudget: '',
    timeline: '',
    message: '',
    urgency: '',
    preferredContact: '',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'website', label: 'Website Development' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'ecommerce', label: 'E-commerce Solutions' },
    { value: 'branding', label: 'Branding & UI/UX' },
    { value: 'government', label: 'Government Platforms' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'consultation', label: 'Digital Consultation' },
    { value: 'other', label: 'Other Services' }
  ];

  const budgetRanges = [
    { value: '50k-1l', label: '₹50,000 - ₹1,00,000' },
    { value: '1l-3l', label: '₹1,00,000 - ₹3,00,000' },
    { value: '3l-5l', label: '₹3,00,000 - ₹5,00,000' },
    { value: '5l-10l', label: '₹5,00,000 - ₹10,00,000' },
    { value: '10l+', label: '₹10,00,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 2 weeks)' },
    { value: '1month', label: '1 Month' },
    { value: '2-3months', label: '2-3 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6months+', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - General Inquiry' },
    { value: 'medium', label: 'Medium - Planning Phase' },
    { value: 'high', label: 'High - Ready to Start' },
    { value: 'urgent', label: 'Urgent - Need Immediate Response' }
  ];

  const contactPreferences = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'video', label: 'Video Call' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select inquiry type';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    if (!formData?.terms) newErrors.terms = 'Please accept terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '', email: '', phone: '', company: '', inquiryType: '',
          projectBudget: '', timeline: '', message: '', urgency: '',
          preferredContact: '', newsletter: false, terms: false
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl p-8 shadow-subtle text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-success-foreground" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
              Thank You for Reaching Out!
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              We've received your inquiry and will respond within 2-4 hours during business hours. 
              For immediate assistance, feel free to call or WhatsApp us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+919876543210', '_self')}
              >
                Call Now
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tell Us About Your Project
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            The more details you share, the better we can understand your needs and provide 
            accurate timelines and pricing for your digital transformation.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-card rounded-xl p-8 shadow-subtle">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                error={errors?.name}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />
              <Input
                label="Company Name"
                type="text"
                placeholder="Your company (optional)"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
              />
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Inquiry Type"
                placeholder="Select service type"
                options={inquiryTypes}
                value={formData?.inquiryType}
                onChange={(value) => handleInputChange('inquiryType', value)}
                error={errors?.inquiryType}
                required
              />
              <Select
                label="Project Budget"
                placeholder="Select budget range"
                options={budgetRanges}
                value={formData?.projectBudget}
                onChange={(value) => handleInputChange('projectBudget', value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Timeline"
                placeholder="When do you need this?"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
              />
              <Select
                label="Urgency Level"
                placeholder="How urgent is this?"
                options={urgencyLevels}
                value={formData?.urgency}
                onChange={(value) => handleInputChange('urgency', value)}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Details <span className="text-conversion">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              />
              {errors?.message && (
                <p className="mt-1 text-sm text-error">{errors?.message}</p>
              )}
            </div>

            {/* Preferences */}
            <Select
              label="Preferred Contact Method"
              placeholder="How should we contact you?"
              options={contactPreferences}
              value={formData?.preferredContact}
              onChange={(value) => handleInputChange('preferredContact', value)}
            />

            {/* Checkboxes */}
            <div className="space-y-4">
              <Checkbox
                label="Subscribe to our newsletter for digital insights and updates"
                checked={formData?.newsletter}
                onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
              />
              <Checkbox
                label="I agree to the terms and conditions and privacy policy"
                checked={formData?.terms}
                onChange={(e) => handleInputChange('terms', e?.target?.checked)}
                error={errors?.terms}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="bg-primary hover:bg-primary/90 font-cta"
                iconName="Send"
                iconPosition="right"
              >
                {isSubmitting ? 'Sending Your Inquiry...' : 'Send Inquiry'}
              </Button>
            </div>

            {/* Response Time Notice */}
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Response Time</span>
              </div>
              <p className="text-xs text-muted-foreground">
                We typically respond within 2-4 hours during business hours (9 AM - 8 PM, Mon-Sat). 
                For urgent matters, please call or WhatsApp us directly.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;