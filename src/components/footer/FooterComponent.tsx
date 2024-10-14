import React from "react";
import {NavLink} from "react-router-dom";
import "./FooterComponent.css";
const FooterComponent = () =>{
    return(
        <div className="footer-container">
            <p>&copy; 2024 Мій Сайт. Всі права захищені.</p>
            <ul className="social-links">
                <li>  <a href="#"  rel="Facebook">
                    Facebook
                </a> </li>
                    <li> <a href="#" rel="Twitter">Twitter</a> </li>
                        <li> <a href="#"  rel="Instagram">Instagram</a> </li>
            </ul>
        </div>
    )
};

export default FooterComponent;