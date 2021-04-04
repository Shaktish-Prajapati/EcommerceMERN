import './HomeScreen.css'
import Product from '../product/Product';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Action
import {getProducts as listProducts} from '../../redux/action/productActions'

function Homescreen() {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts)
    const {products, loading, error} = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div className="homescreen">
            <h2 className="homescreen__title" >Product List</h2>
            <div className="homescreen__products" >
                {
                    loading ? <h2>Loading...</h2> : error ? <p>{error}</p> : products.map(product => <Product key={product._id} product = {product} />)
                }
                {/* <Product /> */}
            </div>
        </div>
    )
}
// https://github.com/LloydJanseVanRensburg/mini-mern-ecommerce-project
export default Homescreen
