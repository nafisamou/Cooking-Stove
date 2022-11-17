import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import img1 from "../../../assets/banner/img-1.jpg";
import img2 from "../../../assets/banner/img-2.jpg";
import img3 from "../../../assets/banner/img-3.jpg";
import img4 from "../../../assets/banner/img-4.jpg";
import img5 from "../../../assets/banner/img-5.jpg";
import img6 from "../../../assets/banner/img-6.jpg";

const Banner = () => {
  return (
    <div className="my-16">
      <div className="relative flex items-center justify-center w-full dark:text-gray-50">
        <button
          aria-label="Slide back"
          type="button"
          className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
           
            <PhotoProvider>
              <PhotoView src={img1}>
                <img
                  src={img1}
                  alt=""
                  className="block  object-center w-full rounded-md h-96  cursor: zoom-in object-cover aspect-square dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            
            <PhotoProvider>
              <PhotoView src={img2}>
                <img
                  src={img2}
                  alt=""
                  className="block  object-center w-full rounded-md h-96  cursor: zoom-in object-cover aspect-square dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/* <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src={img3}
              alt="Img-3"
            /> */}
            <PhotoProvider>
              <PhotoView src={img3}>
                <img
                  src={img3}
                  alt=""
                  className="block  object-center w-full rounded-md h-96  cursor: zoom-in object-cover aspect-square dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/* <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src={img4}
              alt="Img-4"
            /> */}
            <PhotoProvider>
              <PhotoView src={img4}>
                <img
                  src={img4}
                  alt=""
                  className="block  object-center w-full rounded-md h-96  cursor: zoom-in object-cover aspect-square dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/* <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src={img5}
              alt="Img-5"
            /> */}
            <PhotoProvider>
              <PhotoView src={img5}>
                <img
                  src={img5}
                  alt=""
                  className="block  object-center w-full rounded-md h-96  cursor: zoom-in object-cover aspect-square dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/* <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src={img6}
              alt="Img-6"
            /> */}
            <PhotoProvider>
              <PhotoView src={img6}>
                <img
                  src={img6}
                  alt=""
                  className="block  object-center w-full rounded-md h-96  cursor: zoom-in object-cover aspect-square dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
        <button
          aria-label="Slide forward"
          id="next"
          className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
