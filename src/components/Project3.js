import React from 'react';
import img1 from './fls-homepage.PNG'
import img2 from './fls-popular-courses.PNG'
import img3 from './fls-service-details.PNG'
import PowerButton from '../subComponents/PowerButton';


import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
// import ParticleComponent from '../subComponents/ParticleComponent';

import Carousel from 'react-bootstrap/Carousel'

const Project3 = () => {

    const bg = "https://www.pngmagic.com/product_images/pure-white-background-images.jpg"

    return (


        <div style={{
            paddingBottom: 50,
            backgroundImage:
                `url(${bg})`, backgroundRepeat: 'repeat-x', backgroundSize: '30%'
        }}>

            <PowerButton />
            {/* <ParticleComponent theme='light' /> */}


            <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Foreign Language School</p>




            <div style={{ marginTop: '1%', marginBottom: '2.5%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>
                <a target="blank" href="https://github.com/Mownitaa/foreign-language-school">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    ><i style={{ marginRight: 5 }} class="fab fa-github"></i>Code Link</button>
                </a>

                <a target="blank" href="https://foreign-language-school-d029bd.netlify.app/">
                    <button
                        style={{ padding: 3, borderRadius: 8, margin: 2 }}
                    > <i style={{ marginRight: 5 }} class="fas fa-eye"></i>Live-Site</button>
                </a>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3%' }}>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                    <SnackbarContent
                        message="Foreign Language School is a online based language learning platform." />
                    {/* <SnackbarContent
                        message="" /> */}
                    <SnackbarContent
                        message={
                            'This website has 4 different routes.'
                        }
                    />
                    <SnackbarContent
                        message="This is a plain website without any functionality."

                    />
                    {/* <SnackbarContent
                        message={
                            '.'
                        }

                    /> */}
                </Stack>
            </div>




            <div className=" mx-auto py-5 bg-dark" style={{ width: '70%' }}>
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
        </div>
    );
};

export default Project3;