import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import FloatingActions from '../../components/FloatingActions';

const PersonalProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = [
  { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
  { id: 'web', label: 'Web Apps', icon: 'Globe' },
  { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone' },
  { id: 'ai', label: 'AI/ML', icon: 'Brain' },
  { id: 'blockchain', label: 'Blockchain', icon: 'Link' },
  { id: 'iot', label: 'IoT', icon: 'Wifi' }];


  const projects = [
  {
    id: 'smart-city-dashboard',
    title: 'Smart City Dashboard',
    category: 'web',
    description: 'Real-time analytics dashboard for smart city infrastructure monitoring with IoT integration and predictive analytics.',
    image: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
    alt: 'Modern dashboard interface showing smart city analytics with charts and real-time data visualization',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'IoT Sensors'],
    timeline: '6 months',
    status: 'Completed',
    cardColor: 'blue',
    features: ['Real-time monitoring', 'Predictive analytics', 'IoT integration', 'Interactive maps'],
    demoUrl: '#',
    codeUrl: '#',
    learnings: ['Advanced data visualization', 'IoT protocol implementation', 'Real-time data processing']
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    category: 'ai',
    description: 'Advanced AI-powered content generation platform using GPT-4 and custom models for marketing content creation.',
    image: "https://images.unsplash.com/photo-1706697318037-7822d2c3fd59",
    alt: 'AI interface showing automated content generation with various content types and customization options',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL'],
    timeline: '4 months',
    status: 'In Progress',
    cardColor: 'purple',
    features: ['Multi-format content', 'Brand voice training', 'SEO optimization', 'Batch generation'],
    demoUrl: '#',
    codeUrl: '#',
    learnings: ['AI model integration', 'Natural language processing', 'API optimization']
  },
  {
    id: 'decentralized-voting',
    title: 'Decentralized Voting System',
    category: 'blockchain',
    description: 'Blockchain-based secure voting platform ensuring transparency, immutability, and verifiability for democratic processes.',
    image: "https://images.unsplash.com/photo-1649884494733-60b98da145ee",
    alt: 'Blockchain voting interface with secure authentication and transparent ballot casting system',
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'IPFS'],
    timeline: '8 months',
    status: 'Completed',
    cardColor: 'green',
    features: ['Immutable records', 'Anonymous voting', 'Real-time results', 'Audit trails'],
    demoUrl: '#',
    codeUrl: '#',
    learnings: ['Smart contract development', 'Blockchain security', 'Decentralized storage']
  },
  {
    id: 'health-monitoring-app',
    title: 'Health Monitoring App',
    category: 'mobile',
    description: 'Cross-platform health monitoring application with wearable integration and AI-powered health insights.',
    image: "https://images.unsplash.com/photo-1683639803797-caff1854d50d",
    alt: 'Mobile health app interface showing vital signs monitoring, fitness tracking, and health analytics',
    technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'HealthKit', 'Google Fit'],
    timeline: '5 months',
    status: 'Completed',
    cardColor: 'pink',
    features: ['Wearable integration', 'Health insights', 'Emergency alerts', 'Data visualization'],
    demoUrl: '#',
    codeUrl: '#',
    learnings: ['Mobile health APIs', 'Real-time data sync', 'Health data privacy']
  },
  {
    id: 'iot-home-automation',
    title: 'IoT Home Automation',
    category: 'iot',
    description: 'Complete IoT ecosystem for smart home automation with voice control, energy optimization, and security features.',
    image: "https://images.unsplash.com/photo-1650682009477-52fd77302b78",
    alt: 'Smart home control interface showing IoT device management, energy monitoring, and automated systems',
    technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'React Native'],
    timeline: '7 months',
    status: 'In Progress',
    cardColor: 'orange',
    features: ['Voice control', 'Energy optimization', 'Security monitoring', 'Remote access'],
    demoUrl: '#',
    codeUrl: '#',
    learnings: ['IoT protocols', 'Hardware integration', 'Edge computing']
  },
  {
    id: 'machine-learning-predictor',
    title: 'ML Market Predictor',
    category: 'ai',
    description: 'Machine learning model for financial market prediction using advanced algorithms and real-time data analysis.',
    image: "https://images.unsplash.com/photo-1651129525259-a283dc1a66a6",
    alt: 'Financial prediction dashboard with ML models, market charts, and algorithmic trading interface',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask', 'Redis'],
    timeline: '3 months',
    status: 'Completed',
    cardColor: 'teal',
    features: ['Real-time prediction', 'Multiple algorithms', 'Risk assessment', 'Performance tracking'],
    demoUrl: '#',
    codeUrl: '#',
    learnings: ['Time series analysis', 'Model optimization', 'Financial data processing']
  }];


  const filteredProjects = selectedFilter === 'all' ?
  projects :
  projects?.filter((project) => project?.category === selectedFilter);

  const getCardGradient = (color) => {
    const gradients = {
      blue: 'bg-card-gradient-blue',
      purple: 'bg-card-gradient-purple',
      green: 'bg-card-gradient-green',
      orange: 'bg-card-gradient-orange',
      pink: 'bg-card-gradient-pink',
      teal: 'bg-card-gradient-teal'
    };
    return gradients?.[color] || 'bg-card-gradient-blue';
  };

  return (
    <>
      <Helmet>
        <title>Personal Projects - Innovation Showcase | Moksh Digital</title>
        <meta
          name="description"
          content="Explore Moksh Digital's personal projects and innovation showcase. Cutting-edge web apps, mobile applications, AI/ML solutions, blockchain projects, and IoT implementations demonstrating our technical expertise and creative exploration." />

        <meta name="keywords" content="personal projects, innovation, web apps, mobile apps, AI ML, blockchain, IoT, technical showcase, Moksh Digital" />
        <meta property="og:title" content="Personal Projects - Innovation Showcase | Moksh Digital" />
        <meta property="og:description" content="Discover our innovative personal projects showcasing cutting-edge technology implementations and creative solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mokshdigital.com/personal-projects" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-moksha-gradient overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Innovation
                <span className="block text-accent">Showcase</span>
              </h1>
              <p className="font-body text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Explore our personal projects and experimental technologies. These initiatives demonstrate our passion for innovation, 
                continuous learning, and exploration of cutting-edge solutions beyond client work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Code" size={20} />
                  <span className="font-medium">{projects?.length}+ Projects</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Star" size={20} />
                  <span className="font-medium">Open Source</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Zap" size={20} />
                  <span className="font-medium">Cutting Edge</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">

              <h2 className="font-headline text-3xl font-bold text-foreground mb-4">
                Project Categories
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Filter projects by technology and domain
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                {filters?.map((filter) =>
                <Button
                  key={filter?.id}
                  variant={selectedFilter === filter?.id ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter?.id)}
                  className={`${
                  selectedFilter === filter?.id ?
                  'bg-primary hover:bg-primary/90 text-primary-foreground' :
                  'hover:bg-primary/10'} transition-all duration-300`
                  }>

                    <Icon name={filter?.icon} size={16} className="mr-2" />
                    {filter?.label}
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredProjects?.map((project, index) =>
                <motion.div
                  key={project?.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-interactive bg-card rounded-xl overflow-hidden hover-lift group cursor-pointer"
                  onClick={() => setSelectedProject(project)}>

                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                      src={project?.image}
                      alt={project?.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className={`${getCardGradient(project?.cardColor)} text-white text-xs font-medium px-2 py-1 rounded-full`}>
                          {project?.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                          {project?.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="font-headline text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project?.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                        {project?.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project?.technologies?.slice(0, 3)?.map((tech, idx) =>
                      <span
                        key={idx}
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md font-medium">

                            {tech}
                          </span>
                      )}
                        {project?.technologies?.length > 3 &&
                      <span className="text-xs text-muted-foreground">
                            +{project?.technologies?.length - 3} more
                          </span>
                      }
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e?.stopPropagation();
                          window.open(project?.demoUrl, '_blank');
                        }}>

                          <Icon name="ExternalLink" size={14} className="mr-1" />
                          Demo
                        </Button>
                        <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e?.stopPropagation();
                          window.open(project?.codeUrl, '_blank');
                        }}>

                          <Icon name="Code" size={14} className="mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>

              <h2 className="font-headline text-3xl font-bold text-foreground mb-4">
                Have an Innovative Project Idea?
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Let's collaborate on your next breakthrough project. We love exploring new technologies and solving complex challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild>

                  <Link to="/contact">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Discuss Your Idea
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild>

                  <Link to="/team">
                    <Icon name="Users" size={20} className="mr-2" />
                    Meet Our Team
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
            className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e?.stopPropagation()}>

              <div className="relative">
                <img
                src={selectedProject?.image}
                alt={selectedProject?.alt}
                className="w-full h-64 object-cover rounded-t-xl" />

                <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors">

                  <Icon name="X" size={16} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                  {selectedProject?.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  {selectedProject?.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject?.features?.map((feature, idx) =>
                    <li key={idx} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-success" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                    )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Key Learnings</h4>
                    <ul className="space-y-2">
                      {selectedProject?.learnings?.map((learning, idx) =>
                    <li key={idx} className="flex items-center space-x-2">
                          <Icon name="BookOpen" size={16} className="text-primary" />
                          <span className="text-sm text-muted-foreground">{learning}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.technologies?.map((tech, idx) =>
                  <span
                    key={idx}
                    className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-md font-medium">

                        {tech}
                      </span>
                  )}
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <Button
                  variant="default"
                  onClick={() => window.open(selectedProject?.demoUrl, '_blank')}
                  className="flex-1">

                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    View Demo
                  </Button>
                  <Button
                  variant="outline"
                  onClick={() => window.open(selectedProject?.codeUrl, '_blank')}
                  className="flex-1">

                    <Icon name="Code" size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};

export default PersonalProjectsPage;