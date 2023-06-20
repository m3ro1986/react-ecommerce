import { createSlice } from "@reduxjs/toolkit";

const showAndHideSlice = createSlice({
    name: 'showAndHide',
    initialState: 'hide',
    reducers: {
        setShowAndHide: ( state, action ) => action.payload
    }
})

export const { setShowAndHide } = showAndHideSlice.actions
export default showAndHideSlice.reducer