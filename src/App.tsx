import React from "react";
import { FormProvider } from "./context/FormContext";
import { useForm } from "./context/FormContext";
import StepOne from "./components/Form";
import Steptwo from "./components/Form2";
import Stepthree from "./components/Form3";
import "./components/Form.css";


const Nav: React.FC = () => {
  const { currentStep, setCurrentStep } = useForm();
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const lastStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="App">
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <Steptwo />}
      {currentStep === 3 && <Stepthree />}
      <button onClick={lastStep} disabled={currentStep === 1}>
        Back
      </button>
      <button onClick={nextStep} disabled={currentStep === 3}>
        Next
      </button>
    </div>
  );
};
function App() {
  return (
    <div>
      <FormProvider>
        <Nav />
      </FormProvider>
    </div>
  )
}
export default App;