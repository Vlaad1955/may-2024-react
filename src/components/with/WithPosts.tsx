import React, { FC } from "react";
import useStore from "../../store/MyStore";
import { ComentsModel } from "../../model/CommentsModel";

type WithProps = {
    comment: ComentsModel;
};

const WithPost: FC<WithProps> = ({ comment }) => {
    const { postSlice: { posts } } = useStore();

    const post = posts.find(post => post.id === comment.postId);

    return (
        <div className="post-container">
            <h2>Comment:</h2>
            <div className="comment">
                <p>{comment.body}</p>
            </div>
            {post ? (
                <>
                    <h3>Post {post.id}</h3>
                    <p>{post.body}</p>
                </>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
};

export default WithPost;