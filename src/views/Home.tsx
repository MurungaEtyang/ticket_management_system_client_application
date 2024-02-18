
import "../resource_files/css/style.css"
import React, { useState } from 'react';
import { Home_nav } from "../components/nav_bar/Home_nav";
import { Home_inputs } from "../components/inputs/Home_inputs";
import ImageComponent from "../components/props/Image";

export const Home = () => {


    return (
        <div className={`home-container`} >
            <div style={{ marginBottom: "40px" }}>
                <Home_nav />
            </div>
            <form>
                <div className="row" style={{ marginBottom: "40px" }}>
                    <div className="col-md-6">
                        <ImageComponent src={require("../resource_files/images/icons/profile_icon.png")} alt="Image description" width={300} height={200} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Home_inputs />
                    </div>
                </div>
            </form>
        </div>
    );
};
