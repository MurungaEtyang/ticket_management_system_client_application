
import React, { ReactNode } from 'react';
import "../../../resource_files/css/all_props.css";

type ButtonProps = {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
}

export const Button = ({ label, icon, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {icon && <span className="button-icon">{icon}</span>}
            {label}
        </button>
    );
}
