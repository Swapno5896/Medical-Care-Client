import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import BookingHomeCard from '../BookingHomeCard/BookingHomeCard';
import './Booking.css'
const Booking = () => {
    return (<div className='booking-container'>
        <div className='booking-content' >
            <h1 className='text-center'>Book An Appointment</h1>
            <p className='text-center'>Please feel welcome to contact our friendly reception staff with any general or <br /> medical enquiry. Our doctors will receive or return any urgent calls.</p>
            <div className="row">
                <AppointmentForm />
                <BookingHomeCard />
            </div>
        </div>
    </div>
    );
};

export default Booking;