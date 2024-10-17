import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import CommentsPage from "../pages/CommentsPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index:true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
        ]
    }
]);
