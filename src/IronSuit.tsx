import React from 'react';

const IronSuit = ({children}: { children: React.ReactNode }) => {

    console.log('piu piu');
    console.log('kaboom kaboom');
    console.log('high kick');

    return (
        <div>
            {children}
        </div>
    );
};

export default IronSuit;
