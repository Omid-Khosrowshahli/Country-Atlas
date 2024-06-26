import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountry: ''
};

const selectedCountrySlice = createSlice({
  name: "selectedCountry",
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    }
  }
});

export const {
  setSelectedCountry
} = selectedCountrySlice.actions;

export default selectedCountrySlice.reducer;
