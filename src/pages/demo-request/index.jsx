import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ProjectScopeAssessment from './components/ProjectScopeAssessment';

const DemoRequest = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    requirements: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your demo request has been submitted.");
  };

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
       {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[65vh] bg-moksha-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Request Your Free Demo
              </h1>
              <p className="font-body text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Get a personalized demonstration of our digital solutions and discover how we can
                transform your business into a digital success story.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Project Scope Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectScopeAssessment
              formData={formData}
              updateFormData={updateFormData}
              handleSubmit={handleSubmit}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoRequest;
