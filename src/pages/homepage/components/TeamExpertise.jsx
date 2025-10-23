import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamExpertise = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center bg-moksha-gradient shadow-lg backdrop-blur-xl border border-white/20"
        >
          <h3 className="font-headline text-3xl font-bold text-white mb-4">
            Why Choose Our Team?
          </h3>

          <p className="font-body text-white/90 mb-10 max-w-3xl mx-auto">
            Our team combines technical excellence with creative innovation. We're
            not just developers and designers – we're digital transformation
            partners committed to your success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Lightbulb" size={26} className="text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Innovation First</h4>
              <p className="text-sm text-white/80">
                Cutting-edge solutions using the latest technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={26} className="text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">
                Collaborative Approach
              </h4>
              <p className="text-sm text-white/80">
                Working closely with clients as trusted partners
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Target" size={26} className="text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Results Driven</h4>
              <p className="text-sm text-white/80">
                Focused on measurable business outcomes
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-black font-semibold hover:bg-white/90 transition-all"
              asChild
            >
              <Link to="/team">
                <Icon name="Users" size={20} className="mr-2" />
                Meet Full Team
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 transition-all"
              asChild
            >
              <Link to="/demo-request">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Work With Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamExpertise;
