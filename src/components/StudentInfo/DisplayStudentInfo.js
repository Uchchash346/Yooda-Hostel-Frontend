/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './StudentInfo.css';

const DisplayStudentInfo = () => {
    const [displayInfo, setDisplayInfo] = useState([]);
    useEffect(() => {
        fetch('https://powerful-mountain-63300.herokuapp.com/students')
            .then(res => res.json())
            .then(data => setDisplayInfo(data))
    }, [])


    // Delete Students Information
    const handleDeleteStudentInformation = (id) => {
        const proceed = window.confirm('Do you want to DELETE this information?')
        if (proceed) {
            const url = `https://powerful-mountain-63300.herokuapp.com/students/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Information deleted successfully');
                    const remainingStudentsInformation = displayInfo.filter(displayStudent => displayStudent._id !== id)
                    setDisplayInfo(remainingStudentsInformation);
                })
        }

    };
    return (
        <div className="container pt-5 food-item-area">
            <h1 className="text-center pt-5">Students Information</h1>
            <a href="/addStudentInformation"><small>Add Students Information</small></a>
            <div className="container pt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">ID</th>
                            <th scope="col" className="text-center">Name</th>
                            <th scope="col" className="text-center">Roll</th>
                            <th scope="col" className="text-center">Age</th>
                            <th scope="col" className="text-center">Class</th>
                            <th scope="col" className="text-center">Hall Name</th>
                            <th scope="col" className="text-center">Status Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayInfo.map(displayStudents =>

                                <tr key={displayStudents._id}>
                                    <th scope="row" className="text-center">{displayStudents._id}</th>
                                    <td className="text-center">{displayStudents.name}</td>
                                    <td className="text-center">{displayStudents.roll}</td>
                                    <td className="text-center">{displayStudents.age}</td>
                                    <td className="text-center">{displayStudents.classNo}</td>
                                    <td className="text-center">{displayStudents.hallName}</td>
                                    <td className="text-center">{displayStudents.statusActive}</td>
                                    <td
                                        onClick={() => handleDeleteStudentInformation(displayStudents._id)}>
                                        <MdDelete className="icon-button" />
                                    </td>
                                    <Link to={`/students/update/${displayStudents._id}`}>
                                        <td>
                                            <FiEdit className="icon-button" />
                                        </td>
                                    </Link>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DisplayStudentInfo;