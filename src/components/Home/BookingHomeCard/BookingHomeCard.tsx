import React from "react";
import "./BookingHomeCard.css";
const BookingHomeCard = () => {
  return (
    <div className="col-md-6 appointment-side-container">
      <h2 className="text-center">
        Helping Patients From <br /> Around The Globe
      </h2>
      <p className='p-3 '>
        Our staff strives to make each interaction with patients clear, concise,
        and inviting. Support the important work of Medicsh Hospital by making a
        much-needed donation today.
      </p>
      <hr />
      <p className='p-3'>
        We provide a comprehensive range of plans for families and individuals
        at every stage of life, with annual limits ranging from £1.5m to
        unlimited. Martin Qube, Medcity Manager
      </p>
    </div>
  );
};

export default BookingHomeCard;
