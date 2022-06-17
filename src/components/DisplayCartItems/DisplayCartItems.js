import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './DisplayCartItems.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const DisplayCartItems = ({ cat, removeFromCart }) => {
    const { name, img, id } = cat;
    return (
        <div>

            <h4 className="cat-info">
                <span>
                    <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={img} alt="" />
                </span>

                <span>{name}</span>
                <span onClick={() => removeFromCart(id)} style={{ color: 'gray' }}><FontAwesomeIcon icon={faTrash} /></span>

            </h4>
        </div>
    )
};

export default DisplayCartItems;