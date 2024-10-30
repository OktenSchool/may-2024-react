import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MyContext} from "./MyContextProvider";
import UsersPage from "./page/UsersPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
    {path: '/', element: <App/>, children:[
            {path:'users',element:<UsersPage/>}
        ]},
])

root.render(
    <RouterProvider router={routes}/>
);

