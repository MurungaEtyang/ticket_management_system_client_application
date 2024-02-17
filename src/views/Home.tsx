
import { Home_nav } from "../components/nav_bar/Home_nav";
import { Home_inputs } from "../components/inputs/Home_inputs";
import { Button } from "../components/props/Button";
import ImageComponent from "../components/props/Image";
import React from "react";

export const Home = () => {
    const handleSubmit = () => {
        alert("hello world");
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${require("../resource_files/images/background/home.jpg")})`, backgroundSize: "cover", minHeight: "100vh" }}>
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
