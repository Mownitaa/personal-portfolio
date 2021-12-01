import React from 'react';
import img1 from './express-exit-services.PNG'
import img2 from './express-exit2.PNG'
import PowerButton from '../subComponents/PowerButton';

const Project2 = () => {
    return (
        <>
            <PowerButton />

            <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Express-Exit</p>


            <div style={{ width: '70%', paddingBottom: 30 }} className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card shadow bg-dark text-white h-auto card_div">
                        <img src={img1} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Services</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white h-auto card_div">
                        <img src={img2} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Manage Service</h5>
                        </div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="card bg-dark text-white h-auto card_div">
                        <img src={img3} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Appointment Banner</h5>

                        </div>
                    </div>
                </div> */}

            </div>
            <div style={{ marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px' }}>
                <a target="blank" href="https://github.com/Mownitaa/express-exit-client-site"><i style={{ marginRight: 15 }} class="fab fa-github"></i></a>
                <a target="blank" href="https://express-exit.web.app/"><i class="fas fa-eye"></i></a>
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
                            Login User can add or delete service service
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

export default Project2;