import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import CrudDog from "../components/CrudDog";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:'/adopt_dog',
                element:<CrudDog/>
            }
        ]
    }
])


export default router;