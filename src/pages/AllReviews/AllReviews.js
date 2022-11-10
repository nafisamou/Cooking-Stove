import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const AllReviews = ({id}) => {
    const [reviews, setReviews] = useState([])
useEffect(() => {
    fetch(`http://localhost:5000/allReview?service=${id}`)
  
        .then(res => res.json())
        .then(data => setReviews(data))
        
}, [id])
    return (
        <div>
            <h1>{reviews.length}</h1>
            {
                reviews.map( review=>
                <ReviewsCard 
               key={id}
               review={review}
                >
                
                </ReviewsCard>)
            }
        </div>
    );
};

export default AllReviews;