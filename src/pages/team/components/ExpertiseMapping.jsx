import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ExpertiseMapping = () => {
  const expertiseAreas = [
    {
      category: "Frontend Development",
      icon: "Monitor",
      technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      teamMembers: 8,
      color: "bg-blue-500"
    },
    {
      category: "Backend Development",
      icon: "Server",
      technologies: ["Node.js", "Python", "Java", "PHP", "Express", "Django"],
      teamMembers: 6,
      color: "bg-green-500"
    },
    {
      category: "Mobile Development",
      icon: "Smartphone",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Ionic"],
      teamMembers: 4,
      color: "bg-purple-500"
    },
    {
      category: "DevOps & Cloud",
      icon: "Cloud",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Azure", "GCP"],
      teamMembers: 3,
      color: "bg-orange-500"
    },
    {
      category: "UI/UX Design",
      icon: "Palette",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
      teamMembers: 4,
      color: "bg-pink-500"
    },
    {
      category: "Database & Analytics",
      icon: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
      teamMembers: 5,
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-8 shadow-subtle border border-border">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
          Team Expertise Mapping
        </h3>
        <p className="text-muted-foreground">
          Our collective technical capabilities across different domains
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas?.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border hover:shadow-medium transition-shadow duration-normal"
          >
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 ${area?.color} rounded-lg flex items-center justify-center mr-3`}>
                <Icon name={area?.icon} size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{area?.category}</h4>
                <p className="text-xs text-muted-foreground">{area?.teamMembers} team members</p>
              </div>
            </div>

            <div className="space-y-2">
              {area?.technologies?.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-center justify-between py-1"
                >
                  <span className="text-sm text-foreground">{tech}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)]?.map((_, starIndex) => (
                      <div
                        key={starIndex}
                        className={`w-2 h-2 rounded-full ${
                          starIndex < Math.floor(Math.random() * 2) + 3
                            ? area?.color
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseMapping;