import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: {},
    cart: []
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        productDetail: (state, action) => {
            const payload = action.payload
            console.log(payload, 'payload');

            state.product = action.payload

        },
        addToCart: (state, action) => {
            const existedItem = state.cart.find(item => item._id === action.payload._id)

            if (existedItem)
                return
            state.cart.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, productDetail } = cartSlice.actions

export default cartSlice.reducer