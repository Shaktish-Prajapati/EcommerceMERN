import React from 'react'
import { Link } from 'react-router-dom';
import './Sidedrawer.css'

import {useSelector} from 'react-redux'

function Sidedrawer({show, setSideToggle}) {
    const sidedrawerClass = ['sidedrawer'];
    if(show){
        sidedrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart)
    const {cartItem} = cart
    const getCartCount = ()=>{
        return (
            cartItem.reduce((qty, item)=>Number(item.qty)+qty,0)
        )
    }
    return (
        <div className={sidedrawerClass.join(" ")}>
            <ul className = "sidedrawer__links" onClick={()=>setSideToggle(false)} >
                <li>
                    <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidedrawer
