import {PostModel} from "../../models/PostModel";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../mystore/store/myStore";
import {commentSliceAction} from "../../mystore/slice/CommentSlice";


type ComPostProps = {
    post:PostModel
};

const ComPost: React.FC<ComPostProps> = ({post}) =>{

    const dispatch = useAppDispatch();
    const commentsForfiltr = useAppSelector((state) => state.commentSlice.commentsForfiltr);

    useEffect(() => {
        dispatch(commentSliceAction.filterCommentsByPostId(post.id));
    }, [dispatch]);

    return(
        <div>
            <h1>{post.id} {post.title}</h1>
            {commentsForfiltr.map((comment)=><div>{comment.id} {comment.body}</div>)}
        </div>
    )
};

export default ComPost;