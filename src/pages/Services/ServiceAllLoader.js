import React, { useEffect, useState } from "react";
import ServiceAll from "./ServiceAll";

const ServiceAllLoader = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://server-nafisamou.vercel.app/servicesAll")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="  ">
        <div className="text-center py-6">
          <p className="text-orange-400 text-4xl font-semibold py-2   ">
            Service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-10">
          {services.map((service) => (
            <ServiceAll key={service._id} service={service}></ServiceAll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAllLoader;
