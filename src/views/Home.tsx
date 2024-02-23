
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
            <div>
                <h2 className={`title`}> <CustomText label="Customer Service Dashboard" /> </h2>
                <p className={`slogan`}> <CustomText label={`We care about your satisfaction`} /> </p>
            </div>

        </div>
    );
};
