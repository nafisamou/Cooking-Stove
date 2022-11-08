import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { img, price, title, _id, details } = service;
  // console.log(service)
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
        <figure className="rounded-lg">
          <img className="img-h rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p>
            {details.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}{" "}
                <Link to={`/services/${_id}`}>
                  <span className="text-blue-500">Read More...</span>
                </Link>{" "}
              </>
            ) : (
              <>{details}</>
            )}
          </p>
          <p className="font-semibold text-orange-500 text-2xl">
            Price: ${price}
          </p>
          <div className="card-actions justify-end">
           <Link to = {`/services/${_id}`}>
           <button className="text-orange-400 hover:text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
           </Link>
          </div>
          
        </div>
      </div>
    
    </div>

  );
};

export default ServiceCard;
