import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector, userSliceActions,} from "./redux/store";


function App() {
    let {users, user} = useAppSelector(state => state.userPart);
    let dispatch = useAppDispatch();


    useEffect(() => {
        // dispatch(userSliceActions.loadUsers());

        dispatch(userSliceActions.loadUser(1));

    }, []);

    return (
        <div>
            {
                users.map((user) => (<div key={user.id}>{user.username}</div>))
            }

            {user && <div>{JSON.stringify(user)}</div>}
        </div>

    );
}

export default App;
