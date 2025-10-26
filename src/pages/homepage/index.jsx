import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
// import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import TeamExpertise from './components/TeamExpertise';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';
import FloatingActions from '../../components/FloatingActions';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Moksh Digital</title>
        <meta 
          name="description" 
          content="Transform your business with Moksh Digital's expert digital solutions. Specializing in website development, mobile apps, e-commerce, SEO, content writing, and digital marketing. Government-authorized partner with 150+ successful projects and 98% client satisfaction." 
        />
        <meta name="keywords" content="digital transformation, website development, mobile app development, e-commerce development, SEO services, content writing, digital marketing, government authorized, Moksh Digital, web design, app development" />
        <meta property="og:title" content="Moksh Digital - Premier Digital Transformation Partner" />
        <meta property="og:description" content="Expert digital solutions including website development, mobile apps, SEO, and digital marketing. Government-authorized partner with 150+ successful projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mokshdigital.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moksh Digital - Digital Transformation Partner" />
        <meta name="twitter:description" content="Transform your business with expert digital solutions. Website development, mobile apps, SEO & more." />
        <link rel="canonical" href="https://mokshdigital.app" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ServicesPreview />
        {/* <FeaturedCaseStudies /> */}
        
        <TrustIndicators />
        <TeamExpertise />
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Homepage;