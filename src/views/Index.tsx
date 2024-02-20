import "../resource_files/css/style.css"
import React, { useState } from 'react';
import { HomeNavLinks } from "./components/navs/HomeNavLinks";
import { Home_inputs } from "./components/inputs/Home_inputs";
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
            <div style={{ marginBottom: "40px" }}>
                <HomeNavLinks />
            </div>

            {!showForm && (
                <div>
                    <div>
                        <h2 className={`title`}> <CustomText label="Customer Service " /> </h2>
                        <p className={`slogan`}> <CustomText label={`We care about your satisfaction`} /> </p>
                    </div>

                    <div>
                        <Button label={`Next`} onClick={handleButtonClick}/>
                    </div>
                </div>
            )}

            {showForm && (
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
            )}

        </div>
    );
};
