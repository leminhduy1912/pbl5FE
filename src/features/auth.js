import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    roleCode: "",
    id: "",
  },
  reducers: {
    login: (state, action) => {
      // Change payload to action
      console.log("payload..........", action.payload);
      const { token, roleCode, id } = action.payload; // Destructure payload
      state.token = token;
      state.roleCode = roleCode;
      state.id = id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
