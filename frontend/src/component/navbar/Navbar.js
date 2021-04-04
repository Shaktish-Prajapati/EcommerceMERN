import './Navbar.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Navbar({setSideToggle}) {
    const cart = useSelector(state => state.cart)
    const {cartItem} = cart
    const getCartCount = ()=>{
        return (
            cartItem.reduce((qty, item)=>Number(item.qty)+qty,0)
        )
    }
    return (
        <div className='navbar'>
            {/* logo */}
            <div className='navbar__logo'>
                <h2>SHAKTISH'S SHOP</h2>
                
            </div>
            {/* links */}
                <ul className='navbar__links'>
                    <li>
                        {/* Whenever use Link, then we have to wrap out APP in browserRouter */}
                        <Link to="/cart" className="cart__link" >
                            <i className='fas fa-shopping-cart'></i>
                            <span>
                                Cart
                                <span className='cartlogo__badge'>{getCartCount()}</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        {/* Whenever use Link, then we have to wrap out APP in browserRouter */}
                        <Link to="/">
                            <i className='fas fa-shop'></i>
                            Shop
                        </Link>
                    </li>
                </ul>
            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={()=>setSideToggle(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    )
}

export default Navbar
