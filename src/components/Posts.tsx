import {FC, useEffect, useState} from "react";
import {PostModel} from "../models/PostModel";
import Post from "./Post";
interface PostModelID{
    posts:PostModel[];
}
const Posts:FC<PostModelID> = ({posts}) =>{

    return(
        <div>
            {posts.map((post) => (<Post key={post.id} post={post}/>))}
        </div>
    )
};

export default Posts;