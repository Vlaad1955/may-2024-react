import React, {useEffect, useState} from "react";
import {UserModel} from "../../model/UsersModel";
import {getUsers} from "../../service/Users.service";
import User from "../../components/user/User";


const UsersPage = () =>{
  const [users, setUser] = useState<UserModel[]>([]);

    useEffect(() => {
        getUsers()
            .then((data) =>{
                setUser(data);
            })
    }, []);

    return(
        <div>
            {users.map((user) =><User key={user.id} user={user}/>)}
        </div>
    )
};

export default UsersPage;