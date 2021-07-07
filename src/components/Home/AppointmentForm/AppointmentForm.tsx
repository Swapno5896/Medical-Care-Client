import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./AppointmentForm.css";
const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({ name: '', email: '', number: '', date: new Date() });


  const handleBlue = (e: React.FocusEvent<HTMLInputElement>) => {

    setAppointment({
      ...appointment, [e.target.name]: e.target.value
    })
  }
  const handelDropdown = (e: React.FormEvent<HTMLUListElement>) => {
    console.log(e);
    e.preventDefault()
    console.log('so');
  }
  const handleSubmit = () => {

    console.log(appointment);
  }


  return (
    <div className="col-md-6 ">
      <div
        style={{ backgroundColor: "gray", height: "514px" }}
        className="form-group row offset-md-3 input-container"
      >

        <div className="col-sm-12 col-md-4">
          <label> Name : </label>
          <input
            onBlur={handleBlue}
            className="form-control appontment-input"
            id="ex2"
            type="text"
            name='name'
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <label>Email : </label>
          <input
            onBlur={handleBlue}
            className="form-control appontment-input"
            id="ex2"
            type="text"
            name='email'
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <label>Number : </label>
          <input
            onBlur={handleBlue}
            className="form-control appontment-input"
            id="ex2"
            type="text"
            name='number'
          />
        </div>
        <div className="col-sm-12 col-md-6">

          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Clinic
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" onChange={handelDropdown}>
              <li><a className="dropdown-item" href="#">Dr smeeth</a></li>
              <li><a className="dropdown-item" href="#"> Dr joe</a></li>
              <li><a className="dropdown-item" href="#"> Dr herey</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Doctor
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Dr smeeth</a></li>
              <li><a className="dropdown-item" href="#"> Dr joe</a></li>
              <li><a className="dropdown-item" href="#"> Dr herey</a></li>
            </ul>
          </div>

        </div>
        <div className="col-sm-12 col-md-6">
          <label>Choose Date : </label>
          <DatePicker selected={appointment.date} onChange={(date: Date) => {
            setAppointment({
              ...appointment, date: date
            })
          }} />
        </div>
        <button onClick={handleSubmit} className="book-appointment-btn">Book Appointment </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
