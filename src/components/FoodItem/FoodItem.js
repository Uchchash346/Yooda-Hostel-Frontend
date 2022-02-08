import React, { useEffect } from 'react';
import { useState } from 'react';

const FoodItem = () => {

    const [displayFoods, setDisplayFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/foods')
            .then(res => res.json())
            .then(data => setDisplayFoods(data))
    }, [])

    return (
        <div className="container pt-5">
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
                        {/* <tr>
                            <th scope="row">1</th>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}
                        {
                            displayFoods.map(displayFood =>
                                <tr key={displayFood.id}>
                                    <th scope="row" className="text-center">{displayFood._id}</th>
                                    <td>{displayFood.name}</td>
                                    <td>{displayFood.price}</td>
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