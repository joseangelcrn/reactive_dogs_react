import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>
    }
])


export default router;