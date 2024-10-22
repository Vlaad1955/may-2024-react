import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter([
    {
        path:`/`,
        element:<MainLayout/>
    }
]);

export default router;

