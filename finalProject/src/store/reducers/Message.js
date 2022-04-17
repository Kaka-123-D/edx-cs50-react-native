import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
};

// tạo slice auth chứa actions và reducer
const message = createSlice({
  name: "message",
  initialState,
  reducers: {
    // các actions
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// lấy hàm loginSuccess và loginFailure trong slice để sau khi fetch data thì sử dụng
export const { setError } = message.actions;

export const setMessage = (error) => (dispatch) => {
  dispatch(setError({error}));
};

export default message.reducer;
