import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";
import User from "../components/User";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.userService.getAll<IUser[]>('/users',()=> {
            console.log('asjhdahgds');
        }).then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(user => <User item={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersPage;
