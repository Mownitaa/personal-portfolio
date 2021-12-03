import React from 'react';
import img1 from './express-exit-services.PNG'
import img2 from './express-exit.PNG'
import img3 from './express-exit-add-service.PNG'
import PowerButton from '../subComponents/PowerButton';


import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import ParticleComponent from '../subComponents/ParticleComponent';

import Carousel from 'react-bootstrap/Carousel'

const Project2 = () => {


    return (


        <div style={{ paddingBottom: 50 }}>

            <PowerButton />
            <ParticleComponent theme='light' />


            <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Express-Exit</p>




            <div style={{ marginTop: '1%', marginBottom: '2.5%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>
                <a target="blank" href="https://github.com/Mownitaa/express-exit-client-site">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    ><i style={{ marginRight: 5 }} class="fab fa-github"></i> Client-Site</button>
                </a>
                <a target="blank" href="https://github.com/Mownitaa/express-exit-server-site">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    ><i style={{ marginRight: 5 }} class="fab fa-github"></i> Server-Site</button>
                </a>
                <a target="blank" href="https://express-exit.web.app/">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    > <i style={{ marginRight: 5 }} class="fas fa-eye"></i>Live-Site</button>
                </a>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3%' }}>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                    <SnackbarContent
                        message="This is a delivery system related website" />
                    <SnackbarContent
                        message="Implemented firebase authentication system" />
                    <SnackbarContent
                        message={
                            'Created private route'
                        }
                    />
                    <SnackbarContent
                        message="Logged in user can avail services"

                    />
                    <SnackbarContent
                        message={
                            'Users can also add or delete any service.'
                        }

                    />
                </Stack>
            </div>




            <div className="card_div mx-auto py-5 bg-dark" style={{ width: '70%' }}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            className="d-block mx-auto w-75"
                            src={img1}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // style={{ width: '50%' }}
                            className="d-block mx-auto w-75"
                            src={img2}
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // style={{ width: '50%' }}
                            className="d-block mx-auto w-75"
                            src={img3}
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>









            {/* <div style={{ width: '90%', paddingBottom: 30 }} className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card shadow bg-dark text-white w-100 h-100 card_div">
                        <img style={{ height: '300px' }} src={img1} className="card-img-top p-4" alt="..." />
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

            </div> */}
        </div>
    );
};

export default Project2;