import {Link} from 'react-router-dom'
import './Product.css'

function Product({product}) {
    return (
        <div className="product">
            <img src={product.imageUrl} alt="product image" />
            <div className="product__info" >
                <p className="info__name">{product.name}</p>
                <p className="info__description" >
                    {product.description.substring(0,100)}
                </p>
                <p className="info__price">₹ {product.price}</p>
                <Link to={`/product/${product._id}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Product
