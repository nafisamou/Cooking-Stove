import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const navigate = useNavigate();
  const handleServicePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const details = form.details.value;
    const img = form.img.value;
    // console.log(title, price, photoURL)
    const data = {
      title,
      price,
      details,
      img,
    };
    console.log(data);
    fetch("https://server-nafisamou.vercel.app/allServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User added successfully");
          navigate('/')
        }
      });
  };
  return (
    <div className=" w-6/12  px-6 py-16 rounded-md mx-auto ">
      <form
        onSubmit={handleServicePost}
        className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <input
            name="title"
            type="text"
            placeholder="title"
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
            required
          />
        </div>

        <div>
          <input
            name="price"
            type="text"
            placeholder="price"
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
            required
          />
        </div>
        <div>
          <input
            name="img"
            type="url"
            placeholder="image url only"
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
            required
          />
        </div>
        <div>
          <input
            name="details"
            type="text"
            placeholder="details"
            className="w-full rounded-md border focus:ring focus:ring-violet-400 border-gray-700 p-5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-6/12 py-2 mx-10 mt-11 font-semibold rounded bg-violet-400 text-gray-900"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
