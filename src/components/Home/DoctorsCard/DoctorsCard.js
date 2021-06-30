import React from "react";

const DoctorsCard = (props) => {
  const { img, name, speciality, discription } = props.doctor;
  return (
    <div className="card pe-4">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{speciality}</p>
        <p className="card-text">{discription}</p>
      </div>
    </div>
  );
};

export default DoctorsCard;
