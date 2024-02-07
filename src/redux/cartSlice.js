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
        },
        addToCart: (state, action) => {
            const defaultQty = 1;
            const newObj = { ...action.payload, quentity: defaultQty }
            state.cart.push(newObj);
        },

        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        updateQty: (state, action) => {
            const { productId, qty } = action.payload; // Access payload object
            const itemIndex = state.cart.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity = qty; // Update the quantity property
            }
        }
    }
});

export const { addToCart, deleteFromCart, setProducts, updateQty } = cartSlice.actions;
export default cartSlice.reducer;
