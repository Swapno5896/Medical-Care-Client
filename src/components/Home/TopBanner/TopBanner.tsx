import React from 'react';
import './TopBanner.css'
import img1 from '../../../images/c-1.jpg'
import img2 from '../../../images/c-2.png'
import img3 from '../../../images/c-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHospitalUser, faCapsules, faStethoscope, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'


const TopBanner = () => {
    return (
        <div style={{ marginTop: '85px' }}>
            <div id="carouselExampleDark" className="top-banner-carosel carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner topbanner-container">
                    <div className="carousel-item active " data-bs-interval="10000">
                        <div className="row ">
                            <img className='top-banner-bg-img' src='http://7oroof.com/demos/medcity/assets/images/sliders/1.jpg' alt="..." />
                            <div className="col-md-4 offset-md-2 top-banner-content ">


                                <div className='top-banner-text' >

                                    <h1>Provide best <br /> Medical care care</h1>
                                    <p>The health and well-being of our patients and their health care team will
                                        always be our priority, so we follow the best practices for cleanliness.</p>
                                </div>


                                <div className='top-banner-icons'>
                                    <p> <span className='carosel-icon'><FontAwesomeIcon icon={faHospitalUser} /></span> Examination</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faCapsules} /></span>Prescription</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faStethoscope} /></span>Cardiogram</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faTemperatureLow} /></span>Blood Pressure</p>


                                </div>

                            </div>

                            <div className="col-md-6">

                            </div>
                        </div>


                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <div className="row">
                            <img src='http://7oroof.com/demos/medcity/assets/images/sliders/1.jpg' className="top-banner-bg-img" alt="..." />

                            <div className="col-md-4 offset-md-2 top-banner-content">
                                <div>

                                    <h1>  All Aspects Of <br />    Medical Practice</h1>
                                    <p>The health and well-being of our patients and their health care team will
                                        always be our priority, so we follow the best practices for cleanliness.</p>
                                </div>
                                <div className='top-banner-icons'>
                                    <p> <span className='carosel-icon'><FontAwesomeIcon icon={faHospitalUser} /></span> Examination</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faCapsules} /></span>Prescription</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faStethoscope} /></span>Cardiogram</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faTemperatureLow} /></span>Blood Pressure</p>


                                </div>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <div className="row">
                            <img src='
http://7oroof.com/demos/medcity/assets/images/sliders/2.jpg' className="top-banner-bg-img" alt="..." />
                            <div className="col-md-4 offset-md-2 top-banner-content">
                                <div>
                                    <h1>Provide best <br /> swapno care care</h1>
                                    <p>The health and well-being of our patients and their health care team will
                                        always be our priority, so we follow the best practices for cleanliness.</p>
                                </div>
                                <div className='top-banner-icons'>
                                    <p> <span className='carosel-icon'><FontAwesomeIcon icon={faHospitalUser} /></span> Examination</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faCapsules} /></span>Prescription</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faStethoscope} /></span>Cardiogram</p>
                                    <p><span className='carosel-icon'><FontAwesomeIcon icon={faTemperatureLow} /></span>Blood Pressure</p>


                                </div>
                            </div>
                            <div className="col-md-6">

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