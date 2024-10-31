import React from "react";
import {PostModel} from "../../model/PostsModel";

type PostProps={
    post:PostModel;
}
const Post:React.FC<PostProps> = ({post}) =>{

    return(
        <div className="post-container">
            <div className="post-card">
                <h1>{post.id}. {post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
};

export default Post;