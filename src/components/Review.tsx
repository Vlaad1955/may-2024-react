import React, { FC } from "react";

interface ReviewProps {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

const Review: FC<ReviewProps> = ({ rating, comment, date, reviewerName, reviewerEmail }) => {
    return (
        <div className="Review">
            <h2>Rating: {rating}</h2>
            <p><strong>Comment:</strong> {comment}</p>
            <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
            <p><strong>Reviewer:</strong> {reviewerName} (<em>{reviewerEmail}</em>)</p>
        </div>
    );
};

export default Review;