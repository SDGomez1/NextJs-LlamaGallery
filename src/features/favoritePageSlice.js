import { createSlice } from "@reduxjs/toolkit";

export const favoritePageSlice = createSlice({
	name: "favoritePage",
	initialState: {
		value: [],
	},
	reducers: {
		addPage: (state, payload) => {
			var empty = state.value.lastIndexOf("");
			if (empty != -1) {
				state.value[empty] = payload.payload;
			} else {
				state.value.push(payload.payload);
			}
		},
		removePage: (state, payload) => {
			state.value = state.value.map((c) => {
				if (c == payload.payload) {
					return "";
				} else {
					return c;
				}
			});
		},
	},
});

export const { addPage, removePage } = favoritePageSlice.actions;
export const selectPage = (state) => state.pages.value;
export default favoritePageSlice.reducer;
