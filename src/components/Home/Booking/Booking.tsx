import React from 'react';
import './Booking.css'
const Booking = () => {
    return (<div className='booking-container'>
        <div className='booking-content' >
            <h1 className='text-center'>Book An Appointment</h1>
            <p className='text-center'>Please feel welcome to contact our friendly reception staff with any general or <br /> medical enquiry. Our doctors will receive or return any urgent calls.</p>
            <div className="row">
                <div className="col-md-6 ">

                    <div style={{ backgroundColor: 'gray', height: '450px' }} className="form-group row offset-md-3">
                        <div className="col-sm-12 col-md-6">
                            <label >Choose Clinic</label>
                            <input className="form-control" id="ex1" type="text" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label >Choose Doctor</label>
                            <input className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <label > Name</label>
                            <input className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <label >Email</label>
                            <input className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label >Choose Date </label>
                            <input className="form-control" id="ex2" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className='text-center'>Helping Patients From <br /> Around The Globe</h2>
                    <p>Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today.</p>
                    <hr />
                    <p>We provide a comprehensive range of plans for families and individuals at every stage of life, with annual limits ranging from £1.5m to unlimited.

                        Martin Qube, Medcity Manager</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Booking;