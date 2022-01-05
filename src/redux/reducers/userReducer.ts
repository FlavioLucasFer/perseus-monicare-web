'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    value: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {}
    },
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.value = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;