import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import HomePage from "../pages/HomePage";
import CustomErrorLayout from "../layouts/CustomErrorLayout";
import AdminLayout from "../layouts/AdminLayout";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                index: true, element: <HomePage/>
            },
            {
                path: 'asd', element: <Page1/>,
                children: [
                    {path: 'ppp', element: <div>inner div</div>}
                ]
            },
            {
                path: 'qwe', element: <Page2/>
            },
        ],
        errorElement: <CustomErrorLayout/>
    },
    {path: '/admin', element: <AdminLayout/>},
]);
