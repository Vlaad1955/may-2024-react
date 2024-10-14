import React, {FC} from "react";
import {UserModel} from "../../model/UserModel";
import "./User.css"

interface UserProps {
    user:UserModel;
}
const User:FC<UserProps> = ({user}) =>{
    return(
        <div className="main-container">
            <div className="user-card">
                <h1>{user.name}</h1>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            </div>
        </div>
    )
};

export default User;