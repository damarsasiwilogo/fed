import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "../actions/cartActions";

const initialState = {
	cartItems: [],
};

const cartReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(addToCart, (state, action) => {
			state.cartItems.push(action.payload);
		})
		.addCase(removeFromCart, (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
		});
});

export default cartReducer;
