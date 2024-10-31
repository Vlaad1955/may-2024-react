import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/main/MainLayouts";
import CommentsPage from "../pages/comments/CommentsPage";
import PostsPage from "../pages/posts/PostsPage";
import UsersPage from "../pages/users/UsersPage";
import WithPage from "../pages/with/WithPage";
import BasePage from "../pages/base/BasePage";


const router = createBrowserRouter([
    {
        path:`/`,
        element:<MainLayouts/>,
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
                path:`/with`,
                element:<WithPage/>
            },
            {
                element:<BasePage/>,
                index:true
            }
        ]
    }
]);

export default router;