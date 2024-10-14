import React, {useEffect, useState} from "react";
import {ComentModel} from "../../model/ComentModel";
import {getComents} from "../../service/comments.service";
import Coment from "../../components/coment/Coment";
const CommentsPage = () =>{
   const [comets, setComents] = useState<ComentModel[]>([])
    useEffect(() => {
        getComents()
            .then((data) =>{
                setComents(data);
            })
    }, []);
    return(
        <div>
            {comets.map((coment)=><Coment key={coment.id} coment={coment}/>)}
        </div>
    )
};

export default CommentsPage;