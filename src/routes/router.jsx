import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);


export default router;