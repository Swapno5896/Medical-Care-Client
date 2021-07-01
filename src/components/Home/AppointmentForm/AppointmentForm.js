import React from "react";

const AppointmentForm = () => {
  return (
    <div className="col-md-6 ">
      <div
        style={{ backgroundColor: "gray", height: "450px" }}
        className="form-group row offset-md-3"
      >
        <div className="col-sm-12 col-md-6">
          <label>Choose Clinic</label>
          <input className="form-control" id="ex1" type="text" />
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Choose Doctor</label>
          <input className="form-control" id="ex2" type="text" />
        </div>
        <div className="col-sm-12 col-md-4">
          <label> Name</label>
          <input className="form-control" id="ex2" type="text" />
        </div>
        <div className="col-sm-12 col-md-4">
          <label>Email</label>
          <input className="form-control" id="ex2" type="text" />
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Choose Date </label>
          <input className="form-control" id="ex2" type="text" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
