import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slice/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "../slice/PostSlice";
import {comentSlice} from "../slice/CommentSlice";


export let store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: comentSlice.reducer
    }
});

export let useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export let useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();