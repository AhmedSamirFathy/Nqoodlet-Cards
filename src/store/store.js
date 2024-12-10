import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import filtersReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    filters: filtersReducer,
  },
});
