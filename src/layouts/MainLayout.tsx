import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            MainLayout
            <Outlet/>
        </div>
    );
};

export default MainLayout;
