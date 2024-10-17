import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../services/api.service";
import User from "../user/User";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, []);

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} />)
            }

        </div>
    );
};

export default Users;
