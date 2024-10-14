import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CommentsPage from "../pages/commentsPage/CommentsPage";
import PostsPage from "../pages/postsPage/PostsPage";
import UsersPage from "../pages/usersPage/UsersPage";
import BasePage from "../pages/basePage/BasePage";

const router = createBrowserRouter([
    {path:`/`,
        element: <MainLayout/>,
    children:[
    {
        path:`/comment`,
        element: <CommentsPage/>
    },
    {
        path:`/post`,
        element: <PostsPage/>
    },
    {
        path:`/user`,
        element:<UsersPage/>
    },
        {
            element:<BasePage/>,
            index:true
        }
]},
]);

export default router;