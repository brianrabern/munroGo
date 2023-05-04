import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginReducer from "../features/auth/loginSlice";
import signupReducer from "../features/auth/signupSlice";
import newClimbReducer from "../features/climbs/newClimbSlice";
import newReviewReducer from "../features/reviews/newReviewSlice";
import modalReducer from "../features/modal/modalSlice";
import { authApi } from "../services/auth";
import { munrosApi } from "../services/munros";
import { climbsApi } from "../services/climbs";
import { reviewsApi } from "../services/revs";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    newClimb: newClimbReducer,
    newReview: newReviewReducer,
    modal: modalReducer,

    [authApi.reducerPath]: authApi.reducer,
    [munrosApi.reducerPath]: munrosApi.reducer,
    [climbsApi.reducerPath]: climbsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      munrosApi.middleware,
      climbsApi.middleware,
      reviewsApi.middleware,
    ]),
});

setupListeners(store.dispatch);
