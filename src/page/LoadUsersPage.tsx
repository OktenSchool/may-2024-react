import React, {useEffect} from 'react';
import {useStore} from "../store";


const LoadUsersPage = () => {

    let {userSlice:{loadUsers}} = useStore();

    useEffect(() => {
        fetch('https://dummyjson.com/users').then(value => value.json()).then(value => loadUsers(value.users))
    }, []);


    return (
        <div>

        </div>
    );
};

export default LoadUsersPage;
