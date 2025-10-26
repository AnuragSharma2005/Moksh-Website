import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
// import TeamMemberCard from './components/TeamMemberCard';
// import TeamStats from './components/TeamStats';
import ExpertiseMapping from './components/ExpertiseMapping';
// import TeamCulture from './components/TeamCulture';
// import OrganizationChart from './components/OrganizationChart';
// import FloatingActions from '../../components/FloatingActions';


const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Team - Meet the Digital Experts | Moksh Digital</title>
        <meta 
          name="description" 
          content="Meet the talented team behind Moksh Digital's success. Our expert developers, designers, and digital marketers bring years of experience in website development, mobile apps, SEO, content writing, and digital solutions." 
        />
        <meta name="keywords" content="Moksh Digital team, digital experts, web developers, mobile app developers, UI/UX designers, SEO specialists, content writers, digital marketing team" />
        <meta property="og:title" content="Meet Our Expert Team - Moksh Digital" />
        <meta property="og:description" content="Discover the talented professionals behind Moksh Digital's digital transformation solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mokshdigital.com/team" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        {/* <TeamStats /> */}
        <ExpertiseMapping />
        {/* <TeamCulture /> */}
        {/* <OrganizationChart /> */}
        {/* <FloatingActions /> */}
      </div>
    </>
  );
};

export default TeamPage;