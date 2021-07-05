import React from 'react';
import Doctors from '../../Home/Doctors/Doctors'
import Appontment from '../Appontment/Appontment';
import TopBanner from '../TopBanner/TopBanner';
const MainAppointment = () => {
    return (
     <div style={{marginTop:'53px'}}>
<TopBanner></TopBanner>
            <Doctors />
            <Appontment></Appontment>
        </div>
           
    
    );
};

export default MainAppointment;