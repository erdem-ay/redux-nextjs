"use client"
import React from 'react'
import { useSelector } from "react-redux";
import { selectProducts } from "@/stores/product";

const Products = () => {

    const products = useSelector(selectProducts);
    

    return (
        <div>
            <h2>Products:</h2>
            <div>
                {products.map((product) => (
                    <div  key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products