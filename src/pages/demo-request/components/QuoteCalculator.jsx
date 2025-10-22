import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const QuoteCalculator = ({ formData, updateFormData }) => {
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  const servicePricing = {
    'website': { base: 75000, name: 'Website Development' },
    'mobile-app': { base: 150000, name: 'Mobile Application' },
    'ecommerce': { base: 125000, name: 'E-commerce Platform' },
    'branding': { base: 50000, name: 'Branding & UI/UX' },
    'government': { base: 200000, name: 'Government Platform' },
    'maintenance': { base: 15000, name: 'Maintenance & Support' },
    'other': { base: 100000, name: 'Other Services' }
  };

  const featurePricing = {
    'responsive': 15000,
    'cms': 25000,
    'ecommerce': 50000,
    'seo': 20000,
    'analytics': 15000,
    'security': 30000,
    'api': 40000,
    'multilingual': 35000
  };

  const timelineMultipliers = {
    'urgent': 1.5,
    'fast': 1.2,
    'standard': 1.0,
    'flexible': 0.9
  };

  const complexityOptions = [
    { value: 'basic', label: 'Basic - Simple design, few pages' },
    { value: 'standard', label: 'Standard - Custom design, moderate features' },
    { value: 'advanced', label: 'Advanced - Complex functionality, integrations' },
    { value: 'enterprise', label: 'Enterprise - Large scale, custom solutions' }
  ];

  const complexityMultipliers = {
    'basic': 0.8,
    'standard': 1.0,
    'advanced': 1.4,
    'enterprise': 2.0
  };

  const additionalServices = [
    { id: 'hosting', label: 'Hosting & Domain (1 year)', price: 12000 },
    { id: 'ssl', label: 'SSL Certificate', price: 5000 },
    { id: 'training', label: 'Team Training', price: 25000 },
    { id: 'support', label: 'Priority Support (6 months)', price: 30000 },
    { id: 'marketing', label: 'Digital Marketing Setup', price: 40000 },
    { id: 'content', label: 'Content Creation', price: 35000 }
  ];

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const calculateEstimate = () => {
    let baseCost = 0;
    let featuresCost = 0;
    let additionalCost = 0;
    let newBreakdown = {};

    // Base service cost
    if (formData?.projectType && servicePricing?.[formData?.projectType]) {
      baseCost = servicePricing?.[formData?.projectType]?.base;
      newBreakdown.baseService = {
        name: servicePricing?.[formData?.projectType]?.name,
        cost: baseCost
      };
    }

    // Features cost
    if (formData?.requiredFeatures && formData?.requiredFeatures?.length > 0) {
      formData?.requiredFeatures?.forEach(feature => {
        if (featurePricing?.[feature]) {
          featuresCost += featurePricing?.[feature];
        }
      });
      newBreakdown.features = {
        name: `Features (${formData?.requiredFeatures?.length})`,
        cost: featuresCost
      };
    }

    // Additional services cost
    if (formData?.additionalServices && formData?.additionalServices?.length > 0) {
      formData?.additionalServices?.forEach(serviceId => {
        const service = additionalServices?.find(s => s?.id === serviceId);
        if (service) {
          additionalCost += service?.price;
        }
      });
      newBreakdown.additionalServices = {
        name: `Additional Services (${formData?.additionalServices?.length})`,
        cost: additionalCost
      };
    }

    let subtotal = baseCost + featuresCost + additionalCost;

    // Apply complexity multiplier
    if (formData?.complexity && complexityMultipliers?.[formData?.complexity]) {
      const complexityMultiplier = complexityMultipliers?.[formData?.complexity];
      subtotal *= complexityMultiplier;
      newBreakdown.complexity = {
        name: `Complexity (${formData?.complexity})`,
        multiplier: complexityMultiplier
      };
    }

    // Apply timeline multiplier
    if (formData?.timeline && timelineMultipliers?.[formData?.timeline]) {
      const timelineMultiplier = timelineMultipliers?.[formData?.timeline];
      subtotal *= timelineMultiplier;
      newBreakdown.timeline = {
        name: `Timeline (${formData?.timeline})`,
        multiplier: timelineMultiplier
      };
    }

    // Government compliance premium
    if (formData?.needsCompliance) {
      const complianceCost = subtotal * 0.2;
      subtotal += complianceCost;
      newBreakdown.compliance = {
        name: 'Government Compliance',
        cost: complianceCost
      };
    }

    setEstimatedCost(Math.round(subtotal));
    setBreakdown(newBreakdown);
    updateFormData('estimatedCost', Math.round(subtotal));
  };

  const handleAdditionalServiceChange = (serviceId, checked) => {
    const currentServices = formData?.additionalServices || [];
    if (checked) {
      updateFormData('additionalServices', [...currentServices, serviceId]);
    } else {
      updateFormData('additionalServices', currentServices?.filter(s => s !== serviceId));
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Calculator" size={32} className="text-success" />
        </div>
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          Instant Quote Calculator
        </h2>
        <p className="text-muted-foreground">
          Get a preliminary estimate for your project based on your requirements
        </p>
      </div>
      {/* Project Complexity */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="Layers" size={20} className="mr-2 text-success" />
          Project Complexity
        </h3>
        
        <Select
          label="Complexity Level"
          description="Choose the complexity level that best matches your project"
          options={complexityOptions}
          value={formData?.complexity}
          onChange={(value) => updateFormData('complexity', value)}
          placeholder="Select complexity level"
          required
        />
      </div>
      {/* Additional Services */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="Plus" size={20} className="mr-2 text-success" />
          Additional Services
        </h3>
        
        <p className="text-muted-foreground mb-6">
          Select any additional services you might need
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {additionalServices?.map((service) => (
            <div key={service?.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <Checkbox
                  checked={formData?.additionalServices?.includes(service?.id) || false}
                  onChange={(e) => handleAdditionalServiceChange(service?.id, e?.target?.checked)}
                />
                <div>
                  <label className="text-sm font-medium text-foreground cursor-pointer">
                    {service?.label}
                  </label>
                </div>
              </div>
              <span className="text-sm font-semibold text-success">
                {formatCurrency(service?.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Cost Breakdown */}
      {estimatedCost > 0 && (
        <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-lg p-6 border border-success/20">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
            <Icon name="Receipt" size={20} className="mr-2 text-success" />
            Cost Breakdown
          </h3>
          
          <div className="space-y-4">
            {/* Base Service */}
            {breakdown?.baseService && (
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-foreground">{breakdown?.baseService?.name}</span>
                <span className="font-medium text-foreground">
                  {formatCurrency(breakdown?.baseService?.cost)}
                </span>
              </div>
            )}

            {/* Features */}
            {breakdown?.features && (
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-foreground">{breakdown?.features?.name}</span>
                <span className="font-medium text-foreground">
                  {formatCurrency(breakdown?.features?.cost)}
                </span>
              </div>
            )}

            {/* Additional Services */}
            {breakdown?.additionalServices && (
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-foreground">{breakdown?.additionalServices?.name}</span>
                <span className="font-medium text-foreground">
                  {formatCurrency(breakdown?.additionalServices?.cost)}
                </span>
              </div>
            )}

            {/* Multipliers */}
            {breakdown?.complexity && (
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-foreground">{breakdown?.complexity?.name}</span>
                <span className="font-medium text-accent">
                  ×{breakdown?.complexity?.multiplier}
                </span>
              </div>
            )}

            {breakdown?.timeline && (
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-foreground">{breakdown?.timeline?.name}</span>
                <span className="font-medium text-accent">
                  ×{breakdown?.timeline?.multiplier}
                </span>
              </div>
            )}

            {/* Compliance */}
            {breakdown?.compliance && (
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-foreground">{breakdown?.compliance?.name}</span>
                <span className="font-medium text-foreground">
                  {formatCurrency(breakdown?.compliance?.cost)}
                </span>
              </div>
            )}

            {/* Total */}
            <div className="flex items-center justify-between py-4 border-t-2 border-success/30">
              <span className="text-lg font-semibold text-foreground">Estimated Total</span>
              <span className="text-2xl font-bold text-success">
                {formatCurrency(estimatedCost)}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Disclaimer */}
      <div className="bg-warning/5 border border-warning/20 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-warning mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Important Note</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                • This is a preliminary estimate based on standard pricing. Final costs may vary based on specific requirements.
              </p>
              <p>
                • Government projects may require additional compliance measures affecting the final quote.
              </p>
              <p>
                • All prices are in Indian Rupees (₹) and exclude applicable taxes.
              </p>
              <p>
                • A detailed proposal with exact pricing will be provided after the consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="flex-1"
          iconName="Download"
          iconPosition="left"
        >
          Download Estimate
        </Button>
        
        <Button
          variant="default"
          className="flex-1 bg-success hover:bg-success/90"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Discuss with Expert
        </Button>
      </div>
    </div>
  );
};

export default QuoteCalculator;