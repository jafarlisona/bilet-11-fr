import React, { useEffect, useState } from "react";
import BestServicesCard from "./BestServicesCard";

function BestServicesCards() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="best-services">
      <div className="best-services-container">
        <div className="title-best">
          <div className="tittle">
            <span className="tittle-line"></span>
            <p>OUR TOP SERVICES</p>
          </div>
          <h1>Our Best Services</h1>
        </div>
        <div className="cards">
          {services.map((x) => (
            <BestServicesCard
              key={x._id}
              title={x.title}
              description={x.description}
              icon={x.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestServicesCards;
