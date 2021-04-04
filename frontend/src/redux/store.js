import {createStore, combineReducer, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// Reduers
import {cartReducer} from './reducers/cartReducers';
import {getProductDetailsReducer, getProductsReduce} from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts:getProductsReduce,
    getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk] // we can pass multiple middleware in this array

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const INITIAL_STATE = {
    cart:{
        cartItem: cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;