import React from "react";
import useStore from "../../store/MyStore";
import WithPost from "../../components/with/WithPosts";


const WithPage = () =>{

    let { commentsSlice:{comments}} = useStore();

    return(
        <div>
            {comments.map((coment) => <WithPost key={coment.id} comment={coment} />)}
        </div>
    )
};

export default WithPage;