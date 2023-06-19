import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        getProducts: ( state, action ) => action.payload
    }
})

export const { getProducts } = productsSlice.actions
export default productsSlice.reducer

export const getProductsThunk = id => dispatch => {
    dispatch( setIsLoading( true ) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then( res => dispatch( getProducts( res.data ) ) )
        .catch( () => alert( 'error fetching getProductsThunk') )
        .finally( () => dispatch( setIsLoading( true ) ) )
}

export const getOneProductByName = search => dispatch => {
    dispatch( setIsLoading( true ) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${search}`)
        .then( res => dispatch( getProducts( res.data ) ) )
        .catch( () => alert( 'error fetching getOneProductByName') )
        .finally( () => dispatch( setIsLoading( true ) ) )   
}