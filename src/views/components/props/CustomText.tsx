import React from 'react';
import "../../../resource_files/css/all_props.css";

type ButtonProps = {
    label: string;
}
export const CustomText = ({ label, onMouseEnter, onMouseLeave, isHovered }: { label?: string, onMouseEnter?: () => void, onMouseLeave?: () => void, isHovered?: boolean }) => {
    return (
        <p className={`custom-text ${isHovered ? 'hovered' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {label}
        </p>
    );
};