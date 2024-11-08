import {CommentModel} from "../../models/CommentModel";
import React from "react";


type CommentProps = {
    comment:CommentModel
};

const Comment:React.FC<CommentProps> = ({comment}) =>{
    return(
        <div className="coment-container">
            <div className="coment-card">
                <p>{comment.id}. {comment.body}</p>
            </div>
        </div>
    )
};

export default Comment;