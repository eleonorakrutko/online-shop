import React from "react";
import { AddToCartButton } from "../components/addToCartButton";
import { useParams } from "react-router";

export const Product = () => {
    const {productId} = useParams()
    
    return (
        <div>
            <h2>Tovar {productId}</h2>
            <div>Price</div>
            <div>Description</div>
            <AddToCartButton size="m"/>
        </div>
    )
}