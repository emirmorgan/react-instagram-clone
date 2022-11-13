import { setTheUser } from "../redux/dataSlice";
import { store } from "../redux/store";

export const setUser = (data) => {
  store.dispatch(setTheUser(data));
};
