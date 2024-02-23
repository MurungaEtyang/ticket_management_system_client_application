import { CustomText } from "./components/props/CustomText";
import React, { useState } from "react";
import {SearchTicket} from "./tickets/SearchTicket";

export const Dashboard = () => {


    return (
        <>
            <div className={`dashboard-default-data`}>
                <h2 >Customer Service Dashboard</h2>
                <p >
                    We care about your satisfaction
                </p>
                <div className={`search-ticket`}>
                    <SearchTicket />
                </div>
            </div>
        </>
    );
};
