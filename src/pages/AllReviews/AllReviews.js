import React, { useContext, useEffect, useState } from "react";

import ReviewsCard from "./ReviewsCard";

const AllReviews = ({ id }) => {
             
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://server-nafisamou.vercel.app/allReview?service=${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);
  return (
    <div className="py-5">
      <h1 className="text-center text-orange-600 font-sans text-2xl font-semibold">Here You Can See All Reviews</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-10 mx-10">
    {reviews.map((review) => (
        <ReviewsCard key={id} review={review}></ReviewsCard>
      ))}
    </div>
    </div>
  );
};

export default AllReviews;
