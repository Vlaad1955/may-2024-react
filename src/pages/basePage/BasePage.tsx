import React from "react";
import "./BasePage.css";
import { NavLink } from "react-router-dom";
const BasePage = () => {
    return (
            <div className="overlay">
                <div className="content">
                    <h1>Welcome to My App</h1>
                    <p>Explore the amazing features we offer</p>
                    <NavLink className="start-button" to={`/user`}>User</NavLink>
                </div>
            </div>
    );
};

export default BasePage;