import React from 'react';
import Doctors from '../../Home/Doctors/Doctors'
import AppontmentForm from '../AppontmentForm/AppontmentForm';
import TopBanner from '../TopBanner/TopBanner';
const MainAppointment = () => {
    return (
        <>
            <Doctors />
            <TopBanner></TopBanner>
            <AppontmentForm></AppontmentForm>
        </>
    );
};

export default MainAppointment;