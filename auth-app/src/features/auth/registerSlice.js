import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  registeredUser: null,
  isRegistered: false,
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("https://api.realworld.io/api/users", {
        user: userData,
      });
      return response.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.rejected, (state, action) => {
        state.isRegistered = false;
        state.registeredUser = null;
        state.error = action.error;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegistered = true;
        state.error = null;
        state.registeredUser = action.payload;
      });
  },
});

export const { registerUser } = registerSlice.actions;
export default registerSlice.reducer;
