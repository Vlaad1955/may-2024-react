import {Outlet} from "react-router-dom";
import React from "react";
import HeaderComponent from "../../components/header/HeaderComponent";

const MainLayouts = () =>{
    return(
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    )
};

export default MainLayouts;