import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

const similarProductsSlice = createSlice({
    name: 'similarProducts',
    initialState: null,
    reducers: {
        getSimilarProducts: ( state, action ) => action.payload
    }
})

export const{ getSimilarProducts } = similarProductsSlice.actions
export default similarProductsSlice.reducer

export const getSimilarProductsThunk = id => dispatch => {
    dispatch( setIsLoading( true ) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then( res => dispatch( getSimilarProducts( res.data ) ) )
        .catch( () => alert( 'error fetching getProductsThunk') )
        .finally( () => dispatch( setIsLoading( true ) ) )
}