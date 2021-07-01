import React from 'react';
import Doctors from '../../Home/Doctors/Doctors'
import Appontment from '../Appontment/Appontment';
import TopBanner from '../TopBanner/TopBanner';
const MainAppointment = () => {
    return (
        <>
            <Doctors />
            <TopBanner></TopBanner>
            <Appontment></Appontment>
        </>
    );
};

export default MainAppointment;