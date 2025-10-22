import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamCulture = () => {
  const cultureHighlights = [
  {
    title: "Innovation Fridays",
    description: "Every Friday, our team explores new technologies and works on passion projects",
    image: "https://images.unsplash.com/photo-1653566031587-114b636e182b",
    imageAlt: "Team members collaborating around laptops in modern office with natural lighting",
    icon: "Lightbulb"
  },
  {
    title: "Continuous Learning",
    description: "We invest in our team's growth with regular training, conferences, and certifications",
    image: "https://images.unsplash.com/photo-1636518538588-99015eb2de4c",
    imageAlt: "Professional training session with instructor presenting to engaged audience",
    icon: "BookOpen"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible hours, remote work options, and team wellness programs",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
    imageAlt: "Diverse team enjoying casual outdoor meeting with laptops and coffee",
    icon: "Heart"
  },
  {
    title: "Team Celebrations",
    description: "Regular team outings, project milestone celebrations, and birthday parties",
    image: "https://images.unsplash.com/photo-1733119673475-c7a31c393d42",
    imageAlt: "Happy team members celebrating with cake and balloons in office setting",
    icon: "PartyPopper"
  }];


  const values = [
  {
    icon: "Target",
    title: "Excellence",
    description: "We strive for perfection in every project we deliver"
  },
  {
    icon: "Users",
    title: "Collaboration",
    description: "Teamwork and open communication drive our success"
  },
  {
    icon: "Zap",
    title: "Innovation",
    description: "We embrace new technologies and creative solutions"
  },
  {
    icon: "Shield",
    title: "Integrity",
    description: "Honest, transparent relationships with clients and team"
  }];


  return (
    <div className="space-y-12">
      {/* Culture Highlights */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
            Our Team Culture
          </h3>
          <p className="text-muted-foreground">
            Behind the scenes at Moksh Digital - where innovation meets collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cultureHighlights?.map((highlight, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-medium transition-shadow duration-normal border border-border">

              <div className="relative h-48 overflow-hidden">
                <Image
                src={highlight?.image}
                alt={highlight?.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-normal" />

                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name={highlight?.icon} size={20} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {highlight?.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight?.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      {/* Company Values */}
      <div className="bg-muted/50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
            Our Core Values
          </h3>
          <p className="text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values?.map((value, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center">

              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={value?.icon} size={24} className="text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {value?.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {value?.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

};

export default TeamCulture;