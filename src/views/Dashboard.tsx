
import { CustomText } from "./components/props/CustomText";
import React, { useState } from "react";
import {SearchTicket} from "./tickets/SearchTicket";

export const Dashboard = () => {


    return (
        <>
            <div className={`dashboard-default-data`}>
                <h2 className={`dashboard-title`}>
                    <CustomText label="Customer Service Dashboard" />
                </h2>
                <p className={`dashboard-slogan`}>
                    <CustomText label={`We care about your satisfaction`} />
                </p>

                <div>
                    <SearchTicket />
                </div>
            </div>
        </>
    );
};
