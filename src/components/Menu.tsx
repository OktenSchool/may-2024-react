import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="users">users</Link>
                </li>
                <li>
                    <Link to="posts">comments</Link>
                </li>
                <li>
                    <Link to="commnets">comments</Link>
                </li>

            </ul>
        </div>
    );
};

export default Menu;
