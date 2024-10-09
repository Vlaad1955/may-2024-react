import {FC, useEffect, useState} from "react";
import {UserModel} from "../models/UserModel";
import {getUsers} from "../service/user.service";
import User from "./User";

type IUsersProps = {
    lift: (user:UserModel) => void
}
const Users:FC<IUsersProps> = ({lift}) => {
   const [users, setUsers] = useState<UserModel[]>([])
    useEffect(() => {
        getUsers()
            .then((data) =>{
                setUsers(data)
            })
    }, []);
   return(
       <div>
           {users.map((user) => (<User key={user.id} user={user} lift={lift}/>))}
       </div>
   );

}

export default Users;