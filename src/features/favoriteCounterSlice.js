import { createSlice } from "@reduxjs/toolkit";

export const favoriteCounterSlice = createSlice({
	name: "favoriteCounter",
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement, amount } = favoriteCounterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default favoriteCounterSlice.reducer;
