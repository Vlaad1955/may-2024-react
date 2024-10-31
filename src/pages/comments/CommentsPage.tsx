import React, {useEffect, useState} from "react";
import {ComentsModel} from "../../model/CommentsModel";
import {getComments} from "../../service/Comments.service";
import Comment from "../../components/comment/Comment";
import useStore from "../../store/MyStore";


const CommentsPage = () =>{
    const [comments, setComments] = useState<ComentsModel[]>([]);
    let {commentsSlice:{loadComment}} = useStore();

    useEffect(() => {
        getComments()
            .then((data) =>{
                setComments(data);
                loadComment(data);
            })
    }, []);


    return(
        <div>
            {comments.map((comment)=><Comment key={comment.id} comment={comment} />)}
        </div>
    )
};

export default CommentsPage;