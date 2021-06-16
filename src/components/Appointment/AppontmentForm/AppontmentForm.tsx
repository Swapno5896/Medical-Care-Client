import React from 'react';
import QuickContact from '../QuickContact/QuickContact';

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
                    <QuickContact></QuickContact>
                </div>
            </div>
        </div>
    );
};

export default AppontmentForm;