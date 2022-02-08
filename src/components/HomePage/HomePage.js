import React from 'react';
import './HomePage.css';

const HomePage = () => {

    return (
        <div>
            <div className="col-md-1 z1 d-flex align-items-center justify-content-center container pt-5 lottie-icon">
                <lottie-player className="" src="https://assets9.lottiefiles.com/packages/lf20_vIqsDp.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <div className="container d-flex align-items-center justify-content-center button-group-area pt-3">
                <a href="/foodItem">
                    <button type="button" class="btn btn-outline-success btn-lg ms-3 text-bold">Food Item</button>
                </a>
                <a href="/studentInformation">
                    <button type="button" class="btn btn-outline-danger btn-lg ms-3 text-bold">Student Info</button>
                </a>
                <a href="/foodDistribution">
                    <button type="button" class="btn btn-outline-info btn-lg ms-3 text-bold">Food Dist.</button>

                </a>
            </div>
        </div>
    );
};

export default HomePage;