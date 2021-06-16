import React from 'react';
import Doctors from '../../Home/Doctors/Doctors'
import AppontmentForm from '../AppontmentForm/AppontmentForm';
import TopBanner from '../TopBanner/TopBanner';
const MainAppointment = () => {
    return (
        <div>
            <h2>main appointment</h2>
            <Doctors />
            <TopBanner></TopBanner>
            <AppontmentForm></AppontmentForm>
        </div>
    );
};

export default MainAppointment;