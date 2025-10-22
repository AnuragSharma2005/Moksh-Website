import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocation = () => {
  const [activeTab, setActiveTab] = useState('map');

  const officeDetails = {
    address: "Moksh Digital Solutions Pvt. Ltd.",
    street: "Plot No. 45, Tech Park Avenue",
    area: "Hinjewadi Phase 2, Pune",
    state: "Maharashtra 411057, India",
    coordinates: { lat: 18.5912, lng: 73.7389 }
  };

  const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM', available: true },
  { day: 'Saturday', hours: '10:00 AM - 6:00 PM', available: true },
  { day: 'Sunday', hours: 'Closed', available: false }];


  const officeFeatures = [
  {
    icon: 'Wifi',
    title: 'High-Speed Internet',
    description: 'Dedicated fiber connection for seamless video calls'
  },
  {
    icon: 'Coffee',
    title: 'Refreshments',
    description: 'Complimentary tea, coffee, and snacks'
  },
  {
    icon: 'Car',
    title: 'Parking Available',
    description: 'Free parking space for visitors'
  },
  {
    icon: 'Shield',
    title: 'Secure Environment',
    description: '24/7 security and CCTV surveillance'
  }];


  const virtualTourImages = [
  {
    id: 1,
    title: "Reception Area",
    image: "https://images.unsplash.com/photo-1652803723541-ffc5a8783329",
    alt: "Modern office reception with white furniture and plants"
  },
  {
    id: 2,
    title: "Meeting Room",
    image: "https://images.unsplash.com/photo-1613801588200-89ea1d6fedcb",
    alt: "Glass-walled conference room with large table and chairs"
  },
  {
    id: 3,
    title: "Work Area",
    image: "https://images.unsplash.com/photo-1686122808371-870af6244d63",
    alt: "Open office workspace with computers and collaborative areas"
  },
  {
    id: 4,
    title: "Collaboration Zone",
    image: "https://images.unsplash.com/photo-1728581665814-684c66cb036d",
    alt: "Casual meeting area with comfortable seating and whiteboards"
  }];


  const handleDirections = () => {
    const { lat, lng } = officeDetails?.coordinates;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Office
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Pune's IT hub, our office is designed for productive 
            meetings and collaborative discussions. Schedule a visit to experience our workspace.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Office Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-card rounded-xl p-6 shadow-subtle">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    Office Address
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium text-foreground">{officeDetails?.address}</p>
                    <p>{officeDetails?.street}</p>
                    <p>{officeDetails?.area}</p>
                    <p>{officeDetails?.state}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="flex-1"
                  iconName="Navigation"
                  iconPosition="left"
                  onClick={handleDirections}>

                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>

                  Schedule Visit
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-6 shadow-subtle">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-secondary-foreground" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground">
                  Business Hours
                </h3>
              </div>
              
              <div className="space-y-3">
                {businessHours?.map((schedule, index) =>
                <div key={index} className="flex items-center justify-between py-2">
                    <span className="font-medium text-foreground">{schedule?.day}</span>
                    <span className={`text-sm ${
                  schedule?.available ? 'text-success' : 'text-muted-foreground'}`
                  }>
                      {schedule?.hours}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm font-medium text-success">Currently Open</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Available for walk-ins and scheduled meetings
                </p>
              </div>
            </div>

            {/* Office Features */}
            <div className="bg-card rounded-xl p-6 shadow-subtle">
              <h3 className="font-headline text-xl font-semibold text-foreground mb-6">
                Office Amenities
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {officeFeatures?.map((feature, index) =>
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                      <Icon name={feature?.icon} size={16} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{feature?.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature?.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Map & Virtual Tour */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab('map')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-normal ${
                activeTab === 'map' ? 'bg-card text-foreground shadow-subtle' : 'text-muted-foreground hover:text-foreground'}`
                }>

                <Icon name="Map" size={16} className="inline mr-2" />
                Location Map
              </button>
              <button
                onClick={() => setActiveTab('tour')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-normal ${
                activeTab === 'tour' ? 'bg-card text-foreground shadow-subtle' : 'text-muted-foreground hover:text-foreground'}`
                }>

                <Icon name="Camera" size={16} className="inline mr-2" />
                Virtual Tour
              </button>
            </div>

            {/* Map View */}
            {activeTab === 'map' &&
            <div className="bg-card rounded-xl overflow-hidden shadow-subtle">
                <div className="h-96 relative">
                  <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Moksh Digital Office Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${officeDetails?.coordinates?.lat},${officeDetails?.coordinates?.lng}&z=15&output=embed`}
                  className="border-0" />

                  
                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse-soft"></div>
                      <span className="text-sm font-medium text-foreground">Moksh Digital</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Hinjewadi Phase 2</p>
                  </div>
                </div>
                
                <div className="p-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Need directions?</p>
                      <p className="text-xs text-muted-foreground">Open in Google Maps for turn-by-turn navigation</p>
                    </div>
                    <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={handleDirections}>

                      Open Maps
                    </Button>
                  </div>
                </div>
              </div>
            }

            {/* Virtual Tour View */}
            {activeTab === 'tour' &&
            <div className="bg-card rounded-xl p-6 shadow-subtle">
                <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
                  Office Virtual Tour
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {virtualTourImages?.map((image) =>
                <div key={image?.id} className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img
                    src={image?.image}
                    alt={image?.alt}
                    className="w-full h-32 object-cover transition-transform duration-normal group-hover:scale-105" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-sm font-medium">{image?.title}</p>
                        </div>
                      </div>
                    </div>
                )}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg text-center">
                  <Icon name="Calendar" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground mb-1">
                    Want to see more?
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Schedule an in-person visit to explore our full workspace and meet the team.
                  </p>
                  <Button
                  variant="default"
                  size="sm"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>

                    Schedule Office Visit
                  </Button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

};

export default OfficeLocation;