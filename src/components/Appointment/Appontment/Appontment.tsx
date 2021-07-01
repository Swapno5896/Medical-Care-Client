import React from 'react';
import QuickContact from './../QuickContact/QuickContact';
import AppointmentForm from '../../Home/AppointmentForm/AppointmentForm'
const Appontment = () => {
    return (
        <div className='booking-container'>
            <div className='booking-content' >
                <h1 className='text-center'>Book An Appointment</h1>
                <p className='text-center'>Please feel welcome to contact our friendly reception staff with any general or <br /> medical enquiry. Our doctors will receive or return any urgent calls.</p>
                <div className="d-flex justify-content-evenly">
                    <AppointmentForm />
                    <QuickContact />
                </div>
            </div>
        </div>
    );
};

export default Appontment;