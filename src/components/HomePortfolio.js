import React from 'react';
import img1 from './appointment-modal.PNG'
import img2 from './salon-loginPNG.PNG'
import img3 from './appointment.PNG'
import 'animate.css';
import './HomePortfolio.css';

const HomePortfolio = () => {

    return (
        <>
            <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Portfolio <span style={{ fontSize: '20px' }}>[sneak peek]</span></p>


            <div style={{ width: '70%', paddingBottom: 30 }} className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div class="col">
                    <div class="card shadow bg-dark text-white h-100 card_div">
                        <img src={img1} class="card-img-top p-4" alt="..." />
                        <div class="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} class="card-title">Appointment Booking</h5>
                            <p class="card-text">Used material UI date picker for taking appointment and a booking modal for getting data from user.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100 card_div">
                        <img src={img2} class="card-img-top p-4" alt="..." />
                        <div class="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} class="card-title">Login Page</h5>
                            <p class="card-text">Implemented email/password and google authentication system for login in private routes.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100 card_div">
                        <img src={img3} class="card-img-top p-4" alt="..." />
                        <div class="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} class="card-title">Appointment Banner</h5>
                            <p class="card-text">A part of React js project describing their facilities to make people know about their services.</p>
                        </div>
                    </div>
                </div>
                {/* <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}
            </div>
        </>










        // <div>

        //     <p style={{ fontSize: '50px', marginTop: '110px', marginBottom: '0.4%', textAlign: 'center' }}>Portfolio</p>
        //     <div style={{ marginTop: '3%', marginLeft: '25%' }}>

        //         <img style={{ width: '20%', marginRight: '15px' }} src={img1} alt="..." />
        //         <img style={{ width: '30%', marginRight: '15px' }} src={img2} alt="..." />
        //         <img style={{ width: '20%' }} src={img1} alt="..." />
        //     </div>
        // </div>
    );
};

export default HomePortfolio;