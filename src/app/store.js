import { configureStore } from "@reduxjs/toolkit";
import { favoriteCounterSlice } from "../features/favoriteCounterSlice";
export default configureStore({
	reducer: {
		counter: favoriteCounterSlice,
	},
});
