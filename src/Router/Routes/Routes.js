import LoginLayout from "../../layout/LoginLayout";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ],

    },

    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [

        ]
    }
])

export default router;