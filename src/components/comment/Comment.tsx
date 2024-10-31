import React from "react";
import {ComentsModel} from "../../model/CommentsModel";

type CommentProps = {
    comment:ComentsModel
}
const Coment:React.FC<CommentProps> = ({ comment }) => {
    return (
        <div className="coment-container">
            <div className="coment-card">
                <p>{comment.id}. {comment.body}</p>
            </div>
        </div>
    );
};

export default Coment;