import React, { createContext, useContext, useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
interface ContextType {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}


const FormContext = createContext<ContextType | undefined>(undefined);
interface FormProviderProps {
    children: React.ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({ firstName: "", lastName: "", email: "", password: "" });
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <FormContext.Provider value={{ formData, setFormData, setCurrentStep, currentStep }}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
}