import React from "react";

const MailingAddress = (formData, handleChange, prevStep) => {
  const handleSubmit = () => {
    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold p-4">Mailing Address</h2>
      <div className="border-1 rounded-lg p-4">
        <div className="flex justify-center gap-4 py-4">
          <input
            type="text"
            name="province"
            placeholder="Province"
            value={formData.province}
            onChange={handleChange}
            required
            className="border-1 rounded-lg p-2"
          />
        </div>
        <div className="flex justify-center gap-4 py-4">
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
            required
            className="border-1 rounded-lg p-2"
          />
        </div>
        <div className="flex justify-center gap-4 py-4">
          <input
            type="text"
            name="municipality"
            placeholder="Local Municipality"
            value={formData.municipality}
            onChange={handleChange}
            required
            className="border-1 rounded-lg p-2"
          />
        </div>
        <div className="flex justify-center gap-4 py-4">
          <input
            type="text"
            name="street"
            placeholder="Street Address (Optional)"
            value={formData.street}
            onChange={handleChange}
            className="border-1 rounded-lg p-2"
          />
        </div>
        <div className="py-2">
          <button onClick={prevStep} className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-gray-500 text-white mr-2">Back</button>
          <button onClick={handleSubmit} className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-gray-500 text-white ml-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MailingAddress;
