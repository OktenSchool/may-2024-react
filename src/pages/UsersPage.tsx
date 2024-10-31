import React, {useEffect} from 'react';
import {useStore} from "../store";

const UsersPage = () => {
    let {userSlice: {loadUsers, allUsers}} = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                loadUsers(value);
            });

    })
    return (
        <ul>
            {allUsers.map(user => (<li key={user.id}>{user.name}</li>))}
        </ul>
    );
};

export default UsersPage;
