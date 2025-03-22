import React from "react";

const EmploymentDetails = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold p-4">Employment Details</h2>
      <div className="border-1 rounded-lg p-4">
        <div className="flex justify-center gap-4 py-4">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="border-1 rounded-lg p-2"
        />
        </div>
        <div className="flex justify-center gap-4 py-4">
        <input
          type="text"
          name="companyAddress"
          placeholder="Company Address"
          value={formData.companyAddress}
          onChange={handleChange}
          required
          className="border-1 rounded-lg p-2"
        />
        </div>
        <div className="flex justify-center gap-4 py-4">
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          required
          className="border-1 rounded-lg p-2"
        />
        </div>
        
        <div className="py-2">
        <button onClick={prevStep} className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-gray-500 text-white mr-2">Back</button>
        <button onClick={nextStep} className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-gray-500 text-white ml-2">Next</button>
        </div>
        
      </div>
    </div>
  );
};

export default EmploymentDetails;
