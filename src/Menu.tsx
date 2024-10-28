import React, {memo} from 'react';

type MenuTypes = {
    id: number; someFn: () => void
};
const Menu = memo(({id, someFn}: MenuTypes) => {

    console.log('menu build');
    return (
        <div>
            this is menu component
        </div>
    );
});

export default Menu;
