import React, { useEffect } from 'react';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import './FoodItem.css'
// MdDelete
const FoodItem = () => {

    const [displayFoods, setDisplayFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/foods')
            .then(res => res.json())
            .then(data => setDisplayFoods(data))
    }, [])

    return (
        <div className="container pt-5 food-item-area">
            <h1 className="text-center pt-5">Food Item</h1>
            <a href="/addFoodItem"><small>Add Food Item</small></a>
            <div className="container pt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayFoods.map(displayFood =>
                                <tr key={displayFood.id}>
                                    <th scope="row" className="text-center">{displayFood._id}</th>
                                    <td>{displayFood.name}</td>
                                    <td>{displayFood.price}</td>
                                    <td><MdDelete className="icon-button" /></td>
                                    <td><FiEdit className="icon-button" /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FoodItem;