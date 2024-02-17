import React from 'react';
import "../../resource_files/css/all_props.css";
type InputProps = {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
};

export const Input = ({ label, type, placeholder, value, onChange }: InputProps) => {
    return (
        <div className={`home-input`}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};
