import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../mystore/store/myStore";
import {commentSliceAction} from "../../mystore/slice/CommentSlice";
import Comment from "../../components/comment/Comment";

const CommentsPage = () =>{
    const Dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentSlice.comments);

    useEffect(() => {
        Dispatch(commentSliceAction.loadComments());
    }, [Dispatch]);

    return(
        <div>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
};

export default CommentsPage;