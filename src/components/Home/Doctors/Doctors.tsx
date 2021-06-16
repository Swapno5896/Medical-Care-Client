import React from 'react';
import img1 from '../../../images/c-2.png'
const Doctors = () => {
    return (
        <div>
            <h1 className='text-center'>Meet Our Doctors</h1>
            <p className='text-center'>Our administration and support staff all have exceptional people skills and <br /> trained to assist you with all medical enquiries.</p>
            <div className='d-flex justify-content-center'>

                <div className='w-75'>
                    <div className="card-group">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />    <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />    <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>   </div>
        </div>
    );
};

export default Doctors;