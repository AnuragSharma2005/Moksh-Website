import React, { useState } from "react";

const DemoRequestForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    businessType: "",
    phone: "", // ✅ ADDED PHONE FIELD
    address: "",
    city: "",
    state: "",
    demoCategory: "",
    websiteType: "",
    additionalInfo: "",
    meetingDate: "",
    meetingTime: "",
    platform: "",
    notes: "",
  });

  const demoOptions = [
    "Web Development",
    "App Development",
    "Content Creation",
    "SEO Optimization",
    "E-commerce Website",
  ];
  const websiteTypes = ["Dynamic", "Static"];
  const platforms = ["Zoom", "Google Meet", "In-Person"];

  const validateStep = () => {
    switch (step) {
      case 1:
        return (
          formData.companyName.trim() !== "" &&
          formData.companyDescription.trim() !== "" &&
          formData.businessType.trim() !== "" &&
          formData.phone.trim() !== "" // ✅ ADDED VALIDATION
        );
      case 2:
        return (
          formData.demoCategory.trim() !== "" &&
          formData.websiteType.trim() !== ""
        );
      case 3:
        return (
          formData.meetingDate.trim() !== "" &&
          formData.meetingTime.trim() !== "" &&
          formData.platform.trim() !== ""
        );
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 4));
    } else {
      alert("Please fill all required fields before continuing.");
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const stepTitles = [
    "Company Details",
    "Demo Preferences",
    "Schedule Demo",
    "Review & Submit",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="bg-white border-2 border-blue-500 rounded-2xl shadow-lg w-full max-w-3xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700">
          Request Your Demo
        </h1>

        {/* Step progress */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          {stepTitles.map((title, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative text-center mb-4 sm:mb-0"
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold ${
                  step >= index + 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs sm:text-sm mt-2">{title}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <form
          action="https://formsubmit.co/mokshdigitalco@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_subject" value="New Demo Request" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://yourwebsite.com/thank-you"
          />

          {Object.entries(formData).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700">
                Step 1: Company Details
              </h2>

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="border p-3 rounded w-full"
                required
              />

              <textarea
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleChange}
                placeholder="What does your company do?"
                className="border p-3 rounded w-full"
                required
              />

              <input
                type="text"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="Business Type / Industry"
                className="border p-3 rounded w-full"
                required
              />

              {/* ✅ PHONE NUMBER FIELD ADDED */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border p-3 rounded w-full"
                required
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address (Optional)"
                className="border p-3 rounded w-full"
              />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700">
                Step 2: Demo Preferences
              </h2>

              <select
                name="demoCategory"
                value={formData.demoCategory}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              >
                <option value="">Select Demo Category</option>
                {demoOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <select
                name="websiteType"
                value={formData.websiteType}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              >
                <option value="">Dynamic or Static?</option>
                {websiteTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700">
                Step 3: Schedule Your Demo
              </h2>

              <input
                type="date"
                name="meetingDate"
                value={formData.meetingDate}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />

              <input
                type="time"
                name="meetingTime"
                value={formData.meetingTime}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />

              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              >
                <option value="">Preferred Platform</option>
                {platforms.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-2 border p-4 bg-gray-50 rounded">
              {Object.entries(formData).map(([key, value]) => (
                value && (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                )
              ))}
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex justify-between">
            {step > 1 && (
              <button type="button" onClick={prevStep}>
                Previous
              </button>
            )}

            {step < 4 && (
              <button type="button" onClick={nextStep} disabled={!validateStep()}>
                Next
              </button>
            )}

            {step === 4 && <button type="submit">Submit</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoRequestForm;