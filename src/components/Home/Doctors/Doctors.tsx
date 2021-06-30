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
                                <h5 className="card-title">Dermatologists</h5>
                                <p className="card-text">Cardiology Specialist</p>
                                <p className="card-text">Brian specializes in treating skin, hair, nail, and mucous membrane. He also
                                    address cosmetic issues, helping to revitalize the appearance of the skin</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />    <div className="card-body">
                                <h5 className="card-title">Kiano Barker</h5>
                                <p className="card-text">Pathologist </p>
                                <p className="card-text">Barker help care for patients every day by providing their doctors with the
                                    information needed to ensure appropriate care. He also valuable resources for other physicians.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />    <div className="card-body">
                                <h5 className="card-title">Markus skar</h5>
                                <p className="card-text">Laboratory</p>
                                <p className="card-text">Skar play a very important role in your health care. People working in the
                                    clinical laboratory are responsible for conducting tests that provide crucial information.</p>
                            </div>
                        </div>
                    </div>
                </div>   </div>
        </div>
    );
};

export default Doctors;