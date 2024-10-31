import React from "react";
import {UsersRe} from "../../service/Users.service";
import {UserModel} from "../../model/UsersModel";

type UserProps ={
    user:UserModel,
}
const User:React.FC <UserProps> = ({user}) =>{

    return(
        <div className="main-container">
            <div className="user-card">
                <h1>{user.id}. {user.username}</h1>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    )
};

export default User;