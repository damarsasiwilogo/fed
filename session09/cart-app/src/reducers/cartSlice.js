import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItems = createAsyncThunk(
	"cart/fetchCartItems",
	async () => {
		const response = await axios.get("http://localhost:5000/cartItems");
		return response.data;
	}
);

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCartItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCartItems.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.cartItems = action.payload;
			})
			.addCase(fetchCartItems.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default cartSlice.reducer;
