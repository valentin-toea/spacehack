import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const postStatSlice = createSlice({
  name: "postStat",
  initialState,
  reducers: {
    updatePostStat: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updatePostStat } = postStatSlice.actions;
export default postStatSlice.reducer;
