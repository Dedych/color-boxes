import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { colorboxSlice } from "./slices/colorbox";
const rootReducer = combineSlices({
  colorbox: colorboxSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
