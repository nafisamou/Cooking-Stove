import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
const ServiceAll = ({ service }) => {
  const { img, price, title, _id, details } = service;
  return (
    <div>
      <div className="">
        <div className="card card-compact w-96  bg-base-100 shadow-xl h-[700px]">
          <figure className="rounded-lg">
            {/* <img className="img-h rounded-lg" src={img} alt="Shoes" /> */}
            <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <PhotoView src={img}>
              <img
                src={img}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 cursor: zoom-in"
              />
            </PhotoView>
          </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{title}</h2>
            <p>
              {details}
            </p>
            <p className="font-semibold text-orange-500 text-2xl">
              Price: ${price}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/services/${_id}`}>
                <button className="text-orange-400 hover:text-orange-600 btn btn-ghost">
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
    </div>
  );
};

export default ServiceAll;
