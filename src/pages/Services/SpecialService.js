import React, { useEffect, useState } from "react";
import SpecialServiceCard from "./SpecialServiceCard";

const SpecialService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/specialServicesAll")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="">
        <div className="">
          <div className="mx-auto  my-5 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 text-center">
              Discover Our Team
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mx-auto">
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg  ">
              {services.map((service) => (
                <SpecialServiceCard
                  key={service._id}
                  service={service}
                ></SpecialServiceCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialService;