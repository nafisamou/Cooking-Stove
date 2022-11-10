import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Edit = () => {
  const update = useLoaderData();
  // const { user } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // const email = form.email.value;
    const feedback = form.feedback.value;
    // const image = form.image.value;

    const data = {
      feedback,
      //  email,
      // image,
      name,
    };
    console.log(data)

    fetch(`http://localhost:5000/reviewss/${update._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Update Successfully");
          // navigate("/review");
        }
      }); 
  };

  return (
    <div className="py-32 px-10 min-h-screen w-full">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleUpdate}>
          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              // defaultValue={product?.name}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Review
            </label>
            <input
              type="text"
              name="feedback"
              placeholder="Review"
              // defaultValue={product?.review}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-10">
           {/*  <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="url"
              // defaultValue={product?.image}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            /> */}
            {/* <img src={product?.image} className="w-20" alt="" /> */}
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-blue-400 text-white font-bold">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
