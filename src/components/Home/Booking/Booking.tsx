import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import BookingHomeCard from '../BookingHomeCard/BookingHomeCard';
import './Booking.css'
const Booking = () => {
    return (<div className='booking-container'>
        <div className='booking-content' >
            <h1 className='text-center pb-3'>Book An Appointment</h1>
            <p className='text-center pb-2 mb-4'>Please feel welcome to contact our friendly reception staff with any general or <br /> medical enquiry. Our doctors will receive or return any urgent calls.</p>
            <div className="row">
                <AppointmentForm />
                <BookingHomeCard />
            </div>
        </div>
    </div>
    );
};

export default Booking;