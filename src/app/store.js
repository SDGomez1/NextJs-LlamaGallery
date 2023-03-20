import { configureStore } from "@reduxjs/toolkit";
import favoriteCounterSlice from "../features/favoriteCounterSlice";
import favoritePageSlice from "../features/favoritePageSlice";

export default configureStore({
	reducer: {
		counter: favoriteCounterSlice,
		pages: favoritePageSlice,
	},
});
