import React, {useEffect, useState} from 'react';
import './App.css';
import {MyContext} from "./MyContextProvider";
import {IUser} from "./models/IUser";
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";


function App() {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value.users);
            });

    }, []);
    return (
        <>
            <HeaderComponent/>

            <MyContext.Provider value={{
                userSlice: {
                    allUsers: users,
                    user: null
                }
            }}>
                <Outlet/>

            </MyContext.Provider>


        </>

    );
}

export default App;
