import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import userDetailReducer from "./userDetail/reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    userDetail: userDetailReducer,
  },
});

export default store;
