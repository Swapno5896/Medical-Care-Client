import React from 'react';

const Booking = () => {
    return (
        <div>
            <div className="container">
                <div className="col-md-6">
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
                    <h2>Helping Patients From Around The Globe</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti fuga ratione recusandae iusto sapiente debitis, eaque earum numquam natus deserunt perferendis excepturi eos maiores alias rem animi magnam facere incidunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius excepturi quis veniam, eligendi, voluptate voluptatum illo deserunt id voluptatem necessitatibus harum ipsa sed a, error ea itaque laudantium dolore?</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;