import React, {memo} from 'react';

type MenuTypes = {
    id: number; someFn: () => void,
    links: string[];
};
const Menu = memo(({id, someFn, links}: MenuTypes) => {

    console.log('menu build');
    return (
        <ul>
            {
                links.map(link => (<li>{link}</li>))
            }
        </ul>
    );
});

export default Menu;
