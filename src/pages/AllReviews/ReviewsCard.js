import React from 'react';

const ReviewsCard = ({review}) => {
    const{phone, message, customer} = review;
    
    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export default ReviewsCard;