import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'todos'}>todos</Link></li>

            </ul>
        </div>
    );
};

export default Menu;
