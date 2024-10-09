import React, {FC} from 'react';
import {IUser} from "../../models/IUser";


type IUserProps = {
    user: IUser;
    lift: (user: IUser) => void
};
const User: FC<IUserProps> = ({user, lift}) => {
    return (
        <div key={user.id}>{user.name}
            <button onClick={() => {
                lift(user);
            }}>choose
            </button>
        </div>
    );
};

export default User;
