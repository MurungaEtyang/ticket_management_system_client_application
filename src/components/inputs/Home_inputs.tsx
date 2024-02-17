
import { Input } from '../props/Input'
import React, { useState } from "react";
import {Button} from "../props/Button";

export const Home_inputs = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleFormSubmit = () => {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        alert(email + ' has been a password ' + password);
    };

    const inputFields = [
        { type: 'email', placeholder: 'Enter your email', value: email, onChange: handleEmailChange },
        { type: 'password', placeholder: 'Enter password', value: password, onChange: handlePasswordChange },
    ];

    return (
        <div>
            {inputFields.map((field, index) => (
                <Input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                />
            ))}
            <Button label="login" onClick={handleFormSubmit} />
        </div>
    );
};
