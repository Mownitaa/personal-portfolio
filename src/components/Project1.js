import React from 'react';
import img1 from './appointment-modal.PNG'
import img2 from './salon-login.PNG'
import img3 from './appointment.PNG'
import PowerButton from '../subComponents/PowerButton';


import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import ParticleComponent from '../subComponents/ParticleComponent';


const Project1 = () => {




    return (
        <>
            <PowerButton />
            <ParticleComponent theme='light' />


            <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Salon-Divine</p>


            <div style={{ marginTop: '1%', marginBottom: '2.5%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>
                <a target="blank" href="https://github.com/Mownitaa/salon-divine-client">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    ><i style={{ marginRight: 5 }} class="fab fa-github"></i> Client-Site</button>
                </a>
                <a target="blank" href="https://github.com/Mownitaa/salon-divine-server">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    ><i style={{ marginRight: 5 }} class="fab fa-github"></i> Server-Site</button>
                </a>
                <a target="blank" href="https://salon-divine.web.app/">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    > <i style={{ marginRight: 5 }} class="fas fa-eye"></i>Live-Site</button>
                </a>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3%' }}>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                    {/* <span style={{ display: 'flex' }}><i class="fas fa-mouse-pointer"></i> */}
                    <SnackbarContent
                        message="Salon-divine is a beauty salon related website" />
                    {/* </span> */}
                    <SnackbarContent
                        message="Implemented firebase authentication system" />
                    <SnackbarContent
                        message={
                            'Created private route'
                        }
                    />
                    <SnackbarContent
                        message="User can book appointment"

                    />
                    <SnackbarContent
                        message={
                            'Users appointment date and time is dynamic.'
                        }

                    />
                </Stack>
            </div>






            <div style={{ width: '90%', paddingBottom: 30 }} className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card shadow bg-dark text-white h-auto card_div">
                        <img src={img1} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Appointment Booking Modal</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white h-100 card_div">
                        <img src={img2} className="card-img-top p-4 mt-5" alt="..." />
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
        </>
    );
};

export default Project1;