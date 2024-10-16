import React from 'react';
import {Outlet} from "react-router-dom";

const Page1 = () => {
    return (
        <div>
            Page1
            <Outlet/>
        </div>
    );
};

export default Page1;
