import React, { FC } from "react";
import { ComentModel } from "../../model/ComentModel";
import "./Coment.css"

interface ComentProps {
    coment: ComentModel;
}

const Coment: FC<ComentProps> = ({ coment }) => {
    return (
        <div className="coment-container">
            <div className="coment-card">
                <h2>{coment.id}. {coment.name}</h2>
                <p>{coment.body}</p>
                <p><strong>Email:</strong> {coment.email}</p>
            </div>
        </div>
    );
};

export default Coment;