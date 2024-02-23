import "../resource_files/css/style.css"
import React, { useState } from 'react';
import { IndexNavLinks } from "./components/navs/IndexNavLinks";
import { LoginInputsData } from "./components/inputs/LoginInputsData";
import ImageComponent from "./components/props/Image";
import { CustomText } from "./components/props/CustomText";
import { Button } from "./components/props/Button";

export const Index = () => {

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    }

    return (
        <div className={`home-container`} >
            <IndexNavLinks />
        </div>
    );
};
