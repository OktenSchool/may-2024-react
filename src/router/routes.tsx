import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import TotalPage from "../pages/TotalPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'total', element: <TotalPage/>},

        ]
    },
])
