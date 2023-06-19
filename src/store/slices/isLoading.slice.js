import { createSlice } from "@reduxjs/toolkit";

const isloadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: ( state, action ) => action.payload
    }
})

export const { setIsLoading } = isloadingSlice.actions
export default isloadingSlice.reducer
