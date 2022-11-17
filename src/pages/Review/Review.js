import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import ReviewDetails from "./ReviewDetails";

const Review = () => {
  useTitle("Review");
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://server-nafisamou.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("kitchen-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  const handleEdit = (id)=>{
    navigate(`/reviews/${id}`)
  }

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://server-nafisamou.vercel.app/reviews/${id}`, {
        method: "DELETE",

        headers: {
          authorization: `Bearer ${localStorage.getItem("kitchen-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-sans font-semibold text-red-500 py-3 mx-3">
        You have {reviews.length} reviews
      </h1>
      <div className="overflow-x-auto w-full my-5 py-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="">
            <tr>
              <th>Delete</th>
              <th>Profile</th>
              <th>Review & Price</th>
              <th>Email</th>
              <th>Message</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewDetails
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              ></ReviewDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Review;
