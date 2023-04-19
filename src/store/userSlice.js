import { createSlice } from "@reduxjs/toolkit";
import { loginWithGoogle } from "./functions";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
