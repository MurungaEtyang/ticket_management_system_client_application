import React from 'react';
import "../../../resource_files/css/all_props.css";
type InputProps = {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
    required?: string;
};

export const Input = ({ label, type, placeholder, value, required, onChange}: InputProps) => {
    return (
        <div className={`home-input`}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} value={value} required onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};
