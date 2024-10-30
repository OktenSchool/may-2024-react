import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {


    return (
        <div>

            <ul>
                <li><Link to={''}>home page</Link></li>
                <li><Link to={'users'}>users page</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
