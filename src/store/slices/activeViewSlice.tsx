// store/slices/activeViewSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ActiveView = 'mainBody' | 'imageGenerator';

interface ActiveViewState {
    activeView: ActiveView;
}

const initialState: ActiveViewState = {
    activeView: 'mainBody',
};

export const activeViewSlice = createSlice({
    name: 'activeView',
    initialState,
    reducers: {
        setActiveView: (state, action: PayloadAction<ActiveView>) => {
            state.activeView = action.payload;
        },
    },
});

export const { setActiveView } = activeViewSlice.actions;
export default activeViewSlice.reducer;
