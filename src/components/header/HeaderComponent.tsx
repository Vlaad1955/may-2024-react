import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css"
import CommentsPage from "../../pages/commentsPage/CommentsPage";
const HeaderComponent = () =>{
    return(
        <header className="header-container">
                <h1><NavLink className="link2" to={`/`}>HW6</NavLink></h1>
                <ul className="social-links">
                    <li><NavLink className="link" to={`/user`}>Users</NavLink></li>
                    <li><NavLink className="link" to={`/post`}>Posts</NavLink></li>
                    <li><NavLink className="link" to={`/comment`}>Comments</NavLink></li>
                </ul>
        </header>
    )
}

export default HeaderComponent;