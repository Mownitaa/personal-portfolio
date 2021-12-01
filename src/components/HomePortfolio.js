import React from 'react';
import img1 from './appointment-modal.PNG'
import img2 from './salon-loginPNG.PNG'
// import img3 from './salon-apponitment.PNG'

const HomePortfolio = () => {
    return (
        <div>

            <p style={{ fontSize: '50px', marginTop: '110px', marginBottom: '0.4%', textAlign: 'center' }}>Portfolio</p>
            <div style={{ marginTop: '3%', marginLeft: '25%' }}>

                <img style={{ width: '20%', marginRight: '15px' }} src={img1} alt="..." />
                <img style={{ width: '30%', marginRight: '15px' }} src={img2} alt="..." />
                <img style={{ width: '20%' }} src={img1} alt="..." />
            </div>
        </div>
    );
};

export default HomePortfolio;