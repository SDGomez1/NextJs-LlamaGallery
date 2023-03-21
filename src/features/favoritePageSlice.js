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
			var isContained = state.value.map((c) => {
				if (c.name == payload.payload.name) {
					return 1;
				}
				return 0;
			});
			var index = isContained.lastIndexOf(1);
			if (index != -1) {
				state.value.splice(index, 1);
			}
		},
	},
});

export const { addPage, removePage } = favoritePageSlice.actions;
export const selectPage = (state) => state.pages.value;
export default favoritePageSlice.reducer;
