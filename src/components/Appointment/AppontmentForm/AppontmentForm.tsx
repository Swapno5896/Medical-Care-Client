import React from 'react';

const AppontmentForm = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <h1>Book An Appointment</h1>

                    <p>Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <input placeholder='Choose' type="text" />

                        </div>
                        <div className="col-md-6">
                            <input placeholder='Choose' type="text" />

                        </div>
                        <div className="col-md-6"><input placeholder='Choose' type="text" />
                        </div>
                        <div className="col-md-6"><input placeholder='Choose' type="text" />
                        </div>
                        <div className="col-md-4"><input placeholder='Choose' type="text" />
                        </div>
                        <div className="col-md-4"><input placeholder='Choose' type="text" />
                        </div>
                        <div className="col-md-4"><input placeholder='Choose' type="text" />
                        </div>
                        <button>Book Appointment</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: "19rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Quick Contacts</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Quick Contacts
                                Please feel free to contact our friendly staff with any medical enquiry.</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <p>Mon - Fri: 8:00 am - 7:00 pm</p><p>Location: Brooklyn, New York</p><p>
                                Emergency Line: (002) 01061245741</p>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppontmentForm;