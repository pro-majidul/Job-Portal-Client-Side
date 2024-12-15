import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import Private from "../Private/Private";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";

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
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/jobs/:id',
                element: <Private><JobDetails></JobDetails></Private>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <Private><JobApply></JobApply></Private>,
            },
            {
                path : '/myApplication',
                element : <Private><MyApplication></MyApplication> </Private>
            }
        ]
    },
]);


export default router;