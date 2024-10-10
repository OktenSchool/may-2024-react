import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type UserProps = {
    item: IUser;
    lift: (id: number) => void
}
const User: FC<UserProps> = ({item, lift}) => {
    return (
        <div key={item.id}>
            {item.username}
            <button onClick={() => {
                lift(item.id);
            }}>fetch posts
            </button>

        </div>

    );
};

export default User;
