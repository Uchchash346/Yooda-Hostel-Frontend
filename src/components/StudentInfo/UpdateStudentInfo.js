import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateStudentInfo = () => {
    const [displayInfo, setDisplayInfo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5500/students/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDisplayInfo(data))
    }, [])

    // Update Student Info
    // Update Student Name
    const handleStudentNameChange = e => {
        const updatedName = e.target.value;
        const updatedStudentName = {
            name: updatedName,
            roll: setDisplayInfo.roll,
            age: setDisplayInfo.age,
            classNo: setDisplayInfo.class,
            hallName: setDisplayInfo.hallName,
            statusActive: setDisplayInfo.statusActive,
        };
        setDisplayInfo(updatedStudentName);
    }

    // Update Student Roll
    const handleStudentRollChange = e => {
        const updatedRoll = e.target.value;
        const updatedStudentRoll = {
            name: setDisplayInfo.name,
            roll: updatedRoll,
            age: setDisplayInfo.age,
            classNo: setDisplayInfo.class,
            hallName: setDisplayInfo.hallName,
            statusActive: setDisplayInfo.statusActive,
        };
        setDisplayInfo(updatedStudentRoll);
    }

    // Update Student Age
    const handleStudentAgeChange = e => {
        const updatedAge = e.target.value;
        const updatedStudentAge = {
            name: setDisplayInfo.name,
            roll: setDisplayInfo.roll,
            age: updatedAge,
            classNo: setDisplayInfo.class,
            hallName: setDisplayInfo.hallName,
            statusActive: setDisplayInfo.statusActive,
        };
        setDisplayInfo(updatedStudentAge);
    }

    // Update Student Class
    const handleStudentClassChange = e => {
        const updatedClass = e.target.value;
        const updatedStudentClass = {
            name: setDisplayInfo.name,
            roll: setDisplayInfo.roll,
            age: setDisplayInfo.age,
            classNo: updatedClass,
            hallName: setDisplayInfo.hallName,
            statusActive: setDisplayInfo.statusActive,
        };
        setDisplayInfo(updatedStudentClass);
    }

    // Update Student Hall Name
    const handleStudentHallNameChange = e => {
        const updatedHallName = e.target.value;
        const updatedStudentHallName = {
            name: setDisplayInfo.name,
            roll: setDisplayInfo.roll,
            age: setDisplayInfo.age,
            classNo: setDisplayInfo.class,
            hallName: updatedHallName,
            statusActive: setDisplayInfo.statusActive,
        };
        setDisplayInfo(updatedStudentHallName);
    }

    // Update Student Hall Name
    const handleStudentActiveStatus = e => {
        const updatedActiveStatus = e.target.value;
        const updatedStudentActiveStatus = {
            name: setDisplayInfo.name,
            roll: setDisplayInfo.roll,
            age: setDisplayInfo.age,
            classNo: setDisplayInfo.class,
            hallName: setDisplayInfo.hallName,
            statusActive: updatedActiveStatus,
        };
        setDisplayInfo(updatedStudentActiveStatus);
    }

    const handleUpdateStudentsInformation = (e) => {
        const url = `http://localhost:5500/students/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(displayInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Students Information Successfully')
                    setDisplayInfo({})
                }
            })
        e.preventDefault();
    }


    return (
        <div className="container">
            <h2 className="pt-2">Update: {displayInfo.name}</h2>
            <form onSubmit={handleUpdateStudentsInformation} action="">
                <input placeholder="name" type="text" onChange={handleStudentNameChange} value={displayInfo.name || ''} />
                <input placeholder="roll" type="number" onChange={handleStudentRollChange} value={displayInfo.roll || ''} />
                <input placeholder="age" type="number" onChange={handleStudentAgeChange} value={displayInfo.age || ''} />
                <input placeholder="class" type="text" onChange={handleStudentClassChange} value={displayInfo.classNo || ''} />
                <input placeholder="hall name" type="text" onChange={handleStudentHallNameChange} value={displayInfo.hallName || ''} />
                <input placeholder="active status" type="text" onChange={handleStudentActiveStatus} value={displayInfo.statusActive || ''} />
                <input type="submit" value="Update" />
            </form>
            <br />
            <div className="pt-5">
                <a href="/studentInfo">Back to Students Information Page</a>
            </div>
        </div>
    );
};

export default UpdateStudentInfo;