import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReviewDetails = ({ review, handleDelete, handleEdit }) => {
  const {
    serviceName,
    customer,
    price,
    email,
    message,
    phone,
    service,
    _id

    // img
  } = review;
  const [reviewDetails, setReviewDetails] = useState({});
  useEffect(() => {
    fetch(`https://server-nafisamou.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewDetails(data));
  }, [service]);
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline hover:bg-red-500 hover:border-white  font-bold "
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-16 h-16">
              {reviewDetails?.img && (
                <img
                  src={reviewDetails.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <td>
        <span className="">{message}</span>
      </td>
      <td>
        <Link
          to={`/edit/${_id}`}
          onClick={() => handleEdit(_id)}
          className="btn  bg-red-500 text-white btn-xs"
        >
          {/* {status ? status : "Pending"} */}
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default ReviewDetails;
