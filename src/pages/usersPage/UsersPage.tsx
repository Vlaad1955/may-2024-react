import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../mystore/store/myStore";
import { userSliceActions } from "../../mystore/slice/UserSlice";
import { UserModel } from "../../models/UserModel";
import User from "../../components/user/User";


const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userSlice.users);

    useEffect(() => {
        dispatch(userSliceActions.loadUser());
    }, [dispatch]);

    return (
        <>
            {users.map((user: UserModel) => (
                <User key={user.id} user={user} />
            ))}
        </>
    );
};

export default UsersPage;