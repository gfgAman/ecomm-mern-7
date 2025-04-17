import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.cart.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTocart } = cartSlice.actions

export default cartSlice.reducer