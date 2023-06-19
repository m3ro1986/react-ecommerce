import { createSlice } from "@reduxjs/toolkit";

const categoryIdSlice = createSlice({
    name: 'categoryId',
    initialState: '',
    reducers: {
        setCategoryId: ( state, action ) => action.payload
    }
})

export const { setCategoryId } = categoryIdSlice.actions
export default categoryIdSlice.reducer