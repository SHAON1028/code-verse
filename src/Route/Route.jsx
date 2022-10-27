import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../component/Details/CourseDetails";
import ErrorPage from "../component/Error/ErrorPage";
import Blog from "../component/Pages/Blog/Blog";
import Courses from "../component/Pages/Courses/Courses";
import FAQ from "../component/Pages/FAQ/FAQ";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import Register from "../component/Pages/Register/Register";


import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
                element:<Courses></Courses>,
                loader:()=>fetch('http://localhost:5000/courses')
              
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
              
            },
            {
                path:'/blog',
                element:<PrivateRoute>
                    <Blog></Blog>
                </PrivateRoute>
              
            },
            {
                path:'/login',
                element:<Login></Login>
              
            },
            {
                path:'/register',
                element:<Register></Register>
              
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
              
            },
        ]


    }
])

export default router;