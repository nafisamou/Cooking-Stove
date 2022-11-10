import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import ReviewDetails from "./ReviewDetails";

const Review = () => {
  useTitle("Review")
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
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

 /*  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((order) => order._id !== id);
          const approving = reviews.find((order) => order._id === id);
          approving.status = "Approved";
          const newReviews = [approving, ...remaining];
          navigate(`edit/${id}`)
          setReviews(newReviews);
        }
      });
  }; */

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(
        `http://localhost:5000/reviews/${id}`,
        {
          method: "DELETE",

          headers: {
            authorization: `Bearer ${localStorage.getItem("genius-token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
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
                  // handleStatusUpdate={handleStatusUpdate}
                ></ReviewDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
};

export default Review;