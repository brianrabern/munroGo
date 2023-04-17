import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import signupReducer from "../features/auth/signupSlice";
import { authApi } from "../services/auth";
import { munrosApi } from "../services/munros";
import { setupListeners } from "@reduxjs/toolkit/query";
import { munroDetailApi } from "../services/munrodetail";
import newClimbReducer from "../features/climbs/newClimbSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    newClimb: newClimbReducer,
    [authApi.reducerPath]: authApi.reducer,
    [munrosApi.reducerPath]: munrosApi.reducer,
    [munroDetailApi.reducerPath]: munroDetailApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      munrosApi.middleware,
      munroDetailApi.middleware,
    ]),
});

setupListeners(store.dispatch);
