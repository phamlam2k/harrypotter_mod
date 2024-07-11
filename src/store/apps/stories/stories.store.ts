import { createSlice } from "@reduxjs/toolkit";
import { initialStoriesState } from "./_state";

export const storiesReducers = createSlice({
  name: "stories",
  initialState: initialStoriesState,
  reducers: {
    testFn: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { testFn } = storiesReducers.actions;
export default storiesReducers.reducer;
