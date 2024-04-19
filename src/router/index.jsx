import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import CrudDog from "../components/CrudDog";
import NotFound from "../components/NotFound";
import InfiniteScroll from "../components/InfiniteScroll";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/adopt_dog',
                element:<CrudDog/>
            },
            {
                path:'/infinite_scroll',
                element:<InfiniteScroll/>
            }
        ]
    }
])


export default router;