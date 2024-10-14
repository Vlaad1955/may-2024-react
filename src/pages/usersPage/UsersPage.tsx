import React, {useEffect, useState} from "react";
import {UserModel} from "../../model/UserModel";
import {getUsers} from "../../service/users.service";
import User from "../../components/user/User";
const UsersPage = () =>{
 const [users, setUsers] = useState<UserModel[]>([]);
    useEffect(() => {
        getUsers()
            .then((data) =>{
                setUsers(data);
            })
    }, []);
    return(
        <div>
            {users.map((user)=><User key={user.id} user={user}/>)};
        </div>
    )
};

export default UsersPage;