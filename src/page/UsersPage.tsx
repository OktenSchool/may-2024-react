import React, {useContext} from 'react';
import {MyContext} from "../MyContextProvider";

const UsersPage = () => {

    const context = useContext(MyContext);


    return (
        <div>
            {context.userSlice.allUsers.map((user) => (<div>{user.firstName}</div>))}
        </div>
    );
};

export default UsersPage;
