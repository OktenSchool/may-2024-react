import React, {FC} from 'react';
import {IUser} from "../models/IUser";

interface UserProps {
    item: IUser
}

const User: FC<UserProps> = ({item}) => {
    return (
        <div>{
            Object.entries(item).map(([field, value]) => {
                return <div key={field}>{field} {String(value)}</div>
            })


        }</div>
    );
};

export default User;
