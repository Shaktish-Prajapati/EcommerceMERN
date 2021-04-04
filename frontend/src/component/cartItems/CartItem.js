import React from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'

const CartItem = ({item, qtyChangeHandler, removeFromCartHandler}) => {
    return (
        <div className='cartitem'>
            <div className="cartItem__image">
                <img src={item.imageUrl} alt={item.name}/>
            </div>
            <Link to={`/product/${item.product}`} className='cartItem__name'>
                <p>{item.name}</p>
            </Link>
            <p className='cartItem__price'>${item.price}</p>
            <select value={item.qty} onChange={e => qtyChangeHandler(item.product, e.target.value)} className="cartItem__select">
                {
                    [...Array(item.countInStock).keys()].map(count=> <option key={count+1} value={count+1}>{count+1}</option> )
                }
            </select>
            <button className="cartItem__deleteBtn" onClick={()=> removeFromCartHandler(item.product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
