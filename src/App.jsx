import React from "react";
import MultiStepForm from "./components/MultiStepForm";

const App = () => {
  return (
    <>
      <div className="flex justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold m-4">Multi-Step Form</h1>
          <MultiStepForm />
        </div>
      </div>
    </>
  );
};

export default App;
