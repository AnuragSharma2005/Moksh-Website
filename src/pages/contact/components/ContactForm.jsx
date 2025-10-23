import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const primaryColor = '#3C467B';

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', inquiryType: '',
    message: '', preferredContact: '', terms: false
  });

  const [errors, setErrors] = useState({});

  const inquiryTypes = [
    { value: 'website', label: 'Website Development' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'ecommerce', label: 'E-commerce Solutions' },
    { value: 'branding', label: 'Branding & UI/UX' },
    { value: 'government', label: 'Government Platforms' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'consultation', label: 'Digital Consultation' },
    { value: 'other', label: 'Other Services' }
  ];

  const contactPreferences = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'video', label: 'Video Call' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select inquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.terms) newErrors.terms = 'Please accept terms and conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C467B] mb-4">
            Tell Us About Your Project
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The more details you share, the better we can understand your needs and provide accurate timelines and pricing.
          </p>
        </motion.div>

        <motion.form
          action="https://formsubmit.co/mokshdigitalco@gmail.com"
          method="POST"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-xl border-2 space-y-8"
          style={{ borderColor: primaryColor }}
          onSubmit={(e) => !validateForm() && e.preventDefault()}
        >
          <input type="hidden" name="_subject" value="New Inquiry from Website" />
          <input type="hidden" name="_autoresponse" value="Thank you for reaching out! We'll contact you soon." />

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Input
              label="Full Name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={errors.name}
              className="border-2 border-[#3C467B] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3C467B]"
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="your.email@company.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              className="border-2 border-[#3C467B] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3C467B]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={errors.phone}
              className="border-2 border-[#3C467B] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3C467B]"
            />
            <Input
              label="Company Name"
              name="company"
              type="text"
              placeholder="Your company (optional)"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="border-2 border-[#3C467B] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3C467B]"
            />
          </div>

          {/* Inquiry + Preferred Contact */}
          <div className="grid md:grid-cols-2 gap-8">
            <Select
              label="Inquiry Type"
              name="inquiryType"
              placeholder="Select service type"
              options={inquiryTypes}
              value={formData.inquiryType}
              onChange={(value) => handleInputChange('inquiryType', value)}
              error={errors.inquiryType}
              className="border-2 border-[#3C467B] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3C467B]"
            />
            <Select
              label="Preferred Contact Method"
              name="preferredContact"
              placeholder="How should we contact you?"
              options={contactPreferences}
              value={formData.preferredContact}
              onChange={(value) => handleInputChange('preferredContact', value)}
              className="border-2 border-[#3C467B] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3C467B]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#3C467B] mb-2">Project Details</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project requirements, goals, and any specific features..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="w-full border-2 border-[#3C467B] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3C467B] resize-none transition-all duration-200"
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={(e) => handleInputChange('terms', e.target.checked)}
              className="accent-[#3C467B]"
            />
            <span className="text-sm text-[#3C467B]">I accept the terms and conditions *</span>
          </div>

          {/* Submit */}
          <div>
            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              className="bg-[#3C467B] hover:bg-[#2f365e] text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              iconName="Send"
              iconPosition="right"
            >
              Send Inquiry
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
