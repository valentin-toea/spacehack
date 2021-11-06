import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Facebook",
};

export const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    changePlatform: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePlatform } = platformSlice.actions;
export default platformSlice.reducer;
