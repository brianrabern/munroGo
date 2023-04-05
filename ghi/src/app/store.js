import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import { authApi } from "../services/auth";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch);
