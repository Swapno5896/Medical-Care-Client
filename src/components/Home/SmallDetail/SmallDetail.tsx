import React from 'react';
import './SmallDetail.scss'
import img1 from '../../../images/c-2.png'
const SmallDetail = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-75'>
                <div className="card-group ">
                    <div className="card small-detail-card cart-1">
                        <h5 className="card-title text-center">
                            Emergency Cases</h5>
                        <div className="card-body">

                            <p className="card-text">Please feel free to contact our friendly reception staff with any general or medical enquiry</p>
                            <p className="card-text">01061245741</p>
                        </div>
                    </div>
                    <div className="card cart-2  small-detail-card">
                        <h5 className="card-title  text-center">Doctors Timetable</h5>
                        <div className="card-body">

                            <p className="card-text">Qualified doctors available six days a week, view our timetable to make an appointment.</p>

                        </div>
                    </div>
                    <div className="card cart-3">
                        <h5 className="card-title text-center  small-detail-card">
                            Opening Hours</h5>
                        <div className="card-body">

                            <p className="card-text">Monday - Friday
                                8.00 - 7:00 pm</p>
                            <hr />
                            <p className="card-text">Saturday
                                9.00 - 10:00 pm</p>
                            <hr />
                            <p className="card-text">Sunday
                                10.00 - 12:00 pm</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallDetail;