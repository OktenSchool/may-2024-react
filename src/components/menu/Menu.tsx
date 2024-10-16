import React from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>products</Link>
                </li>
                <li>
                    <Link to='/recipes'>recipes</Link>
                </li>
            </ul>
            <hr/>

        </div>
    );
};

export default Menu;
