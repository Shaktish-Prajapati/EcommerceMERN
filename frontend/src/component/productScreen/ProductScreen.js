import React from 'react'
import './ProductScreen.css'
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Action
import {getProductDetails} from '../../redux/action/productActions';
import {addToCart} from '../../redux/action/cartActions';

function ProductScreen({match, history}) {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.getProductDetails);
    const {product, loading, error} = productDetails;
    
    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }
    return (
        <div className='productscreen'>
        {
            loading ? <h2>Loading...</h2> : error ? <p>{error}</p> : 
            (
                <>
                <div className='productscreen__left' >
                <div className='left__image' >
                <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="left__info">
                <p className="left__name">{product.name}</p>
                <p className="left__price">Price: ₹{product.price}</p>
                <p>{product.description}</p>
                </div>
                
                </div>
                <div className="productscreen__right">
                <div className="right__info">
                <p>Price: ₹{product.price}</p>
                <p>Status: {product.countInStock ? 'In stock' : 'Out of stock'}</p>
                <p>Qty:
                <select value={qty} onChange={e=>setQty(e.target.value)} >
                    {[...Array(product.countInStock).keys()].map(count => <option key = {count+1} value={count+1}>{count+1}</option>)}
                </select>
                </p>
                <p>
                <button type='button' onClick={addToCartHandler} >Add To Cart</button>
                </p>
                </div>
                </div>
                </>
                )
            }
            </div>
            )
        }
        
        export default ProductScreen
        