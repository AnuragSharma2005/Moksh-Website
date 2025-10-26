import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
// import OfficeLocation from './components/OfficeLocation';
// import TestimonialWall from './components/TestimonialWall';
import FloatingActions from '../../components/FloatingActions';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch for Digital Solutions | Moksh Digital</title>
        <meta 
          name="description" 
          content="Get in touch with Moksh Digital for expert digital solutions. Contact us for website development, mobile apps, SEO, content writing, and digital marketing services. Free consultation available." 
        />
        <meta name="keywords" content="contact Moksh Digital, digital solutions consultation, website development quote, mobile app development, SEO services, get in touch, free consultation" />
        <meta property="og:title" content="Contact Moksh Digital - Digital Solutions Expert" />
        <meta property="og:description" content="Get in touch for expert digital solutions including website development, mobile apps, SEO, and digital marketing services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mokshdigital.app/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <ContactHero />
        <ContactMethods />
        <ContactForm />
        {/* <OfficeLocation /> */}
        {/* <TestimonialWall /> */}
        <FloatingActions />
      </div>
    </>
  );
};

export default Contact;