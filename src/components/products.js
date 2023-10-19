"use client"
import React from 'react'
import { useSelector } from "react-redux";
import { selectProducts } from "@/stores/product";
import { useDispatch } from "react-redux";
import { actions as basketActions } from "@/stores/basket";


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);


    const handleAddBasket = (product) => {
        dispatch(basketActions.addToBasket(product));
    };

    return (
        <div>
            <h2>Products:</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleAddBasket(product)}>Add to Basket</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products