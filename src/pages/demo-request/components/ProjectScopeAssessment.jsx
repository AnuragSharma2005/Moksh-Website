import React from 'react';
import { Checkbox, CheckboxGroup } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ProjectScopeAssessment = ({ formData, updateFormData, errors }) => {
  const projectTypes = [
    { value: 'website', label: 'Website Development' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'branding', label: 'Branding & UI/UX' },
    { value: 'government', label: 'Government Platform' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'other', label: 'Other Services' }
  ];

  const budgetRanges = [
    { value: '50k-1l', label: '₹50,000 - ₹1,00,000' },
    { value: '1l-3l', label: '₹1,00,000 - ₹3,00,000' },
    { value: '3l-5l', label: '₹3,00,000 - ₹5,00,000' },
    { value: '5l-10l', label: '₹5,00,000 - ₹10,00,000' },
    { value: '10l+', label: '₹10,00,000+' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: 'fast', label: 'Fast Track (1 month)' },
    { value: 'standard', label: 'Standard (2-3 months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const features = [
    { id: 'responsive', label: 'Responsive Design', description: 'Mobile & tablet optimized' },
    { id: 'cms', label: 'Content Management', description: 'Easy content updates' },
    { id: 'ecommerce', label: 'E-commerce Integration', description: 'Online selling capabilities' },
    { id: 'seo', label: 'SEO Optimization', description: 'Search engine visibility' },
    { id: 'analytics', label: 'Analytics Integration', description: 'Performance tracking' },
    { id: 'security', label: 'Advanced Security', description: 'SSL & data protection' },
    { id: 'api', label: 'API Integration', description: 'Third-party services' },
    { id: 'multilingual', label: 'Multi-language Support', description: 'International reach' }
  ];

  const handleProjectTypeChange = (value) => {
    updateFormData('projectType', value);
  };

  const handleFeatureChange = (featureId, checked) => {
    const currentFeatures = formData?.requiredFeatures || [];
    if (checked) {
      updateFormData('requiredFeatures', [...currentFeatures, featureId]);
    } else {
      updateFormData('requiredFeatures', currentFeatures?.filter(f => f !== featureId));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Target" size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          Project Scope Assessment
        </h2>
        <p className="text-muted-foreground">
          Help us understand your project requirements to provide accurate recommendations
        </p>
      </div>
      {/* Project Type Selection */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Layers" size={20} className="mr-2 text-primary" />
          What type of project do you need?
        </h3>
        <Select
          label="Primary Service Required"
          description="Select the main service you're looking for"
          options={projectTypes}
          value={formData?.projectType}
          onChange={handleProjectTypeChange}
          error={errors?.projectType}
          required
          placeholder="Choose your project type"
        />
      </div>
      {/* Budget & Timeline */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="IndianRupee" size={20} className="mr-2 text-primary" />
            Budget Range
          </h3>
          <Select
            label="Project Budget"
            description="Select your approximate budget range"
            options={budgetRanges}
            value={formData?.budgetRange}
            onChange={(value) => updateFormData('budgetRange', value)}
            error={errors?.budgetRange}
            required
            placeholder="Choose budget range"
          />
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Calendar" size={20} className="mr-2 text-primary" />
            Timeline
          </h3>
          <Select
            label="Project Timeline"
            description="When do you need this completed?"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => updateFormData('timeline', value)}
            error={errors?.timeline}
            required
            placeholder="Choose timeline"
          />
        </div>
      </div>
      {/* Required Features */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="CheckSquare" size={20} className="mr-2 text-primary" />
          Required Features
        </h3>
        <p className="text-muted-foreground mb-6">
          Select all features you need for your project
        </p>
        
        <CheckboxGroup label="Project Features" error={errors?.requiredFeatures}>
          <div className="grid sm:grid-cols-2 gap-4">
            {features?.map((feature) => (
              <div key={feature?.id} className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50 transition-colors">
                <Checkbox
                  checked={formData?.requiredFeatures?.includes(feature?.id) || false}
                  onChange={(e) => handleFeatureChange(feature?.id, e?.target?.checked)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground cursor-pointer">
                    {feature?.label}
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CheckboxGroup>
      </div>
      {/* Additional Requirements */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="FileText" size={20} className="mr-2 text-primary" />
          Additional Requirements
        </h3>
        <Input
          label="Project Description"
          type="text"
          description="Describe your project in detail, including any specific requirements or preferences"
          placeholder="Tell us more about your project vision, target audience, and any specific functionality you need..."
          value={formData?.projectDescription}
          onChange={(e) => updateFormData('projectDescription', e?.target?.value)}
          error={errors?.projectDescription}
          className="mb-4"
        />

        <Input
          label="Reference Websites/Apps"
          type="text"
          description="Share any websites or apps you like as inspiration (optional)"
          placeholder="https://example.com, https://another-example.com"
          value={formData?.referenceUrls}
          onChange={(e) => updateFormData('referenceUrls', e?.target?.value)}
          error={errors?.referenceUrls}
        />
      </div>
      {/* Current Status */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Info" size={20} className="mr-2 text-primary" />
          Current Status
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Checkbox
              label="I have an existing website/app"
              description="We'll help you migrate or redesign"
              checked={formData?.hasExistingProject || false}
              onChange={(e) => updateFormData('hasExistingProject', e?.target?.checked)}
            />
          </div>
          <div>
            <Checkbox
              label="I need government compliance"
              description="We're authorized government partners"
              checked={formData?.needsCompliance || false}
              onChange={(e) => updateFormData('needsCompliance', e?.target?.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScopeAssessment;