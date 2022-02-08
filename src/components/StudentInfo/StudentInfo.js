// This program is for add student information
import React, { useRef } from 'react';
import './StudentInfo.css';

const StudentInfo = () => {
    // const nameRef = useRef();
    // const priceRef = useRef();
    // const ageRef = useRef();


    // const handleAddFood = e => {
    //     const name = nameRef.current.value;
    //     const price = priceRef.current.value;

    //     const newFood = { name, price };
    //     fetch('http://localhost:5500/foods', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newFood)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 alert('Food Item added successfully')
    //                 e.target.reset();
    //             }
    //         })
    //     e.preventDefault();
    // }
    return (
        <div className="container pt-5">
            <h1 className="text-center pt-5">Add New Student Information</h1>
            <form className="pt-5">
                <div className="mb-3 row ">
                    <input
                        type="text"
                        className="col-sm-3 container"
                        placeholder="Full Name"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input
                        className="col-sm-3 container"
                        placeholder="Roll No."
                        type="number"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input
                        className="col-sm-3 container"
                        placeholder="Age"
                        type="number"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input
                        className="col-sm-3 container"
                        placeholder="Class"
                        type="number"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input
                        className="col-sm-3 container"
                        placeholder="Hall Name"
                        type="text"
                    />
                </div>
                <br />
                <div className="mb-3 row from-check container">
                    <div className="col-sm-3 container">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Active</label>
                    </div>
                </div>
                <div className="mb-3 row from-check container">
                    <div className="col-sm-3 container">
                        <input type="checkbox" class="form-check-input justify-content-center" id="exampleCheck1" />
                        <label class="form-check-label justify-content-center" for="exampleCheck1">In Active</label>
                    </div>
                </div>
                <br />
                <div className="mb-3 row">
                    <input className="col-sm-1 container" type="submit" value="Add Student" />
                </div>
            </form>
        </div>
    );
};

export default StudentInfo;