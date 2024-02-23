
// @ts-ignore
import { useLocation } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import { Input } from '../props/Input'
import React, { useState } from "react";
import {Button} from "../props/Button";
import { ApiServices } from "../../../api_handler/services/ApiServices";
import { Login} from "../../../api_handler/backend/Login";

export const IndexInputs = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);

        // Add a delay of 2 seconds before continuing
        setTimeout(() => {
            console.log(email, password)

            const authority = "user";

            if(authority === "user"){
                location.pathname = "/dashboard";
            } else if(authority === "admin"){
                location.pathname = "/admin_dashboard";
            }
            else{
                alert("wrong authority");
            }


            setIsLoading(false);
        }, 2000);
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

            <div>
                {isLoading ? (
                    <BeatLoader color="blue" size={30}/>
                ) : (
                    <>
                        <Button label="login" onClick={handleFormSubmit} />
                    </>
                )}
            </div>
        </div>
    );
};
