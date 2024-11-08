import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../mystore/store/myStore";
import {postSliceAction} from "../../mystore/slice/PostSlice";
import Post from "../../components/post/Post"

const PostsPage = () =>{

    const Dispatch = useAppDispatch();
    const posts = useAppSelector((state)=> state.postSlice.posts);

    useEffect(() => {
        Dispatch(postSliceAction.loadPosts());
    }, [Dispatch]);


    return(
        <>
            {posts.map((post)=><Post key={post.id} post={post}/>)}
        </>
    )
};

export default PostsPage;