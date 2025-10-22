import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['website', 'mobile']);

  const services = [
    {
      id: 'website',
      name: 'Website Development',
      icon: 'Globe',
      features: {
        'Custom Design': true,
        'Responsive Layout': true,
        'SEO Optimization': true,
        'Content Management': true,
        'E-commerce Integration': false,
        'Mobile App': false,
        'Advanced Analytics': true,
        'Multi-language Support': true,
        'Government Compliance': true,
        'Maintenance & Support': true
      },
      price: '₹25,000',
      timeline: '2-4 weeks',
      bestFor: 'Business presence & lead generation'
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      icon: 'Smartphone',
      features: {
        'Custom Design': true,
        'Responsive Layout': true,
        'SEO Optimization': false,
        'Content Management': true,
        'E-commerce Integration': true,
        'Mobile App': true,
        'Advanced Analytics': true,
        'Multi-language Support': true,
        'Government Compliance': true,
        'Maintenance & Support': true
      },
      price: '₹75,000',
      timeline: '6-10 weeks',
      bestFor: 'User engagement & mobile commerce'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Platform',
      icon: 'ShoppingCart',
      features: {
        'Custom Design': true,
        'Responsive Layout': true,
        'SEO Optimization': true,
        'Content Management': true,
        'E-commerce Integration': true,
        'Mobile App': false,
        'Advanced Analytics': true,
        'Multi-language Support': true,
        'Government Compliance': true,
        'Maintenance & Support': true
      },
      price: '₹50,000',
      timeline: '4-8 weeks',
      bestFor: 'Online sales & inventory management'
    },
    {
      id: 'branding',
      name: 'Branding & UI/UX',
      icon: 'Palette',
      features: {
        'Custom Design': true,
        'Responsive Layout': true,
        'SEO Optimization': false,
        'Content Management': false,
        'E-commerce Integration': false,
        'Mobile App': false,
        'Advanced Analytics': false,
        'Multi-language Support': true,
        'Government Compliance': false,
        'Maintenance & Support': true
      },
      price: '₹15,000',
      timeline: '1-3 weeks',
      bestFor: 'Brand identity & user experience'
    }
  ];

  const allFeatures = [
    'Custom Design',
    'Responsive Layout', 
    'SEO Optimization',
    'Content Management',
    'E-commerce Integration',
    'Mobile App',
    'Advanced Analytics',
    'Multi-language Support',
    'Government Compliance',
    'Maintenance & Support'
  ];

  const toggleService = (serviceId) => {
    if (selectedServices?.includes(serviceId)) {
      if (selectedServices?.length > 1) {
        setSelectedServices(selectedServices?.filter(id => id !== serviceId));
      }
    } else {
      if (selectedServices?.length < 3) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  const selectedServiceData = services?.filter(service => selectedServices?.includes(service?.id));

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Our Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the services that best fit your needs. Compare features, pricing, and timelines to make an informed decision.
          </p>
        </motion.div>

        {/* Service Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {services?.map((service) => (
              <button
                key={service?.id}
                onClick={() => toggleService(service?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-normal ${
                  selectedServices?.includes(service?.id)
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-card text-foreground border border-border hover:bg-muted'
                }`}
              >
                <Icon name={service?.icon} size={16} />
                <span>{service?.name}</span>
                {selectedServices?.includes(service?.id) && (
                  <Icon name="Check" size={14} />
                )}
              </button>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Select 1-3 services to compare • {selectedServices?.length}/3 selected
          </p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-6 font-headline font-bold text-foreground">
                    Features
                  </th>
                  {selectedServiceData?.map((service) => (
                    <th key={service?.id} className="text-center p-6 min-w-[200px]">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Icon name={service?.icon} size={24} className="text-primary-foreground" />
                        </div>
                        <div className="font-headline font-bold text-foreground">
                          {service?.name}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Pricing Row */}
                <tr className="border-b border-border">
                  <td className="p-6 font-medium text-foreground">Starting Price</td>
                  {selectedServiceData?.map((service) => (
                    <td key={service?.id} className="p-6 text-center">
                      <div className="font-headline text-xl font-bold text-primary">
                        {service?.price}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Timeline Row */}
                <tr className="border-b border-border">
                  <td className="p-6 font-medium text-foreground">Timeline</td>
                  {selectedServiceData?.map((service) => (
                    <td key={service?.id} className="p-6 text-center">
                      <div className="font-medium text-foreground">
                        {service?.timeline}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Best For Row */}
                <tr className="border-b border-border bg-muted/20">
                  <td className="p-6 font-medium text-foreground">Best For</td>
                  {selectedServiceData?.map((service) => (
                    <td key={service?.id} className="p-6 text-center">
                      <div className="text-sm text-muted-foreground">
                        {service?.bestFor}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Feature Rows */}
                {allFeatures?.map((feature) => (
                  <tr key={feature} className="border-b border-border hover:bg-muted/10">
                    <td className="p-6 font-medium text-foreground">{feature}</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-6 text-center">
                        {service?.features?.[feature] ? (
                          <Icon name="Check" size={20} className="text-success mx-auto" />
                        ) : (
                          <Icon name="X" size={20} className="text-muted-foreground mx-auto opacity-50" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Section */}
          <div className="p-6 bg-muted/20 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div>
                <h3 className="font-headline font-bold text-foreground mb-1">
                  Ready to get started?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Schedule a consultation to discuss your specific requirements
                </p>
              </div>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="default"
                  className="border-primary/30 text-primary hover:bg-primary/5"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Download Comparison
                </Button>
                <Button
                  variant="default"
                  size="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComparison;