import React, { useState } from 'react';

import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const CalendarIntegration = ({ formData, updateFormData, errors }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate next 14 days for calendar
  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);

      // Skip weekends for business meetings
      if (date?.getDay() !== 0 && date?.getDay() !== 6) {
        dates?.push(date);
      }
    }
    return dates?.slice(0, 10); // Show 10 business days
  };

  const timeSlots = [
  { value: '09:00', label: '9:00 AM', available: true },
  { value: '10:00', label: '10:00 AM', available: true },
  { value: '11:00', label: '11:00 AM', available: false },
  { value: '12:00', label: '12:00 PM', available: true },
  { value: '14:00', label: '2:00 PM', available: true },
  { value: '15:00', label: '3:00 PM', available: true },
  { value: '16:00', label: '4:00 PM', available: false },
  { value: '17:00', label: '5:00 PM', available: true }];


  const teamMembers = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'Senior Project Manager',
    avatar: "https://images.unsplash.com/photo-1588178457501-31b7688a41a0",
    avatarAlt: 'Professional headshot of Indian man with short black hair in navy blue shirt',
    expertise: ['Web Development', 'E-commerce', 'Government Projects'],
    experience: '8+ years'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'UI/UX Design Lead',
    avatar: "https://images.unsplash.com/photo-1700560970703-82fd3150d5ac",
    avatarAlt: 'Professional headshot of Indian woman with long black hair in white blazer',
    expertise: ['UI/UX Design', 'Branding', 'Mobile Apps'],
    experience: '6+ years'
  },
  {
    id: 'amit-patel',
    name: 'Amit Patel',
    role: 'Technical Architect',
    avatar: "https://images.unsplash.com/photo-1728072584773-81a2ea45a706",
    avatarAlt: 'Professional headshot of Indian man with beard wearing dark blue suit',
    expertise: ['Mobile Development', 'API Integration', 'Cloud Solutions'],
    experience: '10+ years'
  }];


  const calendarDates = generateCalendarDates();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    updateFormData('preferredDate', date?.toISOString()?.split('T')?.[0]);
    setSelectedTime(null); // Reset time when date changes
    updateFormData('preferredTime', '');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    updateFormData('preferredTime', time);
  };

  const handleTeamMemberSelect = (memberId) => {
    updateFormData('preferredTeamMember', memberId);
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Calendar" size={32} className="text-accent" />
        </div>
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          Schedule Your Consultation
        </h2>
        <p className="text-muted-foreground">
          Book a free 30-minute consultation with our expert team
        </p>
      </div>
      {/* Team Member Selection */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="Users" size={20} className="mr-2 text-accent" />
          Choose Your Consultant
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {teamMembers?.map((member) =>
          <div
            key={member?.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover-lift ${
            formData?.preferredTeamMember === member?.id ?
            'border-accent bg-accent/5' : 'border-border hover:border-accent/50'}`
            }
            onClick={() => handleTeamMemberSelect(member?.id)}>

              <div className="text-center">
                <img
                src={member?.avatar}
                alt={member?.avatarAlt}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />

                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {member?.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {member?.role}
                </p>
                <p className="text-xs text-accent font-medium mb-2">
                  {member?.experience}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member?.expertise?.slice(0, 2)?.map((skill, index) =>
                <span
                  key={index}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">

                      {skill}
                    </span>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
        {errors?.preferredTeamMember &&
        <p className="text-error text-sm mt-2">{errors?.preferredTeamMember}</p>
        }
      </div>
      {/* Date Selection */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="CalendarDays" size={20} className="mr-2 text-accent" />
          Select Date
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {calendarDates?.map((date, index) =>
          <button
            key={index}
            onClick={() => handleDateSelect(date)}
            className={`p-3 rounded-lg border-2 text-center transition-all hover-lift ${
            selectedDate?.toDateString() === date?.toDateString() ?
            'border-accent bg-accent text-accent-foreground' :
            'border-border hover:border-accent/50 text-foreground'}`
            }>

              <div className="text-sm font-medium">
                {formatDate(date)}
              </div>
            </button>
          )}
        </div>
        {errors?.preferredDate &&
        <p className="text-error text-sm mt-2">{errors?.preferredDate}</p>
        }
      </div>
      {/* Time Selection */}
      {selectedDate &&
      <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
            <Icon name="Clock" size={20} className="mr-2 text-accent" />
            Select Time
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {timeSlots?.map((slot) =>
          <button
            key={slot?.value}
            onClick={() => slot?.available && handleTimeSelect(slot?.value)}
            disabled={!slot?.available}
            className={`p-3 rounded-lg border-2 text-center transition-all ${
            !slot?.available ?
            'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50' :
            selectedTime === slot?.value ?
            'border-accent bg-accent text-accent-foreground' :
            'border-border hover:border-accent/50 text-foreground hover-lift'}`
            }>

                <div className="text-sm font-medium">
                  {slot?.label}
                </div>
                {!slot?.available &&
            <div className="text-xs mt-1">Booked</div>
            }
              </button>
          )}
          </div>
          {errors?.preferredTime &&
        <p className="text-error text-sm mt-2">{errors?.preferredTime}</p>
        }
        </div>
      }
      {/* Meeting Preferences */}
      <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg p-6 border border-accent/20">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Icon name="Settings" size={20} className="mr-2 text-accent" />
          Meeting Preferences
        </h3>
        
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
              <Checkbox
                checked={formData?.meetingType === 'video' || false}
                onChange={(e) => updateFormData('meetingType', e?.target?.checked ? 'video' : '')} />

              <div>
                <label className="text-sm font-medium text-foreground cursor-pointer">
                  Video Call (Recommended)
                </label>
                <p className="text-xs text-muted-foreground">
                  Screen sharing for better discussion
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
              <Checkbox
                checked={formData?.meetingType === 'phone' || false}
                onChange={(e) => updateFormData('meetingType', e?.target?.checked ? 'phone' : '')} />

              <div>
                <label className="text-sm font-medium text-foreground cursor-pointer">
                  Phone Call
                </label>
                <p className="text-xs text-muted-foreground">
                  Voice-only consultation
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
            <Checkbox
              checked={formData?.sendReminder || false}
              onChange={(e) => updateFormData('sendReminder', e?.target?.checked)} />

            <div>
              <label className="text-sm font-medium text-foreground cursor-pointer">
                Send me reminder notifications
              </label>
              <p className="text-xs text-muted-foreground">
                Get email and SMS reminders before the meeting
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Summary */}
      {selectedDate && selectedTime && formData?.preferredTeamMember &&
      <div className="bg-success/5 border border-success/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="CheckCircle" size={20} className="mr-2 text-success" />
            Consultation Summary
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium text-foreground">
                {selectedDate?.toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="font-medium text-foreground">
                {timeSlots?.find((slot) => slot?.value === selectedTime)?.label} IST
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Consultant:</span>
              <span className="font-medium text-foreground">
                {teamMembers?.find((member) => member?.id === formData?.preferredTeamMember)?.name}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium text-foreground">30 minutes</span>
            </div>
          </div>
        </div>
      }
    </div>);

};

export default CalendarIntegration;