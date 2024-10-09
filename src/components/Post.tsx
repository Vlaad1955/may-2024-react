import {FC} from "react";
import {PostModel} from "../models/PostModel";
import user from "./User";

interface PostModelID{
    post:PostModel;
}
const Post:FC<PostModelID> =({post}) =>{
    return(
        <div>
            <h2>{post.title} {post.id}</h2>
            <p>{post.body}</p>
            <p>Reactions:</p>
            <p>likes - {post.reactions.likes}</p>
            <p>dislikes - {post.reactions.dislikes}</p>
        </div>
    )
}

export default Post;