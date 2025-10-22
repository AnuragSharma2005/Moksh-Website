import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import FloatingActions from '../../components/FloatingActions';

const TeamMemberProfilePage = () => {
  const [searchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);

  const memberId = searchParams?.get('id') || 'arjun-mehta';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = {
    'arjun-mehta': {
      id: 'arjun-mehta',
      name: 'Arjun Mehta',
      role: 'Lead Full Stack Developer',
      image: "https://images.unsplash.com/photo-1505715229805-a1ae4025e73a",
      alt: 'Professional headshot of Arjun Mehta, Lead Full Stack Developer, in business attire',
      location: 'Mumbai, India',
      experience: '8+ years',
      email: 'arjun@mokshdigital.com',
      phone: '+91 98765 43210',
      bio: 'Passionate full-stack developer with expertise in modern web technologies. I specialize in creating scalable applications using React, Node.js, and cloud technologies. My focus is on delivering high-performance solutions that drive business growth.',
      expertise: [
      'Full Stack Development',
      'Cloud Architecture',
      'DevOps & CI/CD',
      'Database Design',
      'API Development',
      'Performance Optimization'],

      skills: [
      { name: 'React/Next.js', level: 95, color: 'blue' },
      { name: 'Node.js/Express', level: 92, color: 'green' },
      { name: 'TypeScript', level: 88, color: 'purple' },
      { name: 'AWS/Cloud', level: 85, color: 'orange' },
      { name: 'MongoDB/PostgreSQL', level: 90, color: 'teal' },
      { name: 'Docker/Kubernetes', level: 82, color: 'indigo' }],

      social: {
        linkedin: 'https://linkedin.com/in/arjun-mehta',
        github: 'https://github.com/arjunmehta',
        portfolio: 'https://arjunmehta.dev',
        twitter: 'https://twitter.com/arjunmehta'
      },
      projects: [
      {
        id: 1,
        title: 'E-commerce Platform Modernization',
        description: 'Led the complete overhaul of a legacy e-commerce system, improving performance by 70%',
        technologies: ['React', 'Node.js', 'MongoDB', 'Redis'],
        role: 'Lead Developer',
        impact: '70% performance improvement'
      },
      {
        id: 2,
        title: 'Government Digital Portal',
        description: 'Developed secure, accessible platform serving 50,000+ citizens daily',
        technologies: ['Next.js', 'PostgreSQL', 'Docker', 'AWS'],
        role: 'Full Stack Developer',
        impact: '50K+ daily users'
      }],

      achievements: [
      'AWS Certified Solutions Architect',
      'Led 20+ successful project deliveries',
      'Mentored 15+ junior developers',
      'Speaker at 5 tech conferences'],

      interests: ['AI/ML Research', 'Open Source Contributing', 'Tech Blogging', 'Mountain Hiking']
    },
    'priya-sharma': {
      id: 'priya-sharma',
      name: 'Priya Sharma',
      role: 'Senior UI/UX Designer',
      image: "https://images.unsplash.com/photo-1587403655231-b1734312903f",
      alt: 'Professional headshot of Priya Sharma, Senior UI/UX Designer, with creative background',
      location: 'Bangalore, India',
      experience: '6+ years',
      email: 'priya@mokshdigital.com',
      phone: '+91 98765 43211',
      bio: 'Creative UI/UX designer passionate about crafting intuitive digital experiences. I combine user research, design thinking, and aesthetic excellence to create interfaces that users love and businesses thrive with.',
      expertise: [
      'User Experience Design',
      'User Interface Design',
      'Design Systems',
      'User Research',
      'Prototyping',
      'Brand Identity'],

      skills: [
      { name: 'Figma/Sketch', level: 98, color: 'pink' },
      { name: 'User Research', level: 92, color: 'purple' },
      { name: 'Prototyping', level: 90, color: 'blue' },
      { name: 'Design Systems', level: 88, color: 'teal' },
      { name: 'Adobe Creative Suite', level: 85, color: 'orange' },
      { name: 'Frontend Implementation', level: 75, color: 'green' }],

      social: {
        linkedin: 'https://linkedin.com/in/priya-sharma',
        dribbble: 'https://dribbble.com/priyasharma',
        portfolio: 'https://priyasharma.design',
        behance: 'https://behance.net/priyasharma'
      },
      projects: [
      {
        id: 1,
        title: 'Healthcare Mobile App Redesign',
        description: 'Redesigned patient care app, increasing user engagement by 120%',
        technologies: ['Figma', 'Principle', 'InVision', 'User Testing'],
        role: 'Lead Designer',
        impact: '120% engagement increase'
      },
      {
        id: 2,
        title: 'Financial Dashboard UX',
        description: 'Created intuitive dashboard reducing task completion time by 45%',
        technologies: ['Sketch', 'Framer', 'User Research', 'A/B Testing'],
        role: 'UX Designer',
        impact: '45% faster task completion'
      }],

      achievements: [
      'Design Award Winner 2023',
      'Led design for 30+ successful projects',
      'Established design system used across 10+ products',
      'Conducted 100+ user interviews'],

      interests: ['Digital Art', 'Photography', 'Travel Blogging', 'Yoga & Meditation']
    },
    'rahul-kumar': {
      id: 'rahul-kumar',
      name: 'Rahul Kumar',
      role: 'Mobile App Developer',
      image: "https://images.unsplash.com/photo-1630659508985-fbb56613d08b",
      alt: 'Professional headshot of Rahul Kumar, Mobile App Developer, in modern office setting',
      location: 'Delhi, India',
      experience: '5+ years',
      email: 'rahul@mokshdigital.com',
      phone: '+91 98765 43212',
      bio: 'Expert mobile app developer specializing in React Native and Flutter. I create cross-platform mobile solutions that deliver native performance and exceptional user experiences across iOS and Android platforms.',
      expertise: [
      'React Native Development',
      'Flutter Development',
      'Native iOS/Android',
      'Mobile UX/UI',
      'App Store Optimization',
      'Mobile Performance'],

      skills: [
      { name: 'React Native', level: 94, color: 'blue' },
      { name: 'Flutter/Dart', level: 88, color: 'cyan' },
      { name: 'iOS/Swift', level: 82, color: 'gray' },
      { name: 'Android/Kotlin', level: 85, color: 'green' },
      { name: 'Firebase', level: 90, color: 'orange' },
      { name: 'Mobile Testing', level: 86, color: 'purple' }],

      social: {
        linkedin: 'https://linkedin.com/in/rahul-kumar',
        github: 'https://github.com/rahulkumar',
        portfolio: 'https://rahulkumar.dev',
        stackoverflow: 'https://stackoverflow.com/users/rahulkumar'
      },
      projects: [
      {
        id: 1,
        title: 'Food Delivery App',
        description: 'Built scalable food delivery app serving 100K+ users with real-time tracking',
        technologies: ['React Native', 'Firebase', 'Google Maps', 'Push Notifications'],
        role: 'Lead Mobile Developer',
        impact: '100K+ active users'
      },
      {
        id: 2,
        title: 'Fitness Tracking App',
        description: 'Developed comprehensive fitness app with wearable integration and social features',
        technologies: ['Flutter', 'HealthKit', 'Google Fit', 'SQLite'],
        role: 'Mobile Developer',
        impact: '4.8/5 app store rating'
      }],

      achievements: [
      'Google Developer Expert - Flutter',
      'Published 15+ apps on app stores',
      'Speaker at mobile development conferences',
      'Contributed to React Native core'],

      interests: ['Mobile Gaming', 'Fitness Technology', 'Open Source', 'Cricket']
    },
    'sarah-johnson': {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      role: 'Digital Marketing Specialist',
      image: "https://images.unsplash.com/photo-1678132070799-542f10bb4a13",
      alt: 'Professional headshot of Sarah Johnson, Digital Marketing Specialist, with marketing analytics background',
      location: 'Pune, India',
      experience: '4+ years',
      email: 'sarah@mokshdigital.com',
      phone: '+91 98765 43213',
      bio: 'Results-driven digital marketing specialist with expertise in SEO, content marketing, and data analytics. I help businesses grow their online presence through strategic digital campaigns and data-driven insights.',
      expertise: [
      'SEO & SEM',
      'Content Marketing',
      'Social Media Strategy',
      'Analytics & Reporting',
      'Email Marketing',
      'Brand Management'],

      skills: [
      { name: 'SEO/SEM', level: 92, color: 'green' },
      { name: 'Google Analytics', level: 88, color: 'orange' },
      { name: 'Content Strategy', level: 90, color: 'purple' },
      { name: 'Social Media', level: 85, color: 'pink' },
      { name: 'Email Marketing', level: 82, color: 'blue' },
      { name: 'Marketing Automation', level: 78, color: 'teal' }],

      social: {
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        twitter: 'https://twitter.com/sarahjohnson',
        portfolio: 'https://sarahjohnson.marketing',
        medium: 'https://medium.com/@sarahjohnson'
      },
      projects: [
      {
        id: 1,
        title: 'E-commerce SEO Campaign',
        description: 'Increased organic traffic by 300% and revenue by 150% through comprehensive SEO strategy',
        technologies: ['SEMrush', 'Google Analytics', 'Schema Markup', 'Content Optimization'],
        role: 'SEO Lead',
        impact: '300% traffic increase'
      },
      {
        id: 2,
        title: 'SaaS Content Marketing',
        description: 'Developed content strategy generating 500+ qualified leads monthly',
        technologies: ['HubSpot', 'Google Ads', 'LinkedIn Ads', 'Marketing Automation'],
        role: 'Marketing Strategist',
        impact: '500+ monthly leads'
      }],

      achievements: [
      'Google Ads Certified Professional',
      'Managed $500K+ in ad spend',
      'Generated 10X ROI on marketing campaigns',
      'Published marketing insights in 20+ publications'],

      interests: ['Digital Trends', 'Content Creation', 'Data Analysis', 'Travel Photography']
    }
  };

  const member = teamMembers?.[memberId] || teamMembers?.['arjun-mehta'];

  const tabs = [
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'skills', label: 'Skills', icon: 'Star' },
  { id: 'projects', label: 'Projects', icon: 'Briefcase' },
  { id: 'achievements', label: 'Achievements', icon: 'Award' }];


  const getSkillColor = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      pink: 'bg-pink-500',
      teal: 'bg-teal-500',
      indigo: 'bg-indigo-500',
      cyan: 'bg-cyan-500',
      gray: 'bg-gray-500'
    };
    return colors?.[color] || 'bg-blue-500';
  };

  return (
    <>
      <Helmet>
        <title>{`${member?.name} - ${member?.role} | Moksh Digital Team`}</title>
        <meta
          name="description"
          content={`Meet ${member?.name}, ${member?.role} at Moksh Digital. ${member?.experience} experience in ${member?.expertise?.join(', ')}. View portfolio, skills, and professional background.`} />

        <meta name="keywords" content={`${member?.name}, ${member?.role}, team member, portfolio, skills, Moksh Digital`} />
        <meta property="og:title" content={`${member?.name} - ${member?.role} | Moksh Digital`} />
        <meta property="og:description" content={member?.bio} />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href={`https://mokshdigital.com/team-member-profile?id=${member?.id}`} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Profile Info */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <Icon name="MapPin" size={16} className="text-white" />
                  <span className="text-sm font-medium text-white">{member?.location}</span>
                </div>

                <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {member?.name}
                </h1>
                <h2 className="font-value-prop text-xl sm:text-2xl text-accent mb-6">
                  {member?.role}
                </h2>
                
                <p className="font-body text-lg text-white/90 mb-8 max-w-2xl">
                  {member?.bio}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{member?.experience}</div>
                    <div className="text-white/80 text-sm">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{member?.projects?.length}+</div>
                    <div className="text-white/80 text-sm">Major Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{member?.skills?.length}</div>
                    <div className="text-white/80 text-sm">Core Skills</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {Object.entries(member?.social || {})?.map(([platform, url]) =>
                  <Button
                    key={platform}
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => window.open(url, '_blank')}>

                      <Icon name={platform === 'linkedin' ? 'Linkedin' : platform === 'github' ? 'Github' : 'ExternalLink'} size={16} className="mr-2" />
                      {platform?.charAt(0)?.toUpperCase() + platform?.slice(1)}
                    </Button>
                  )}
                </div>
              </div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative">

                <div className="relative z-10 mx-auto w-80 h-80 rounded-2xl overflow-hidden glass-card">
                  <img
                    src={member?.image}
                    alt={member?.alt}
                    className="w-full h-full object-cover" />

                </div>

                {/* Floating Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 glass-auth rounded-lg p-4">

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Get in Touch</p>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        onClick={() => window.open(`mailto:${member?.email}`, '_self')}
                        className="bg-primary hover:bg-primary/90">

                        <Icon name="Mail" size={14} />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(`tel:${member?.phone}`, '_self')}
                        className="bg-success hover:bg-success/90">

                        <Icon name="Phone" size={14} />
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Background Decoration */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) =>
              <Button
                key={tab?.id}
                variant={selectedTab === tab?.id ? "default" : "ghost"}
                onClick={() => setSelectedTab(tab?.id)}
                className={`flex-shrink-0 ${
                selectedTab === tab?.id ?
                'bg-primary text-primary-foreground' :
                'hover:bg-muted'}`
                }>

                  <Icon name={tab?.icon} size={16} className="mr-2" />
                  {tab?.label}
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {selectedTab === 'about' &&
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12">

                  <div>
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                      Professional Background
                    </h3>
                    <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                      {member?.bio}
                    </p>

                    <h4 className="font-medium text-foreground mb-4">Areas of Expertise</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {member?.expertise?.map((area, idx) =>
                    <div key={idx} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="text-sm text-foreground">{area}</span>
                        </div>
                    )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-4">Personal Interests</h4>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {member?.interests?.map((interest, idx) =>
                    <div key={idx} className="card-interactive p-4 text-center">
                          <Icon name="Heart" size={20} className="text-primary mx-auto mb-2" />
                          <span className="text-sm font-medium text-foreground">{interest}</span>
                        </div>
                    )}
                    </div>

                    <div className="card-interactive p-6">
                      <h4 className="font-medium text-foreground mb-4">Contact Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Icon name="Mail" size={16} className="text-muted-foreground" />
                          <span className="text-sm text-foreground">{member?.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Phone" size={16} className="text-muted-foreground" />
                          <span className="text-sm text-foreground">{member?.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="MapPin" size={16} className="text-muted-foreground" />
                          <span className="text-sm text-foreground">{member?.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              }

              {selectedTab === 'skills' &&
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>

                  <h3 className="font-headline text-2xl font-bold text-foreground mb-8 text-center">
                    Technical Skills & Expertise
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {member?.skills?.map((skill, idx) =>
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card-interactive p-6">

                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-medium text-foreground">{skill?.name}</h4>
                          <span className="text-sm font-bold text-primary">{skill?.level}%</span>
                        </div>
                        
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                          <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill?.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                        className={`h-full rounded-full ${getSkillColor(skill?.color)}`} />

                        </div>
                      </motion.div>
                  )}
                  </div>
                </motion.div>
              }

              {selectedTab === 'projects' &&
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>

                  <h3 className="font-headline text-2xl font-bold text-foreground mb-8 text-center">
                    Featured Projects
                  </h3>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {member?.projects?.map((project, idx) =>
                  <motion.div
                    key={project?.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="card-interactive p-8 hover-lift cursor-pointer"
                    onClick={() => setSelectedProject(project)}>

                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-headline text-xl font-bold text-foreground">{project?.title}</h4>
                          <div className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded-full">
                            {project?.role}
                          </div>
                        </div>
                        
                        <p className="font-body text-muted-foreground mb-4">
                          {project?.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project?.technologies?.map((tech, techIdx) =>
                      <span
                        key={techIdx}
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md">

                              {tech}
                            </span>
                      )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-primary font-medium text-sm">{project?.impact}</div>
                          <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                        </div>
                      </motion.div>
                  )}
                  </div>
                </motion.div>
              }

              {selectedTab === 'achievements' &&
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>

                  <h3 className="font-headline text-2xl font-bold text-foreground mb-8 text-center">
                    Achievements & Recognition
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {member?.achievements?.map((achievement, idx) =>
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card-interactive p-6 text-center hover-lift">

                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="Award" size={24} className="text-primary" />
                        </div>
                        <p className="font-medium text-foreground">{achievement}</p>
                      </motion.div>
                  )}
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>

              <h2 className="font-headline text-3xl font-bold text-foreground mb-4">
                Let's Work Together
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Interested in collaborating with {member?.name}? Get in touch to discuss your project requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => window.open(`mailto:${member?.email}`, '_self')}
                  className="bg-primary hover:bg-primary/90">

                  <Icon name="Mail" size={20} className="mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild>

                  <Link to="/team">
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Back to Team
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <FloatingActions />
      </div>
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-card rounded-xl max-w-2xl w-full p-8"
            onClick={(e) => e?.stopPropagation()}>

              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline text-2xl font-bold text-foreground">
                  {selectedProject?.title}
                </h3>
                <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors">

                  <Icon name="X" size={16} />
                </button>
              </div>

              <p className="font-body text-muted-foreground mb-6">
                {selectedProject?.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Role</h4>
                  <p className="text-sm text-muted-foreground">{selectedProject?.role}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Impact</h4>
                  <p className="text-sm text-success font-medium">{selectedProject?.impact}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies?.map((tech, idx) =>
                <span
                  key={idx}
                  className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-md">

                      {tech}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};

export default TeamMemberProfilePage;