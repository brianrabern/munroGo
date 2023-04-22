import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import signupReducer from "../features/auth/signupSlice";
import { authApi } from "../services/auth";
import { munrosApi } from "../services/munros";
import { setupListeners } from "@reduxjs/toolkit/query";
import { munroDetailApi } from "../services/munrodetail";
import newClimbReducer from "../features/climbs/newClimbSlice";
import { reviewsApi } from "../services/review";
import newReviewReducer from "../features/reviews/newReviewSlice";
import { ClimbsByAccountApi } from "../services/climbsByAccount";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    newClimb: newClimbReducer,
    newReview: newReviewReducer,

    [authApi.reducerPath]: authApi.reducer,
    [munrosApi.reducerPath]: munrosApi.reducer,
    [munroDetailApi.reducerPath]: munroDetailApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [ClimbsByAccountApi.reducerPath]: ClimbsByAccountApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      munrosApi.middleware,
      munroDetailApi.middleware,
      reviewsApi.middleware,
      ClimbsByAccountApi.middleware,
    ]),
});

setupListeners(store.dispatch);
