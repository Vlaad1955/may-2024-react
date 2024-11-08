import BasePage from "../pages/basePage/BasePage";
import MainLayout from "../layouts/main/MainLayout";
import UsersPage from "../pages/usersPage/UsersPage";
import PostsPage from "../pages/postsPage/PostsPage";
import CommentsPage from "../pages/commentsPage/CommentsPage";
import ComPostPage from "../pages/comPostPage/ComPostPage";
import {createBrowserRouter} from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/user',
                element:<UsersPage/>,
            },
            {
                path:`/post`,
                element: <PostsPage/>
            },
            {
                path:`/comment`,
                element:<CommentsPage/>
            },
            {
                path:`/commentposts`,
                element:<ComPostPage/>
            },
            {
                element:<BasePage/>,
                index:true
            }
        ]
    },
]);

export default router;