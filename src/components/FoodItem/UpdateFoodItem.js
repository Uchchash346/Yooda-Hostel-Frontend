import React, { useEffect, useState } from 'react';
// import { FiEdit } from 'react-icons/fi';
// import { MdDelete } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import './FoodItem.css';

const UpdateFoodItem = () => {
    const [displayFoods, setDisplayFoods] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = `https://powerful-mountain-63300.herokuapp.com/foods/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDisplayFoods(data))
    }, [])

    // Update food item
    // Update Food Item Name
    const handleFoodItemNameChange = e => {
        const updatedName = e.target.value;
        const updatedFoodName = { name: updatedName, price: displayFoods.price };
        setDisplayFoods(updatedFoodName);
    }

    // Update food item price
    const handleFoodItemPriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedFoodPrice = { name: displayFoods.name, price: updatedPrice };
        setDisplayFoods(updatedFoodPrice);
    }

    const handleUpdateFoodItem = (e) => {
        const url = `https://powerful-mountain-63300.herokuapp.com/foods/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(displayFoods)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Food Item Successfully')
                    setDisplayFoods({})
                }
            })
        e.preventDefault();
    }
    return (
        <div className="container">
            <h2 className="pt-2">Update: {displayFoods.name}</h2>
            <form onSubmit={handleUpdateFoodItem} action="">
                <input type="text" onChange={handleFoodItemNameChange} value={displayFoods.name || ''} />
                <input type="price" onChange={handleFoodItemPriceChange} value={displayFoods.price || ''} />
                <input type="submit" value="Update" />
            </form>
            <br />
            <div className="pt-5">
                <a href="/foodItem">Back to Food Item Page</a>
            </div>
        </div>
    );
};

export default UpdateFoodItem;