import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactInformation = ({ formData, updateFormData, errors }) => {
  const companyTypes = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small Business (11-50 employees)' },
    { value: 'medium', label: 'Medium Business (51-200 employees)' },
    { value: 'enterprise', label: 'Enterprise (200+ employees)' },
    { value: 'government', label: 'Government Organization' },
    { value: 'ngo', label: 'NGO/Non-Profit' },
    { value: 'individual', label: 'Individual/Freelancer' }
  ];

  const industries = [
    { value: 'technology', label: 'Technology & Software' },
    { value: 'healthcare', label: 'Healthcare & Medical' },
    { value: 'education', label: 'Education & Training' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'hospitality', label: 'Hospitality & Tourism' },
    { value: 'consulting', label: 'Consulting Services' },
    { value: 'government', label: 'Government & Public Sector' },
    { value: 'other', label: 'Other' }
  ];

  const communicationMethods = [
    { id: 'email', label: 'Email', description: 'Professional email communication' },
    { id: 'phone', label: 'Phone Call', description: 'Direct phone consultation' },
    { id: 'whatsapp', label: 'WhatsApp', description: 'Quick messaging and updates' },
    { id: 'video', label: 'Video Call', description: 'Screen sharing and detailed discussion' },
    { id: 'in-person', label: 'In-Person Meeting', description: 'Face-to-face consultation' }
  ];

  const handleCommunicationChange = (methodId, checked) => {
    const currentMethods = formData?.preferredCommunication || [];
    if (checked) {
      updateFormData('preferredCommunication', [...currentMethods, methodId]);
    } else {
      updateFormData('preferredCommunication', currentMethods?.filter(m => m !== methodId));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="User" size={32} className="text-secondary" />
        </div>
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          Contact Information
        </h2>
        <p className="text-muted-foreground">
          Let's get to know you and your organization better
        </p>
      </div>
      {/* Personal Information */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="UserCircle" size={20} className="mr-2 text-secondary" />
          Personal Details
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.fullName}
            onChange={(e) => updateFormData('fullName', e?.target?.value)}
            error={errors?.fullName}
            required
          />
          
          <Input
            label="Job Title"
            type="text"
            placeholder="e.g., CEO, Marketing Manager, Founder"
            value={formData?.jobTitle}
            onChange={(e) => updateFormData('jobTitle', e?.target?.value)}
            error={errors?.jobTitle}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            value={formData?.email}
            onChange={(e) => updateFormData('email', e?.target?.value)}
            error={errors?.email}
            required
          />
          
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData?.phone}
            onChange={(e) => updateFormData('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />
        </div>
      </div>
      {/* Company Information */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="Building" size={20} className="mr-2 text-secondary" />
          Company Details
        </h3>
        
        <div className="space-y-6">
          <Input
            label="Company Name"
            type="text"
            placeholder="Enter your company name"
            value={formData?.companyName}
            onChange={(e) => updateFormData('companyName', e?.target?.value)}
            error={errors?.companyName}
            required
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Select
              label="Company Type"
              description="Select your organization type"
              options={companyTypes}
              value={formData?.companyType}
              onChange={(value) => updateFormData('companyType', value)}
              error={errors?.companyType}
              required
              placeholder="Choose company type"
            />
            
            <Select
              label="Industry"
              description="Select your primary industry"
              options={industries}
              value={formData?.industry}
              onChange={(value) => updateFormData('industry', value)}
              error={errors?.industry}
              required
              placeholder="Choose industry"
            />
          </div>

          <Input
            label="Company Website"
            type="url"
            placeholder="https://www.yourcompany.com (optional)"
            value={formData?.companyWebsite}
            onChange={(e) => updateFormData('companyWebsite', e?.target?.value)}
            error={errors?.companyWebsite}
          />
        </div>
      </div>
      {/* Communication Preferences */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="MessageCircle" size={20} className="mr-2 text-secondary" />
          Communication Preferences
        </h3>
        
        <p className="text-muted-foreground mb-6">
          How would you prefer to communicate with our team? (Select all that apply)
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {communicationMethods?.map((method) => (
            <div key={method?.id} className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <Checkbox
                checked={formData?.preferredCommunication?.includes(method?.id) || false}
                onChange={(e) => handleCommunicationChange(method?.id, e?.target?.checked)}
                className="mt-1"
              />
              <div className="flex-1">
                <label className="text-sm font-medium text-foreground cursor-pointer">
                  {method?.label}
                </label>
                <p className="text-xs text-muted-foreground mt-1">
                  {method?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Information */}
      <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-6 border border-secondary/20">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="MapPin" size={20} className="mr-2 text-secondary" />
          Location & Availability
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="City/Location"
            type="text"
            placeholder="e.g., Mumbai, Delhi, Bangalore"
            value={formData?.location}
            onChange={(e) => updateFormData('location', e?.target?.value)}
            error={errors?.location}
            required
          />
          
          <Input
            label="Best Time to Contact"
            type="text"
            placeholder="e.g., 10 AM - 6 PM IST, Weekdays only"
            value={formData?.bestTimeToContact}
            onChange={(e) => updateFormData('bestTimeToContact', e?.target?.value)}
            error={errors?.bestTimeToContact}
          />
        </div>

        <div className="mt-6">
          <Checkbox
            label="I'm interested in government-compliant solutions"
            description="We're authorized government partners and can ensure full compliance"
            checked={formData?.interestedInCompliance || false}
            onChange={(e) => updateFormData('interestedInCompliance', e?.target?.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;