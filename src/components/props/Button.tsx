import React from 'react';
import "../../resource_files/css/all_props.css";
type ButtonProps = {
    label: string;
    onClick: () => void;
}
export const Button = ({ label, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}