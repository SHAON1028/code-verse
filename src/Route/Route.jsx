import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/Error/ErrorPage";
import Blog from "../component/Pages/Blog/Blog";
import Courses from "../component/Pages/Courses/Courses";
import FAQ from "../component/Pages/FAQ/FAQ";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import Register from "../component/Pages/Register/Register";


import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
              
            },
            {
                path:'/home',
                element:<Home></Home>
              
            },
            {
                path:'/courses',
                element:<Courses></Courses>
              
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
              
            },
            {
                path:'/blog',
                element:<Blog></Blog>
              
            },
            {
                path:'/login',
                element:<Login></Login>
              
            },
            {
                path:'/register',
                element:<Register></Register>
              
            },
        ]


    }
])

export default router;