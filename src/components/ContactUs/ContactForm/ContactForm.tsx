import React from 'react';
import QuickContact from '../../Appointment/QuickContact/QuickContact';

const ContactForm = () => {
    return (
        <div className='row'>
            <h1>How Can We Help?</h1>
            <p>Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.

            </p>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6"><input type="text" placeholder='Name' /></div>
                    <div className="col-md-6"><input type="text" placeholder='Name' /></div>
                    <div className="col-md-6"><input type="text" placeholder='Name' /></div>
                    <div className="col-md-6"><input type="text" placeholder='Name' /></div>
                    <div className="col-md-12"><input type="text" placeholder='Name' /></div>
                </div>
            </div>
            <div className="col-md-4">
                <QuickContact></QuickContact>
            </div>

        </div>
    );
};

export default ContactForm;