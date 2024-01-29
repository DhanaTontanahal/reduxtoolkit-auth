import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import registerReducer from "../features/auth/registerSlice";

const reducer = {
  reducer: {
    counter: counterReducer,
    register: registerReducer,
  },
};

export default configureStore(reducer);
