import React, { useEffect } from 'react';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import './FoodItem.css'
import { Link } from 'react-router-dom';
// MdDelete
const FoodItem = () => {

    const [displayFoods, setDisplayFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/foods')
            .then(res => res.json())
            .then(data => setDisplayFoods(data))
    }, [])


    // Delete Food Item
    const handleDeleteFoodItem = (id) => {
        const proceed = window.confirm('Do you want to DELETE this food item?')
        if (proceed) {
            const url = `http://localhost:5500/foods/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Deleted food item successfully');
                    const remainingFoodItems = displayFoods.filter(displayFood => displayFood._id !== id)
                    setDisplayFoods(remainingFoodItems);
                })
        }
    }

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
                                <tr key={displayFood._id}>
                                    <th scope="row" className="text-center">{displayFood._id}</th>
                                    <td>{displayFood.name}</td>
                                    <td>{displayFood.price}</td>
                                    <td
                                        onClick={() => handleDeleteFoodItem(displayFood._id)}>
                                        <MdDelete className="icon-button" />
                                    </td>
                                    <Link to={`/foods/update/${displayFood._id}`}>
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
};

export default FoodItem;