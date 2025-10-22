import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        className="bg-card rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-normal overflow-hidden border border-border hover-lift"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile Image Section */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={isHovered && member?.alternateImage ? member?.alternateImage : member?.image}
            alt={member?.imageAlt}
            className="w-full h-full object-cover transition-transform duration-normal group-hover:scale-110"
          />
          
          {/* Overlay with social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end justify-center pb-6"
          >
            <div className="flex space-x-4">
              {member?.socialLinks?.map((link, idx) => (
                <a
                  key={idx}
                  href={link?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <Icon name={link?.icon} size={18} className="text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Experience Badge */}
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {member?.experience}+ Years
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-headline font-bold text-foreground mb-1">
              {member?.name}
            </h3>
            <p className="text-primary font-medium mb-2">{member?.position}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member?.bio}
            </p>
          </div>

          {/* Expertise Tags */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {member?.expertise?.slice(0, 4)?.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
              {member?.expertise?.length > 4 && (
                <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-md">
                  +{member?.expertise?.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Certifications */}
          {member?.certifications && member?.certifications?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Certifications</h4>
              <div className="space-y-1">
                {member?.certifications?.slice(0, 2)?.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="Award" size={14} className="text-accent" />
                    <span className="text-xs text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Highlights */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Projects Led</span>
              <span className="font-semibold text-foreground">{member?.projectsLed}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-muted-foreground">Favorite Tech</span>
              <span className="font-semibold text-primary">{member?.favoriteTech}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;