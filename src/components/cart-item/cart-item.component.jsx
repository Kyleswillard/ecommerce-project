import React from 'react'
import './cart-item.styles.css'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details-container">
            <span className="name">{name} </span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </div>
    </div>
)
export default CartItem
