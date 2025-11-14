import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  currentUser: null as UserProps | null,
  accessToken: null as string | null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateCounter: (state) => {
      state.counter += 1;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    unsetCurrentUser: (state) => {
      state.currentUser = null;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    unsetAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});
export const {
  updateCounter,
  setCurrentUser,
  unsetCurrentUser,
  setAccessToken,
  unsetAccessToken,
} = commonSlice.actions;
export default commonSlice.reducer;
