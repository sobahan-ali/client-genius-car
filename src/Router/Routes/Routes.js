import LoginLayout from "../../layout/LoginLayout";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";

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
        ],

    },

    {
        path: '/login',
        element: <LoginLayout></LoginLayout>
    }
])

export default router;