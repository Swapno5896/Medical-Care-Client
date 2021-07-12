import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./AppointmentForm.css";
const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({ name: '', email: '', number: '', date: new Date() });
  const [btnDisable, setBtnDisable] = useState(false)
  const handleBlue = (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {

    setAppointment({
      ...appointment, [e.target.name]: e.target.value
    })
  }


  const handleSubmit = () => {
    // fetch(`https://salty-inlet-50152.herokuapp.com/addAppointment`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(appointment)
    // }).then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
    console.log(appointment)
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

          <select onChange={handleBlue} name="clinic" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="col-sm-12 col-md-6">
          <select onChange={handleBlue} name="doctor" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

        </div>
        <div className="col-sm-12 col-md-6">
          <label>Choose Date : </label>
          <DatePicker selected={appointment.date} onChange={(date: Date) => {
            setAppointment({
              ...appointment, date: date
            })
          }} />
        </div>
        <button disabled={btnDisable} onClick={handleSubmit} className="book-appointment-btn">Book Appointment </button>
        {btnDisable ?
          (<div className="spinner-border btn-side-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>) : null
        }
      </div>
    </div>
  );
};

export default AppointmentForm;
