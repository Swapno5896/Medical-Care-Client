import React from 'react';
import './ContactForm.css'
import QuickContact from './../../Appointment/QuickContact/QuickContact';
const ContactForm = () => {
    return (
        <div className='booking-container'>
            <div className='booking-content' >
                <h1 className='text-center'>How Can We Help?</h1>
                <p className='text-center'>Please feel welcome to contact our friendly reception staff with any general or <br /> medical enquiry. Our doctors will receive or return any urgent calls.</p>
                <div className="row">
                    <div className="col-md-6 ">
                        <div
                            style={{ backgroundColor: "gray", height: "514px" }}
                            className="form-group row offset-md-3 input-container"
                        >
                            <div className="col-sm-12 col-md-6">
                                <label> Name : </label>
                                <input
                                    className="form-control appontment-input"
                                    id="ex1"
                                    type="text"
                                    placeholder='Plase write your name'
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label> Email : </label>
                                <input
                                    className="form-control appontment-input"
                                    id="ex2"
                                    type="text"
                                    placeholder='Plase write your emil'
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label> Phone : </label>
                                <input
                                    className="form-control appontment-input"
                                    id="ex2"
                                    type="text"
                                    placeholder='Plase write Phone number'
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label>Sub : </label>
                                <input
                                    className="form-control appontment-input"
                                    id="ex2"
                                    type="text"
                                    placeholder='Plase write  Sub'

                                />
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <label>Choose Date :  </label>
                                <textarea className='contact-text-area' placeholder='Plase write  your message' name="" id="" cols={30} rows={10}></textarea>
                            </div>
                            <button className="book-appointment-btn">Submit Request </button>
                        </div>
                    </div>
                    <div className="col-md-6 quick-contact-section">
                        <QuickContact />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;