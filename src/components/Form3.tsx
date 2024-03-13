import React from 'react';
import { useForm } from '../context/FormContext';
import "./Form.css";

const Stepthree: React.FC = () => {
    const { formData, setFormData } = useForm();

    return (
        <div className='App'>
            <input
                type="text"
                placeholder="First Name3"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            />
            <input
                type="text"
                placeholder="Last Name3"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            />
            <input
                type="email"
                placeholder="Email3"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
        </div>
    );
};

export default Stepthree;
