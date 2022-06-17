import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2"
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        // if cart items is greater than 4 then show alert

        if (cart.length > 3) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `You can't add more than 4 items in cart!`,
            });
        }
        else if (cart.includes(product)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `You have already added this item in cart!`,
            });
        }

        else {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }





    /* Remove individually item from cart */
    const removeFromCart = (id) => {
        const newCart = cart.filter(cat => id !== cat.id);
        setCart(newCart);

    }

    /* Show random items */
    const chooseRandom = () => {

        const rnd = cart[Math.floor(Math.random() * cart.length)];
        setRandom(rnd);
        console.log(rnd);

    };

    /* Remove all item from cart */
    const clearCart = () => {
        const newList = [];
        setCart(newList);
        setRandom([]);
    };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}


                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    key={cart.id}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    chooseRandom={chooseRandom}
                    random={random}
                    clearCart={clearCart}
                ></Cart>

            </div>
        </div>
    );
};

export default Shop;