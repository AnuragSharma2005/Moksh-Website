import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamExpertise = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    expertise: 'Digital Strategy & Leadership',
    experience: '12+ years',
    image: "https://images.unsplash.com/photo-1723990720514-65968a7d517b",
    imageAlt: 'Professional headshot of Indian businessman in navy suit with confident smile in modern office setting',
    specialties: ['Digital Transformation', 'Business Strategy', 'Team Leadership', 'Client Relations'],
    achievements: ['500+ Projects Led', 'Government Partnerships', 'Industry Recognition'],
    bio: 'Visionary leader with extensive experience in digital transformation and government technology partnerships.',
    linkedin: '#',
    certifications: ['PMP', 'AWS Solutions Architect', 'Digital Marketing']
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Technical Director',
    expertise: 'Full-Stack Development',
    experience: '10+ years',
    image: "https://images.unsplash.com/photo-1718109581971-16784ca9a38e",
    imageAlt: 'Professional woman software engineer with long dark hair in business casual attire working at computer',
    specialties: ['React/Node.js', 'Cloud Architecture', 'DevOps', 'System Design'],
    achievements: ['300+ Apps Developed', 'Open Source Contributor', 'Tech Speaker'],
    bio: 'Expert full-stack developer specializing in scalable web applications and cloud infrastructure.',
    linkedin: '#',
    certifications: ['Google Cloud Professional', 'React Expert', 'Kubernetes']
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Design Lead',
    expertise: 'UI/UX Design',
    experience: '8+ years',
    image: "https://images.unsplash.com/photo-1581094798398-153528d38b8f",
    imageAlt: 'Creative designer with beard wearing casual shirt working on design mockups with stylus and tablet',
    specialties: ['User Experience', 'Design Systems', 'Prototyping', 'Brand Identity'],
    achievements: ['200+ Designs Created', 'Design Awards Winner', 'UX Consultant'],
    bio: 'Creative design expert focused on user-centered design and creating intuitive digital experiences.',
    linkedin: '#',
    certifications: ['Adobe Certified Expert', 'UX Design', 'Design Thinking']
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Project Manager',
    expertise: 'Agile Project Management',
    experience: '7+ years',
    image: "https://images.unsplash.com/photo-1596722350768-24e1bd412882",
    imageAlt: 'Professional Indian woman project manager in blazer reviewing project timeline on laptop in bright office',
    specialties: ['Agile Methodology', 'Team Coordination', 'Client Communication', 'Quality Assurance'],
    achievements: ['150+ Projects Delivered', 'Agile Coach', '98% On-time Delivery'],
    bio: 'Experienced project manager ensuring seamless delivery and exceptional client satisfaction.',
    linkedin: '#',
    certifications: ['Scrum Master', 'PMP', 'Agile Coach']
  }];


  const companyStats = [
  {
    icon: 'Users',
    value: '25+',
    label: 'Expert Team Members',
    description: 'Skilled professionals across all domains'
  },
  {
    icon: 'Award',
    value: '50+',
    label: 'Industry Certifications',
    description: 'Latest technology certifications'
  },
  {
    icon: 'Clock',
    value: '50,000+',
    label: 'Development Hours',
    description: 'Collective experience in digital solutions'
  },
  {
    icon: 'Globe',
    value: '15+',
    label: 'Countries Served',
    description: 'Global reach and expertise'
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our diverse team of technology experts, designers, and strategists work together 
            to deliver exceptional digital solutions that drive business growth.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers?.map((member, index) =>
          <motion.div
            key={member?.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredMember(member?.id)}
            onMouseLeave={() => setHoveredMember(null)}
            className="group relative">

              <div className="glass-card rounded-xl overflow-hidden hover-lift transition-all duration-normal h-full">
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                  src={member?.image}
                  alt={member?.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-normal group-hover:scale-110" />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-accent-foreground text-sm font-medium">{member?.experience}</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredMember === member?.id &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/80 flex items-center justify-center p-4">

                      <div className="text-center text-white">
                        <p className="text-sm mb-3">{member?.bio}</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member?.certifications?.slice(0, 2)?.map((cert, idx) =>
                      <span key={idx} className="bg-white/20 px-2 py-1 rounded text-xs">
                              {cert}
                            </span>
                      )}
                        </div>
                      </div>
                    </motion.div>
                }

                  {/* Name & Role Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-headline text-lg font-bold mb-1">{member?.name}</h3>
                    <p className="text-sm opacity-90">{member?.role}</p>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">{member?.expertise}</h4>
                    
                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {member?.specialties?.slice(0, 2)?.map((specialty, idx) =>
                    <span
                      key={idx}
                      className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium">

                          {specialty}
                        </span>
                    )}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-1">
                      {member?.achievements?.slice(0, 2)?.map((achievement, idx) =>
                    <div key={idx} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={12} className="text-success flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                    )}
                    </div>
                  </div>

                  {/* Social Link */}
                  <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">

                    <Icon name="Linkedin" size={16} className="mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {companyStats?.map((stat, index) =>
          <div key={index} className="glass-card rounded-lg p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">{stat?.value}</div>
              <div className="font-medium text-foreground mb-1">{stat?.label}</div>
              <div className="text-sm text-muted-foreground">{stat?.description}</div>
            </div>
          )}
        </motion.div>

        {/* Team Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 bg-moksha-gradient text-center">

          <h3 className="font-headline text-2xl font-bold text-white mb-4">
            Why Choose Our Team?
          </h3>
          <p className="font-body text-white/90 mb-6 max-w-3xl mx-auto">
            Our team combines technical excellence with creative innovation. We're not just developers and designers – we're digital transformation partners committed to your success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Lightbulb" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Innovation First</h4>
              <p className="text-sm text-white/80">Cutting-edge solutions using latest technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Collaborative Approach</h4>
              <p className="text-sm text-white/80">Working closely with clients as partners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Results Driven</h4>
              <p className="text-sm text-white/80">Focused on measurable business outcomes</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta"
              asChild>

              <Link to="/team">
                <Icon name="Users" size={20} className="mr-2" />
                Meet Full Team
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              asChild>

              <Link to="/demo-request">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Work With Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TeamExpertise;