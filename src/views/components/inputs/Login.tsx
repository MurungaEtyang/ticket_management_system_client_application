import {CustomText} from "../props/CustomText";
import {Button} from "../props/Button";
import ImageComponent from "../props/Image";
import {LoginInputsData} from "./LoginInputsData";
import React, {useState} from "react";
// @ts-ignore
import { BrowserRouter as Router } from "react-router-dom";
import "../../../resource_files/css/all_props.css"
import {BeatLoader} from "react-spinners";

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setShowForm(true);
            setIsLoading(false);
        }, 5000);
    }

    return (
        <Router> {/* Wrap your component with the Router component */}
            <div>
                {!showForm && (
                    <div className={`headers`}>
                        <h2 className={`title`}> <CustomText label="Customer Service " /> </h2>
                        <p className={`slogan`}> <CustomText label={`We care about your satisfaction`} /> </p>
                        <div>
                            {isLoading ? (
                                <BeatLoader color="blue" size={30}/>
                            ) : (
                                <>
                                    <Button label={`Next`} onClick={handleButtonClick}/>
                                </>
                            )}
                        </div>
                    </div>
                )}
                {showForm && (
                    <div>
                        <div className="row" style={{ marginBottom: "40px" }}>
                            <div className="col-md-6">
                                <ImageComponent src={require("../../../resource_files/images/icons/profile_icon.png")} alt="Image description" width={300} height={200} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <LoginInputsData />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Router>
    );
}
