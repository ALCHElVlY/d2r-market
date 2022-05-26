// External imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Internal imports
import userService from "./userService.js";

// Set the initial state
const initialState = {
  total: {
    online: 0,
    inGame: 0,
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all the users with a status of 'online'
export const getOnlineUsers = createAsyncThunk(
  "users/getOnline",
  async (status, thunkAPI) => {
    try {
      return await userService.getOnlineUsers(status);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// Get all the users with a status of 'online in game'
export const getInGameUsers = createAsyncThunk(
  "users/getInGame",
  async (status, thunkAPI) => {
    try {
      return await userService.getOnlineInGameUsers(status);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOnlineUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOnlineUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.total.online = action.payload;
      })
      .addCase(getOnlineUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getInGameUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInGameUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.total.inGame = action.payload;
      })
      .addCase(getInGameUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
