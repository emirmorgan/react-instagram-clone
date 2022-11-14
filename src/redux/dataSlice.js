import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    auth: false,
    user: null,
  },
  reducers: {
    setTheUser: (state, action) => {
      state.user = action.payload;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { setTheUser, setAuth } = dataSlice.actions;
export default dataSlice.reducer;
