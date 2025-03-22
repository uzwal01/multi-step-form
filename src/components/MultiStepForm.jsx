import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails"
import EmploymentDetails from "./EmploymentDetails"
import MailingAddress from "./MailingAddress";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    companyName: "",
    companyAddress: "",
    jobTitle: "",
    province: "",
    district: "",
    municipality: "",
    street: "",
  });


  //Handle next and previous steps
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  //Update Form Data
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };
  return <>
    <div className="">
        {step === 1 && <PersonalDetails formData={formData} handleChange={handleChange} nextStep={nextStep}/>}
        {step === 2 && <EmploymentDetails formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>}
        {step === 3 && <MailingAddress formData={formData} handleChange={handleChange} prevStep={prevStep} />}
    </div>
  </>;
};

export default MultiStepForm;
