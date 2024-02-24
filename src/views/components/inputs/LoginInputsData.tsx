import React, { useState, useEffect } from "react";
import { BeatLoader } from 'react-spinners';
import { Input } from '../props/Input'
import { Button } from "../props/Button";

export const setAuthorityData = () => {
    const authorityData = [{
        email: "email@email.com",
        role: "authorization",
        authority: "user",
        token: "token"
    }];

    sessionStorage.setItem('email', authorityData[0].email);
    return authorityData;
};

export const LoginInputsData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setAuthority] = useState<any>(null);
    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleFormSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {

            const returnedAuthorityData = setAuthorityData();
            setAuthority(returnedAuthorityData);

            setIsLoading(false);
        }, 2000);
    };

    const inputFields = [
        { type: 'email', placeholder: 'Enter your email', required: "required", value: email, onChange: handleEmailChange },
        { type: 'password', placeholder: 'Enter password', required: "required", value: password, onChange: handlePasswordChange },
    ];

    useEffect(() => {
        const handleStorageChange = () => {
            setAuthority(JSON.parse(sessionStorage.getItem('user_data') || 'null'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

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

            <div>
                {isLoading ? (
                    <BeatLoader color="blue" size={30} />
                ) : (
                    <>
                        <Button label="login" onClick={handleFormSubmit} />
                    </>
                )}
            </div>
        </div>
    );
};
