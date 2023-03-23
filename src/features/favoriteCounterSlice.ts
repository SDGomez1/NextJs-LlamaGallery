import { RootState } from "@/store/store";
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

export const { increment, decrement } = favoriteCounterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default favoriteCounterSlice.reducer;
