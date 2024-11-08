import React from "react";
import {UserModel} from "../../models/UserModel";

type UserProps = {
    user:UserModel
}

const User: React.FC<UserProps> = ({user}) =>{
    return(
        <div className="user-container">
            <div>
                <h1>{user.id}. {user.username}</h1>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    )
};

export default User