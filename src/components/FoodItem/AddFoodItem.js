import React, { useRef } from 'react';
import { useForm } from "react-hook-form";

const AddFoodItem = () => {
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);

    const nameRef = useRef();
    const priceRef = useRef();

    const handleAddFood = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;

        const newFood = { name, price };
        fetch('http://localhost:5500/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Food Item added successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container pt-5">
            <h1 className="text-center pt-5">Please, add new food item</h1>
            <form className="pt-5" onSubmit={handleAddFood}>
                <div className="mb-3 row ">
                    <input
                        ref={nameRef}
                        className="col-sm-3 container"
                        placeholder="Food Name"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input
                        ref={priceRef}
                        className="col-sm-3 container"
                        placeholder="Food Price"
                        type="number"
                    />
                </div>
                <br />
                <div className="mb-3 row">
                    <input className="col-sm-1 container" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddFoodItem;