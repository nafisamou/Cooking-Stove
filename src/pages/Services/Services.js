import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";


const Services = () => {
  
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="  ">
      <div className="text-center py-6">
        {/* <p className="text-orange-400 text-2xl py-2  service-t ">Service</p> */}
        <h2 className="text-5xl font-semibold services-h">Our Service </h2>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center py-6">
        {" "}
       <Link to={`/services`}> <button className="btn btn-outline border-orange-400 text-orange-400 hover:text-white-800 hover:bg-orange-500">
         See More
        </button></Link>
      </div>
    </div>
  );
};

export default Services;
