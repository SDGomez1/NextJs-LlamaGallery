import { configureStore } from "@reduxjs/toolkit";
import favoriteCounterSlice from "@features/favoriteCounterSlice";
import favoritePageSlice from "@features/favoritePageSlice";

export const store = configureStore({
    reducer: {
        counter: favoriteCounterSlice,
        pages: favoritePageSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch