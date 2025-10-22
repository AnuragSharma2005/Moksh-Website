import React from 'react';
import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const ValuesSection = () => {
  const valuesData = [
    {
      id: 'trust',
      title: 'Trust & Transparency',
      icon: 'Shield',
      description: 'Building lasting relationships through honest communication and reliable delivery.',
      example: `We maintain complete transparency in our project timelines, costs, and challenges. Our clients always know exactly where their project stands and what to expect next.`,
      principles: ['Open Communication', 'Honest Pricing', 'Reliable Delivery'],
    },
    {
      id: 'innovation',
      title: 'Innovation & Excellence',
      icon: 'Lightbulb',
      description: 'Pushing boundaries with cutting-edge technology while maintaining the highest quality standards.',
      example: `We continuously invest in learning new technologies and frameworks, ensuring our clients benefit from the latest innovations in web development and digital solutions.`,
      principles: ['Continuous Learning', 'Quality First', 'Future-Ready Solutions'],
    },
    {
      id: 'partnership',
      title: 'Partnership Approach',
      icon: 'Handshake',
      description: "We don't just build websites; we become strategic allies in your digital success journey.",
      example: `Our relationship doesn't end at project delivery. We provide ongoing support, strategic advice, and growth recommendations to ensure long-term success.`,
      principles: ['Long-term Relationships', 'Strategic Guidance', 'Ongoing Support'],
    },
    {
      id: 'empowerment',
      title: 'Digital Empowerment',
      icon: 'Users',
      description: 'Democratizing technology to help businesses of all sizes achieve their digital transformation goals.',
      example: `From small startups to large enterprises, we tailor our solutions to fit every budget and requirement, ensuring no business is left behind in the digital revolution.`,
      principles: ['Inclusive Solutions', 'Scalable Approaches', 'Accessible Technology'],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-blue-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            The principles that guide every decision, every project, and every relationship we build
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {valuesData.map((value, idx) => (
            <motion.div
              key={value.id}
              className="glass-card bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Icon + Title */}
              <div className="flex items-start mb-6">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 text-white"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon name={value.icon} size={28} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-blue-700">{value.description}</p>
                </div>
              </div>

              {/* Example */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide">In Practice</h4>
                <p className="text-sm text-blue-800 leading-relaxed bg-blue-100 p-4 rounded-lg">{value.example}</p>
              </div>

              {/* Principles */}
              <div>
                <h4 className="text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide">Key Principles</h4>
                <div className="space-y-2">
                  {value.principles.map((principle, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-blue-900">{principle}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
