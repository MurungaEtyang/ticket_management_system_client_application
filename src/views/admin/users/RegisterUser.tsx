
import React, { useState } from "react";
import { Button } from "../../components/props/Button";
import { Input } from '../../components/props/Input';

export const RegisterUser = () => {
    const [credentials, setCredentials] = useState([
        { type: 'email', placeholder: 'Enter your email', required: "required", value: '' },
        { type: 'dropdown', placeholder: 'Select an option', required: "required", value: '' },
        { type: 'password', placeholder: 'Enter password', required: "required", value: '' }
    ]);

    const handleInputChange = (index: number, value: string) => {
        const newCredentials = [...credentials];
        newCredentials[index].value = value;
        setCredentials(newCredentials);
    };

    const handleAddField = () => {
        setCredentials([...credentials, { type: 'text', placeholder: 'Enter additional information', required: "required", value: '' }]);
    };

    const handleRemoveField = (index: number) => {
        const newCredentials = [...credentials];
        newCredentials.splice(index, 1);
        setCredentials(newCredentials);
    };

    const handleFormSubmit = () => {
        console.log('Form submitted with credentials:', credentials);
    };

    return (
        <div className={`register-user`}>
            <form onClick={handleFormSubmit}>
                {credentials.map((field, index) => (
                    <div key={index} className="input-container"> {/* Add a class to the div */}
                        {field.type === 'dropdown' ? (
                            <SelectDropdown
                                placeholder={field.placeholder}
                                value={field.value}
                                onChange={(value: string) => handleInputChange(index, value)}
                            />
                        ) : (
                            <div className="input-wrapper">
                                <Input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={field.value}
                                    required={field.required}
                                    onChange={(value: string) => handleInputChange(index, value)}
                                />
                                {field.type !== 'dropdown' && (
                                    <button className="remove-field-button" onClick={() => handleRemoveField(index)}>-</button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
                <div className={`register-plus`}>
                    <Button label="Register"  />
                    <button className={`button-add`} onClick={handleAddField}>+</button>
                </div>
            </form>
        </div>
    );
};

const SelectDropdown = ({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (value: string) => void }) => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value="">{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
};
