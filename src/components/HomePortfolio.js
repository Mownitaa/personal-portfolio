import React from 'react';
import img1 from './salon-divine.PNG'
import img2 from './express-exit.PNG'
import img3 from './foreign-lang-school.PNG'
import 'animate.css';
import './HomePortfolio.css';
import { NavLink } from 'react-router-dom';

const HomePortfolio = () => {

    return (
        <>
            <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Portfolio <span style={{ fontSize: '20px' }}>[sneak peek]</span></p>


            <div style={{ width: '90%', paddingBottom: 30 }} className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card shadow bg-dark text-white h-100 card_div">
                        <img src={img1} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Salon-Divine </h5>
                            <p className="card-text">#React #Mongodb #Express #Material UI #Firebase</p>

                            <NavLink style={{ color: 'white', textDecoration: 'none', }} to="/projects/1">
                                <button style={{ padding: 6, borderRadius: 5 }}>Explore</button>
                            </NavLink>


                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white h-100 card_div">
                        <img src={img2} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Express-Exit</h5>
                            <p className="card-text">#React  #Mongodb #Express #Bootstrap #Firebase</p>
                            <NavLink style={{ color: 'white', textDecoration: 'none', }} to="/projects/2">
                                <button style={{ padding: 6, borderRadius: 5 }}>Explore</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white h-100 card_div">
                        <img src={img3} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <h5 style={{ color: '#01A7EF', fontWeight: 'bold' }} className="card-title">Foreign Language School</h5>
                            <p className="card-text">#React #Bootstrap</p>
                            <NavLink style={{ color: 'white', textDecoration: 'none', }} to="/projects/3">
                                <button style={{ padding: 6, borderRadius: 5 }}>Explore</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default HomePortfolio;