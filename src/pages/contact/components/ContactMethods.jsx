import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Immediate Response",
      description: "Need quick answers? Get instant support through our preferred channels.",
      methods: [
        {
          type: "WhatsApp",
          value: "+91 98765 43210",
          icon: "MessageCircle",
          action: "Chat Now",
          primary: true,
          available: "24/7"
        },
        {
          type: "Phone Call",
          value: "+91 98765 43210",
          icon: "Phone",
          action: "Call Now",
          primary: true,
          available: "9 AM - 8 PM"
        }
      ]
    },
    {
      id: 2,
      title: "Professional Inquiry",
      description: "For detailed discussions and formal communications.",
      methods: [
        {
          type: "Email",
          value: "hello@mokshdigital.com",
          icon: "Mail",
          action: "Send Email",
          primary: false,
          available: "Response in 2-4 hours"
        },
        {
          type: "Business Email",
          value: "business@mokshdigital.com",
          icon: "Briefcase",
          action: "Send Inquiry",
          primary: false,
          available: "Response in 1-2 hours"
        }
      ]
    },
    {
      id: 3,
      title: "Schedule Meeting",
      description: "Book a consultation at your convenience.",
      methods: [
        {
          type: "Video Call",
          value: "Google Meet / Zoom",
          icon: "Video",
          action: "Schedule Call",
          primary: false,
          available: "Mon-Sat, 9 AM - 6 PM"
        },
        {
          type: "Office Visit",
          value: "Pune, Maharashtra",
          icon: "MapPin",
          action: "Book Visit",
          primary: false,
          available: "By Appointment"
        }
      ]
    }
  ];

  const handleContactAction = (method) => {
    switch (method?.type) {
      case "WhatsApp":
        window.open(`https://wa.me/919876543210?text=Hi! I'm interested in your digital services.`, '_blank');
        break;
      case "Phone Call":
        window.open(`tel:+919876543210`, '_self');
        break;
      case "Email": case"Business Email":
        window.open(`mailto:${method?.value}?subject=Digital Services Inquiry`, '_self');
        break;
      default:
        // For scheduling methods, scroll to contact form
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Preferred Way to Connect
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand different situations require different communication styles. 
            Pick the method that works best for your needs and urgency level.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {contactMethods?.map((category) => (
            <div key={category?.id} className="bg-card rounded-xl p-6 shadow-subtle hover-lift">
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  {category?.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {category?.description}
                </p>
              </div>

              {/* Methods List */}
              <div className="space-y-4">
                {category?.methods?.map((method, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border transition-all duration-normal hover:shadow-medium ${
                      method?.primary 
                        ? 'border-primary bg-primary/5 hover:bg-primary/10' :'border-border bg-muted/30 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          method?.primary ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
                        }`}>
                          <Icon name={method?.icon} size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{method?.type}</h4>
                          <p className="text-sm text-muted-foreground">{method?.value}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {method?.available}
                      </span>
                      <Button
                        variant={method?.primary ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleContactAction(method)}
                        className="font-medium"
                      >
                        {method?.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-conversion/10 border border-conversion/20 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="AlertCircle" size={24} className="text-conversion" />
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Urgent Project Requirements?
            </h3>
          </div>
          <p className="font-body text-muted-foreground mb-4">
            For time-sensitive projects or emergency support, reach out directly to our priority line.
          </p>
          <Button
            variant="default"
            className="bg-conversion hover:bg-conversion/90 text-conversion-foreground font-cta"
            iconName="Zap"
            iconPosition="left"
            onClick={() => window.open('tel:+919876543210', '_self')}
          >
            Priority Support: +91 98765 43210
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;