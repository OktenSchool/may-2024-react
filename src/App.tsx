import React, {useEffect} from 'react';
import './App.css';
import {loadUsers, removeUser, useAppDispatch, useAppSelector, userSlice} from "./redux/store";
import {useSelector} from "react-redux";


function App() {
    let userSliceState = useAppSelector(state => state.userSliceHimself);
    let dispatch = useAppDispatch();





    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                dispatch(loadUsers(users));
                // dispatch(  removeUser(1))
            });

    }, []);

    return (
        <div>
            {
                userSliceState.users.map((user) => (<div key={user.id}>{user.username}</div>))
            }

        </div>

    );
}

export default App;
