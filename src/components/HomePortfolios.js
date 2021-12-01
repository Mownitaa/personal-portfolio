import React from 'react';
import { projects } from '../data/projectDatat';
import HomePortfolio from './HomePortfolio';

const HomePortfolios = () => {
    return (
        <div className="container pt-5">
            <div>
                <h1>Our Services</h1>
                <p className="text-info">________________________________</p>

            </div>
            <div className="d-flex mb-5 pb-5 row row-cols-1 row-cols-md-3 g-4 ">
                {
                    projects.map(homePortfolio => <HomePortfolio
                        key={homePortfolio.id}
                        homePortfolio={homePortfolio}></HomePortfolio>)
                }
            </div>

        </div>
    );
};

export default HomePortfolios;