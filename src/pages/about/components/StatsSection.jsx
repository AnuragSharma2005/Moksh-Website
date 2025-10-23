import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  const finalStats = {
    projects: 250,
    clients: 150,
    experience: 5,
    satisfaction: 98
  };

  const statsData = [
    {
      key: 'projects',
      label: 'Projects Completed',
      value: finalStats?.projects,
      suffix: '+',
      icon: 'Briefcase',
      description: 'Successful digital transformations delivered'
    },
    {
      key: 'clients',
      label: 'Happy Clients',
      value: finalStats?.clients,
      suffix: '+',
      icon: 'Users',
      description: 'Businesses empowered through technology'
    },
    {
      key: 'experience',
      label: 'Years Experience',
      value: finalStats?.experience,
      suffix: '+',
      icon: 'Calendar',
      description: 'Years of digital excellence and innovation'
    },
    {
      key: 'satisfaction',
      label: 'Client Satisfaction',
      value: finalStats?.satisfaction,
      suffix: '%',
      icon: 'Star',
      description: 'Client satisfaction rate across all projects'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalStats)?.map(key => {
      const increment = finalStats?.[key] / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalStats?.[key]) {
          currentValue = finalStats?.[key];
          clearInterval(intervals?.find(interval => interval === this));
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => {
      intervals?.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <section className="py-16 bg-moksha-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to digital transformation excellence
          </p>
        </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
  {statsData?.map((stat) => (
    <div 
      key={stat?.key}
      className="text-center rounded-xl p-6 hover-scale transition-all duration-300  bg-#412B6B text-white shadow-lg"
    >
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={stat?.icon} size={32} className="text-white" />
      </div>

      <div className="text-4xl md:text-5xl font-headline font-bold text-white mb-2">
        {counters?.[stat?.key]}{stat?.suffix}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {stat?.label}
      </h3>

      <p className="text-sm text-white/80 leading-relaxed">
        {stat?.description}
      </p>
    </div>
  ))}
</div>


        {/* Additional Metrics */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
  <div className="text-center rounded-xl p-6 transition-all duration-300 
                  bg-412B6B
                  shadow-xl border border-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
    <Icon name="Clock" size={24} className="text-white mx-auto mb-3" />
    <div className="text-2xl font-bold text-white mb-1">24/7</div>
    <div className="text-white/80">Support Available</div>
  </div>

  <div className="text-center rounded-xl p-6 transition-all duration-300 
                  bg-#412B6B
                  shadow-xl border border-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
    <Icon name="Zap" size={24} className="text-white mx-auto mb-3" />
    <div className="text-2xl font-bold text-white mb-1">&lt;48hrs</div>
    <div className="text-white/80">Average Response Time</div>
  </div>

  <div className="text-center rounded-xl p-6 transition-all duration-300 
                 bg-#412B6B
                  shadow-xl border border-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
    <Icon name="Shield" size={24} className="text-white mx-auto mb-3" />
    <div className="text-2xl font-bold text-white mb-1">100%</div>
    <div className="text-white/80">Security Compliance</div>
  </div>
</div>
      </div>
    </section>
  );
};

export default StatsSection;