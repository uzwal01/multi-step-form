import React from "react";

const PersonalDetails = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="p-4 w-auto">
      <div className="">
        <h2 className="text-lg font-bold p-4">Personal Information</h2>
        <div className="border-1 rounded-lg p-4">
          <div className="flex justify-center gap-4 py-4 ">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-1 rounded-lg p-2"
            />
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className="border-1 rounded-lg p-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-1 rounded-lg p-2"
            />
          </div>
          <div className="flex justify-start gap-4 py-4">
            <input
              type="number"
              name="age"
              placeholder="Age"
              min="0"
              value={formData.age}
              onChange={handleChange}
              className="border-1 rounded-lg p-2"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border-1 rounded-lg p-2"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-start py-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-1 rounded-lg p-2"
            />
          </div>
          <button onClick={nextStep} className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-gray-500 text-white">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
