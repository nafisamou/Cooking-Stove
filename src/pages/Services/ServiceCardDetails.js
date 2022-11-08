import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
const ServiceCardDetails = () => {
  const service = useLoaderData();
  const { _id, title, price, details, Items, thumbnail, rating } = service;
  return (
    <div>
      <div className="m-8">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className=" h-full image-full  rounded"
              src={thumbnail}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>

            <p>{details}</p>
            <p>
              <strong className="mr-1">Items:</strong>
              {Items}
            </p>

            <p className="">
              <strong className="mr-1">Price: </strong>
              <span className="text-red-500">$</span> {price}{" "}
            </p>

            <p className="flex ">
              <strong className=" font-bold">Ratings:</strong>{" "}
              <p className="flex items-center">
                {" "}
                <FaStar className="text-warning ml-2"></FaStar>{" "}
                <span className="ml-1">{rating}</span>
              </p>
            </p>
            <div className="card-actions justify-end">
              <Link to={`/checkout/${_id}`}>
                {" "}
                {/* <button className="btn btn-primary">
                Get Premium Access <FaLock className="ml-3"></FaLock>
              </button> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;
