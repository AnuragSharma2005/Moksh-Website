import React, { useState } from "react";

const DemoRequestForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    businessType: "",
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

  // Validation logic for each step
  const validateStep = () => {
    switch (step) {
      case 1:
        return (
          formData.companyName.trim() !== "" &&
          formData.companyDescription.trim() !== "" &&
          formData.businessType.trim() !== ""
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
              {index < stepTitles.length - 1 && (
                <div
                  className={`absolute top-4 sm:top-5 right-[-50%] sm:right-[-40%] w-full h-1 ${
                    step > index + 1 ? "bg-blue-500" : "bg-gray-300"
                  } z-0`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* FORM */}
        <form
          action="https://formsubmit.co/mokshdigitalco@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Hidden fields for formsubmit */}
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
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address (Optional)"
                className="border p-3 rounded w-full"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City (Optional)"
                  className="border p-3 rounded w-full"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State (Optional)"
                  className="border p-3 rounded w-full"
                />
              </div>
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
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Additional Information (Optional)"
                className="border p-3 rounded w-full"
              />
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
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Additional Notes (Optional)"
                className="border p-3 rounded w-full"
              />
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700">
                Step 4: Review & Submit
              </h2>
              <div className="border-2 border-blue-300 p-4 rounded space-y-2 bg-gray-50 text-sm sm:text-base">
                {Object.entries(formData).map(
                  ([key, value]) =>
                    value && (
                      <p key={key}>
                        <span className="font-semibold text-blue-600">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </span>{" "}
                        {value}
                      </p>
                    )
                )}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-6 flex-wrap gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 w-full sm:w-auto"
              >
                Previous
              </button>
            )}
            {step < 4 && (
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateStep()}
                className={`px-5 py-2 rounded w-full sm:w-auto ${
                  validateStep()
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            )}
            {step === 4 && (
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoRequestForm;
