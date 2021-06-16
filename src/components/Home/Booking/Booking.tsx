import React from 'react';

const Booking = () => {
    return (
        <div>

            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-center'>Book An Appointment</h1>
                    <p className='text-center'>Please feel welcome to contact our friendly reception staff with any general or <br /> medical enquiry. Our doctors will receive or return any urgent calls.</p>
                    <div className="form-group row">
                        <div className="col-xs-2 col-md-6">
                            <label >col-xs-2</label>
                            <input className="form-control" id="ex1" type="text" />
                        </div>
                        <div className="col-xs-3 col-md-6">
                            <label >col-xs-3</label>
                            <input className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-xs-4">
                            <label>col-xs-4</label>
                            <input className="form-control" id="ex3" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className='text-center'>Helping Patients From <br /> Around The Globe</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti fuga ratione recusandae iusto sapiente debitis, eaque earum numquam natus deserunt perferendis excepturi eos maiores alias rem animi magnam facere incidunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius excepturi quis veniam, eligendi, voluptate voluptatum illo deserunt id voluptatem necessitatibus harum ipsa sed a, error ea itaque laudantium dolore?</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;