import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/Error/ErrorPage";

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
              
            }
        ]


    }
])

export default router;