import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import FormProgress from './components/FormProgress';
import ProjectScopeAssessment from './components/ProjectScopeAssessment';
import ContactInformation from './components/ContactInformation';
import CalendarIntegration from './components/CalendarIntegration';
import QuoteCalculator from './components/QuoteCalculator';
import FloatingActions from '../../components/FloatingActions';

const DemoRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    requirements: '',
    contactInfo: {},
    preferredDate: null
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProjectScopeAssessment
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            errors={errors}
          />
        );
      case 2:
        return (
          <ContactInformation
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
          />
        );
      case 3:
        return (
          <CalendarIntegration
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
          />
        );
      case 4:
        return (
          <QuoteCalculator
            formData={formData}
            updateFormData={updateFormData}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  const stepTitles = ['Project Scope', 'Contact Info', 'Schedule', 'Quote'];

  return (
    <>
      <Helmet>
        <title>Request Free Demo - Start Your Digital Transformation | Moksh Digital</title>
        <meta 
          name="description" 
          content="Request a free demo of our digital solutions. Get personalized consultation for website development, mobile apps, SEO, content writing, and digital marketing services. Start your transformation today." 
        />
        <meta name="keywords" content="free demo, digital consultation, website development demo, mobile app consultation, SEO consultation, digital transformation, Moksh Digital demo" />
        <meta property="og:title" content="Request Free Demo - Digital Solutions | Moksh Digital" />
        <meta property="og:description" content="Get a personalized demo of our digital solutions including websites, mobile apps, SEO, and digital marketing." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mokshdigital.com/demo-request" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 bg-moksha-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-6">
                Request Your Free Demo
              </h1>
              <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a personalized demonstration of our digital solutions and discover how we can transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Indicator */}
        <FormProgress 
          currentStep={currentStep} 
          totalSteps={4}
          stepTitles={stepTitles}
        />

        {/* Form Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderStep()}
          </div>
        </section>

        <FloatingActions />
      </div>
    </>
  );
};

export default DemoRequest;