import { createSlice } from "@reduxjs/toolkit";

const data = {
    products: [],
    cart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState: data,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            console.log(state.products)
        },

        addToCart: (state, action) => {
            // const defaultQty = 1;
            const newObj = { ...action.payload, quentity: 1 }
            state.cart.push(newObj);
            console.log(Array.from(state.cart))
            console.log(state.cart);
        },

        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        updateQty: (state, action) => {
            const { id, quentity } = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quentity = quentity; // Update the quantity property
            }
        }
    }
});

export const { addToCart, deleteFromCart, setProducts, updateQty } = cartSlice.actions;
export default cartSlice.reducer;
