import React from 'react';
import img1 from '../../../images/c-2.png'
import DoctorsCard from '../DoctorsCard/DoctorsCard';
const Doctors = () => {
    const fakeDoctors = [
        {
            img: img1, name: 'Markus skar', speciality: 'Laboratory', discription: `Skar play a very important role in your health care. People working in the
        clinical laboratory are responsible for conducting tests that provide crucial information.`},
        {
            img: img1, name: 'Kiano Barker', speciality: 'Pathologist', discription: `Barker help care for patients every day by providing their doctors with the
        information needed to ensure appropriate care. He also valuable resources for other physicians.`},
        {
            img: img1, name: 'Dermatologists', speciality: `Cardiology Specialist`, discription: `Brian specializes in treating skin, hair, nail, and mucous membrane. He also
        address cosmetic issues, helping to revitalize the appearance of the skin`},
    ]
    return (
        <div style={{ margin: '70px 30px' }}>
            <h1 className='text-center'>Meet Our Doctors</h1>
            <p className='text-center'>Our administration and support staff all have exceptional people skills and <br /> trained to assist you with all medical enquiries.</p>
            <div className='d-flex justify-content-center'>

                <div className='w-75'>
                    <div className="card-group">


                        {
                            fakeDoctors.map(doctor => <DoctorsCard doctor={doctor}></DoctorsCard>)
                        }
                    </div>
                </div>   </div>
        </div>
    );
};

export default Doctors;