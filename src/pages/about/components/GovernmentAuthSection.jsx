import React from 'react';
import Icon from '../../../components/AppIcon';

const GovernmentAuthSection = () => {
  const certificate = {
    id: 1,
    title: 'Government Digital Services Authorization',
    issuer: 'M/o MSME',
    year: '2025',
    description:
      'Official certification for providing digital services to government entities and public sector organizations.',
    // certificateNumber: 'MEITY/DGS/2020/1247',
    validUntil: '2026',
    icon: 'Award',
    image: 'moksh.png', // <-- replace with your image path
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent rounded-l-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 z-10">
          {/* <div className="inline-flex items-center bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full">
            <Icon name="Shield" size={20} className="mr-2" />
            <span className="font-semibold">Government Authorized Partner</span>
          </div> */}

          <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900">
            Certifications & Compliance
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Officially recognized and certified to deliver secure, compliant digital solutions for government and enterprise clients.
          </p>

          <div className="glass-card bg-white/70 backdrop-blur-md shadow-xl border-l-4 border-blue-600 rounded-xl p-6 w-full max-w-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name={certificate.icon} size={24} className="text-white" />
              </div>
              <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                Valid until {certificate.validUntil}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">{certificate.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{certificate.description}</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Issued by:</span>
                <span className="font-medium text-gray-800">{certificate.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Year:</span>
                <span className="font-medium text-gray-800">{certificate.year}</span>
              </div>
              <div className="flex justify-between">
                {/* <span className="text-gray-500">Certificate #:</span> */}
                {/* <span className="font-semibold text-gray-900">{certificate.certificateNumber}</span> */}
              </div>
            </div>
          </div>
        </div>

     {/* Right Image */}
<div className="md:w-1/2 relative flex justify-center items-center w-full">
  <div className="absolute inset-0 translate-x-6 translate-y-6 bg-blue-300/30 rounded-3xl blur-2xl"></div>
  <img
    src={certificate.image}
    alt="Certificate"
    className="relative z-10 w-[90%] sm:w-[95%] md:w-full rounded-2xl shadow-2xl object-cover scale-110 sm:scale-125 md:scale-100 transition-transform duration-500"
  />
</div>
      </div>

{/* Trust Indicators */}
<div className="relative mt-20 text-center z-10 px-3">
  <div className="inline-flex items-center space-x-4 sm:space-x-8 bg-white/70 backdrop-blur-lg rounded-xl p-3 sm:p-6 shadow-lg scale-90 sm:scale-100">
    <div className="flex items-center">
      <Icon name="Shield" size={20} className="text-blue-600 mr-2 sm:mr-3" />
      <div className="text-left">
        <div className="text-sm sm:text-lg font-bold text-gray-900">100%</div>
        <div className="text-[10px] sm:text-xs text-gray-500">Secure</div>
      </div>
    </div>

    <div className="w-px h-6 sm:h-8 bg-gray-300"></div>

    <div className="flex items-center">
      <Icon name="Award" size={20} className="text-blue-500 mr-2 sm:mr-3" />
      <div className="text-left">
        <div className="text-sm sm:text-lg font-bold text-gray-900">Certified</div>
        <div className="text-[10px] sm:text-xs text-gray-500">Government Approved</div>
      </div>
    </div>

    <div className="w-px h-6 sm:h-8 bg-gray-300"></div>

    <div className="flex items-center">
      <Icon name="Users" size={20} className="text-blue-400 mr-2 sm:mr-3" />
      <div className="text-left">
        {/* <div className="text-sm sm:text-lg font-bold text-gray-900">200+</div> */}
        <div className="text-[10px] sm:text-xs text-gray-500">Trusted Clients</div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default GovernmentAuthSection;
