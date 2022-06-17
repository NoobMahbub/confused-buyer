import React from 'react';
import DisplayCartItems from '../DisplayCartItems/DisplayCartItems';
import DisplayRandomItem from '../RandomItem/DisplayRandomItem';
import './Cart.css';
const Cart = ({ cart, removeFromCart, chooseRandom, random, clearCart }) => {

    return (
        <div className='cart'>
            <h2 className='cart-title'>Selected Cats</h2>
            {
                cart.map(cat => <DisplayCartItems
                    key={cat.id}
                    cat={cat}
                    removeFromCart={removeFromCart}


                ></DisplayCartItems>

                )

            }
            <DisplayRandomItem
                key={random.id}
                random={random}

            ></DisplayRandomItem>

            {
                cart.length > 3 ? <button onClick={chooseRandom}>Choose One For Me</button> : <div></div>
            }
            <br />
            {
                random.id > 0 ? <button onClick={clearCart} >Choose Again</button> : <div></div>
            }

        </div>
    );
};

export default Cart;