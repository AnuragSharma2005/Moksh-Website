import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const OrganizationChart = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('leadership');

  const orgStructure = {
    leadership: {
      title: "Leadership Team",
      members: [
      {
        name: "Rajesh Kumar",
        position: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1659323593305-ad05297db6a2",
        imageAlt: "Professional headshot of Indian man in navy suit with confident smile",
        experience: "12+ years"
      },
      {
        name: "Priya Sharma",
        position: "CTO",
        image: "https://images.unsplash.com/photo-1633600317049-0aea268b8aa2",
        imageAlt: "Professional woman in business attire with glasses and warm smile",
        experience: "10+ years"
      }]

    },
    development: {
      title: "Development Team",
      members: [
      {
        name: "Amit Patel",
        position: "Lead Developer",
        image: "https://images.unsplash.com/photo-1617634530027-f95417bff862",
        imageAlt: "Young developer with beard wearing casual shirt in modern office",
        experience: "8+ years"
      },
      {
        name: "Sneha Reddy",
        position: "Frontend Specialist",
        image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
        imageAlt: "Professional woman with long dark hair in blue blazer smiling confidently",
        experience: "6+ years"
      },
      {
        name: "Vikram Singh",
        position: "Backend Engineer",
        image: "https://images.unsplash.com/photo-1474479978395-99aa047ea001",
        imageAlt: "Young professional man in white shirt with friendly expression",
        experience: "5+ years"
      }]

    },
    design: {
      title: "Design Team",
      members: [
      {
        name: "Kavya Nair",
        position: "UI/UX Lead",
        image: "https://images.unsplash.com/photo-1725271765764-669af9988700",
        imageAlt: "Creative designer woman with artistic background and warm smile",
        experience: "7+ years"
      },
      {
        name: "Arjun Mehta",
        position: "Visual Designer",
        image: "https://images.unsplash.com/photo-1679654842090-708dab396f47",
        imageAlt: "Creative professional man with stylish appearance in casual attire",
        experience: "4+ years"
      }]

    }
  };

  const departments = [
  { key: 'leadership', label: 'Leadership', icon: 'Crown' },
  { key: 'development', label: 'Development', icon: 'Code' },
  { key: 'design', label: 'Design', icon: 'Palette' }];


  return (
    <div className="bg-card rounded-xl p-8 shadow-subtle border border-border">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
          Organization Structure
        </h3>
        <p className="text-muted-foreground">
          Meet our team structure and collaboration patterns
        </p>
      </div>
      {/* Department Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-muted rounded-lg p-1 flex space-x-1">
          {departments?.map((dept) =>
          <button
            key={dept?.key}
            onClick={() => setSelectedDepartment(dept?.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedDepartment === dept?.key ?
            'bg-primary text-primary-foreground shadow-sm' :
            'text-muted-foreground hover:text-foreground'}`
            }>

              <Icon name={dept?.icon} size={16} />
              <span>{dept?.label}</span>
            </button>
          )}
        </div>
      </div>
      {/* Team Members */}
      <motion.div
        key={selectedDepartment}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}>

        <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
          {orgStructure?.[selectedDepartment]?.title}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {orgStructure?.[selectedDepartment]?.members?.map((member, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="text-center group">

              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-200">
                  <Image
                  src={member?.image}
                  alt={member?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200" />

                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                  {member?.experience?.split('+')?.[0]}
                </div>
              </div>
              
              <h5 className="font-semibold text-foreground mb-1">{member?.name}</h5>
              <p className="text-sm text-primary font-medium mb-2">{member?.position}</p>
              <p className="text-xs text-muted-foreground">{member?.experience} experience</p>
            </motion.div>
          )}
        </div>
      </motion.div>
      {/* Collaboration Indicators */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Active Collaboration</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Cross-Department Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Mentorship Programs</span>
          </div>
        </div>
      </div>
    </div>);

};

export default OrganizationChart;