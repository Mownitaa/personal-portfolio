import React from 'react';
import img1 from './appointment-modal.PNG'
import img2 from './salon-loginPNG.PNG'
import img3 from './appointment.PNG'
import PowerButton from '../subComponents/PowerButton';

const Project1 = () => {
    return (
        <>
            <PowerButton />

            <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Salon-Divine</p>


            <div style={{ width: '70%', paddingBottom: 30 }} className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card shadow bg-dark text-white h-auto card_div">
                        <img src={img1} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Appointment Booking Modal</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white h-auto card_div">
                        <img src={img2} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Login Route</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white h-auto card_div">
                        <img src={img3} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Appointment Banner</h5>

                        </div>
                    </div>
                </div>

            </div>


            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4%' }}>

                <h3>
                    <ul>
                        <li>
                            Implemented firebase authentication system
                        </li>
                        <li>
                            Created private route
                        </li>
                        <li>
                            User can book appointment
                        </li>
                        <li>
                            Users appointment date and time is dynamic
                        </li>
                    </ul>
                </h3>

            </div>

        </>
    );
};

export default Project1;