import { configureStore } from "@reduxjs/toolkit";

//Slices
import designSlice from "./slices/designSlice";

export const store = configureStore({
  reducer: { design: designSlice },
});
