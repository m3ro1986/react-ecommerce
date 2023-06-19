import { configureStore } from "@reduxjs/toolkit";
import isLoading from './slices/isLoading.slice'
import products from './slices/products.slice'
import categoryId from './slices/categoryId.slice'
import similarProducts from './slices/similarProducts.slice'

export default configureStore({
    reducer: {
        isLoading,
        products,
        categoryId,
        similarProducts
    }
})