import { createSlice } from "@reduxjs/toolkit";

export const designSlice = createSlice({
  name: "design",
  initialState: {
    isInputEmpty: true,
    isHidden: true,
  },
  reducers: {
    controlPassword: (state) => {
      state.isHidden = !state.isHidden;
    },
    updateInputStatus: (state, action) => {
      state.isInputEmpty = action.payload;
    },
  },
});

export default designSlice.reducer;
export const { controlPassword, updateInputStatus } = designSlice.actions;
