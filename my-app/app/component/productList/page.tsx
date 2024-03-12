"use client";
import React, { useContext } from "react";
import { ProductContext } from "../../store/page";
import "./SecondPage.css";

const SecondPage = () => {
    const { items } = useContext(ProductContext);
    const products = items.products;

    // Check if products exists and has length greater than 0
    if (!products || products.length === 0) {
        return <div>Loading...</div>; // Render loading state if products are not available yet
    }

    const handleAddToCart = (productId) => {
        // Implement logic to add the product to the cart
        console.log(`Product with ID ${productId} added to cart`);
    };

    return (
        <div>
            <h1>All Products</h1>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                        <div className="product-details">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">Price: ${product.price}</p>
                            <p className="product-rating">Rating: {product.rating}</p>
                            <p className="product-stock">Stock: {product.stock}</p>
                            <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondPage;
