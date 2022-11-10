import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Edit = () => {
 const review = useLoaderData();
    // console.log(review);
  const {user} = useContext(AuthContext)

     
 const handleUpdate = (e) => {
  e.preventDefault()
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
 
  const data = {
   message, 
   email,
    name
  }
  console.log(data);

   fetch(`http://localhost:5000/reviews/${review._id}`, {
  method: "PUT",
  headers: {
      "content-type": "application/json",
  },
  body: JSON.stringify(data),
  })
  .then(res => res.json())
      .then(data => {
          if (data.acknowledged) {
              toast.success("Review Update Successfully");
              // navigate("/review");
          }
      }); 
}
  



  // defaultValue={review?.name}
//  defaultValue={review?.message}
  return (
      <div className='w-6/12  px-6 py-16 rounded-md'>
          {/* <h2>this is route{review.serviceName}</h2> */}
          <form onSubmit={handleUpdate} className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid">
      <div>
        <input  name="name" type="text" placeholder="First Name"  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" />
      </div>
              <div>
                  <input  name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" readOnly />
              </div>
              <div>
                  <textarea name="message" type="text" placeholder="Your message" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 p-5" required />
              </div>
      
              
      <button type="submit" className="w-6/12 py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
              
          </form>
      </div>
  );
};

export default Edit;
