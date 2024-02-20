
import { Input } from '../props/Input'
import React, { useState } from "react";
import {Button} from "../props/Button";
import { ApiServices } from "../../../api_handler/services/ApiServices";
import { Login} from "../../../api_handler/backend/Login";

export const Home_inputs = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const apiService = new ApiServices()
    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleFormSubmit = () => {
        const login = new Login(email, password)
        login.login().catch(err => {
            console.log(err)
        })
    };

    const inputFields = [
        { type: 'email', placeholder: 'Enter your email', required: "required", value: email, onChange: handleEmailChange },
        { type: 'password', placeholder: 'Enter password', required: "required", value: password, onChange: handlePasswordChange },
    ];

    return (
        <div>
            {inputFields.map((field, index) => (
                <Input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    required={field.required}
                    onChange={field.onChange}
                />
            ))}
            <Button label="login" onClick={handleFormSubmit} />
        </div>
    );
};
