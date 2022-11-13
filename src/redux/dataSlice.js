import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    user: null,
  },
  reducers: {
    setTheUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setTheUser } = dataSlice.actions;
export default dataSlice.reducer;
