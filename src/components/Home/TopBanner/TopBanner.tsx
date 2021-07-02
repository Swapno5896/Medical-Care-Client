import React from 'react';
import './TopBanner.css'
import img1 from '../../../images/c-1.jpg'
import img2 from '../../../images/c-2.png'
import img3 from '../../../images/c-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const TopBanner = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="top-banner-carosel carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Provide best <br /> medical care</h1>
                                <p>The health and well-being of our patients and their health care team will
                                    always be our priority, so we follow the best practices for cleanliness.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} className="d-block w-100" alt="..." />
                            </div>
                        </div>


                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Provide best <br /> medical care</h1>
                                <p>The health and well-being of our patients and their health care team will
                                    always be our priority, so we follow the best practices for cleanliness.</p>
                                <div className='top-banner-icons'>
                                    <p> <span><FontAwesomeIcon icon={faCoffee} /></span> Examination</p>
                                    <p><span><FontAwesomeIcon icon={faCoffee} /></span>Prescription</p>
                                    <p><span><FontAwesomeIcon icon={faCoffee} /></span>Cardiogram</p>
                                    <p><span><FontAwesomeIcon icon={faCoffee} /></span>Blood Pressure</p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Provide best <br /> medical care</h1>
                                <p>The health and well-being of our patients and their health care team will
                                    always be our priority, so we follow the best practices for cleanliness.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default TopBanner;