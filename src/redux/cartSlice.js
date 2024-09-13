import { createSlice } from "@reduxjs/toolkit";

const data = {
    products: [],
    cart: [],
    filteredProducts: [],
    darkMode: false
};

const cartSlice = createSlice({
    name: "cart",
    initialState: data,

    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        setFilteredProducts: (state, action) => {
            state.filteredProducts = action.payload;
        },

        addToCart: (state, action) => {
            const newObj = { ...action.payload, quentity: 1 }
            state.cart.push(newObj);
        },

        clearCart: (state) => {
            state.cart = [];
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
        },

        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        }


    }
});

export const { addToCart, deleteFromCart, setProducts, updateQty, setFilteredProducts, clearCart, setDarkMode } = cartSlice.actions;
export default cartSlice.reducer;
