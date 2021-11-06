import { configureStore } from "@reduxjs/toolkit";

import platformReducer from "./platformSlice";
import postStatReducer from "./postStatSlice";

export const store = configureStore({
  reducer: {
    platform: platformReducer,
    postStat: postStatReducer,
  },
});
