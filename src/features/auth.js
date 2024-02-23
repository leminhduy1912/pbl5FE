import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    roleCode: "",
    id: "",
    isLogin: false,
    email: "",
  },
  reducers: {
    login: (state, action) => {
      // Change payload to action
      console.log("payload..........", action.payload);
      const { token, roleCode, id, isLogin, email } = action.payload; // Destructure payload
      state.token = token;
      state.roleCode = roleCode;
      state.id = id;
      state.isLogin = isLogin;
      state.email = email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
