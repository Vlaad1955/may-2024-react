import React from "react";
import {useAppSelector} from "../../mystore/store/myStore";
import ComPost from "../../components/compost/ComPost";

const ComPostPage = () =>{
    const posts = useAppSelector((state) => state.postSlice.posts);


    return(
        <div>
            {posts.map((post)=><ComPost key={post.id} post={post}/>)}
        </div>
    )
};

export default ComPostPage;