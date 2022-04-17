import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./Message";

const initialState = {
  status: 0,
  darkMode: false,
};

// tạo slice auth chứa actions và reducer
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // các actions
    loginSuccess(state, action) {
      state.status = 1;
    },
    logoutSuccess(state, action) {
      state.status = 0;
    },
    switchMode(state, action) {
      state.darkMode = !state.darkMode;
    }
  },
});

// lấy hàm loginSuccess và loginFailure trong slice để sau khi fetch data thì sử dụng
const { loginSuccess, logoutSuccess, switchMode } = auth.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://codersx-swagger.glitch.me/api/auth/login",
      {
        email,
        password,
      }
    );
    dispatch(loginSuccess({}));
  } catch (error) {
    dispatch(setError("wrong username or password"));
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutSuccess({}));
};

export const changeMode = () => (dispatch) => {
  dispatch(switchMode({}));
}

export default auth.reducer;
