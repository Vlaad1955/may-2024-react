import {PostModel} from "../../models/PostModel";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../mystore/store/myStore";
import {commentSliceAction} from "../../mystore/slice/CommentSlice";


type ComPostProps = {
    post:PostModel
};

const ComPost: React.FC<ComPostProps> = ({post}) =>{

    const dispatch = useAppDispatch();
    const commentsForPost = useAppSelector(
        (state) => state.commentSlice.commentsForfiltr[post.id] || []
    );

    useEffect(() => {
        dispatch(commentSliceAction.filterCommentsByPostId(post.id));
    }, [dispatch, post.id]);

    return(
        <div>
            <h1>{post.id} {post.title}</h1>
            {commentsForPost.map((comment)=><div>{comment.id} {comment.body}</div>)}
        </div>
    )
};

export default ComPost;