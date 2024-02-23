import React, {useState} from "react";
import {ApiServices} from "../../../api_handler/services/ApiServices";
import {Login} from "../../../api_handler/backend/Login";
import {Input} from "../props/Input";
import {Button} from "../props/Button";

export const TicketsInput = () => {
    const [title, setTitle] = useState('');
    const [message, setPassword] = useState('');
    const apiService = new ApiServices()


    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleFormSubmit = () => {

        const login = new Login(title, message)
        login.login().catch(err => {
            console.log(err)
        })
    };

    const inputFields = [
        { type: 'text', placeholder: 'Enter Title', required: "required", value: title, onChange: handleFormSubmit },
        { type: 'text', placeholder: 'Enter description', required: "required", value: message, onChange: handleFormSubmit },
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
            <Button label="Book Now" onClick={handleFormSubmit} />
        </div>
    );
}