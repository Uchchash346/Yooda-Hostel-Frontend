import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header container pt-3">
            {/* <nav className="container">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/users/add">Add User</Link>
            </nav> */}
            <ul className="nav justify-content-center nav-area">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/foodItem">Food Item</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/studentInfo">Student Information</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Food Distribution</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;