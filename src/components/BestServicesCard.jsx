import React from "react";

function BestServicesCard({ icon, title, description }) {
  return (
    <div className="card">
      <div className="hover">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}

export default BestServicesCard;
