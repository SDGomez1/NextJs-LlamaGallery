import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stateData } from "@/containers/LlamaPage";

interface FavoritePageState {
    value: stateData[]
}

const initialState: FavoritePageState = {
    value: []
}

export const favoritePageSlice = createSlice({
    name: "favoritePage",
    initialState,
    reducers: {
        addPage: (state, action: PayloadAction<stateData>) => {
            state.value.push(action.payload);
        },
        removePage: (state, action: PayloadAction<stateData>) => {
            var isContained = state.value.map((c) => {
                if (c.nombre == action.payload.nombre) {
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
export const selectPage = (state: RootState) => state.pages.value;
export default favoritePageSlice.reducer;
