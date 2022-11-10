import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import useTitle from "../Hooks/useTitle";
const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, price, quantity, rating } = useLoaderData();
  console.log(price);
  useTitle("Checkout");
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregister";
    const phone = form.phone.value;
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      phone,
      customer: name,
      email,
      message,
    };

    if (phone.length > 11 && phone.length < 11) {
      toast.error("Phone number should be 11 characters");
    } else {
      fetch("https://server-nafisamou.vercel.app/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("kitchen-token")}`,
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Successfully Received your message");
            form.reset();
          }
        })
        .catch((er) => console.error(er));
    }
  };

  return (
    <div className="py-5">
      <form onSubmit={handleReview}>
        <h2 className="text-2xl text-red-400 my-4 font-serif text-center pt-10">
          You are about to Review : {title}
        </h2>
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                {user?.photoURL ? (
                  <img
                    className="object-cover w-12 h-12 rounded-full"
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt="/"
                  />
                ) : (
                  <FaUser className="object-cover w-8 h-10 rounded-full"></FaUser>
                )}
              </div>
              <div>
                <h4 className="font-bold">{user?.displayName}</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">{rating}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              className="input input-bordered  w-full "
            />

            <input
              name="phone"
              required
              type="text"
              placeholder="Your Phone"
              className="input input-bordered  w-full "
            />
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              className="input input-bordered  w-full "
              defaultValue={user?.email}
              readOnly
            />
            <input
              name="price"
              type="number"
              placeholder="Price"
              defaultValue={price}
              className="input input-bordered  w-full "
            />
          </div>
          <div className="flex flex-col w-full">
            <textarea
              name="message"
              rows="3"
              required
              placeholder="Message..."
              className="p-4 rounded-md resize-none  textarea-bordered dark:text-gray-100 dark:bg-gray-900"
            ></textarea>

            <div className="">
              <button
                type="submit"
                className=" btn  my-8 w-full  btn-outline rounded-md bg-orange-800 text-white "
              >
                Submit
              </button>

              <Link
                to="/reviews"
                className="btn  w-full  btn-outline rounded-md bg-orange-800 text-white"
                type="submit"
              >
                {user?.email ? (
                  <>
                    <span className="  ">
                      <Link to="/reviews">Add Review</Link>
                    </span>
                  </>
                ) : (
                  <span className=" ">
                    <Link to="/login">
                      Please Login if you want to add a review.
                    </Link>
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
