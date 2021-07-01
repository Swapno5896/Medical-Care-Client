import React from 'react';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className="topBanner-container d-flex justify-content-center align-items-center ">
            <img
                className="benefit-gb-img"
                src="http://7oroof.com/demos/medcity/assets/images/page-titles/5.jpg"
                alt=""
            />
            <div className='text-center'>
                <h1 >Improve Quality Of Life <br /> Through Better Health.</h1>
                <p className='text-center'>Medcity has been present in Europe since 1990, offering
                    innovative <br />  solutions,  specializing in medical services for <br /> treatment of medical infrastructure.</p>
                <button>Find A Doctor</button>
            </div>
        </div>
    );
};

export default TopBanner;