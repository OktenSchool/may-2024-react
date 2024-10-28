import React, {memo} from 'react';

const Menu = memo(({id}:{id:number}) => {

    console.log('menu build');
    return (
        <div>
            this is menu component
        </div>
    );
});

export default Menu;
