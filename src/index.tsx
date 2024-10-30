import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoadUsersPage from "./page/LoadUsersPage";
import ShowUsersPage from "./page/ShowUsersPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
    {path: '/', element: <App/>, children:[
            {path:'users',element:<LoadUsersPage/>},
            {path:'show',element:<ShowUsersPage/>},

        ]},
])

root.render(
    <RouterProvider router={routes}/>
);

