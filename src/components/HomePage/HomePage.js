import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center button-group-area">
            <button type="button" class="btn btn-outline-success btn-lg ms-3 text-bold">Food Item</button>
            <button type="button" class="btn btn-outline-danger btn-lg ms-3 text-bold">Student Info</button>
            <button type="button" class="btn btn-outline-info btn-lg ms-3 text-bold">Food Dist.</button>
        </div>
    );
};

export default HomePage;