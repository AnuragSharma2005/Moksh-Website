import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      description: 'Creating engaging user interfaces with modern frameworks and libraries',
      technologies: [
      {
        name: 'React.js',
        logo: "https://images.unsplash.com/photo-1733977459324-1fd22d548f68",
        logoAlt: 'React.js logo - blue atom symbol with orbital rings',
        description: 'Component-based UI library for building interactive interfaces',
        expertise: 95,
        projects: 45
      },
      {
        name: 'Next.js',
        logo: "https://images.unsplash.com/photo-1663813251302-e5d2c7199e86",
        logoAlt: 'Next.js logo - black triangle with white N letter',
        description: 'Full-stack React framework with SSR and static generation',
        expertise: 90,
        projects: 32
      },
      {
        name: 'Vue.js',
        logo: "https://images.unsplash.com/photo-1681511346760-bcd57e9ae7db",
        logoAlt: 'Vue.js logo - green V-shaped symbol',
        description: 'Progressive framework for building user interfaces',
        expertise: 85,
        projects: 28
      },
      {
        name: 'Angular',
        logo: "https://images.unsplash.com/photo-1676623185048-5733b5dc0371",
        logoAlt: 'Angular logo - red shield with white A letter',
        description: 'Platform for building mobile and desktop web applications',
        expertise: 80,
        projects: 22
      },
      {
        name: 'Tailwind CSS',
        logo: "https://images.unsplash.com/photo-1699490834026-071f6dd33c1b",
        logoAlt: 'Tailwind CSS logo - teal and blue wave pattern',
        description: 'Utility-first CSS framework for rapid UI development',
        expertise: 95,
        projects: 50
      },
      {
        name: 'TypeScript',
        logo: "https://images.unsplash.com/photo-1671115544423-e5ecf3d6673d",
        logoAlt: 'TypeScript logo - blue square with white TS letters',
        description: 'Typed superset of JavaScript for better development experience',
        expertise: 88,
        projects: 38
      }]

    },
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      description: 'Building robust server-side applications and APIs',
      technologies: [
      {
        name: 'Node.js',
        logo: "https://images.unsplash.com/photo-1659729683825-81640d72717c",
        logoAlt: 'Node.js logo - green hexagon with white node symbol',
        description: 'JavaScript runtime for building scalable server applications',
        expertise: 92,
        projects: 42
      },
      {
        name: 'Python',
        logo: "https://images.unsplash.com/photo-1522857884396-6d2c1c34e4e6",
        logoAlt: 'Python logo - blue and yellow intertwined snakes',
        description: 'Versatile programming language for web development and AI',
        expertise: 88,
        projects: 35
      },
      {
        name: 'PHP',
        logo: "https://images.unsplash.com/photo-1599507593354-2b6d036eab4f",
        logoAlt: 'PHP logo - purple oval with white PHP text',
        description: 'Server-side scripting language for web development',
        expertise: 85,
        projects: 40
      },
      {
        name: 'Express.js',
        logo: "https://images.unsplash.com/photo-1612173834824-274e8416110f",
        logoAlt: 'Express.js logo - black text with white background',
        description: 'Fast, unopinionated web framework for Node.js',
        expertise: 90,
        projects: 38
      },
      {
        name: 'Django',
        logo: "https://images.unsplash.com/photo-1539078569506-42b4577a6adb",
        logoAlt: 'Django logo - green pony silhouette',
        description: 'High-level Python web framework for rapid development',
        expertise: 82,
        projects: 25
      },
      {
        name: 'Laravel',
        logo: "https://images.unsplash.com/photo-1610525050815-248cf2b7de43",
        logoAlt: 'Laravel logo - red stylized L letter',
        description: 'PHP framework for web artisans with elegant syntax',
        expertise: 87,
        projects: 30
      }]

    },
    database: {
      title: 'Database & Storage',
      icon: 'Database',
      description: 'Managing data with reliable and scalable database solutions',
      technologies: [
      {
        name: 'MongoDB',
        logo: "https://images.unsplash.com/photo-1644035525398-5782562f0601",
        logoAlt: 'MongoDB logo - green leaf-shaped symbol',
        description: 'NoSQL document database for modern applications',
        expertise: 90,
        projects: 35
      },
      {
        name: 'PostgreSQL',
        logo: "https://images.unsplash.com/photo-1599507593354-2b6d036eab4f",
        logoAlt: 'PostgreSQL logo - blue elephant head symbol',
        description: 'Advanced open-source relational database',
        expertise: 85,
        projects: 28
      },
      {
        name: 'MySQL',
        logo: "https://images.unsplash.com/photo-1662026911591-335639b11db6",
        logoAlt: 'MySQL logo - orange and blue dolphin symbol',
        description: 'Popular open-source relational database management system',
        expertise: 88,
        projects: 45
      },
      {
        name: 'Redis',
        logo: "https://images.unsplash.com/photo-1662027044921-6febc57a0c53",
        logoAlt: 'Redis logo - red cube with white database symbol',
        description: 'In-memory data structure store for caching and sessions',
        expertise: 80,
        projects: 22
      },
      {
        name: 'Firebase',
        logo: "https://images.unsplash.com/photo-1649363959913-7b354bdd8c47",
        logoAlt: 'Firebase logo - orange and yellow flame symbol',
        description: 'Google platform for mobile and web application development',
        expertise: 85,
        projects: 30
      },
      {
        name: 'Supabase',
        logo: "https://images.unsplash.com/photo-1516463722294-dee0576c5b7a",
        logoAlt: 'Supabase logo - green and teal geometric pattern',
        description: 'Open-source Firebase alternative with PostgreSQL',
        expertise: 78,
        projects: 18
      }]

    },
    mobile: {
      title: 'Mobile Development',
      icon: 'Smartphone',
      description: 'Creating native and cross-platform mobile applications',
      technologies: [
      {
        name: 'React Native',
        logo: "https://images.unsplash.com/photo-1646122580600-4d6cffc926fe",
        logoAlt: 'React Native logo - blue atom symbol with orbital rings',
        description: 'Cross-platform mobile development with React',
        expertise: 88,
        projects: 25
      },
      {
        name: 'Flutter',
        logo: "https://images.unsplash.com/photo-1588416216759-8b8a0e139437",
        logoAlt: 'Flutter logo - blue bird-like symbol',
        description: 'Google UI toolkit for building natively compiled applications',
        expertise: 82,
        projects: 20
      },
      {
        name: 'Swift',
        logo: "https://images.unsplash.com/photo-1561675124-84ed228aa979",
        logoAlt: 'Swift logo - orange bird silhouette',
        description: 'Apple programming language for iOS and macOS development',
        expertise: 75,
        projects: 15
      },
      {
        name: 'Kotlin',
        logo: "https://images.unsplash.com/photo-1658820151739-5b8866bea2e3",
        logoAlt: 'Kotlin logo - purple and orange triangular pattern',
        description: 'Modern programming language for Android development',
        expertise: 78,
        projects: 18
      },
      {
        name: 'Ionic',
        logo: "https://images.unsplash.com/photo-1719743657258-eb2cbb34039d",
        logoAlt: 'Ionic logo - blue circular symbol with white I',
        description: 'Cross-platform mobile app development with web technologies',
        expertise: 80,
        projects: 22
      },
      {
        name: 'Xamarin',
        logo: "https://images.unsplash.com/photo-1735405071575-c02d863b6d6f",
        logoAlt: 'Xamarin logo - blue X symbol on white background',
        description: 'Microsoft platform for cross-platform mobile development',
        expertise: 70,
        projects: 12
      }]

    },
    devops: {
      title: 'DevOps & Cloud',
      icon: 'Cloud',
      description: 'Deploying and managing applications with modern DevOps practices',
      technologies: [
      {
        name: 'AWS',
        logo: "https://images.unsplash.com/photo-1649734926695-1b1664e98842",
        logoAlt: 'AWS logo - orange cube with white cloud symbol',
        description: 'Amazon Web Services cloud computing platform',
        expertise: 85,
        projects: 30
      },
      {
        name: 'Docker',
        logo: "https://images.unsplash.com/photo-1650264526473-b4a9f9473664",
        logoAlt: 'Docker logo - blue whale carrying containers',
        description: 'Containerization platform for application deployment',
        expertise: 88,
        projects: 35
      },
      {
        name: 'Kubernetes',
        logo: "https://images.unsplash.com/photo-1553781247-05094c2c56c6",
        logoAlt: 'Kubernetes logo - blue ship wheel symbol',
        description: 'Container orchestration platform for managing applications',
        expertise: 75,
        projects: 20
      },
      {
        name: 'GitHub Actions',
        logo: "https://images.unsplash.com/photo-1654277041218-84424c78f0ae",
        logoAlt: 'GitHub logo - black cat silhouette in white circle',
        description: 'CI/CD platform for automating software workflows',
        expertise: 90,
        projects: 40
      },
      {
        name: 'Vercel',
        logo: "https://images.unsplash.com/photo-1652017684861-9d29f4155b99",
        logoAlt: 'Vercel logo - black triangle on white background',
        description: 'Platform for frontend frameworks and static sites',
        expertise: 92,
        projects: 45
      },
      {
        name: 'Netlify',
        logo: "https://images.unsplash.com/photo-1683406040872-b87bfd721ca6",
        logoAlt: 'Netlify logo - teal and blue geometric pattern',
        description: 'Platform for deploying and managing modern web projects',
        expertise: 88,
        projects: 38
      }]

    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Technology Stack
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable, and future-ready digital solutions.
          </p>
        </motion.div>

       {/* Category Tabs */}
<div className="mb-12">
  <div className="flex gap-2 overflow-x-auto scrollbar-hide px-2">
    {Object.entries(techCategories)?.map(([key, category]) => (
      <button
        key={key}
        onClick={() => setActiveCategory(key)}
        className={`flex-shrink-0 flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-normal ${
          activeCategory === key
            ? 'bg-primary text-primary-foreground shadow-medium'
            : 'bg-card text-foreground border border-border hover:bg-muted hover-lift'
        }`}
      >
        <Icon name={category?.icon} size={20} />
        <span>{category?.title}</span>
      </button>
    ))}
  </div>
</div>


        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>

          <div className="text-center mb-8">
            <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
              {techCategories?.[activeCategory]?.title}
            </h3>
            <p className="font-body text-muted-foreground">
              {techCategories?.[activeCategory]?.description}
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories?.[activeCategory]?.technologies?.map((tech, index) =>
            <motion.div
              key={tech?.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift transition-all duration-normal border border-border/50 hover:border-primary/30">

                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center flex-shrink-0">
                    <Image
                    src={tech?.logo}
                    alt={tech?.logoAlt}
                    className="w-8 h-8 object-contain" />

                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-foreground mb-1">
                      {tech?.name}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {tech?.description}
                    </p>
                  </div>
                </div>

                {/* Expertise Level */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Expertise</span>
                    <span className="text-sm font-bold text-primary">{tech?.expertise}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech?.expertise}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-primary h-2 rounded-full" />

                  </div>
                </div>

                {/* Projects Count */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-foreground">{tech?.projects}</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16">

          <div className="glass-card rounded-xl p-8 bg-primary/5 border border-primary/20">
            <h3 className="font-headline text-xl font-bold text-foreground mb-4">
              Need a Custom Technology Solution?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technology experts can help you choose the right stack for your project requirements and business goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground">

                <Icon name="MessageCircle" size={20} className="mr-2" />
                Discuss Technology Stack
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TechnologyStack;