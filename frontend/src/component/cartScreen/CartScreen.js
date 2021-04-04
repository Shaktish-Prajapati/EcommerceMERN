import React from 'react'
import CartItem from '../cartItems/CartItem'
import './CartScreen.css'

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';

// Action
import {addToCart, removeFromCart} from '../../redux/action/cartActions'

function CartScreen() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItem} = cart;

    const qtyChangeHandler = (id, qty)=>{
        dispatch(addToCart(id,qty));
    }

    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return (cartItem.reduce((qty, item)=>Number(item.qty)+qty,0))
    }

    const getCartSubtotal = () => {
        return (
            cartItem.reduce((price,item)=>(item.price*item.qty)+price,0)
        )
    }

    const proceedPaymentHandler =()=>{
        alert('Payment method is not itegrated...');
    }
    return (
        <div className='cartscreen'>
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {
                    cartItem.length ===0 ? <div> Your cart is empty <Link to = '/' >Click to shop</Link> </div> :
                    cartItem.map(item => <CartItem key={item.product} item = {item}  qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler}  /> )
                }
                {/* <CartItem /> */}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()})</p>
                    <p>₹{getCartSubtotal().toFixed(2)}</p>
                </div>
                <div>
                    <button type='button' onClick = {()=>proceedPaymentHandler()} >Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
