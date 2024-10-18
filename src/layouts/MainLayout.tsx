import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/Menu";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
