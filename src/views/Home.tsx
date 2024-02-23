
import "../resource_files/css/style.css"
import React, { useState } from 'react';
import { CustomText} from "./components/props/CustomText";
import {Button} from "./components/props/Button";
import {HomeNav} from "./components/navs/HomeNav";

export const Home = () => {


    return (
        <div className={`home-container`} >
            <div style={{ marginBottom: "40px" }}>
                <HomeNav />
            </div>
        </div>
    );
};
