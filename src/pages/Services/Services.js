import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://server-nafisamou.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className=" px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mx-auto ">
      <div className=" py-6 text-center">
      
        <h2 className="text-5xl  services-h py-5">Our Service </h2>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3  py-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center py-6">
        {" "}
        <Link to={`/services`}>
          {" "}
          <button className="btn btn-outline border-orange-400 text-orange-400 hover:text-white-800 hover:bg-orange-500">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
