import React, { FC } from "react";
import { PostModel } from "../../model/PostModel";
import "./Post.css"

interface PostProps {
    post: PostModel;
}

const Post: FC<PostProps> = ({ post }) => {
    return (
        <div className="post-container">
            <div className="post-card">
                <h1>{post.id}. {post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default Post;