// This program is for add student information
import React, { useRef } from 'react';
import './StudentInfo.css';

const StudentInfo = () => {
    const nameRef = useRef();
    const rollRef = useRef();
    const ageRef = useRef();
    const classRef = useRef();
    const hallNameRef = useRef();
    const statusActiveOrInActiveRef = useRef();
    // const statusInActiveRef = useRef();


    const handleStudentsInformation = e => {
        const name = nameRef.current.value;
        const roll = rollRef.current.value;
        const age = ageRef.current.value;
        const classNo = classRef.current.value;
        const hallName = hallNameRef.current.value;
        const statusActive = statusActiveOrInActiveRef.current.value;
        // const statusInActive = statusInActiveRef.current.value;

        const newStudent = { name, roll, age, classNo, hallName, statusActive };

        fetch('https://powerful-mountain-63300.herokuapp.com/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Student Added Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container pt-5">
            <h1 className="text-center pt-5">Add New Student Information</h1>
            <form className="pt-5" onSubmit={handleStudentsInformation}>
                <div className="mb-3 row ">
                    <input ref={nameRef} type="text" className="col-sm-3 container" placeholder="Full Name" />
                </div>
                <br />
                <div className="mb-3 row">
                    <input ref={rollRef} className="col-sm-3 container" placeholder="Roll No." type="number" />
                </div>
                <br />
                <div className="mb-3 row">
                    <input ref={ageRef} className="col-sm-3 container" placeholder="Age" type="number"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input ref={classRef} className="col-sm-3 container" placeholder="Class" type="text"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input ref={hallNameRef} className="col-sm-3 container" placeholder="Hall Name" type="text"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input ref={statusActiveOrInActiveRef} className="col-sm-3 container" placeholder="Active or InActive. write yes or no" type="text"
                    />
                </div>
                {/* <div className="mb-3 row from-check container">
                    <div className="col-sm-3 container">
                        <input ref={statusActiveRef} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label px-2" for="exampleCheck1">Active</label>
                    </div>
                </div>
                <div className="mb-3 row from-check container">
                    <div className="col-sm-3 container">
                        <input ref={statusInActiveRef} type="checkbox" className="form-check-input justify-content-center" id="exampleCheck1" />
                        <label className="form-check-label justify-content-center px-2" for="exampleCheck1">In Active</label>
                    </div>
                </div> */}
                <br />
                <div className="mb-3 row">
                    <input className="col-sm-1 container" type="submit" value="Add Student" />
                </div>
            </form>
        </div>
    );
};

export default StudentInfo;