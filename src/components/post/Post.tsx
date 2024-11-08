import React from "react";
import {PostModel} from "../../models/PostModel";

type PostProps = {
    post:PostModel
};
const Post: React.FC<PostProps> = ({post}) =>{

    return(
        <div className="post-container">
            <div>
                <h1>{post.id}. {post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
};

export default Post;