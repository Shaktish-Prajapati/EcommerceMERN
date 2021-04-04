import * as actionType from '../constant/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type:actionType.GET_PRODUCTS_REQUEST});
        const {data} = await axios.get('/api/product');

        dispatch({
            type:actionType.GET_PRODUCTS_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type: actionType.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({
            type:actionType.GET_PRODUCT_DETAILS_REQUEST
        });

        const {data} = await axios.get(`/api/product/${id}`);

        dispatch({
            type:actionType.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionType.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type:actionType.GET_PRODUCT_DETAILS_RESET
    })
}