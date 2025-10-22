import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import MissionVisionSection from './components/MissionVisionSection';
// import CompanyTimeline from './components/CompanyTimeline';
import ValuesSection from './components/ValuesSection';
import GovernmentAuthSection from './components/GovernmentAuthSection';

import StatsSection from './components/StatsSection';
import FloatingActions from '../../components/FloatingActions';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Government Authorized Digital Partner | Moksh Digital</title>
        <meta 
          name="description" 
          content="Learn about Moksh Digital, a government-authorized digital transformation partner. Our journey, mission, values, and commitment to delivering exceptional website development, mobile apps, SEO, content writing, and digital solutions since our founding." 
        />
        <meta name="keywords" content="about Moksh Digital, government authorized, digital partner, company history, mission vision, values, digital transformation, web development company, mobile app development" />
        <meta property="og:title" content="About Moksh Digital - Authorized Digital Partner" />
        <meta property="og:description" content="Discover our journey as a government-authorized digital transformation partner delivering exceptional digital solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mokshdigital.com/about" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <MissionVisionSection />
        {/* <CompanyTimeline /> */}
        <ValuesSection />
        <GovernmentAuthSection />
      
        <StatsSection />
        <FloatingActions />
      </div>
    </>
  );
};

export default AboutPage;