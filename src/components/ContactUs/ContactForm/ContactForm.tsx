import React, { useState } from 'react';
import './ContactForm.css'
import QuickContact from './../../Appointment/QuickContact/QuickContact';
const ContactForm = () => {
    const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', sub: '', message: '' });
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setContactInfo({
            ...contactInfo, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        fetch(`http://localhost:9000/addContact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        console.log(contactInfo)
    }
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
                                    onBlur={handleBlur}
                                    name='name'
                                    className="form-control appontment-input"
                                    id="ex1"
                                    type="text"
                                    placeholder='Plase write your name'
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label> Email : </label>
                                <input
                                    onBlur={handleBlur}
                                    name='email'
                                    className="form-control appontment-input"
                                    id="ex2"
                                    type="text"
                                    placeholder='Plase write your emil'
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label> Phone : </label>
                                <input
                                    onBlur={handleBlur}
                                    name='phone'
                                    className="form-control appontment-input"
                                    id="ex2"
                                    type="text"
                                    placeholder='Plase write Phone number'
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label>Sub : </label>
                                <input
                                    onBlur={handleBlur}
                                    name='sub'
                                    className="form-control appontment-input"
                                    id="ex2"
                                    type="text"
                                    placeholder='Plase write  Sub'

                                />
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <label>Enter Your Message  :  </label>
                                <textarea onBlur={e => console.log(e)} ng-model='' name='message' className='contact-text-area' placeholder='Plase write  your message' id="" cols={30} rows={10}></textarea>
                            </div>
                            <button onClick={handleSubmit} className="book-appointment-btn">Submit Request </button>
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