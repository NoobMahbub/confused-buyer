import { faShoppingCart,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product,handleAddToCart }) => {
    const { name, img, price, seller, rating } = product;
    return (
        <div className='product'>

            <img src={img} alt="" />
            <div className='product-info'>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Ratings: {rating}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>

    );
};

export default Product;