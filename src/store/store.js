import { configureStore } from "@reduxjs/toolkit";
import selectedCountry from "./slices/selectedCountrySlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    selectedCountry: selectedCountry,
  }
});
