import React from "react";
import "./AppointmentForm.css";
const AppointmentForm = () => {
  return (
    <div className="col-md-6 ">
      <div
        style={{ backgroundColor: "gray", height: "514px" }}
        className="form-group row offset-md-3 input-container"
      >
        <div className="col-sm-12 col-md-6">
          <label>Choose Clinic</label>
          <input
            className="form-control appontment-input"
            id="ex1"
            type="text"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Choose Doctor</label>
          <input
            className="form-control appontment-input"
            id="ex2"
            type="text"
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <label> Name</label>
          <input
            className="form-control appontment-input"
            id="ex2"
            type="text"
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <label>Email</label>
          <input
            className="form-control appontment-input"
            id="ex2"
            type="text"
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <label>Number :</label>
          <input
            className="form-control appontment-input"
            id="ex2"
            type="text"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Choose Date </label>
          <input
            className="form-control appontment-input"
            id="ex2"
            type="text"
          />
        </div>
        <button className="book-appointment-btn">Book Appointment </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
